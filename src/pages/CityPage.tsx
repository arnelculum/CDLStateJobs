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

  const metaTitle = `CDL Truck Driving Jobs in ${city}, ${state.abbreviation} | Local & OTR Positions`;
  const metaDescription = `Find CDL truck driving jobs in ${city}, ${state.abbreviation}. Browse local and OTR positions with top carriers. Great pay, benefits, and home time available. Apply today!`;
  const metaKeywords = `CDL jobs ${city}, truck driving jobs ${city} ${state.abbreviation}, local truck driver jobs ${city}, OTR jobs ${city}, trucking jobs ${city} ${state.name}`;

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
        <link rel="canonical" href={`https://yourcdljobs.com/state/${stateId?.toLowerCase()}/${citySlug}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "JobPosting",
            "jobLocation": {
              "@type": "Place",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": city,
                "addressRegion": state.abbreviation,
                "addressCountry": "US"
              }
            },
            "industry": "Transportation",
            "employmentType": "FULL_TIME",
            "description": `CDL truck driving jobs in ${city}, ${state.abbreviation}`,
            "occupationalCategory": "Truck Driver"
          })}
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