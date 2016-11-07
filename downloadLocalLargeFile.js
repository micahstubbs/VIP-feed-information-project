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
            .then( d => {
              console.log('d.length', d.length);
              console.log('d[0]', d[0]);

              // avoid RangeError: Invalid string length
              // http://stackoverflow.com/a/33676707/1732222

              // create for sub-arrays 
              var q1 = d.slice(0, Math.floor(d.length / 4));
              var q2 = d.slice(Math.floor(d.length / 4), Math.floor(d.length / 4) * 2);
              var q3 = d.slice(Math.floor(d.length / 4) * 2, Math.floor(d.length / 4) * 3);
              var q4 = d.slice(Math.floor(d.length / 4) * 3, d.length);

              console.log('q1.length', q1.length);
              console.log('q2.length', q2.length);
              console.log('q3.length', q3.length);
              console.log('q4.length', q4.length);

              var q1Json = parser.toJson(q1.join(''), {object: true});
              var q2Json = parser.toJson(q2.join(''), {object: true});
              var q3Json = parser.toJson(q3.join(''), {object: true});
              var q4Json = parser.toJson(q4.join(''), {object: true});

              return {
                q1: q1Json,
                q2: q2Json,
                q3: q3Json,
                q4: q4Json
              }
            })  // Combine chunks => json
            .then( d => {
              // avoid RangeError: Invalid string length
              // http://stackoverflow.com/a/33676707/1732222
              var jsonString = '';

              // stringify and remove first character, a `[`
              var q1String = JSON.stringify(d.q1, null, 2).subString(1);
              var q2String = JSON.stringify(d.q2, null, 2).subString(1);
              var q3String = JSON.stringify(d.q3, null, 2).subString(1);
              var q4String = JSON.stringify(d.q4, null, 2).subString(1);

              // remove last character, a `]`
              q1String = q1String.substring(0, q1String.length - 1);
              q2String = q2String.substring(0, q2String.length - 1);
              q3String = q3String.substring(0, q3String.length - 1);
              q4String = q4String.substring(0, q4String.length - 1); 

              // join all the strings back together and return that             
              return ['[', q1, q2, q3, q4, ']'].join(',')
            }) 
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
