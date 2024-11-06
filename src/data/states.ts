interface State {
  name: string;
  abbreviation: string;
  cities: string[];
}

// Define actively hiring states
const activeHiringStates = [
  'WA', 'OR', 'WY', 'UT', 'AZ', 'CO', 'TX', 'OK', 
  'KS', 'NE', 'MN', 'IA', 'MO', 'AR', 'LA', 'MS', 
  'WI', 'IL', 'IN', 'DE'
];

export const states: State[] = [
  // Western States
  {
    name: "California",
    abbreviation: "CA",
    cities: ["Los Angeles", "San Francisco", "San Diego", "Sacramento", "San Jose"]
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
    name: "Washington",
    abbreviation: "WA",
    cities: ["Seattle", "Spokane", "Tacoma", "Vancouver", "Bellevue"]
  },
  {
    name: "Oregon",
    abbreviation: "OR",
    cities: ["Portland", "Eugene", "Salem", "Gresham", "Hillsboro"]
  },
  {
    name: "Idaho",
    abbreviation: "ID",
    cities: ["Boise", "Meridian", "Nampa", "Idaho Falls", "Pocatello"]
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
    name: "Wyoming",
    abbreviation: "WY",
    cities: ["Cheyenne", "Casper", "Laramie", "Gillette", "Rock Springs"]
  },
  {
    name: "Utah",
    abbreviation: "UT",
    cities: ["Salt Lake City", "West Valley City", "Provo", "West Jordan", "Orem"]
  },
  {
    name: "Colorado",
    abbreviation: "CO",
    cities: ["Denver", "Colorado Springs", "Aurora", "Fort Collins", "Lakewood"]
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
    name: "Arizona",
    abbreviation: "AZ",
    cities: ["Phoenix", "Tucson", "Mesa", "Chandler", "Glendale"]
  },
  {
    name: "Nebraska",
    abbreviation: "NE",
    cities: ["Omaha", "Lincoln", "Bellevue", "Grand Island", "Kearney"]
  },
  {
    name: "Kansas",
    abbreviation: "KS",
    cities: ["Wichita", "Overland Park", "Kansas City", "Olathe", "Topeka"]
  },
  {
    name: "Oklahoma",
    abbreviation: "OK",
    cities: ["Oklahoma City", "Tulsa", "Norman", "Broken Arrow", "Edmond"]
  },
  {
    name: "Texas",
    abbreviation: "TX",
    cities: ["Houston", "San Antonio", "Dallas", "Austin", "Fort Worth"]
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
    name: "Minnesota",
    abbreviation: "MN",
    cities: ["Minneapolis", "Saint Paul", "Rochester", "Bloomington", "Duluth"]
  },
  {
    name: "Wisconsin",
    abbreviation: "WI",
    cities: ["Milwaukee", "Madison", "Green Bay", "Kenosha", "Racine"]
  },
  {
    name: "Iowa",
    abbreviation: "IA",
    cities: ["Des Moines", "Cedar Rapids", "Davenport", "Sioux City", "Iowa City"]
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
          description: `Join our growing team of professional drivers in ${city}. We offer optimized lanes and consistent freight for the best home time and pay in ${state.name}.`,
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
