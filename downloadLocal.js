var path = require('path');
var etl = require('etl');
var request = require('request');
var unzipper = require('unzipper');
var parser = require('xml2json');
var fs = require('fs');
var Promise = require('bluebird');
Promise.promisifyAll(fs);

// var datafeed = './datafeed';
var datafeed = './unparsed-2016-general-election-datafeed-no-early.json';
etl.toStream(require(datafeed).slice())
  .pipe(etl.map(d => {
    // Ignore all datasets except 2016 general election data
    if (d.election_id !== 5000 && typeof d.is_ocd_id_early_vote === 'undefined')
      return;

    console.log('fetching',d.title);
    var archiveName = d.feed_url.match(/vipfeed(.*?)\.zip/)[0];
    var filePath = './archives/' + archiveName;

    // This line opens the file as a readable stream
    var readStream = fs.createReadStream(filePath);

    // This will wait until we know the readable stream is actually valid before piping
    readStream.on('open', function () {
      // This just pipes the read stream to the response object (which goes to the client)
      readStream
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
    });
    // This catches any errors that happen while creating the readable stream (usually invalid names)
    readStream.on('error', function(err) {
      console.log('ERROR:', err);
    });
  },{concurrency: 10}))
  .promise()
  .then( () => console.log('done'),console.log);
