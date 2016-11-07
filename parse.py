from BeautifulSoup import BeautifulSoup
import re
import csv
import json
import os

with open('2016-general-election-datafeed-no-early-unparsed.json') as json_file:
  datafeed = json.load(json_file)

  for d in datafeed:
    print d
    try:
      found = re.search("vipfeed(.*?)(?=\.zip)", d["feed_url"]).group(0)
    except AttributeError:
      # pattern not found in the original string
      found = '' # apply your error handling

    # Create the soup
    directory = found
    print directory
    directoryPath = 'data/{0}'.format(directory)
    fileName = os.listdir(directoryPath)[0]
    filePath = 'data/{0}/{1}'.format(directory, fileName)
    print filePath
    
    with open(filePath, 'r') as myfile:
      input = myfile.read().replace('\n', '')
      soup = BeautifulSoup(input)
    
      # Search the soup
      pollingLocations = soup.fetch('polling_location')
      pollingLocationsString = str(pollingLocations)
      # print pollingLocations
    
      # write the results out as a text file
      # this is an array of xml-like pollinglocation objects
      text_file = open('data/{0}/polling-locations.txt'.format(directory),   "w")
      text_file.write(pollingLocationsString)
      text_file.close()

      print 'wrote data/{0}/polling-locations.txt'.format(directory)
