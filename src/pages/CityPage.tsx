import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Calendar, DollarSign, Truck, ArrowLeft } from 'lucide-react';
import { states, jobListings } from '../data/states';
import { Helmet } from 'react-helmet-async';

export default function CityPage() {
  const { stateId, citySlug } = useParams();
  const state = states.find(s => s.abbreviation.toLowerCase() === stateId?.toLowerCase());
  const city = state?.cities.find(c => c.toLowerCase().replace(/\s+/g, '-') === citySlug);
  
  if (!state || !city) {
    return <div>Location not found</div>;
  }

  const stateJobs = jobListings[stateId?.toUpperCase() || ''] || [];
  const cityJobs = stateJobs.filter(job => job.location.startsWith(city));

  const metaTitle = `CDL Truck Driving Jobs in ${city}, ${state.abbreviation} | Local, Regional & OTR Positions`;
  const metaDescription = `Explore top CDL truck driving jobs in ${city}, ${state.abbreviation}. Apply now for local, regional, and OTR positions with leading carriers offering competitive pay, benefits, and home time.`;
  const metaKeywords = `CDL jobs ${city}, truck driving jobs ${city} ${state.abbreviation}, local truck driver jobs ${city}, regional truck driving jobs ${city}, OTR jobs ${city}, trucking jobs ${city} ${state.name}`;

  // Generate Company Driver Schema
  const companyDriverSchema = {
    "@context": "https://schema.org/",
    "@type": "JobPosting",
    "title": "OTR Company Driver",
    "description": `<p>Join our expanding team of over-the-road (OTR) professional drivers serving the ${city}, ${state.abbreviation} area. Based in Jerome, Idaho, Giltner Transportation offers optimized lanes and consistent freight, ensuring you receive the best home time and competitive pay.</p>
    <p><strong>Requirements:</strong></p>
    <ul>
      <li>Valid Class A CDL</li>
      <li>Minimum 18 months of OTR tractor-trailer experience</li>
    </ul>
    <p><strong>Benefits Include:</strong></p>
    <ul>
      <li>Starting Rate of $0.57 – $0.60/mile Based on Experience</li>
      <li>Paid Weekly</li>
      <li>Mileage, Safety, and Fuel Bonus Programs</li>
      <li>99% No Touch Freight – Refrigerated</li>
      <li>Major Medical, Dental, and Vision after 60 Days</li>
      <li>Latest Model Equipment - Freightliner Cascadia and Volvo 860</li>
      <li>Direct Deposit</li>
      <li>Pet Friendly Policy</li>
      <li>Vacation Pay after 1 Year</li>
    </ul>`,
    "identifier": {
      "@type": "PropertyValue",
      "name": "Giltner Transportation",
      "value": "CD-OTR-" + city.replace(/\s+/g, '') + state.abbreviation
    },
    "datePosted": "2024-11-09",
    "validThrough": "2025-11-09T00:00",
    "employmentType": "FULL_TIME",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "Giltner Transportation",
      "sameAs": "https://www.giltner.com",
      "logo": "https://cdljobsbystate.com/logo.webp"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "980 W Main St B",
        "addressLocality": "Jerome",
        "addressRegion": "ID",
        "postalCode": "83338",
        "addressCountry": "US"
      }
    },
    "baseSalary": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": {
        "@type": "QuantitativeValue",
        "minValue": 0.57,
        "maxValue": 0.60,
        "unitText": "MILE"
      }
    },
    "experienceRequirements": {
      "@type": "OccupationalExperienceRequirements",
      "monthsOfExperience": "18"
    }
  };

  // Generate Lease Operator Schema
  const leaseOperatorSchema = {
    "@context": "https://schema.org/",
    "@type": "JobPosting",
    "title": "Lease Operator",
    "description": `<p>Elevate your trucking career by becoming a Lease Operator with Giltner Transportation in ${city}, ${state.abbreviation}. Operate your own business with the robust support of a reputable carrier, enjoying the autonomy of being your own boss.</p>
    <p><strong>Requirements:</strong></p>
    <ul>
      <li>Valid Class A CDL</li>
      <li>Minimum 18 months of OTR tractor-trailer experience</li>
    </ul>
    <p><strong>Program Benefits:</strong></p>
    <ul>
      <li>73% of Line Haul</li>
      <li>100% of Fuel Surcharge</li>
      <li>EFS Fuel Card Discounts</li>
      <li>Affordable Payments</li>
      <li>New Equipment</li>
      <li>Extended Warranty</li>
      <li>Flexible Home Time</li>
      <li>No Trailer Rental</li>
    </ul>
    <p><strong>Owner Operator Requirements:</strong></p>
    <ul>
      <li>Equipment must be 3 years old or newer</li>
      <li>Must be California Carbon-Compliant</li>
      <li>Tractor must weigh less than 17,500 lbs (dry weight, before fuel)</li>
      <li>Tractor must be able to haul 44,000 lbs</li>
    </ul>`,
    "identifier": {
      "@type": "PropertyValue",
      "name": "Giltner Transportation",
      "value": "LO-OTR-" + city.replace(/\s+/g, '') + state.abbreviation
    },
    "datePosted": "2024-11-09",
    "validThrough": "2025-11-09T00:00",
    "employmentType": ["FULL_TIME", "CONTRACTOR"],
    "hiringOrganization": {
      "@type": "Organization",
      "name": "Giltner Transportation",
      "sameAs": "https://www.giltner.com",
      "logo": "https://cdljobsbystate.com/logo.webp"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "980 W Main St B",
        "addressLocality": "Jerome",
        "addressRegion": "ID",
        "postalCode": "83338",
        "addressCountry": "US"
      }
    },
    "experienceRequirements": {
      "@type": "OccupationalExperienceRequirements",
      "monthsOfExperience": "18"
    }
  };

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
        <link rel="canonical" href={`https://cdljobsbystate.com/state/${stateId?.toLowerCase()}/${citySlug}`} />
        <script type="application/ld+json">
          {JSON.stringify(companyDriverSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(leaseOperatorSchema)}
        </script>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link 
          to={`/state/${stateId?.toLowerCase()}`}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to {state.name}
        </Link>

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-blue-900 mb-2">
            CDL Truck Driving Jobs in {city}, {state.abbreviation}
          </h1>
          <p className="text-xl text-gray-600">
            {cityJobs.length} active job listings in {city}
          </p>
        </div>

        <div className="space-y-6">
          {cityJobs.map((job, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-blue-900 mb-2">{job.title}</h2>
                  <div className="flex flex-wrap gap-4 text-gray-600">
                    <div className="flex items-center">
                      <Truck className="h-5 w-5 mr-2" />
                      {job.company}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 mr-2" />
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="h-5 w-5 mr-2" />
                      {job.pay}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 mr-2" />
                      Posted {job.postedDate}
                    </div>
                  </div>
                </div>
                <a
                  href="https://intelliapp.driverapponline.com/c/giltner?apply-now-page&uri_b=ia_giltner_862754769"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 md:mt-0 inline-block bg-yellow-500 text-blue-900 font-semibold px-6 py-3 rounded-lg hover:bg-yellow-400 transition-colors"
                >
                  Apply Now
                </a>
              </div>

              <div className="prose max-w-none">
                <h3 className="text-lg font-semibold mb-2">Job Description</h3>
                <p className="text-gray-600 mb-4">{job.description}</p>

                <h3 className="text-lg font-semibold mb-2">Benefits</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {job.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <span className="mr-2">•</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
