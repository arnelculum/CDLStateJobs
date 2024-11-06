interface State {
  name: string;
  abbreviation: string;
  cities: string[];
}

// Define actively hiring states
const activeHiringStates = [
  'WA', 'OR', 'WY', 'UT', 'AZ', 'CO', 'TX', 'OK', 
  'KS', 'NE', 'MN', 'IA', 'MO', 'AR', 'LA', 'MS', 
  'WI', 'IL', 'IN', 'DE', 'ID'  // Added Idaho
];

export const states: State[] = [
  // Western States
  {
    name: "California",
    abbreviation: "CA",
    cities: [
        "Los Angeles", 
        "San Francisco", 
        "San Diego", 
        "Sacramento", 
        "San Jose",
        "Bakersfield", // Approximately 110 miles from Los Angeles
        "Fresno",      // Approximately 220 miles from San Francisco
        "Riverside",   // Approximately 55 miles from Los Angeles
        "Stockton",    // Approximately 90 miles from San Francisco
        "Modesto",     // Approximately 90 miles from San Francisco
        "Santa Rosa",  // Approximately 75 miles from San Francisco
        "Chico",       // Approximately 90 miles from Sacramento
        "Visalia",     // Approximately 190 miles from Los Angeles
        "San Luis Obispo", // Approximately 190 miles from Los Angeles
        "Palm Springs", // Approximately 110 miles from Los Angeles
        "Napa",        // Approximately 50 miles from San Francisco
        "Manteca",     // Approximately 75 miles from San Francisco
        "Merced",      // Approximately 120 miles from San Francisco
        "Hanford",     // Approximately 190 miles from Los Angeles
        "Lodi",        // Approximately 80 miles from San Francisco
        "Turlock",     // Approximately 100 miles from San Francisco
        "Burlingame",  // Approximately 20 miles from San Francisco
        "Ceres",       // Approximately 90 miles from San Francisco
        "Simi Valley",  // Approximately 40 miles from Los Angeles
        "Lakewood",    // Approximately 25 miles from Los Angeles
        "Torrance",    // Approximately 20 miles from Los Angeles
        "Culver City", // Approximately 10 miles from Los Angeles
        "Santa Monica", // Approximately 15 miles from Los Angeles
        "Redondo Beach", // Approximately 20 miles from Los Angeles
        "Clovis",      // Approximately 200 miles from San Francisco
        "Brea",        // Approximately 30 miles from Los Angeles
        "Huntington Beach", // Approximately 35 miles from Los Angeles
        "Fullerton",   // Approximately 25 miles from Los Angeles
        "Costa Mesa",  // Approximately 40 miles from Los Angeles
        "Irvine",      // Approximately 40 miles from Los Angeles
        "Orange",      // Approximately 30 miles from Los Angeles
        "Mission Viejo", // Approximately 50 miles from Los Angeles
        "Lake Elsinore", // Approximately 60 miles from Los Angeles
        "Temecula",    // Approximately 80 miles from Los Angeles
        "Murrieta",    // Approximately 80 miles from Los Angeles
        "Chula Vista",  // Approximately 7 miles from San Diego
        "El Cajon",    // Approximately 20 miles from San Diego
        "La Mesa",     // Approximately 10 miles from San Diego
        "Encinitas",   // Approximately 30 miles from San Diego
        "Carlsbad",    // Approximately 35 miles from San Diego
        "Oceanside",   // Approximately 40 miles from San Diego
        "Vista",       // Approximately 40 miles from San Diego
        "San Marcos",  // Approximately 35 miles from San Diego
        "Escondido",   // Approximately 30 miles from San Diego
        "Fallbrook",   // Approximately 50 miles from San Diego
        "Temecula",    // Approximately 80 miles from Los Angeles
        "Hemet",       // Approximately 80 miles from Los Angeles
        "Lake Arrowhead" // Approximately 80 miles from Los Angeles
    ]
},
  {
    name: "Nevada",
    abbreviation: "NV",
    cities: ["Las Vegas", "Reno", "Henderson", "North Las Vegas", "Sparks"]
  },
  {
    name: "Montana",
    abbreviation: "MT",
    cities: ["Billings", "Missoula", "Great Falls", "Bozeman", "Helena"]
  },
  {
    name: "Alaska",
    abbreviation: "AK",
    cities: ["Anchorage", "Fairbanks", "Juneau", "Wasilla", "Sitka"]
  },
  {
    name: "Hawaii",
    abbreviation: "HI",
    cities: ["Honolulu", "Pearl City", "Hilo", "Kailua", "Waipahu"]
  },
  {
    name: "New Mexico",
    abbreviation: "NM",
    cities: ["Albuquerque", "Las Cruces", "Rio Rancho", "Santa Fe", "Roswell"]
  },
  {
    "name": "Washington",
    "abbreviation": "WA",
    "cities": [
        "Seattle",        // Major city
        "Spokane",        // Major city
        "Tacoma",         // Major city
        "Vancouver",      // Major city
        "Bellevue",       // Major city
        "Kent",           // Major city
        "Everett",        // Major city
        "Renton",         // Major city
        "Federal Way",    // Major city
        "Bellingham",     // Major city
        "Walla Walla",    // Approximately 160 miles south of Spokane
        "Richland",       // Approximately 140 miles southwest of Spokane
        "Kennewick",      // Approximately 140 miles southwest of Spokane
        "Pasco",          // Approximately 140 miles southwest of Spokane
        "Yakima",         // Approximately 200 miles west of Spokane
        "Goldendale",     // Approximately 70 miles south of Yakima
        "Moses Lake",     // Approximately 100 miles west of Spokane
        "Quincy",         // Approximately 130 miles west of Spokane
        "Ephrata",        // Approximately 120 miles west of Spokane
        "Forks",          // Approximately 140 miles northwest of Seattle
        "Port Angeles",   // Approximately 85 miles northwest of Seattle
        "Aberdeen",       // Approximately 110 miles southwest of Seattle
        "Hoquiam",        // Approximately 110 miles southwest of Seattle
        "Ocean Shores",   // Approximately 130 miles southwest of Seattle
        "South Bend",     // Approximately 130 miles southwest of Seattle
        "Raymond",        // Approximately 130 miles southwest of Seattle
        "Shelton",        // Approximately 85 miles southwest of Seattle
        "Colville",       // Approximately 70 miles north of Spokane
        "Pullman",        // Approximately 75 miles south of Spokane
        "Clarkston",      // Approximately 110 miles south of Spokane
        "Chewelah",       // Approximately 50 miles north of Spokane
        "Kettle Falls",   // Approximately 80 miles north of Spokane
        "Wenatchee",      // Approximately 140 miles east of Seattle
        "Cashmere"        // Approximately 130 miles east of Seattle
    ]
},
  {
    "name": "Oregon",
    "abbreviation": "OR",
    "cities": [
        "Portland",        // Major city
        "Salem",           // Major city
        "Eugene",          // Major city
        "Gresham",         // Approximately 16 miles east of Portland
        "Hillsboro",       // Approximately 20 miles west of Portland
        "Beaverton",       // Approximately 7 miles west of Portland
        "Bend",            // Major city
        "Medford",         // Major city
        "Springfield",     // Approximately 5 miles east of Eugene
        "Corvallis",       // Approximately 37 miles south of Salem
        "Albany",          // Approximately 26 miles south of Salem
        "Tigard",          // Approximately 10 miles southwest of Portland
        "Lake Oswego",     // Approximately 8 miles south of Portland
        "Keizer",          // Approximately 5 miles north of Salem
        "Grants Pass",     // Approximately 30 miles northwest of Medford
        "Oregon City",     // Approximately 13 miles south of Portland
        "Redmond",         // Approximately 17 miles north of Bend
        "Tualatin",        // Approximately 12 miles southwest of Portland
        "West Linn",       // Approximately 12 miles south of Portland
        "Woodburn",        // Approximately 20 miles north of Salem
        "Newberg",         // Approximately 22 miles southwest of Portland
        "Wilsonville",     // Approximately 18 miles south of Portland
        "Forest Grove",    // Approximately 25 miles west of Portland
        "Happy Valley",    // Approximately 13 miles southeast of Portland
        "Milwaukie",       // Approximately 7 miles south of Portland
        "Sherwood",        // Approximately 17 miles southwest of Portland
        "Central Point",   // Approximately 5 miles northwest of Medford
        "Klamath Falls",   // Approximately 70 miles southeast of Medford
        "Ashland",         // Approximately 13 miles south of Medford
        "McMinnville",     // Approximately 35 miles southwest of Portland
        "Roseburg",        // Approximately 70 miles south of Eugene
        "The Dalles",      // Approximately 80 miles east of Portland
        "Pendleton",       // Approximately 210 miles east of Portland
        "Astoria",         // Approximately 97 miles northwest of Portland
        "Hermiston",       // Approximately 180 miles east of Portland
        "Coos Bay",        // Approximately 115 miles southwest of Eugene
        "La Grande",       // Approximately 260 miles east of Portland
        "St. Helens",      // Approximately 30 miles northwest of Portland
        "Lebanon",         // Approximately 45 miles south of Salem
        "Dallas",          // Approximately 15 miles west of Salem
        "Canby",           // Approximately 25 miles south of Portland
        "Ontario",         // Approximately 375 miles east of Portland
        "Seaside",         // Approximately 80 miles northwest of Portland
        "Florence",        // Approximately 60 miles west of Eugene
        "Newport",         // Approximately 55 miles west of Corvallis
        "Lincoln City",    // Approximately 60 miles west of Salem
        "Tillamook",       // Approximately 75 miles west of Portland
        "Baker City",      // Approximately 300 miles east of Portland
        "Prineville",      // Approximately 35 miles northeast of Bend
        "Madras",          // Approximately 45 miles north of Bend
        "Sandy",           // Approximately 30 miles east of Portland
        "Silverton",       // Approximately 15 miles northeast of Salem
        "Monmouth",        // Approximately 20 miles southwest of Salem
        "Independence",    // Approximately 15 miles southwest of Salem
        "Cottage Grove",   // Approximately 20 miles south of Eugene
        "Sutherlin"        // Approximately 12 miles north of Roseburg
    ]
},
  {
    "name": "Idaho",
    "abbreviation": "ID",
    "cities": [
        "Boise",          // Major city, population: 235,216
        "Meridian",       // Major city, population: 134,801
        "Nampa",          // Major city, population: 114,268
        "Caldwell",       // Approximately 27 miles west of Boise, population: 68,336
        "Idaho Falls",    // Approximately 218 miles east of Boise, population: 68,001
        "Pocatello",      // Approximately 234 miles east of Boise, population: 58,064
        "Coeur d'Alene",  // Approximately 379 miles north of Boise, population: 56,894
        "Twin Falls",     // Approximately 128 miles southeast of Boise, population: 54,943
        "Post Falls",     // Approximately 8 miles west of Coeur d'Alene, population: 44,798
        "Rexburg",        // Approximately 28 miles northeast of Idaho Falls, population: 39,975
        "Lewiston",       // Approximately 270 miles north of Boise, population: 34,836
        "Eagle",          // Approximately 10 miles northwest of Boise, population: 32,319
        "Moscow",         // Approximately 84 miles north of Lewiston, population: 26,387
        "Kuna",           // Approximately 18 miles southwest of Boise, population: 28,050
        "Ammon",          // Approximately 5 miles east of Idaho Falls, population: 19,617
        "Chubbuck",       // Approximately 5 miles north of Pocatello, population: 16,362
        "Hayden",         // Approximately 6 miles north of Coeur d'Alene, population: 16,422
        "Mountain Home",  // Approximately 44 miles southeast of Boise, population: 16,703
        "Blackfoot",      // Approximately 25 miles southwest of Idaho Falls, population: 12,355
        "Garden City",    // Enclave within Boise, population: 12,033
        "Jerome",         // Approximately 12 miles northwest of Twin Falls, population: 12,111
        "Burley",         // Approximately 38 miles east of Twin Falls, population: 11,704
        "Hailey",         // Approximately 142 miles east of Boise, population: 9,601
        "Sandpoint",      // Approximately 47 miles north of Coeur d'Alene, population: 9,527
        "Payette",        // Approximately 60 miles northwest of Boise, population: 7,655
        "Rathdrum",       // Approximately 10 miles northwest of Coeur d'Alene, population: 9,150
        "Emmett",         // Approximately 30 miles northwest of Boise, population: 7,190
        "Weiser",         // Approximately 75 miles northwest of Boise, population: 5,507
        "Mountain Home AFB", // Approximately 12 miles southwest of Mountain Home, population: 3,238
        "Rupert",         // Approximately 5 miles northeast of Burley, population: 5,829
        "St. Anthony",    // Approximately 45 miles northeast of Idaho Falls, population: 3,470
        "Shelley",        // Approximately 10 miles south of Idaho Falls, population: 4,409
        "Gooding",        // Approximately 40 miles northwest of Twin Falls, population: 3,567
        "Buhl",           // Approximately 16 miles west of Twin Falls, population: 4,385
        "Preston",        // Approximately 100 miles southeast of Pocatello, population: 5,354
        "Montpelier",     // Approximately 130 miles southeast of Pocatello, population: 2,597
        "Soda Springs",   // Approximately 60 miles southeast of Pocatello, population: 3,058
        "American Falls", // Approximately 28 miles southwest of Pocatello, population: 4,457
        "Malad City",     // Approximately 115 miles south of Pocatello, population: 2,289
        "Shoshone",       // Approximately 24 miles north of Twin Falls, population: 1,641
        "Bellevue",       // Approximately 16 miles south of Hailey, population: 2,287
        "Ketchum",        // Approximately 12 miles north of Hailey, population: 2,763
        "Sun Valley",     // Approximately 13 miles north of Hailey, population: 1,800
        "Driggs",         // Approximately 50 miles northeast of Idaho Falls, population: 1,981
        "Victor",         // Approximately 24 miles northeast of Idaho Falls, population: 2,174
        "Salmon",         // Approximately 160 miles north of Idaho Falls, population: 3,112
        "Mackay",         // Approximately 70 miles northwest of Idaho Falls, population: 473
        "Arco",           // Approximately 75 miles west of Idaho Falls, population: 882
        "Challis",        // Approximately 130 miles northwest of Idaho Falls, population: 897
        "Mullan",         // Approximately 90 miles east of Coeur d'Alene, population: 692
        "Wallace",        // Approximately 50 miles east of Coeur d'Alene, population: 786
        "Kellogg",        // Approximately 36 miles east of Coeur d'Alene, population: 2,307
        "Osburn",         // Approximately 40 miles east of Coeur d'Alene, population: 1,581
        "Pinehurst",      // Approximately 30 miles east of Coeur d'Alene, population: 1,676
        "Smelterville",   // Approximately 35 miles east of Coeur d'Alene, population: 627
        "Bonners Ferry",  // Approximately 30 miles south of the Canada–US border, population: 2,543
        "Moyie Springs",  // Approximately 5 miles east of Bonners Ferry, population: 834
        "Priest River",   // Approximately 60 miles north of Coeur d'Alene, population: 1,677
        "Oldtown",        // Approximately 60 miles north of Coeur d'Alene, population: 190
        "Spirit Lake",    // Approximately 20 miles north of Coeur d'Alene, population: 2,351
        "Plummer",        // Approximately 35 miles south of Coeur d'Alene, population: 1,019
        "St. Maries",     // Approximately 50 miles south of Coeur d'Alene, population: 2,358
        "Orofino",        // Approximately 110 miles southeast of Coeur d'Alene, population: 3,142
        "Kamiah",         // Approximately 65 miles southeast of Lewiston, population: 1,146,
      ]
},

  // North Central States
  {
    name: "Michigan",
    abbreviation: "MI",
    cities: ["Detroit", "Grand Rapids", "Warren", "Sterling Heights", "Lansing"]
  },
  {
    name: "North Dakota",
    abbreviation: "ND",
    cities: ["Fargo", "Bismarck", "Grand Forks", "Minot", "West Fargo"]
  },
  {
    name: "South Dakota",
    abbreviation: "SD",
    cities: ["Sioux Falls", "Rapid City", "Aberdeen", "Brookings", "Watertown"]
  },
  {
    "name": "Wyoming",
    "abbreviation": "WY",
    "cities": [
        "Cheyenne",        // Major city, population: 65,168
        "Casper",          // Major city, population: 58,720
        "Gillette",        // Major city, population: 33,496
        "Laramie",         // Major city, population: 32,152
        "Rock Springs",    // Major city, population: 22,954
        "Sheridan",        // Major city, population: 19,543
        "Evanston",        // Approximately 83 miles southwest of Rock Springs, population: 11,807
        "Green River",     // Approximately 12 miles west of Rock Springs, population: 11,496
        "Riverton",        // Approximately 121 miles northwest of Casper, population: 10,923
        "Jackson",         // Approximately 180 miles west of Casper, population: 10,639
        "Cody"             // Approximately 148 miles northwest of Casper, population: 10,240
    ]
},
  {
    "name": "Utah",
    "abbreviation": "UT",
    "cities": [
        "Salt Lake City",    // Major city, population: 212,570
        "West Valley City",  // Major city, population: 132,635
        "West Jordan",       // Major city, population: 114,200
        "Provo",             // Major city, population: 112,756
        "St. George",        // Major city, population: 104,578
        "Orem",              // Approximately 5 miles north of Provo, population: 95,519
        "Sandy",             // Approximately 13 miles south of Salt Lake City, population: 91,943
        "Lehi",              // Approximately 23 miles north of Provo, population: 90,227
        "Ogden",             // Approximately 40 miles north of Salt Lake City, population: 87,267
        "South Jordan",      // Approximately 18 miles south of Salt Lake City, population: 84,528
        "Layton",            // Approximately 25 miles north of Salt Lake City, population: 83,516
        "Millcreek",         // Approximately 6 miles south of Salt Lake City, population: 62,205
        "Herriman",          // Approximately 20 miles southwest of Salt Lake City, population: 60,049
        "Taylorsville",      // Approximately 10 miles southwest of Salt Lake City, population: 57,098
        "Eagle Mountain",    // Approximately 30 miles southwest of Salt Lake City, population: 56,932
        "Logan",             // Approximately 82 miles north of Salt Lake City, population: 55,250
        "Saratoga Springs",  // Approximately 35 miles south of Salt Lake City, population: 52,532
        "Draper",            // Approximately 20 miles south of Salt Lake City, population: 49,602
        "Murray",            // Approximately 8 miles south of Salt Lake City, population: 49,553
        "Spanish Fork",      // Approximately 8 miles south of Provo, population: 45,557
        "Riverton",          // Approximately 20 miles south of Salt Lake City, population: 44,854
        "Bountiful",         // Approximately 11 miles north of Salt Lake City, population: 44,144
        "Cedar City",        // Approximately 250 miles south of Salt Lake City, population: 39,942
        "Tooele",            // Approximately 35 miles southwest of Salt Lake City, population: 39,263
        "Roy",               // Approximately 32 miles north of Salt Lake City, population: 38,592
        "American Fork",     // Approximately 30 miles south of Salt Lake City, population: 38,549
        "Kearns",            // Approximately 12 miles southwest of Salt Lake City, population: 37,767
        "Pleasant Grove",    // Approximately 10 miles north of Provo, population: 37,294
        "Syracuse",          // Approximately 25 miles north of Salt Lake City, population: 37,022
        "Midvale",           // Approximately 12 miles south of Salt Lake City, population: 35,561
        "Springville",       // Approximately 5 miles south of Provo, population: 35,471
        "Clearfield",        // Approximately 30 miles north of Salt Lake City, population: 34,470
        "Washington",        // Approximately 5 miles east of St. George, population: 33,877
        "Kaysville",         // Approximately 20 miles north of Salt Lake City, population: 32,941
        "Cottonwood Heights",// Approximately 12 miles south of Salt Lake City, population: 32,204
        "Holladay",          // Approximately 8 miles south of Salt Lake City, population: 30,298
        "Magna",             // Approximately 15 miles west of Salt Lake City, population: 30,087
        "South Salt Lake",   // Approximately 3 miles south of Salt Lake City, population: 26,122
        "Farmington",        // Approximately 16 miles north of Salt Lake City, population: 25,771
        "Payson",            // Approximately 15 miles south of Provo, population: 24,054
        "West Haven",        // Approximately 35 miles north of Salt Lake City, population: 24,014
        "Hurricane",         // Approximately 20 miles northeast of St. George, population: 23,959
        "Clinton",           // Approximately 30 miles north of Salt Lake City, population: 23,588
        "North Salt Lake",   // Approximately 8 miles north of Salt Lake City, population: 23,560
        "North Ogden",       // Approximately 45 miles north of Salt Lake City, population: 22,233
        "Highland",          // Approximately 30 miles south of Salt Lake City, population: 20,217
        "Brigham City",      // Approximately 60 miles north of Salt Lake City, population: 19,970
        "Bluffdale",         // Approximately 20 miles south of Salt Lake City, population: 19,090
        "Heber",             // Approximately 45 miles southeast of Salt Lake City, population: 18,533
        "South Ogden",       // Approximately 40 miles north of Salt Lake City, population: 17,678
        "Santaquin",         // Approximately 20 miles south of Provo, population: 17,532
        "Centerville",       // Approximately 15 miles north of Salt Lake City, population: 16,517
        "Grantsville",       // Approximately 35 miles west of Salt Lake City, population: 15,267
        "Smithfield",        // Approximately 85 miles north of Salt Lake City, population: 14,726
        "Vineyard",          // Approximately 40 miles south of Salt Lake City, population: 14,500
        "Mapleton",          // Approximately 10 miles south of Provo, population: 13,732
        "West Point",        // Approximately 30 miles north of Salt Lake City, population: 12,479
        "Tremonton",         // Approximately 75 miles north of Salt Lake City, population: 12,411
        "Lindon",            // Approximately 35 miles south of Salt Lake City, population: 11,734
        "North Logan",       // Approximately 80 miles north of Salt Lake City, population: 11,711
        "Woods Cross",       // Approximately 9 miles north of Salt Lake City, population: 11,480
        "Pleasant View",     // Approximately 45 miles north of Salt Lake City, population: 11,265
            ]
  },
  {
    "name": "Colorado",
    "abbreviation": "CO",
    "cities": [
        "Denver",          // Major city, population: 716,577
        "Colorado Springs",// Major city, population: 488,664
        "Aurora",          // Major city, population: 395,052
        "Fort Collins",    // Major city, population: 170,376
        "Lakewood",        // Approximately 7 miles west of Denver, population: 155,961
        "Thornton",        // Approximately 10 miles north of Denver, population: 144,922
        "Arvada",          // Approximately 9 miles northwest of Denver, population: 121,414
        "Westminster",     // Approximately 10 miles northwest of Denver, population: 114,875
        "Greeley",         // Approximately 50 miles north of Denver, population: 112,609
        "Pueblo",          // Approximately 100 miles south of Denver, population: 111,077
        "Centennial",      // Approximately 15 miles south of Denver, population: 106,883
        "Boulder",         // Approximately 30 miles northwest of Denver, population: 105,898
        "Highlands Ranch", // Approximately 15 miles south of Denver, population: 101,514
        "Longmont",        // Approximately 35 miles north of Denver, population: 98,630
        "Castle Rock",     // Approximately 30 miles south of Denver, population: 81,415
        "Loveland",        // Approximately 50 miles north of Denver, population: 79,352
        "Broomfield",      // Approximately 20 miles northwest of Denver, population: 76,860
        "Grand Junction",  // Approximately 240 miles west of Denver, population: 69,412
        "Commerce City",   // Approximately 8 miles northeast of Denver, population: 68,245
        "Parker",          // Approximately 25 miles southeast of Denver, population: 62,743
        "Littleton",       // Approximately 10 miles south of Denver, population: 44,451
        "Brighton",        // Approximately 20 miles northeast of Denver, population: 42,477
        "Windsor",         // Approximately 60 miles north of Denver, population: 40,349
        "Security-Widefield", // Approximately 10 miles south of Colorado Springs, population: 39,150
        "Northglenn",      // Approximately 10 miles north of Denver, population: 38,164
        "Erie",            // Approximately 25 miles north of Denver, population: 35,269
        "Pueblo West",     // Approximately 10 miles west of Pueblo, population: 34,337
        "Englewood",       // Approximately 10 miles south of Denver, population: 34,275
        "Dakota Ridge",    // Approximately 15 miles southwest of Denver, population: 34,234
        "Ken Caryl",       // Approximately 15 miles southwest of Denver, population: 33,505
        "Wheat Ridge",     // Approximately 7 miles west of Denver, population: 31,804
        "Lafayette",       // Approximately 20 miles north of Denver, population: 30,439
        "Fountain",        // Approximately 15 miles south of Colorado Springs, population: 28,489
        "Columbine",       // Approximately 15 miles southwest of Denver, population: 25,940
        "Evans",           // Approximately 50 miles north of Denver, population: 22,326
        "Four Square Mile",// Approximately 10 miles southeast of Denver, population: 21,420
        "Montrose",        // Approximately 260 miles southwest of Denver, population: 21,333
        "Louisville",      // Approximately 20 miles northwest of Denver, population: 20,390
        "Golden",          // Approximately 15 miles west of Denver, population: 20,242
        "Durango",         // Approximately 330 miles southwest of Denver, population: 19,534
        "Johnstown",       // Approximately 45 miles north of Denver, population: 19,511
        "Clifton",         // Approximately 240 miles west of Denver, population: 19,443
        "Sherrelwood",     // Approximately 7 miles north of Denver, population: 19,254
        "Cimarron Hills",  // Approximately 5 miles east of Colorado Springs, population: 19,039
        "Firestone",       // Approximately 30 miles north of Denver, population: 18,589
        "Fort Carson",     // Approximately 10 miles south of Colorado Springs, population: 18,105
        "Frederick",       // Approximately 30 miles north of Denver, population: 17,676
        "Cañon City",      // Approximately 115 miles south of Denver, population: 17,241
        "Welby",           // Approximately 6 miles north of Denver, population: 16,287
        "Greenwood Village", // Approximately 15 miles south of Denver, population: 15,205
        "Castle Pines",    // Approximately 25 miles south of Denver, population: 14,747
        "Black Forest",    // Approximately 15 miles northeast of Colorado Springs, population: 14,437
        "Lone Tree",       // Approximately 20 miles south of Denver, population: 14,063
        "Federal Heights", // Approximately 10 miles north of Denver, population: 13,943
        "Fruita",          // Approximately 250 miles west of Denver, population: 13,816
        "Steamboat Springs", // Approximately 150 miles northwest of Denver, population: 13,508
        "Superior",        // Approximately 20 miles northwest of Denver, population: 13,361
        "Berthoud",        // Approximately 45 miles north of Denver, population: 13,238
        "Sterling",        // Approximately 125 miles northeast of Denver, population: 12,954
        "Monument",        // Approximately 50 miles south of Denver, population: 12,088
        "Wellington",      // Approximately 70 miles north of Denver, population: 12,078
        "Fort Morgan",     // Approximately 80 miles northeast of Denver, population: 11,564
        "Berkley",         // Approximately 5 miles northwest of Denver, population: 11,185
        "Cherry Creek",    // Approximately 5 miles southeast of Denver, population: 11,157
        "Severance",       // Approximately 60 miles north of Denver, population: 10,820
        "Edwards",         // Approximately 130 miles west of Denver, population: 10,721
            ]
  },

  // South Central States
  {
    name: "Kentucky",
    abbreviation: "KY",
    cities: ["Louisville", "Lexington", "Bowling Green", "Owensboro", "Covington"]
  },
  {
    name: "Tennessee",
    abbreviation: "TN",
    cities: ["Nashville", "Memphis", "Knoxville", "Chattanooga", "Clarksville"]
  },
  {
    name: "Alabama",
    abbreviation: "AL",
    cities: ["Birmingham", "Montgomery", "Huntsville", "Mobile", "Tuscaloosa"]
  },
  {
    "name": "Arizona",
    "abbreviation": "AZ",
    "cities": [
        "Phoenix",          // Major city, population: 1,650,070
        "Tucson",           // Major city, population: 547,239
        "Mesa",             // Major city, population: 511,648
        "Chandler",         // Approximately 22 miles southeast of Phoenix, population: 280,167
        "Gilbert",          // Approximately 22 miles southeast of Phoenix, population: 275,411
        "Glendale",         // Approximately 9 miles northwest of Phoenix, population: 253,855
        "Scottsdale",       // Approximately 12 miles northeast of Phoenix, population: 244,394
        "Peoria",           // Approximately 13 miles northwest of Phoenix, population: 198,750
        "Tempe",            // Approximately 10 miles east of Phoenix, population: 189,834
        "Surprise",         // Approximately 20 miles northwest of Phoenix, population: 158,285
        "Goodyear",         // Approximately 17 miles west of Phoenix, population: 111,805
        "Buckeye",          // Approximately 30 miles west of Phoenix, population: 108,909
        "San Tan Valley",   // Approximately 45 miles southeast of Phoenix, population: 101,207
        "Yuma",             // Approximately 185 miles southwest of Phoenix, population: 100,858
        "Avondale",         // Approximately 15 miles west of Phoenix, population: 93,545
        "Flagstaff",        // Approximately 145 miles north of Phoenix, population: 76,586
        "Queen Creek",      // Approximately 35 miles southeast of Phoenix, population: 76,570
        "Maricopa",         // Approximately 35 miles south of Phoenix, population: 71,022
        "Casas Adobes",     // Approximately 10 miles north of Tucson, population: 69,917
        "Casa Grande",      // Approximately 48 miles southeast of Phoenix, population: 63,743
        "Lake Havasu City", // Approximately 200 miles northwest of Phoenix, population: 59,257
        "Marana",           // Approximately 25 miles northwest of Tucson, population: 58,430
        "Catalina Foothills", // Approximately 8 miles north of Tucson, population: 50,573
        "Prescott Valley",  // Approximately 85 miles north of Phoenix, population: 50,045
        "Oro Valley",       // Approximately 10 miles north of Tucson, population: 48,311
        "Prescott",         // Approximately 100 miles north of Phoenix, population: 47,757
        "Sierra Vista",     // Approximately 75 miles southeast of Tucson, population: 44,431
        "Bullhead City",    // Approximately 230 miles northwest of Phoenix, population: 43,302
        "Apache Junction",  // Approximately 35 miles east of Phoenix, population: 41,153
        "San Luis",         // Approximately 200 miles southwest of Phoenix, population: 37,966
        "Sun City",         // Approximately 20 miles northwest of Phoenix, population: 37,748
        "Sahuarita",        // Approximately 15 miles south of Tucson, population: 36,356
        "El Mirage",        // Approximately 15 miles northwest of Phoenix, population: 35,850
        "Kingman",          // Approximately 195 miles northwest of Phoenix, population: 35,334
        "Drexel Heights",   // Approximately 10 miles southwest of Tucson, population: 30,254
        "Fortuna Foothills", // Approximately 10 miles east of Yuma, population: 27,552
        "Sun City West",    // Approximately 25 miles northwest of Phoenix, population: 26,639
        "Florence",         // Approximately 60 miles southeast of Phoenix, population: 24,291
        "Fountain Hills",   // Approximately 30 miles northeast of Phoenix, population: 23,611
        "Anthem",           // Approximately 35 miles north of Phoenix, population: 22,708
        "Rio Rico",         // Approximately 60 miles south of Tucson, population: 21,447
        "Green Valley",     // Approximately 25 miles south of Tucson, population: 20,937
        "Nogales",          // Approximately 70 miles south of Tucson, population: 19,702
        "Eloy",             // Approximately 65 miles southeast of Phoenix, population: 18,528
        "New River",        // Approximately 35 miles north of Phoenix, population: 18,422
        "Coolidge",         // Approximately 55 miles southeast of Phoenix, population: 18,293
        "Flowing Wells",    // Approximately 5 miles northwest of Tucson, population: 17,188
        "Payson",           // Approximately 90 miles northeast of Phoenix, population: 16,731
        "Fort Mohave",      // Approximately 230 miles northwest of Phoenix, population: 16,038
        "Douglas",          // Approximately 120 miles southeast of Tucson, population: 15,638
        "Vail",             // Approximately 20 miles southeast of Tucson, population: 15,248
        "Tanque Verde",     // Approximately 15 miles northeast of Tucson, population: 14,815
        "Somerton",         // Approximately 12 miles southwest of Yuma, population: 14,594
        "Sierra Vista Southeast", // Approximately 80 miles southeast of Tucson, population: 14,398
        "Sun Lakes",        // Approximately 25 miles southeast of Phoenix, population: 14,147
        "Chino Valley",     // Approximately 90 miles north of Phoenix, population: 13,815
        "Valencia West",    // Approximately 15 miles southwest of Tucson, population: 13,692
        "New Kingman-Butler", // Approximately 200 miles northwest of Phoenix, population: 13,247
        "Cottonwood",       // Approximately 100 miles north of Phoenix, population: 13,124
        "Tucson Estates",   // Approximately 10 miles west of Tucson, population: 12,795
        "Paradise Valley",  // Approximately 15 miles northeast of Phoenix, population: 12,502
        "Camp Verde",       // Approximately 90 miles north of Phoenix, population: 12,489
        "Show Low",         // Approximately 175 miles northeast of Phoenix, population: 12,192
        "Saddlebrooke",     // Approximately 25 miles north of Tucson, population: 12,014
        "Verde Village",    // Approximately 100 miles north of Phoenix, population: 12,005
            ]
  },
  {
    "name": "Nebraska",
    "abbreviation": "NE",
    "cities": [
        "Omaha",          // Major city, population: 483,335
        "Lincoln",        // Major city, population: 294,757
        "Bellevue",       // Approximately 8 miles south of Omaha, population: 63,922
        "Grand Island",   // Approximately 95 miles west of Lincoln, population: 52,622
        "Kearney",        // Approximately 130 miles west of Lincoln, population: 34,362
        "Fremont",        // Approximately 35 miles northwest of Omaha, population: 27,602
        "Hastings",       // Approximately 100 miles west of Lincoln, population: 24,896
        "Norfolk",        // Approximately 115 miles northwest of Omaha, population: 26,147
        "North Platte",   // Approximately 220 miles west of Lincoln, population: 22,523
        "Columbus",       // Approximately 80 miles northwest of Lincoln, population: 24,464
        "Papillion",      // Approximately 12 miles southwest of Omaha, population: 23,791
        "La Vista",       // Approximately 10 miles southwest of Omaha, population: 16,346
        "Scottsbluff",    // Approximately 400 miles west of Lincoln, population: 14,305
        "South Sioux City", // Approximately 100 miles north of Omaha, population: 13,856
        "Beatrice",       // Approximately 40 miles south of Lincoln, population: 12,262
        "Lexington",      // Approximately 190 miles west of Lincoln, population: 10,816
            ]
  },
  {
    "name": "Kansas",
    "abbreviation": "KS",
    "cities": [
        "Wichita",          // Major city, population: 396,119
        "Overland Park",    // Major city, population: 197,089
        "Kansas City",      // Major city, population: 152,933
        "Olathe",           // Approximately 20 miles southwest of Kansas City, population: 147,461
        "Topeka",           // Approximately 60 miles west of Kansas City, population: 125,475
        "Lawrence",         // Approximately 40 miles west of Kansas City, population: 96,207
        "Shawnee",          // Approximately 10 miles west of Kansas City, population: 69,417
        "Lenexa",           // Approximately 15 miles southwest of Kansas City, population: 58,536
        "Manhattan",        // Approximately 120 miles west of Kansas City, population: 53,682
        "Salina",           // Approximately 90 miles north of Wichita, population: 45,792
        "Hutchinson",       // Approximately 50 miles northwest of Wichita, population: 39,662
        "Leavenworth",      // Approximately 30 miles northwest of Kansas City, population: 37,034
        "Leawood",          // Approximately 10 miles south of Kansas City, population: 33,980
        "Dodge City",       // Approximately 150 miles west of Wichita, population: 27,514
        "Garden City",      // Approximately 200 miles west of Wichita, population: 27,371
        "Derby",            // Approximately 10 miles south of Wichita, population: 26,233
        "Gardner",          // Approximately 30 miles southwest of Kansas City, population: 25,378
        "Emporia",          // Approximately 90 miles southwest of Kansas City, population: 24,105
        "Prairie Village",  // Approximately 10 miles south of Kansas City, population: 22,900
        "Junction City",    // Approximately 130 miles west of Kansas City, population: 21,856
        "Hays",             // Approximately 200 miles west of Topeka, population: 21,040
        "Pittsburg",        // Approximately 120 miles south of Kansas City, population: 20,504
        "Liberal",          // Approximately 200 miles southwest of Wichita, population: 18,999
        "Newton",           // Approximately 25 miles north of Wichita, population: 18,251
        "Andover",          // Approximately 15 miles east of Wichita, population: 15,814
        "Great Bend",       // Approximately 110 miles northwest of Wichita, population: 14,372
        "McPherson",        // Approximately 60 miles north of Wichita, population: 13,906
        "El Dorado",        // Approximately 30 miles east of Wichita, population: 12,919
        "Ottawa",           // Approximately 50 miles southwest of Kansas City, population: 12,686
        "Arkansas City",    // Approximately 60 miles south of Wichita, population: 11,765
        "Winfield",         // Approximately 50 miles south of Wichita, population: 11,669
        "Haysville",        // Approximately 10 miles south of Wichita, population: 11,268
        "Lansing",          // Approximately 25 miles northwest of Kansas City, population: 11,221
        "Merriam",          // Approximately 10 miles southwest of Kansas City, population: 10,875
        "Atchison",         // Approximately 50 miles northwest of Kansas City, population: 10,670
        "Mission",          // Approximately 10 miles southwest of Kansas City, population: 10,014
            ]
  },
  {
    "name": "Oklahoma",
    "abbreviation": "OK",
    "cities": [
        "Oklahoma City",    // Major city, population: 709,330
        "Tulsa",            // Major city, population: 411,894
        "Norman",           // Approximately 20 miles south of Oklahoma City, population: 130,046
        "Broken Arrow",     // Approximately 15 miles southeast of Tulsa, population: 119,194
        "Edmond",           // Approximately 15 miles north of Oklahoma City, population: 98,103
        "Lawton",           // Approximately 90 miles southwest of Oklahoma City, population: 90,517
        "Moore",            // Approximately 10 miles south of Oklahoma City, population: 63,503
        "Midwest City",     // Approximately 10 miles east of Oklahoma City, population: 58,466
        "Enid",             // Approximately 70 miles north of Oklahoma City, population: 51,149
        "Stillwater",       // Approximately 65 miles northeast of Oklahoma City, population: 47,885
        "Owasso",           // Approximately 15 miles north of Tulsa, population: 38,468
        "Bartlesville",     // Approximately 45 miles north of Tulsa, population: 37,289
        "Muskogee",         // Approximately 50 miles southeast of Tulsa, population: 36,867
        "Shawnee",          // Approximately 40 miles east of Oklahoma City, population: 31,290
        "Bixby",            // Approximately 20 miles south of Tulsa, population: 28,801
        "Jenks",            // Approximately 12 miles south of Tulsa, population: 26,125
        "Ardmore",          // Approximately 100 miles south of Oklahoma City, population: 24,787
        "Ponca City",       // Approximately 90 miles north of Oklahoma City, population: 24,309
        "Yukon",            // Approximately 15 miles west of Oklahoma City, population: 23,763
        "Duncan",           // Approximately 80 miles southwest of Oklahoma City, population: 22,576
        "Sapulpa",          // Approximately 15 miles southwest of Tulsa, population: 21,981
        "Del City",         // Approximately 5 miles east of Oklahoma City, population: 21,828
        "Bethany",          // Approximately 10 miles west of Oklahoma City, population: 20,708
        "Mustang",          // Approximately 20 miles southwest of Oklahoma City, population: 20,092
        "Sand Springs",     // Approximately 10 miles west of Tulsa, population: 19,940
        "Claremore",        // Approximately 25 miles northeast of Tulsa, population: 19,182
        "Durant",           // Approximately 150 miles southeast of Oklahoma City, population: 18,703
        "Altus",            // Approximately 140 miles southwest of Oklahoma City, population: 18,677
        "McAlester",        // Approximately 130 miles southeast of Oklahoma City, population: 18,269
        "El Reno",          // Approximately 25 miles west of Oklahoma City, population: 17,183
        "Ada",              // Approximately 85 miles southeast of Oklahoma City, population: 16,739
        "Tahlequah",        // Approximately 70 miles east of Tulsa, population: 16,174
        "Chickasha",        // Approximately 40 miles southwest of Oklahoma City, population: 15,545
        "Glenpool",         // Approximately 15 miles south of Tulsa, population: 13,736
        "Miami",            // Approximately 90 miles northeast of Tulsa, population: 12,866
        "Guymon",           // Approximately 240 miles northwest of Oklahoma City, population: 12,836
        "Choctaw",          // Approximately 15 miles east of Oklahoma City, population: 12,218
        "Woodward",         // Approximately 140 miles northwest of Oklahoma City, population: 12,121
        "Weatherford",      // Approximately 70 miles west of Oklahoma City, population: 12,070
        "Elk City",         // Approximately 110 miles west of Oklahoma City, population: 11,725
        "Newcastle",        // Approximately 20 miles south of Oklahoma City, population: 11,207
        "Okmulgee",         // Approximately 40 miles south of Tulsa, population: 11,189
        "Guthrie",          // Approximately 30 miles north of Oklahoma City, population: 10,808
        "Warr Acres",       // Approximately 10 miles northwest of Oklahoma City, population: 10,451
            ]
  },
  {
    "name": "Texas",
    "abbreviation": "TX",
    "cities": [
        "Houston",          // Major city, population: 2,319,119
        "San Antonio",      // Major city, population: 1,495,295
        "Dallas",           // Major city, population: 1,302,868
        "Austin",           // Major city, population: 979,882
        "Fort Worth",       // Major city, population: 978,468
        "El Paso",          // Major city, population: 678,815
        "Arlington",        // Approximately 20 miles west of Dallas, population: 400,316
        "Corpus Christi",   // Approximately 210 miles south of San Antonio, population: 327,423
        "Plano",            // Approximately 20 miles north of Dallas, population: 285,537
        "Laredo",           // Approximately 150 miles south of San Antonio, population: 261,639
        "Lubbock",          // Approximately 350 miles northwest of Dallas, population: 257,141
        "Garland",          // Approximately 15 miles northeast of Dallas, population: 246,018
        "Irving",           // Approximately 10 miles west of Dallas, population: 239,798
        "Frisco",           // Approximately 25 miles north of Dallas, population: 200,509
        "McKinney",         // Approximately 30 miles north of Dallas, population: 199,177
        "Amarillo",         // Approximately 365 miles northwest of Dallas, population: 199,371
        "Grand Prairie",    // Approximately 15 miles west of Dallas, population: 196,100
        "Brownsville",      // Approximately 275 miles south of San Antonio, population: 187,831
        "Killeen",          // Approximately 70 miles north of Austin, population: 153,095
        "Pasadena",         // Approximately 15 miles southeast of Houston, population: 152,281
        "Mesquite",         // Approximately 15 miles east of Dallas, population: 150,108
        "McAllen",          // Approximately 230 miles south of San Antonio, population: 145,482
        "Denton",           // Approximately 40 miles northwest of Dallas, population: 139,869
        "Midland",          // Approximately 330 miles west of Dallas, population: 138,549
        "Waco",             // Approximately 100 miles south of Dallas, population: 137,779
        "Carrollton",       // Approximately 20 miles north of Dallas, population: 133,434
        "Round Rock",       // Approximately 20 miles north of Austin, population: 128,739
        "Abilene",          // Approximately 180 miles west of Dallas, population: 125,182
        "Pearland",         // Approximately 20 miles south of Houston, population: 125,828
        "Richardson",       // Approximately 15 miles north of Dallas, population: 121,323
        "Odessa",           // Approximately 350 miles west of Dallas, population: 123,334
        "College Station",  // Approximately 100 miles northwest of Houston, population: 120,019
        "Lewisville",       // Approximately 25 miles northwest of Dallas, population: 111,822
        "Tyler",            // Approximately 100 miles east of Dallas, population: 107,441
        "League City",      // Approximately 25 miles southeast of Houston, population: 106,244
        "Allen",            // Approximately 25 miles north of Dallas, population: 104,636
        "Sugar Land",       // Approximately 20 miles southwest of Houston, population: 102,287
        "Edinburg",         // Approximately 230 miles south of San Antonio, population: 101,170
        "Mission",          // Approximately 230 miles south of San Antonio, population: 100,809
        "Longview",         // Approximately 125 miles east of Dallas, population: 81,647
        "Bryan",            // Approximately 100 miles northwest of Houston, population: 86,276
        "Pharr",            // Approximately 230 miles south of San Antonio, population: 79,112
        "Baytown",          // Approximately 25 miles east of Houston, population: 77,192
        "Missouri City",    // Approximately 20 miles southwest of Houston, population: 74,139
        "Temple",           // Approximately 70 miles north of Austin, population: 78,439
        "Flower Mound",     // Approximately 25 miles northwest of Dallas, population: 79,135
        "New Braunfels",    // Approximately 30 miles northeast of San Antonio, population: 90,209
        "Cedar Park",       // Approximately 20 miles northwest of Austin, population: 77,595
        "Conroe",           // Approximately 40 miles north of Houston, population: 87,654
        "Victoria",         // Approximately 125 miles southeast of San Antonio, population: 67,106
        "Harlingen",        // Approximately 275 miles south of San Antonio, population: 65,022
        "Mansfield",        // Approximately 20 miles southwest of Dallas, population: 73,550
        "Georgetown",       // Approximately 25 miles north of Austin, population: 79,604
        "San Angelo",       // Approximately 210 miles northwest of San Antonio, population: 101,612
        "Rowlett",          // Approximately 20 miles northeast of Dallas, population: 66,285
        "Port Arthur",      // Approximately 90 miles east of Houston, population: 55,109
        "Euless",           // Approximately 20 miles west of Dallas, population: 61,032
        "DeSoto",           // Approximately 15 miles south of Dallas, population: 56,831
        "Grapevine",        // Approximately 20 miles northwest of Dallas, population: 54,514
        "Galveston",        // Approximately 50 miles southeast of Houston, population: 50,497
        "Wylie",            // Approximately 30 miles northeast of Dallas, population: 53,067
        "Pflugerville",     // Approximately 15 miles north of Austin, population: 65,380
        "Cedar Hill",       // Approximately 20 miles southwest of Dallas, population: 48,463
        "Texarkana",        // Approximately 180 miles northeast of Dallas, population: 37,280
        "Keller",           // Approximately 20 miles north of Fort Worth, population: 47,213
        "Haltom City",      // Approximately 5 miles northeast of Fort Worth, population: 44,206
            ]
  },

  // Northeast States
  {
    name: "Maine",
    abbreviation: "ME",
    cities: ["Portland", "Lewiston", "Bangor", "South Portland", "Auburn"]
  },
  {
    name: "New Hampshire",
    abbreviation: "NH",
    cities: ["Manchester", "Nashua", "Concord", "Dover", "Rochester"]
  },
  {
    name: "Vermont",
    abbreviation: "VT",
    cities: ["Burlington", "South Burlington", "Rutland", "Barre", "Montpelier"]
  },
  {
    name: "Massachusetts",
    abbreviation: "MA",
    cities: ["Boston", "Worcester", "Springfield", "Cambridge", "Lowell"]
  },
  {
    name: "Rhode Island",
    abbreviation: "RI",
    cities: ["Providence", "Warwick", "Cranston", "Pawtucket", "East Providence"]
  },
  {
    name: "Connecticut",
    abbreviation: "CT",
    cities: ["Bridgeport", "New Haven", "Hartford", "Stamford", "Waterbury"]
  },
  {
    name: "New York",
    abbreviation: "NY",
    cities: ["New York City", "Buffalo", "Rochester", "Syracuse", "Albany"]
  },
  {
    name: "New Jersey",
    abbreviation: "NJ",
    cities: ["Newark", "Jersey City", "Paterson", "Elizabeth", "Edison"]
  },
  {
    name: "Pennsylvania",
    abbreviation: "PA",
    cities: ["Philadelphia", "Pittsburgh", "Allentown", "Erie", "Reading"]
  },

  // Mid-Atlantic/Southeast States
  {
    name: "Delaware",
    abbreviation: "DE",
    cities: ["Wilmington", "Dover", "Newark", "Middletown", "Smyrna"]
  },
  {
    name: "Maryland",
    abbreviation: "MD",
    cities: ["Baltimore", "Columbia", "Germantown", "Silver Spring", "Waldorf"]
  },
  {
    name: "Virginia",
    abbreviation: "VA",
    cities: ["Virginia Beach", "Norfolk", "Chesapeake", "Richmond", "Newport News"]
  },
  {
    name: "West Virginia",
    abbreviation: "WV",
    cities: ["Charleston", "Huntington", "Morgantown", "Parkersburg", "Wheeling"]
  },
  {
    name: "North Carolina",
    abbreviation: "NC",
    cities: ["Charlotte", "Raleigh", "Greensboro", "Durham", "Winston-Salem"]
  },
  {
    name: "South Carolina",
    abbreviation: "SC",
    cities: ["Columbia", "Charleston", "North Charleston", "Mount Pleasant", "Rock Hill"]
  },
  {
    name: "Georgia",
    abbreviation: "GA",
    cities: ["Atlanta", "Augusta", "Columbus", "Macon", "Savannah"]
  },
  {
    name: "Florida",
    abbreviation: "FL",
    cities: ["Jacksonville", "Miami", "Tampa", "Orlando", "St. Petersburg"]
  },
  {
    "name": "Minnesota",
    "abbreviation": "MN",
    "cities": [
        "Minneapolis",        // Major city, population: 425,115
        "St. Paul",           // Major city, population: 303,820
        "Rochester",          // Major city, population: 122,413
        "Duluth",             // Major city, population: 87,680
        "Bloomington",        // Approximately 10 miles south of Minneapolis, population: 87,398
        "Brooklyn Park",      // Approximately 10 miles northwest of Minneapolis, population: 82,017
        "Woodbury",           // Approximately 10 miles east of St. Paul, population: 79,538
        "Plymouth",           // Approximately 10 miles west of Minneapolis, population: 77,648
        "Lakeville",          // Approximately 20 miles south of Minneapolis, population: 76,243
        "Blaine",             // Approximately 15 miles north of Minneapolis, population: 73,774
        "Maple Grove",        // Approximately 15 miles northwest of Minneapolis, population: 71,288
        "St. Cloud",          // Approximately 65 miles northwest of Minneapolis, population: 71,013
        "Eagan",              // Approximately 15 miles south of St. Paul, population: 67,396
        "Burnsville",         // Approximately 15 miles south of Minneapolis, population: 64,772
        "Coon Rapids",        // Approximately 15 miles north of Minneapolis, population: 63,377
        "Eden Prairie",       // Approximately 15 miles southwest of Minneapolis, population: 62,166
        "Apple Valley",       // Approximately 20 miles south of Minneapolis, population: 55,336
        "Edina",              // Approximately 10 miles southwest of Minneapolis, population: 53,348
        "Minnetonka",         // Approximately 10 miles west of Minneapolis, population: 52,463
        "St. Louis Park",     // Approximately 5 miles west of Minneapolis, population: 49,697
        "Shakopee",           // Approximately 20 miles southwest of Minneapolis, population: 47,158
        "Mankato",            // Approximately 80 miles southwest of Minneapolis, population: 45,742
        "Moorhead",           // Approximately 230 miles northwest of Minneapolis, population: 45,202
        "Cottage Grove",      // Approximately 10 miles southeast of St. Paul, population: 42,056
        "Maplewood",          // Approximately 5 miles north of St. Paul, population: 39,958
        "Richfield",          // Approximately 5 miles south of Minneapolis, population: 36,445
        "Inver Grove Heights", // Approximately 10 miles southeast of St. Paul, population: 36,114
        "Roseville",          // Approximately 5 miles north of St. Paul, population: 35,451
        "Andover",            // Approximately 20 miles north of Minneapolis, population: 33,089
        "Savage",             // Approximately 20 miles southwest of Minneapolis, population: 32,999
        "Brooklyn Center",    // Approximately 10 miles northwest of Minneapolis, population: 31,688
        "Fridley",            // Approximately 10 miles north of Minneapolis, population: 30,156
        "Chaska",             // Approximately 25 miles southwest of Minneapolis, population: 29,034
        "Ramsey",             // Approximately 25 miles northwest of Minneapolis, population: 28,560
        "Oakdale",            // Approximately 10 miles east of St. Paul, population: 28,226
        "Prior Lake",         // Approximately 25 miles southwest of Minneapolis, population: 28,027
        "Rosemount",          // Approximately 20 miles south of St. Paul, population: 27,590
        "Elk River",          // Approximately 35 miles northwest of Minneapolis, population: 27,342
        "Owatonna",           // Approximately 65 miles south of Minneapolis, population: 26,534
        "Shoreview",          // Approximately 10 miles north of St. Paul, population: 26,374
        "Austin",             // Approximately 100 miles south of Minneapolis, population: 26,171
        "Winona",             // Approximately 115 miles southeast of Minneapolis, population: 26,029
        "Chanhassen",         // Approximately 20 miles southwest of Minneapolis, population: 25,937
        "Faribault",          // Approximately 50 miles south of Minneapolis, population: 24,642
        "Farmington",         // Approximately 25 miles south of Minneapolis, population: 23,909
        "White Bear Lake",    // Approximately 15 miles northeast of St. Paul, population: 23,363
        "Otsego",             // Approximately 30 miles northwest of Minneapolis, population: 23,241
        "Champlin",           // Approximately 20 miles northwest of Minneapolis, population: 22,856
        "Lino Lakes",         // Approximately 15 miles north of St. Paul, population: 22,376
        "Columbia Heights",   // Approximately 5 miles north of Minneapolis, population: 22,278
        "New Brighton",       // Approximately 10 miles north of Minneapolis, population: 22,228
        "Hastings",           // Approximately 25 miles southeast of St. Paul, population: 22,121
        "Crystal",            // Approximately 10 miles northwest of Minneapolis, population: 21,906
        "West St. Paul",      // Approximately 5 miles south of St. Paul, population: 21,863
        "Robbinsdale",        // Approximately 5 miles northwest of Minneapolis, population: 21,760
        "Forest Lake",        // Approximately 25 miles northeast of St. Paul, population: 21,611
        "New Hope",           // Approximately 10 miles northwest of Minneapolis, population: 21,373
        "Stillwater",         // Approximately 20 miles east of St. Paul, population: 21,197
        "South St. Paul",     // Approximately 5 miles south of St. Paul, population: 20,759
        "Waconia",            // Approximately 30 miles southwest of Minneapolis, population: 20,697
        "Northfield",         // Approximately 40 miles south of Minneapolis, population: 20,454
        "Coon Rapids",        // Approximately 15 miles north of Minneapolis, population: 63,377
        "Eden Prairie",       // Approximately 15 miles southwest of Minneapolis, population: 62,166
        "Apple Valley",       // Approximately 20 miles south of Minneapolis, population: 55,336
            ]
  },
  {
    name: "Wisconsin",
    abbreviation: "WI",
    cities: ["Milwaukee", "Madison", "Green Bay", "Kenosha", "Racine"]
  },
  {
    "name": "Iowa",
    "abbreviation": "IA",
    "cities": [
        "Des Moines",        // Major city, population: 210,381
        "Cedar Rapids",      // Major city, population: 135,958
        "Davenport",         // Major city, population: 100,354
        "Sioux City",        // Major city, population: 85,727
        "Iowa City",         // Major city, population: 75,678
        "Ankeny",            // Approximately 10 miles north of Des Moines, population: 74,458
        "West Des Moines",   // Approximately 5 miles west of Des Moines, population: 72,205
        "Waterloo",          // Approximately 55 miles northwest of Cedar Rapids, population: 66,606
        "Ames",              // Approximately 30 miles north of Des Moines, population: 65,686
        "Council Bluffs",    // Approximately 130 miles west of Des Moines, population: 62,399
        "Dubuque",           // Approximately 80 miles northeast of Cedar Rapids, population: 59,667
        "Urbandale",         // Approximately 10 miles northwest of Des Moines, population: 45,565
        "Marion",            // Approximately 5 miles northeast of Cedar Rapids, population: 41,613
        "Bettendorf",        // Approximately 5 miles east of Davenport, population: 39,107
        "Mason City",        // Approximately 120 miles north of Des Moines, population: 27,244
        "Marshalltown",      // Approximately 50 miles northeast of Des Moines, population: 27,570
        "Clinton",           // Approximately 40 miles northeast of Davenport, population: 24,425
        "Burlington",        // Approximately 80 miles south of Davenport, population: 23,931
        "Ottumwa",           // Approximately 85 miles southeast of Des Moines, population: 25,451
        "Fort Dodge",        // Approximately 90 miles northwest of Des Moines, population: 24,728
        "Muscatine",         // Approximately 30 miles southwest of Davenport, population: 23,713
        "Coralville",        // Approximately 3 miles northwest of Iowa City, population: 22,359
        "North Liberty",     // Approximately 10 miles north of Iowa City, population: 20,622
        "Altoona",           // Approximately 10 miles east of Des Moines, population: 19,638
        "Clive",             // Approximately 10 miles west of Des Moines, population: 18,646
        "Newton",            // Approximately 35 miles east of Des Moines, population: 15,772
        "Indianola",         // Approximately 20 miles south of Des Moines, population: 15,677
        "Grimes",            // Approximately 15 miles northwest of Des Moines, population: 15,587
        "Norwalk",           // Approximately 10 miles south of Des Moines, population: 12,952
        "Boone",             // Approximately 50 miles north of Des Moines, population: 12,447
        "Oskaloosa",         // Approximately 60 miles southeast of Des Moines, population: 11,593
        "Spencer",           // Approximately 180 miles northwest of Des Moines, population: 11,273
        "Storm Lake",        // Approximately 150 miles northwest of Des Moines, population: 11,238
        "Le Mars",           // Approximately 25 miles north of Sioux City, population: 10,580
        "Pella",             // Approximately 40 miles southeast of Des Moines, population: 10,382
        "Waverly",           // Approximately 90 miles northeast of Des Moines, population: 10,351
        "Fort Madison",      // Approximately 150 miles southeast of Des Moines, population: 10,265
        "Carroll",           // Approximately 90 miles northwest of Des Moines, population: 10,253
        "Pleasant Hill",     // Approximately 5 miles east of Des Moines, population: 10,170
            ]
  },
  {
    name: "Missouri",
    abbreviation: "MO",
    cities: ["Kansas City", "St. Louis", "Springfield", "Columbia", "Independence"]
  },
  {
    name: "Arkansas",
    abbreviation: "AR",
    cities: ["Little Rock", "Fort Smith", "Fayetteville", "Springdale", "Jonesboro"]
  },
  {
    name: "Louisiana",
    abbreviation: "LA",
    cities: ["New Orleans", "Baton Rouge", "Shreveport", "Lafayette", "Lake Charles"]
  },
  {
    name: "Mississippi",
    abbreviation: "MS",
    cities: ["Jackson", "Gulfport", "Southaven", "Biloxi", "Hattiesburg"]
  },
  {
    name: "Illinois",
    abbreviation: "IL",
    cities: ["Chicago", "Aurora", "Naperville", "Joliet", "Rockford"]
  },
  {
    name: "Indiana",
    abbreviation: "IN",
    cities: ["Indianapolis", "Fort Wayne", "Evansville", "South Bend", "Carmel"]
  },
  {
    name: "Ohio",
    abbreviation: "OH",
    cities: ["Columbus", "Cleveland", "Cincinnati", "Toledo", "Akron"]
  }
];

const defaultBenefits = [
  "Starting Rate of $0.57 – $0.60/mile Based on Experience",
  "Paid Weekly",
  "Safety and Fuel Bonus Programs",
  "99% No Touch Freight",
  "Major Medical, Dental, and Vision",
  "Latest Model Equipment",
  "Direct Deposit",
  "Pet Friendly Policy",
  "Vacation Pay"
];

const leaseOperatorBenefits = [
  "73% of Line Haul",
  "100% of Fuel Surcharge",
  "EFS Fuel Card Discounts",
  "Affordable Payments",
  "New Equipment",
  "Extended Warranty",
  "Flexible Home Time",
  "No Trailer Rental",
  "Weekly Settlements"
];

export const generateJobListings = () => {
  const listings: Record<string, any[]> = {};

  states.forEach(state => {
    // Only generate listings for active hiring states
    if (activeHiringStates.includes(state.abbreviation)) {
      listings[state.abbreviation] = state.cities.flatMap(city => [
        {
    title: 'Company Driver',
    company: 'Giltner Transportation',
    location: `${city}, ${state.abbreviation}`,
    pay: '$0.57 – $0.60/mile',
    postedDate: '2 days ago',
    description: `Join our expanding team of over-the-road (OTR) professional drivers serving the ${city}, ${state.abbreviation} area. Based in Jerome, Idaho, Giltner Transportation offers optimized lanes and consistent freight, ensuring you receive the best home time and competitive pay in ${state.name}. We provide a rental car for your journey to Jerome for orientation, covering gas and hotel expenses. After orientation, you'll embark on the road with your assigned semi-truck, with our dispatch team coordinating to meet your home time needs. For more information, contact our recruiting team at (208) 324-4486.`,
    benefits: defaultBenefits
},
        {
          title: 'Lease Operator',
          company: 'Giltner Transportation',
          location: `${city}, ${state.abbreviation}`,
          pay: '73% of Line Haul',
          postedDate: '2 days ago',
          description: `Become a lease operator with us in ${city}. Run your own business with our support and enjoy the freedom of being your own boss while having the stability of working with an established carrier in ${state.name}.`,
          benefits: leaseOperatorBenefits
        }
      ]);
    } else {
      // For non-hiring states, return empty array
      listings[state.abbreviation] = [];
    }
  });

  return listings;
};

// Helper function to check if a state is hiring
export const isStateHiring = (stateAbbr: string): boolean => {
  return activeHiringStates.includes(stateAbbr.toUpperCase());
};

export const jobListings = generateJobListings();
