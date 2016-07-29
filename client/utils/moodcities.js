const moodCities = {
 party:[
      {
         city: 'Las Vegas, Nevada',
         cityLink: 'http://www.vegas.com/attractions/',
         airport:'LAS',
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
       },{
         city: 'Macau, China',
         cityLink: 'https://www.tripadvisor.com/Attractions-g664891-Activities-Macau.html',
         airport: 'MFM',
         geometry: {
               "northeast" : {
                  "lat" : 22.2170639,
                  "lng" : 113.5981886
               },
               "southwest" : {
                  "lat" : 22.1097694,
                  "lng" : 113.5287411
               }
            }
       },{
        city: 'Bangkok, Thailand',
        cityLink: 'http://www.bangkok.com/most-popular-historical/',
        airport: 'BKK',
        geometry: {
               "northeast" : {
                  "lat" : 13.9551109,
                  "lng" : 100.938408
               },
               "southwest" : {
                  "lat" : 13.4940899,
                  "lng" : 100.3278135
               }
            }
       },{
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
         city: 'San Juan, Puerto Rico',
         cityLink: 'https://www.virtualtourist.com/travel/Caribbean_and_Central_America/Puerto_Rico/San_Juan_Municipio/San_Juan-1645724/Things_To_Do-San_Juan-TG-C-1.html',
         airport: 'SJU'
       },{
        city: 'Grand Canyon, Arizona',
        cityLink: 'http://grandcanyon.com/',
        airport:'PHX'
       },{
         city:'Bangkok, Thailand',
         cityLink: 'http://www.bangkok.com/most-popular-historical/',
         airport: 'BKK'
       },{
        city:'Machu Picchu, Peru',
        cityLink: 'https://www.virtualtourist.com/travel/South_America/Peru/Departamento_de_Cusco/Machu_Picchu-1604535/Things_To_Do-Machu_Picchu-TG-C-1.html',
        airport: 'CUZ'
       },{
         city: 'Marrakech, Morocco',
         cityLink: 'http://www.planetware.com/tourist-attractions-/marrakesh-marrakech-mar-mar-mar.htm',
         airport: 'RAK',
         geometry: {
               "northeast" : {
                  "lat" : 31.7162668,
                  "lng" : -7.887625799999999
               },
               "southwest" : {
                  "lat" : 31.552976,
                  "lng" : -8.128080499999999
               }
            }
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