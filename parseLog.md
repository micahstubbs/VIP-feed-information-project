➜  VIP-feed-information-project git:(json) ✗ python parse.py
{u'division_id': u'ocd-division/country:us/state:in', u'feed_url': u'https://s3.amazonaws.com/data-suite-production-processed-feeds/vipfeed-18-Indiana-2016-11-08.zip', u'title': u'Indiana General', u'nid': 4169, u'user': u'franklin@democracy.works', u'election_id': 5000}
vipfeed-18-Indiana-2016-11-08
data/vipfeed-18-Indiana-2016-11-08/vipFeed-18-2016-11-08.zip3271983070467100158.xml
wrote data/vipfeed-18-Indiana-2016-11-08/polling-locations.txt
{u'division_id': u'ocd-division/country:us/state:al', u'feed_url': u'https://s3.amazonaws.com/data-suite-production-processed-feeds/vipfeed-01-State-of-ALABAMA-2016-11-08.zip', u'title': u'Alabama General', u'nid': 4170, u'user': u'shannon@democracy.works', u'election_id': 5000}
vipfeed-01-State-of-ALABAMA-2016-11-08
data/vipfeed-01-State-of-ALABAMA-2016-11-08/vipFeed-01-2016-11-08.zip4416585337177357766.xml
wrote data/vipfeed-01-State-of-ALABAMA-2016-11-08/polling-locations.txt
{u'division_id': u'ocd-division/country:us/state:wa', u'feed_url': u'https://s3.amazonaws.com/data-suite-production-processed-feeds/vipfeed-53-Washington-2016-11-08-fake.zip', u'title': u'Washington General', u'nid': 4173, u'user': u'franklin@democracy.works', u'election_id': 5000}
vipfeed-53-Washington-2016-11-08-fake
Traceback (most recent call last):
  File "parse.py", line 22, in <module>
    fileName = os.listdir(directoryPath)[0]
IndexError: list index out of range

Iowa General Election
vipfeed-19-2016-11-08
data/vipfeed-19-2016-11-08/vipFeed-19-2016-11-08.zip3305890922974063421.xml
^CTraceback (most recent call last):
  File "parse.py", line 29, in <module>
    soup = BeautifulSoup(input)
  File "/Users/m/miniconda2/lib/python2.7/site-packages/BeautifulSoup.py", line 1522, in __init__
    BeautifulStoneSoup.__init__(self, *args, **kwargs)
  File "/Users/m/miniconda2/lib/python2.7/site-packages/BeautifulSoup.py", line 1147, in __init__
    self._feed(isHTML=isHTML)
  File "/Users/m/miniconda2/lib/python2.7/site-packages/BeautifulSoup.py", line 1189, in _feed
    SGMLParser.feed(self, markup)
  File "/Users/m/miniconda2/lib/python2.7/sgmllib.py", line 104, in feed
    self.goahead(0)
  File "/Users/m/miniconda2/lib/python2.7/sgmllib.py", line 133, in goahead
    if starttagopen.match(rawdata, i):
KeyboardInterrupt
➜  VIP-feed-information-project git:(json) ✗ python parse.py
Iowa General Election
data/vipfeed-19-2016-11-08/vipFeed-19-2016-11-08.zip3305890922974063421.xml
wrote data/vipfeed-19-2016-11-08/polling-locations.txt
Vermont General Election
data/vipfeed-50-VERMONT-2016-11-08/vipFeed-51-2016-11-08.xml
wrote data/vipfeed-50-VERMONT-2016-11-08/polling-locations.txt
Montana General Election
data/vipfeed-30-2016-11-08/vipFeed-30-2016-11-08.zip5037755777812864460.xml
wrote data/vipfeed-30-2016-11-08/polling-locations.txt
Minnesota General Election
data/vipfeed-27-State-of-Minnesota-2016-11-08/vipFeed-27-2016-11-08.zip2842805166394318587.xml
wrote data/vipfeed-27-State-of-Minnesota-2016-11-08/polling-locations.txt
Texas General Election
data/vipfeed-48-Texas-2016-11-08/vipFeed-48-2016-11-08.zip6439408913629793468.xml
wrote data/vipfeed-48-Texas-2016-11-08/polling-locations.txt
DC General Election
data/vipfeed-11-District-of-Columbia-2016-11-08/vipFeed-11-2016-11-08.zip7144719531354662194.xml
wrote data/vipfeed-11-District-of-Columbia-2016-11-08/polling-locations.txt
Nebraska General Election
data/vipfeed-31-State-of-Nebraska-2016-11-08/vipFeed-31-2016-11-08.zip8456718290957220061.xml
wrote data/vipfeed-31-State-of-Nebraska-2016-11-08/polling-locations.txt
Illinois General Election
data/vipfeed-17001-IL-2016-11-08/vipFeed-2016-11-08.zip7249695253993035880.xml
wrote data/vipfeed-17001-IL-2016-11-08/polling-locations.txt
Wisconsin General Election
data/vipfeed-55-2016-11-08/vipFeed-55-2016-11-08.zip2866067163167465080.xml
wrote data/vipfeed-55-2016-11-08/polling-locations.txt
North Dakota General Election
data/vipfeed-38-North-Dakota-2016-11-08/vipFeed-38-2016-11-08.zip818159199366430343.xml
wrote data/vipfeed-38-North-Dakota-2016-11-08/polling-locations.txt
Los Angeles County General Election
data/vipfeed-06037-California-2016-11-08/vipFeed-06037-2016-11-08.zip8873714290272508487.xml
wrote data/vipfeed-06037-California-2016-11-08/polling-locations.txt
Colorado General Election
data/vipfeed-08-Colorado-2016-11-08/vipFeed-08-2016-11-08.zip7652155891757003542.xml
wrote data/vipfeed-08-Colorado-2016-11-08/polling-locations.txt
Kansas General Election
data/vipfeed-20-State-of-Kansas-2016-11-08/vipFeed-20-2016-11-08.zip6469280372994910552.xml
wrote data/vipfeed-20-State-of-Kansas-2016-11-08/polling-locations.txt
Utah General Election
data/vipfeed-49-Utah-2016-11-08/vipFeed-49-2016-11-08.zip4127330954745010562.xml
wrote data/vipfeed-49-Utah-2016-11-08/polling-locations.txt
North Carolina General Election
data/vipfeed-37-North-Carolina-2016-11-08/vipFeed-37-2016-11-08.zip4830620501081131443.xml
wrote data/vipfeed-37-North-Carolina-2016-11-08/polling-locations.txt
Wyoming General Election
data/vipfeed-56-STATE-OF-WYOMING-2016-11-08/vipFeed-56-2016-11-08.zip2681414591345591766.xml
wrote data/vipfeed-56-STATE-OF-WYOMING-2016-11-08/polling-locations.txt
Delaware General Election
data/vipfeed-10-2016-11-08/vipFeed-30-2016-11-08.zip9114955317601920182.xml
wrote data/vipfeed-10-2016-11-08/polling-locations.txt
Pennsylvania General Election
data/vipfeed-42-Pennsylvania-2016-11-08/vipFeed-42-2016-11-08.zip2102971478434551904.xml
wrote data/vipfeed-42-Pennsylvania-2016-11-08/polling-locations.txt
Michigan General Election
data/vipfeed-26-MICHIGAN-2016-11-08/vipFeed-26-2016-11-08.zip3750214742818298175.xml
wrote data/vipfeed-26-MICHIGAN-2016-11-08/polling-locations.txt
Louisiana General Election
data/vipfeed-22-LOUISIANA-2016-11-08/vipFeed-22-2016-11-08.zip7357187877338410183.xml
wrote data/vipfeed-22-LOUISIANA-2016-11-08/polling-locations.txt
Alaska General Election
data/vipfeed-02-2016-11-08/vipFeed-02-2016-11-08.zip5216201709491003189.xml
wrote data/vipfeed-02-2016-11-08/polling-locations.txt
Missouri General Election
data/vipfeed-29-STATE-OF-MISSOURI-2016-11-08/vipFeed-29-2016-11-08.zip4814195235051032025.xml
wrote data/vipfeed-29-STATE-OF-MISSOURI-2016-11-08/polling-locations.txt
Maryland General Election
data/vipfeed-24001-maryland-2016-11-08/vipFeed-24-2016-11-08.zip5178780105768556241.xml
wrote data/vipfeed-24001-maryland-2016-11-08/polling-locations.txt
Connecticut General Election
data/vipfeed-09-2016-11-08/vipFeed-09-2016-11-08.zip2280390341060904506.xml
wrote data/vipfeed-09-2016-11-08/polling-locations.txt
New Jersey General Election
data/vipfeed-34-2016-11-08/data.zip854392660587755514.xml
wrote data/vipfeed-34-2016-11-08/polling-locations.txt
Oregon General Election
data/vipfeed-41-OREGON-2016-11-08/vipFeed-41-2016-11-08.zip7817257870242812681.xml
wrote data/vipfeed-41-OREGON-2016-11-08/polling-locations.txt
Rhode Island General Election
data/vipfeed-44-Rhode-Island-2016-11-08/Vip Feed 10-12-16.zip1457530931908617098.xml
wrote data/vipfeed-44-Rhode-Island-2016-11-08/polling-locations.txt
New Hampshire General Election
data/vipfeed-33-New-Hampshire-2016-11-08/nh_polling_places.zip5693822663554143598.xml
wrote data/vipfeed-33-New-Hampshire-2016-11-08/polling-locations.txt
Oklahoma General Election
data/vipfeed-40-OKLAHOMA-2016-11-08/vipFeed-40-2016-11-08.zip4395916194771575527.xml
wrote data/vipfeed-40-OKLAHOMA-2016-11-08/polling-locations.txt
Kentucky General Election
data/vipfeed-21-2016-11-08/vipFeed-21-2016-11-08.zip246631309705949572.xml
wrote data/vipfeed-21-2016-11-08/polling-locations.txt
Nevada General Election
data/vipfeed-32-Nevada-2016-11-08/vipFeed-32-2016-11-08.zip6500043472312847740.xml
wrote data/vipfeed-32-Nevada-2016-11-08/polling-locations.txt
New York General Election
data/vipfeed-36-New-York-2016-11-08/vipFeed-36-2016-11-08.zip3857699596630248012.xml

➜  VIP-feed-information-project git:(json) ✗ python parse.py
New Mexico General Election
data/vipfeed-35-State-of-NEW-MEXICO-2016-11-08/vipFeed-35-2016-11-08.zip5884526342463159422.xml
wrote data/vipfeed-35-State-of-NEW-MEXICO-2016-11-08/polling-locations.txt
Amador County CA General Election
data/vipfeed-06005-CALIFORNIA-2016-11-08/vipfeed-06005-CALIFORNIA-2016-11-08.zip1929341683611131341.xml
wrote data/vipfeed-06005-CALIFORNIA-2016-11-08/polling-locations.txt
Butte County CA General Election
data/vipfeed-06007-CALIFORNIA-2016-11-08/vipfeed-06007-CALIFORNIA-2016-11-08.zip6045389830050519907.xml
wrote data/vipfeed-06007-CALIFORNIA-2016-11-08/polling-locations.txt
Calaveras County CA General Election
data/vipfeed-06009-CALIFORNIA-2016-11-08/vipfeed-06009-CALIFORNIA-2016-11-08.zip4083765279605549763.xml
wrote data/vipfeed-06009-CALIFORNIA-2016-11-08/polling-locations.txt
Colusa County CA General Election
data/vipfeed-06011-CALIFORNIA-2016-11-08/vipfeed-06011-CALIFORNIA-2016-11-08.zip7107049102484645390.xml
wrote data/vipfeed-06011-CALIFORNIA-2016-11-08/polling-locations.txt
Contra Costa County CA General Election
data/vipfeed-06013-CALIFORNIA-2016-11-08/vipfeed-06013-CALIFORNIA-2016-11-08.zip8934856324735309281.xml
wrote data/vipfeed-06013-CALIFORNIA-2016-11-08/polling-locations.txt
Del Norte County CA General Election
data/vipfeed-06015-CALIFORNIA-2016-11-08/vipFeed-06015-2016-11-08.zip8584287376994844808.xml
wrote data/vipfeed-06015-CALIFORNIA-2016-11-08/polling-locations.txt
El Dorado County CA General Election
data/vipfeed-06017-CALIFORNIA-2016-11-08/vipFeed-06017-2016-11-08.zip77551987767700891.xml
wrote data/vipfeed-06017-CALIFORNIA-2016-11-08/polling-locations.txt
Fresno County CA General Election
data/vipfeed-06019-CALIFORNIA-2016-11-08/vipfeed-06019-CALIFORNIA-2016-11-08.zip8171943449792034065.xml
wrote data/vipfeed-06019-CALIFORNIA-2016-11-08/polling-locations.txt
Glenn County CA General Election
data/vipfeed-06021-CALIFORNIA-2016-11-08/vipFeed-06021-2016-11-08.zip4604458600100568739.xml
wrote data/vipfeed-06021-CALIFORNIA-2016-11-08/polling-locations.txt
Imperial County CA General Election
data/vipfeed-06025-CALIFORNIA-2016-11-08/vipFeed-06025-2016-11-08.zip4953802610789993596.xml
wrote data/vipfeed-06025-CALIFORNIA-2016-11-08/polling-locations.txt
Inyo County CA General Election
data/vipfeed-06027-CALIFORNIA-2016-11-08/vipfeed-06027-CALIFORNIA-2016-11-08.zip6044341312286708149.xml
wrote data/vipfeed-06027-CALIFORNIA-2016-11-08/polling-locations.txt
Kern County CA General Election
data/vipfeed-06029-CALIFORNIA-2016-11-08/vipfeed-06029-CALIFORNIA-2016-11-08.zip8097247559221038485.xml
wrote data/vipfeed-06029-CALIFORNIA-2016-11-08/polling-locations.txt
Kings County CA General Election
data/vipfeed-06031-CALIFORNIA-2016-11-08/vipFeed-06031-2016-11-08.zip1562268580079104846.xml
wrote data/vipfeed-06031-CALIFORNIA-2016-11-08/polling-locations.txt
Lake County CA General Election
data/vipfeed-06033-CALIFORNIA-2016-11-08/vipfeed-06033-CALIFORNIA-2016-11-08.zip5403582713108873549.xml
wrote data/vipfeed-06033-CALIFORNIA-2016-11-08/polling-locations.txt
Madera County CA General Election
data/vipfeed-06039-CALIFORNIA-2016-11-08/vipfeed-06039-CALIFORNIA-2016-11-08.zip246398017787508338.xml
wrote data/vipfeed-06039-CALIFORNIA-2016-11-08/polling-locations.txt
Marin County CA General Election
data/vipfeed-06041-CALIFORNIA-2016-11-08/vipfeed-06041-CALIFORNIA-2016-11-08.zip2954857654082539636.xml
wrote data/vipfeed-06041-CALIFORNIA-2016-11-08/polling-locations.txt
Merced County CA General Election
data/vipfeed-06047-CALIFORNIA-2016-11-08/vipfeed-06047-CALIFORNIA-2016-11-08.zip2368347368596558295.xml
wrote data/vipfeed-06047-CALIFORNIA-2016-11-08/polling-locations.txt
Modoc County CA General Election
data/vipfeed-06049-CALIFORNIA-2016-11-08/vipFeed-06049-2016-11-08.zip3182236271248048607.xml
wrote data/vipfeed-06049-CALIFORNIA-2016-11-08/polling-locations.txt
Mono County CA General Election
data/vipfeed-06051-CALIFORNIA-2016-11-08/vipfeed-06051-CALIFORNIA-2016-11-08.zip2126715013092937087.xml
wrote data/vipfeed-06051-CALIFORNIA-2016-11-08/polling-locations.txt
Monterey County CA General Election
data/vipfeed-06053-CALIFORNIA-2016-11-08/vipFeed-06053-2016-11-08.zip4183018333003238777.xml
wrote data/vipfeed-06053-CALIFORNIA-2016-11-08/polling-locations.txt
Napa County CA General Election
data/vipfeed-06055-CALIFORNIA-2016-11-08/vipfeed-06055-CALIFORNIA-2016-11-08.zip4769775045178411305.xml
wrote data/vipfeed-06055-CALIFORNIA-2016-11-08/polling-locations.txt
Orage County CA General Election
data/vipfeed-06059-CALIFORNIA-2016-11-08/vipfeed-06059-CALIFORNIA-2016-11-08.zip4648821880395573473.xml
wrote data/vipfeed-06059-CALIFORNIA-2016-11-08/polling-locations.txt
Placer County CA General Election
data/vipfeed-06061-CALIFORNIA-2016-11-08/vipfeed-06061-CALIFORNIA-2016-11-08.zip8316265489754235303.xml
wrote data/vipfeed-06061-CALIFORNIA-2016-11-08/polling-locations.txt
Riverside County CA General Election
data/vipfeed-06065-CALIFORNIA-2016-11-08/vipfeed-06065-CALIFORNIA-2016-11-08.zip7752539921269764368.xml
wrote data/vipfeed-06065-CALIFORNIA-2016-11-08/polling-locations.txt
Sacramento County CA General Election
data/vipfeed-06067-CALIFORNIA-2016-11-08/vipfeed-06067-CALIFORNIA-2016-11-08.zip5687093521303209921.xml
wrote data/vipfeed-06067-CALIFORNIA-2016-11-08/polling-locations.txt
San Bernardino County CA General Election
data/vipfeed-06071-CALIFORNIA-2016-11-08/vipFeed-06071-2016-11-08.zip1051026908919619726.xml
wrote data/vipfeed-06071-CALIFORNIA-2016-11-08/polling-locations.txt
San Diego County CA General Election
data/vipfeed-06073-CALIFORNIA-2016-11-08/vipFeed-06073-2016-11-08.zip3341000967120681177.xml
wrote data/vipfeed-06073-CALIFORNIA-2016-11-08/polling-locations.txt
San Francisco County CA General Election
data/vipfeed-06075-CALIFORNIA-2016-11-08/vipfeed-06075-CALIFORNIA-2016-11-08.zip5115104324137259827.xml
wrote data/vipfeed-06075-CALIFORNIA-2016-11-08/polling-locations.txt
San Luis Obispo County CA General Election
data/vipfeed-06079-CALIFORNIA-2016-11-08/vipFeed-06079-2016-11-08.zip8570937302839864081.xml
wrote data/vipfeed-06079-CALIFORNIA-2016-11-08/polling-locations.txt
San Mateo County CA General Election
data/vipfeed-06081-CALIFORNIA-2016-11-08/vipfeed-06081-CALIFORNIA-2016-11-08.zip4854590012276234400.xml
wrote data/vipfeed-06081-CALIFORNIA-2016-11-08/polling-locations.txt
Santa Barbara County CA General Election
data/vipfeed-06083-CALIFORNIA-2016-11-08/vipfeed-06083-CALIFORNIA-2016-11-08.zip2109307543887745973.xml
wrote data/vipfeed-06083-CALIFORNIA-2016-11-08/polling-locations.txt
Santa Clara County CA General Election
data/vipfeed-06085-CALIFORNIA-2016-11-08/vipfeed-06085-CALIFORNIA-2016-11-08.zip8131316730808980625.xml
wrote data/vipfeed-06085-CALIFORNIA-2016-11-08/polling-locations.txt
Santa Cruz County CA General Election
data/vipfeed-06087-CALIFORNIA-2016-11-08/vipfeed-06087-CALIFORNIA-2016-11-08.zip8109695034424413274.xml
wrote data/vipfeed-06087-CALIFORNIA-2016-11-08/polling-locations.txt
Shasta County CA General Election
data/vipfeed-06089-CALIFORNIA-2016-11-08/vipfeed-06089-CALIFORNIA-2016-11-08.zip4181582156326091034.xml
wrote data/vipfeed-06089-CALIFORNIA-2016-11-08/polling-locations.txt
Siskiyou County CA General Election
data/vipfeed-06093-CALIFORNIA-2016-11-08/vipFeed-06093-2016-11-08.zip5740171505624261981.xml
wrote data/vipfeed-06093-CALIFORNIA-2016-11-08/polling-locations.txt
Solano County CA General Election
data/vipfeed-06095-CALIFORNIA-2016-11-08/vipFeed-06095-2016-11-08.zip2667785391531051952.xml
wrote data/vipfeed-06095-CALIFORNIA-2016-11-08/polling-locations.txt
Stanislaus County CA General Election
data/vipfeed-06099-CALIFORNIA-2016-11-08/vipFeed-06099-2016-11-08.zip1295550444838326401.xml
wrote data/vipfeed-06099-CALIFORNIA-2016-11-08/polling-locations.txt
Tehama County CA General Election
data/vipfeed-06103-CALIFORNIA-2016-11-08/vipfeed-06103-CALIFORNIA-2016-11-08.zip2444918205077105161.xml
wrote data/vipfeed-06103-CALIFORNIA-2016-11-08/polling-locations.txt
Trinity County CA General Election
data/vipfeed-06105-CALIFORNIA-2016-11-08/vipFeed-06105-2016-11-08.zip6600173889343908046.xml
wrote data/vipfeed-06105-CALIFORNIA-2016-11-08/polling-locations.txt
Tulare County CA General Election
data/vipfeed-06107-CALIFORNIA-2016-11-08/vipfeed-06107-CALIFORNIA-2016-11-08.zip5125180673370752754.xml
wrote data/vipfeed-06107-CALIFORNIA-2016-11-08/polling-locations.txt
Ventura County CA General Election
data/vipfeed-06111-CALIFORNIA-2016-11-08/vipfeed-06111-2016-11-08.xml.zip6996452381279065057.xml
wrote data/vipfeed-06111-CALIFORNIA-2016-11-08/polling-locations.txt
Yolo County CA General Election
data/vipfeed-06113-CALIFORNIA-2016-11-08/vipFeed-06113-2016-11-08.zip8244457237463737708.xml
wrote data/vipfeed-06113-CALIFORNIA-2016-11-08/polling-locations.txt
Yuba County CA General Election
data/vipfeed-06115-CALIFORNIA-2016-11-08/vipfeed-06115-CALIFORNIA-2016-11-08.zip2804369033748577389.xml
wrote data/vipfeed-06115-CALIFORNIA-2016-11-08/polling-locations.txt
Alameda County CA General Election
data/vipfeed-06001-CALIFORNIA-2016-11-08/vipFeed-06001-2016-11-08.zip4992750176703478661.xml
wrote data/vipfeed-06001-CALIFORNIA-2016-11-08/polling-locations.txt
Pima County AZ General Election
data/vipfeed-04019-Pima-County-Arizona-2016-11-08/data.zip2905163445480784443.xml
wrote data/vipfeed-04019-Pima-County-Arizona-2016-11-08/polling-locations.txt
Hawaii General Election
data/vipfeed-15-Hawaii-2016-11-08/vipFeed-15-2016-11-08.zip4451260804517450559.xml
wrote data/vipfeed-15-Hawaii-2016-11-08/polling-locations.txt
West Virginia General Election
data/vipfeed-54-WEST-VIRGINIA-2016-11-08/vipFeed-54-2016-11-08.zip2374036406038123217.xml
wrote data/vipfeed-54-WEST-VIRGINIA-2016-11-08/polling-locations.txt
Maricopa County AZ General Election
data/vipfeed-04013-ARIZONA-2016-11-08/vipFeed-04013-2016-11-08.zip5435883442398792657.xml
wrote data/vipfeed-04013-ARIZONA-2016-11-08/polling-locations.txt
Arizona General Election
data/vipfeed-04-ARIZONA-2016-11-08/vipFeed-04-2016-11-08.zip5171564001373764235.xml
wrote data/vipfeed-04-ARIZONA-2016-11-08/polling-locations.txt
Tennessee General Election
data/vipfeed-47001-Tennessee-2016-11-08/tn_polling_places.zip842444986806200493.xml
wrote data/vipfeed-47001-Tennessee-2016-11-08/polling-locations.txt
Georgia General Election
data/vipfeed-13001-Georgia-2016-11-08/georgia_polling_places.zip8134917756389288926.xml
[1]    2041 killed     python parse.py

➜  VIP-feed-information-project git:(json) ✗ python parse.py
Wichita County TX General Election
data/vipfeed-48485-Texas-2016-11-08/vipFeed-48485-2016-11-08.zip2612172710141462076.xml
wrote data/vipfeed-48485-Texas-2016-11-08/polling-locations.txt
Wood County TX General Election
data/vipfeed-48499-Texas-2016-11-08/vipFeed-48499-2016-11-08.zip132332447422870912.xml
wrote data/vipfeed-48499-Texas-2016-11-08/polling-locations.txt
Alpine County CA General Election
data/vipfeed-06003-California-2016-11-08/vipFeed-06003-2016-11-08.zip3318591240437657849.xml
wrote data/vipfeed-06003-California-2016-11-08/polling-locations.txt
Massachusetts General Election
data/vipfeed-25-Massachusetts-2016-11-08/vipFeed-25-2016-11-08.zip3654952856654844706.xml
wrote data/vipfeed-25-Massachusetts-2016-11-08/polling-locations.txt
Idaho General Election
data/vipfeed-16-IDAHO-2016-11-08/vipFeed-16-2016-1101-1852.zip9050745161512611372.xml
wrote data/vipfeed-16-IDAHO-2016-11-08/polling-locations.txt
Bastrop County TX General Election
data/vipfeed-48021-TEXAS-2016-11-08/vipFeed-48021-2016-11-08.zip6727489770897894659.xml
wrote data/vipfeed-48021-TEXAS-2016-11-08/polling-locations.txt
Denton County TX General Election
data/vipfeed-48121-TEXAS-2016-11-08/vipFeed-48121-2016-11-08.zip6451914056400803522.xml
wrote data/vipfeed-48121-TEXAS-2016-11-08/polling-locations.txt
Guadalupe County TX General Election
data/vipfeed-48187-TEXAS-2016-11-08/vipFeed-48187-2016-11-08.zip3033338676299726501.xml
wrote data/vipfeed-48187-TEXAS-2016-11-08/polling-locations.txt
Midland County TX General Election
data/vipfeed-48329-TEXAS-2016-11-08/vipFeed-48329-2016-11-08.zip6985260766634464435.xml
wrote data/vipfeed-48329-TEXAS-2016-11-08/polling-locations.txt
Williamson County TX General Election
data/vipfeed-48491-TEXAS-2016-11-08/vipFeed-48491-2016-11-08.zip6022424388354138083.xml
wrote data/vipfeed-48491-TEXAS-2016-11-08/polling-locations.txt
Bell County TX General Election
data/vipfeed-48027-TEXAS-2016-11-08/vipFeed-48027-2016-11-08.zip5784624315500387209.xml
wrote data/vipfeed-48027-TEXAS-2016-11-08/polling-locations.txt
Ector County TX General Election
data/vipfeed-48135-TEXAS-2016-11-08/vipFeed-48135-2016-11-08.zip9211752646150827570.xml
wrote data/vipfeed-48135-TEXAS-2016-11-08/polling-locations.txt
Henderson County TX General Election
data/vipfeed-48213-TEXAS-2016-11-08/vipFeed-48213-2016-11-08.zip8052793068207668345.xml
wrote data/vipfeed-48213-TEXAS-2016-11-08/polling-locations.txt
Smith County TX General Election
data/vipfeed-48423-TEXAS-2016-11-08/vipFeed-48423-2016-11-08.zip5964580069961018745.xml
wrote data/vipfeed-48423-TEXAS-2016-11-08/polling-locations.txt
Bexar County TX General Election
data/vipfeed-48029-TEXAS-2016-11-08/vipFeed-48029-2016-11-08.zip8369432801034143717.xml
wrote data/vipfeed-48029-TEXAS-2016-11-08/polling-locations.txt
Ellis County TX General Election
data/vipfeed-48139-TEXAS-2016-11-08/vipFeed-48139-2016-11-08.zip4551696500516610924.xml
wrote data/vipfeed-48139-TEXAS-2016-11-08/polling-locations.txt
Hidalgo County TX General Election
data/vipfeed-48215-TEXAS-2016-11-08/vipFeed-48215-2016-11-08.zip3145122811238580825.xml
wrote data/vipfeed-48215-TEXAS-2016-11-08/polling-locations.txt
Tarrant County TX General Election
data/vipfeed-48439-TEXAS-2016-11-08/vipFeed-48439-2016-11-08.zip5090076386891906231.xml
wrote data/vipfeed-48439-TEXAS-2016-11-08/polling-locations.txt
El Paso County TX General Election
data/vipfeed-48141-TEXAS-2016-11-08/vipFeed-48141-2016-11-08.zip7504875615266432766.xml
wrote data/vipfeed-48141-TEXAS-2016-11-08/polling-locations.txt
Kaufman County TX General Election
data/vipfeed-48257-TEXAS-2016-11-08/vipFeed-48257-2016-11-08.zip6810694239294050701.xml
wrote data/vipfeed-48257-TEXAS-2016-11-08/polling-locations.txt
Taylor County TX General Election
data/vipfeed-48441-TEXAS-2016-11-08/vipFeed-48441-2016-11-08.zip2784358134496811743.xml
wrote data/vipfeed-48441-TEXAS-2016-11-08/polling-locations.txt
Collin County TX General Election
data/vipfeed-48085-TEXAS-2016-11-08/vipFeed-48085-2016-11-08.zip7316848612042619203.xml
wrote data/vipfeed-48085-TEXAS-2016-11-08/polling-locations.txt
Erath County TX General Election
data/vipfeed-48143-TEXAS-2016-11-08/vipFeed-48143-2016-11-08.zip444869107236491469.xml
wrote data/vipfeed-48143-TEXAS-2016-11-08/polling-locations.txt
Lubbock County TX General Election
data/vipfeed-48303-TEXAS-2016-11-08/vipFeed-48303-2016-11-08.zip2943842315040463063.xml
wrote data/vipfeed-48303-TEXAS-2016-11-08/polling-locations.txt
Waller County TX General Election
data/vipfeed-48473-TEXAS-2016-11-08/vipFeed-48473-2016-11-08.zip4032897481545020230.xml
wrote data/vipfeed-48473-TEXAS-2016-11-08/polling-locations.txt
Dallas County TX General Election
data/vipfeed-48113-TEXAS-2016-11-08/vipFeed-48113-2016-11-08.zip7427667318732755533.xml
wrote data/vipfeed-48113-TEXAS-2016-11-08/polling-locations.txt
Fort Bend County TX General Election
data/vipfeed-48157-TEXAS-2016-11-08/vipFeed-48157-2016-11-08.zip1307118309772469036.xml
wrote data/vipfeed-48157-TEXAS-2016-11-08/polling-locations.txt
Webb County TX General Election
data/vipfeed-48479-TEXAS-2016-11-08/vipFeed-48479-2016-11-08.zip4469479253963421803.xml
wrote data/vipfeed-48479-TEXAS-2016-11-08/polling-locations.txt
Plumas County CA General Election
data/vipfeed-06063-California-2016-11-08/plumas_data.zip2778570071815727129.xml
wrote data/vipfeed-06063-California-2016-11-08/polling-locations.txt
Sierra County CA General Election
data/vipfeed-06091-California-2016-11-08/data.zip3946994525446499617.xml
wrote data/vipfeed-06091-California-2016-11-08/polling-locations.txt
Travis County TX General Election
data/vipfeed-48453-TEXAS-2016-11-08/vipfeed-48453-TEXAS-2016-11-08.zip6890544573791042927.xml
wrote data/vipfeed-48453-TEXAS-2016-11-08/polling-locations.txt
Montgomery County TX General Election
data/vipfeed-48339-TEXAS-2016-11-08/vipfeed-48339-TEXAS-2016-11-08.zip713116425662459633.xml
wrote data/vipfeed-48339-TEXAS-2016-11-08/polling-locations.txt
Jefferson County TX General Election
data/vipfeed-48245-TEXAS-2016-11-08/vipfeed-48245-TEXAS-2016-11-08.zip6766436212990741758.xml
wrote data/vipfeed-48245-TEXAS-2016-11-08/polling-locations.txt
Cameron County TX General Election
data/vipfeed-48061-TEXAS-2016-11-08/vipFeed-48061-2016-11-08.zip2229372989394649817.xml
wrote data/vipfeed-48061-TEXAS-2016-11-08/polling-locations.txt
McLennan County TX General Election
data/vipfeed-48309-TEXAS-2016-11-08/vipFeed-48309-2016-11-08.zip2102209588288809384.xml
wrote data/vipfeed-48309-TEXAS-2016-11-08/polling-locations.txt
Nevada County CA General Election
data/vipfeed-06057-California-2016-11-08/data.zip3923645695697795878.xml
wrote data/vipfeed-06057-California-2016-11-08/polling-locations.txt
Motley County TX General Election
data/vipfeed-48345-TEXAS-2016-11-08/vipfeed-48345-TEXAS-2019-11-08.zip3313525186148058965.xml
wrote data/vipfeed-48345-TEXAS-2016-11-08/polling-locations.txt
Tom Green County TX General Election
data/vipfeed-48451-TEXAS-2016-11-08/vipfeed-48451-TEXAS-2016-11-08.zip89064199846438090.xml
wrote data/vipfeed-48451-TEXAS-2016-11-08/polling-locations.txt
Rockwall County TX General Election
data/vipfeed-48397-Rockwall-County-Texas-2016-11-08/data.zip9163425827019236263.xml
wrote data/vipfeed-48397-Rockwall-County-Texas-2016-11-08/polling-locations.txt
Hays County TX General Election
data/vipfeed-48209-Hays-County-Texas-2016-11-08/data.zip3446464436815150619.xml
wrote data/vipfeed-48209-Hays-County-Texas-2016-11-08/polling-locations.txt
Gregg County TX General Election
data/vipfeed-48183-Gregg-County-Texas-2016-11-08/data.zip7705126423765257393.xml
wrote data/vipfeed-48183-Gregg-County-Texas-2016-11-08/polling-locations.txt
Upton County TX General Election
data/vipfeed-48461-Upton-County-Texas-2016-11-08/data.zip6950342438355274550.xml
wrote data/vipfeed-48461-Upton-County-Texas-2016-11-08/polling-locations.txt
Nueces County TX General Election
data/vipfeed-48355-Nueces-County-Texas-2016-11-08/nueces_county.zip192647134248011177.xml
wrote data/vipfeed-48355-Nueces-County-Texas-2016-11-08/polling-locations.txt
Harris County TX General Election
data/vipfeed-48201-Harris-County-Texas-2016-11-08/data.zip370692719243883762.xml
wrote data/vipfeed-48201-Harris-County-Texas-2016-11-08/polling-locations.txt
Montgomery County TX General Election
data/vipfeed-48439-TEXAS-2016-11-08/polling-locations.txt
wrote data/vipfeed-48439-TEXAS-2016-11-08/polling-locations.txt
Maine General Election
data/vipfeed-230001-Maine-2016-11-08/maine_with_polling_names.zip7460874046971821824.xml
wrote data/vipfeed-230001-Maine-2016-11-08/polling-locations.txt
Arkansas General Election
data/vipfeed-050001-Arkansas-2016-11-08/ar_polling_places.zip3177199402805739593.xml
^C^C^C^D

