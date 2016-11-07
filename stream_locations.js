var path = require('path');
var etl = require('etl');
var request = require('request');
var unzipper = require('unzipper');
var parser = require('xml2json');
var fs = require('fs');
var Promise = require('bluebird');
Promise.promisifyAll(fs);

var path = require('path');
var etl = require('etl');
var request = require('request');
var unzipper = require('unzipper');
var parser = require('xml2json');
var fs = require('fs');
var Promise = require('bluebird');
Promise.promisifyAll(fs);

etl.toStream(require('./datafeed.json').slice())
  .pipe(etl.map(function(d) {
    // Ignore alldatasets except  2016 general election data
    if (d.election_id !== 5000 || typeof d.is_ocd_id_early_vote === 'undefined')
      return;

    console.log('fetching',d.title);

    return request(d.feed_url)
      .pipe(unzipper.Parse())
      .pipe(etl.map(entry => {
        return entry
          .pipe(etl.map())   // empty map (i.e. passthrough) to get access to `.promise`
          .promise()   // returns a promise to an array of all the chunks
          .then( d => parser.toJson(d.join(''), {object: true}))  // Combine chunks => json
          .then( d => {
            var v = d.VipObject || d.vip_object;
            var locations = (v.PollingLocation || v.polling_location);
            locations.forEach(d => {
              var address = d.AddressLine || [d.address.line1,d.address.city,d.address.state+' '+d.address.zip].join(', ');
              this.push( address + '\n');
            });
          });
      }))
      .promise()
      .then( () => console.log('done',d.title), e => console.log('ERROR:', d.title,e));
  },{concurrency: 10}))
  .pipe(etl.toFile(path.join(__dirname,'data','locations.csv')))
  .promise()
  .then( () => console.log('done'));
