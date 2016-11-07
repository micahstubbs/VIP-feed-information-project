from BeautifulSoup import BeautifulSoup
import re
import csv

# Create the soup
directory = 'vipfeed-51-VA-2016-11-08'
fileName = 'vipFeed-51-2016-11-08 (12).zip3341445086590581714.xml'
file = 'data/{0}/{1}'.format(directory, fileName)

with open(file, 'r') as myfile:
  input = myfile.read().replace('\n', '')

soup = BeautifulSoup(input)

# Search the soup
pollingLocations = soup.fetch('polling_location')
pollingLocationsString = str(pollingLocations)
print pollingLocations

# write the results out as a text file
# this is an array of xml-like pollinglocation objects
text_file = open('data/{0}/polling-locations.txt'.format(directory), "w")
text_file.write(pollingLocationsString)
text_file.close()

# Experiment with writing the results out to a csv
# http://stackoverflow.com/questions/21667079/python-beautifulsoup-exporting-to-csv
# with open('polling-locations.csv', 'w') as f:
#     csvwriter = csv.writer(f)
#     for row in pollingLocations: 
#     #.find('pollinglocation'):
#       print row
#       cells = [c.text.encode('utf-8') for c in row.find('addressline')]
#       print c
#       csvwriter.writerow(cells)

# copy result of soup.fetch from terminal
# paste into sublime text
# use regex find `><` replace `>\n<`
# to split xml tags into individual lines 
# for human legibility
# use more regexes to get nice indentation 
# if you like

