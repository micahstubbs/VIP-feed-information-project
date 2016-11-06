from BeautifulSoup import BeautifulSoup
import re

# Create the soup
with open('data.zip2905163445480784443.xml', 'r') as myfile:
  input = myfile.read().replace('\n', '')

soup = BeautifulSoup(input)

#Search the soup
soup.fetch('polling_location')

# copy result of soup.fetch from terminal
# paste into sublime text
# use regex find `><` replace `>\n<`
# to split xml tags into individual lines 
# for human legibility
# use more regexes to get nice indentation 
# if you like

