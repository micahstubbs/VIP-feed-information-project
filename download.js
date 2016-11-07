var path = require('path');
var etl = require('etl');
var request = require('request');
var unzipper = require('unzipper');
var parser = require('xml2json');
var fs = require('fs');


etl.toStream(require('./datafeed.json').slice())
  .pipe(etl.map(d => {

    // Ignore all datasets except  2016 general election data
    if (d.election_id !== 5000 || typeof d.is_ocd_id_early_vote === 'undefined' || d.title === 'Utah General Early Voting')
      return;

    console.log('fetching',d.title);

    var buffer = '';

    return request(d.feed_url)
      .pipe(etl.chain(function(inbound,outbound) {
        inbound.pipe(unzipper.Parse())
          .on('error', e => {
            console.log('error',d.title,e);
            outbound.end();
          })
          .on('entry',entry => entry
            .pipe(etl.map(d => buffer += d.toString()))
            .promise()
            .then( () => {
              var json = JSON.stringify(parser.toJson(buffer,{object:true}),null,2);
              var filename = path.join(__dirname,'data',d.title+'.json');
              fs.writeFile(filename,json, () => outbound.end());
            })
          );            
      }))
      .promise()
      .then( () => console.log('done',d.title));
  },{concurrency: 10}))
  .promise()
  .then( () => console.log('done'),console.log);


