const fs = require('fs');
const _ = require('lodash');
const jsonfile = require('jsonfile');
const csvWriter = require('csv-write-stream');

const inputFile = "datafeed.json"
const data = JSON.parse(fs.readFileSync(inputFile, 'utf8'));

//console.log(data);

// create a datafeed of only 2016 general election data
let outputData = data.filter(d => d.election_id === 5000);
outputData = outputData.filter(d => typeof d.is_ocd_id_early_vote === 'undefined');

//console.log(data);
const outputFile = "2016-general-election-datafeed.json";
// const outputFile = "2016-general-election-datafeed-no-early.json";
jsonfile.spaces = 2;

jsonfile.writeFile(outputFile, outputData, function (err) {
  console.error(err)
})

const onlyTitles = [];
outputData.forEach(d => {
  onlyTitles.push({
    title: d.title
  })
})

// write a csv file of polling place names
const outputCsvFile = '2016-general-election-polling-place-names.csv'
// const outputCsvFile = '2016-general-election-polling-place-names-no-early.csv'
const writer = csvWriter();
writer.pipe(fs.createWriteStream(outputCsvFile));
onlyTitles.forEach(d => {
    writer.write(d);
})
writer.end();