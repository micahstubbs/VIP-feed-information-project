from BeautifulSoup import BeautifulSoup
import re
import csv

# Create the soup
directory = 'vipfeed-32001-Nevada-2016-11-08'
fileName = 'VIPFeed-32-2016-11-08.zip4207769818767271884.xml'
file = 'data/{0}/{1}'.format(directory, fileName)

with open(file, 'r') as myfile:
  input = myfile.read().replace('\n', '')

soup = BeautifulSoup(input)

# Search the soup
pollingLocations = soup.fetch('polling_location')
pollingLocationsString = str(pollingLocations)
# print pollingLocations

# write the results out as a text file
# this is an array of xml-like pollinglocation objects
text_file = open('data/{0}/polling-locations.txt'.format(directory), "w")
text_file.write(pollingLocationsString)
text_file.close()
