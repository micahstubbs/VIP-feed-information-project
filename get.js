var fs = require('fs');
var jsonfile = require('jsonfile');
var Curl = require('node-libcurl').Curl;
var path = require('path');

var inputFile = "datafeed.json"
var datafeed = JSON.parse(fs.readFileSync(inputFile, 'utf8'));

datafeed.forEach(d => {
  outputFileName = d.feed_url.match(/([^\/]*?)$/)[1];
  if (typeof d.title !== 'undefined') { console.info(d.title); }
  if (typeof d.election_id !== 'undefined') { console.info(d.election_id); }
  console.info('outputFileName', outputFileName);
  var curl = new Curl();
  var url = process.argv[2] || d.feed_url; //file to be downloaded
  var outputFile = path.resolve( `${__dirname}/data/`, outputFileName ); //where to save the file

  // remove output file if it exists
  if ( fs.existsSync( outputFile ) ) {
      fs.unlinkSync( outputFile );
  }

  curl.setOpt( 'URL', url );

  //Since we are downloading a large file, disable internal storage
  // used for automatic http data/headers parsing.
  //Because of that, the end event will receive null for both data/header arguments.
  curl.enable( Curl.feature.NO_STORAGE );

  // This is the same than the data event, however,
  // keep in mind that here the return value is considered.
  curl.onData = function( chunk ) {

      fs.appendFileSync( outputFile, chunk );

      return chunk.length;
  };

  curl.on( 'end', curl.close.bind( curl ) );

  curl.on( 'error', curl.close.bind( curl ) );

  curl.perform();
})
