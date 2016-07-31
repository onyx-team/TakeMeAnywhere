const moodCities = {
 party:[
      {
         city: 'Las Vegas, Nevada',
         cityLink: 'http://www.vegas.com/attractions/',
         airport:'LAS',
         img: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Las_Vegas_89.jpg',
         geometry: {
           "northeast" : {
              "lat" : 36.3806231,
              "lng" : -115.0620721
           },
           "southwest" : {
              "lat" : 36.1296229,
              "lng" : -115.4146251
           }
         }
       },
       {
        city: 'Miami, Florida',
        cityLink: 'http://www.miamiandbeaches.com/',
        airport: 'MIA',
        geometry: {
           "northeast" : {
              "lat" : 25.8556059,
              "lng" : -80.1424004
           },
           "southwest" : {
              "lat" : 25.709042,
              "lng" : -80.31976
           }
          }
       },
       {
         city:'New York, New York',
         cityLink: 'http://www.nycgo.com/things-to-do/attractions',
         airport:'NYC',
         geometry: {
               "northeast" : {
                  "lat" : 40.9152555,
                  "lng" : -73.70027209999999
               },
               "southwest" : {
                  "lat" : 40.496044,
                  "lng" : -74.255735
               }
            }
       }],
 adventure:[{
        city: 'Grand Canyon, Arizona',
        cityLink: 'http://grandcanyon.com/',
        airport:'PHX'
       }],
 nature:[{
         city: 'Yellowstone National Park, Wyoming',
         cityLink: 'http://yellowstone.net/intro/top-10/',
         airport: 'JAC'
       },{
        city: 'Grand Canyon, Arizona',
        cityLink: 'http://grandcanyon.com/',
        airport: 'PHX'
       },{
         city: 'Maui, Hawaii',
         cityLink: 'http://www.gohawaii.com/maui/',
         airport: 'OGG'
       },{
        city: 'Lake Tahoe, Nevada',
        cityLink: 'http://www.visitinglaketahoe.com/',
        airport: 'RNO'
       },{
         city: 'Yosemite, California',
         cityLink: 'http://www.travelyosemite.com/',
         airport: 'MCE'
       }],
 family: [{
       city: 'San Diego, California',
       cityLink: 'http://www.sandiego.com/attractions',
       airport: 'SAN'
       },
       {
       city: 'Myrtle Beach, South Carolina',
       cityLink: 'http://www.visitmyrtlebeach.com/things-to-do/attractions/',
       airport: 'MYR'
        },
       {
       city: 'Branson, Missouri',
       cityLink: 'http://www.branson.com/attractions',
       airport: 'BKG'}
       ,
       {
       city: 'Virginia Beach, Virginia',
       cityLink: 'http://www.visitvirginiabeach.com/visitors/things-to-do/',
       airport: 'ORF'
       },
       {
       city: 'Nashville, Tennesse',
       cityLink: 'http://www.visitmusiccity.com/visitors/thingstodo',
       airport: 'BNA'
       }],
 foodie: [{
       city: 'Houston, Texas',
       cityLink: 'https://www.tripadvisor.com/Attractions-g56003-Activities-Houston_Texas.html',
       airport: 'IAH'
       },
       {
       city: 'Providence, Rhode Island',
       cityLink: 'http://www.goprovidence.com/things-to-do/',
       airport: 'PVD'
       },
       {
       city: 'Kansas City, Kansas',
       cityLink: 'https://www.visitkc.com/visitors/things-do/attractions',
       airport: 'MCI'
       },
       {
       city: 'Atlanta, Georgia',
       cityLink: 'http://www.atlanta.net/50fun/',
       airport: 'ATL'
       },
       {
       city: 'Minneapolis, Minnesota',
       cityLink: 'http://www.minneapolis.org/',
       airport: 'MSP'
       }],
 historic: [{
       city: 'Montreal, Canada',
       cityLink: 'http://www.travelchannel.com/destinations/canada/quebec/montreal/photos/montreals-must-see-attractions',
       airport: 'YUL'
       },
       {
       city: 'New Orleans, Louisiana',
       cityLink: 'http://www.neworleansonline.com/neworleans/attractions/',
       airport: 'MSY'
       },
       {
       city: 'San Antonio, Texas',
       cityLink: 'http://visitsanantonio.com/Browse-Book/Attractions',
       airport: 'SAT'
       },
       {
       city: 'Savannah, Georgia',
       cityLink: 'http://travel.usnews.com/Savannah_GA/Things_To_Do/',
       airport: 'ATL'
       },
       {
       city: 'Philadelphia, Pennsylvania',
       cityLink: 'http://www.visitphilly.com/articles/philadelphia/top-10-most-visited-attractions-in-philadelphia/',
       airport: 'PHL'
       }],
 city: [{
       city: 'New York City, New York',
       cityLink: 'http://www.nyctourist.com/topten_alltime.htm',
       airport: 'JFK'
       },
       {
       city: 'Chicago, Illinois',
       cityLink: 'http://www.chicagotraveler.com/attractions.htm',
       airport: 'ORD'
       },
       {
       city: 'Toronto, Canada',
       cityLink: 'https://www.tripadvisor.com/Attractions-g155019-Activities-Toronto_Ontario.html',
       airport: 'YYZ'
       },
       {
       city: 'Austin, Texas',
       cityLink: 'http://www.austintexas.org/',
       airport: 'AUS'
       },
       {
       city: 'Boston, Massachusetts',
       cityLink: 'http://www.cityofboston.gov/visitors/',
       airport: 'BOS'
       }],
 solitude: [{
       city: 'Bozeman, Montana',
       cityLink: 'http://www.bozemannet.com/attractions/',
       airport: 'BZN'
       },
       {
       city: 'Jackson Hole, Wyoming',
       cityLink: 'http://www.jacksonhole.com/',
       airport: 'JAC'
       },
       {
       city: 'Asheville, North Carolina' ,
       cityLink: 'https://www.exploreasheville.com/',
       airport: 'AVL'
       },
       {
       city: 'Salt Lake City, Utah',
       cityLink: 'http://www.visitsaltlake.com/',
       airport: 'SLC'
       },
       {
       city: 'Santa Fe, New Mexico',
       cityLink: 'http://santafe.org/',
       airport: 'SAF'
       }],
 romantic: [{
       city: 'Charleston, South Carolina',
       cityLink: 'http://www.charlestoncvb.com/',
       airport: 'CHS'
       },
       {
       city: 'Napa Valley, California',
       cityLink: 'http://www.napavalley.com/thingstodo/',
       airport: 'OAK'
       },
       {
       city: 'Key West, Florida',
       cityLink: 'http://keywestattractions.org/',
       airport: 'EYW'
       },
       {
       city: 'Cape Cod, Massachusetts',
       cityLink: 'http://www.capecodchamber.org/',
       airport: 'BOS'
       },
       {
       city: 'Savannah, Georgia',
       cityLink: 'https://www.tripadvisor.com/Attractions-g60814-Activities-Savannah_Georgia.html',
       airport: 'SAV'
       }]
}

export default moodCities;