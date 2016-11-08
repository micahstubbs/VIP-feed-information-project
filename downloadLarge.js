var path = require('path');
var etl = require('etl');
var request = require('request');
var unzipper = require('unzipper');
var xmler = require('xmler');
var stream = require('stream');

var datafeed = './datafeed';
// var datafeed = './unparsed-2016-general-election-datafeed-no-early.json';
etl.toStream(require(datafeed))
  .pipe(etl.map(d => {
    // Ignore all datasets except 2016 general election data
    if (d.title !== 'New York General Election')
      return;
    
    console.log('fetching',d.title);

    return request(d.feed_url)
      .pipe(unzipper.Parse())
      .pipe(etl.map(entry => {

        // Prepare an out-file that starts and ends with brackets
        var out = etl.toFile(path.join(__dirname, 'data', d.title+'.json'));
        out.write('[\n');
        out.end = function(d,e,cb) {
          out.write( (d || '')+'{}\n]');
          stream.Writable.prototype.end.call(out,null,e,cb);
        };

        return entry
          .pipe(etl.map(d => {
            process.stdout.write('.');   // dot for each chunk
            return d;
          }))
          .pipe(xmler('polling_location'))   // pushes any polling_location 
          .pipe(etl.map(d => JSON.stringify(d.address,null,2)+',\n'))
          .pipe(out)
          .promise();

      }))
      .promise()
      .then( () => console.log('done',d.title), e => console.log('ERROR:', d.title,e,e.stack));
  },{concurrency: 10}))
  .promise()
  .then( () => console.log('done'),console.log);


