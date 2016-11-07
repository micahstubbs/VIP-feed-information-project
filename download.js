var path = require('path');
var etl = require('etl');
var request = require('request');
var unzipper = require('unzipper');
var parser = require('xml2json');
var fs = require('fs');
var Promise = require('bluebird');
Promise.promisifyAll(fs);

etl.toStream(require('./datafeed.json').slice())
  .pipe(etl.map(d => {
    // Ignore all datasets except 2016 general election data
    if (d.election_id !== 5000 && typeof d.is_ocd_id_early_vote === 'undefined')
      return;

    console.log('fetching',d.title);

    return request(d.feed_url)
      .pipe(unzipper.Parse())
      .pipe(etl.map(entry => {
        return entry
          .pipe(etl.map())   // empty map (i.e. passthrough) to get access to `.promise`
          .promise()   // returns a promise to an array of all the chunks
          .then( d => parser.toJson(d.join(''), {object: true}))  // Combine chunks => json
          .then( d => JSON.stringify(d, null, 2)) 
          .then( e => fs.writeFileAsync(path.join(__dirname, 'data', d.title+'.json'), e));
      }))
      .promise()
      .then( () => console.log('done',d.title), e => console.log('ERROR:', d.title,e));
  },{concurrency: 10}))
  .promise()
  .then( () => console.log('done'),console.log);


