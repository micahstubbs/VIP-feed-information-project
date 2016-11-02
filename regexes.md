goal is to take text input from datafeed.txt and
use sublime text regex find and replace to create valid json

^\n
remove blank lines
http://stackoverflow.com/a/12009505/1732222

^#.*
remove comment lines

^\n
remove blank lines again
http://stackoverflow.com/a/12009505/1732222

data\s
remove data key

find 
}
replace
},

manually remove last comma

manually add [] around objects to make an array

find
nid:
replace
"nid":

find
election_id:
replace
"election_id":

find
title:
replace
"title:"

find
feed_url:
replace
"feed_url":

find
is_test_election:
replace
"is_test_election":

find
user:
replace
"user":

add commas at ends of lines
http://stackoverflow.com/questions/6074041/how-to-add-a-comma-to-the-last-character-of-a-line-in-a-textfile
http://stackoverflow.com/questions/27856571/regex-matching-any-character-including-spaces
find

find
(\s\s"nid":(.*?))$
replace
\1,

find
(\s\s"election_id":(.*?))$
replace
\1,

find
(\s\s"title":(.*?))$
replace
\1,

find
(\s\s"is_test_election":(.*?))$
replace
\1,
