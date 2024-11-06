import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Calendar, DollarSign, Truck } from 'lucide-react';
import { states, jobListings } from '../data/states';
import { Helmet } from 'react-helmet-async';

export default function StatePage() {
  const { stateId } = useParams();
  const state = states.find(s => s.abbreviation.toLowerCase() === stateId?.toLowerCase());
  const stateJobs = jobListings[stateId?.toUpperCase() || ''] || [];

  if (!state) {
    return <div>State not found</div>;
  }

  const cityList = state.cities.join(', ');
  const metaDescription = `Find CDL truck driving jobs in ${state.name}. Browse local and OTR positions in ${cityList}. Great pay, benefits, and home time available. Apply today!`;
  const metaKeywords = `CDL jobs ${state.name}, truck driving jobs ${cityList}, local truck driver jobs ${state.name}, OTR jobs ${state.name}, trucking jobs ${state.cities[0]}`;

  return (
    <>
      <Helmet>
        <title>CDL Truck Driving Jobs in {state.name} | Local & OTR Positions</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
        <link rel="canonical" href={`https://yourcdljobs.com/state/${stateId?.toLowerCase()}`} />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-blue-900 mb-2">
            CDL Truck Driving Jobs in {state.name}
          </h1>
          <p className="text-xl text-gray-600">
            {stateJobs.length} active job listings in {cityList}
          </p>
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {state.cities.map((city) => (
            <Link
              key={city}
              to={`/state/${stateId?.toLowerCase()}/${city.toLowerCase().replace(/\s+/g, '-')}`}
              className="bg-white rounded-lg p-6 hover:shadow-md transition-shadow border border-gray-200"
            >
              <h2 className="text-xl font-semibold text-[#2557a7] mb-1">
                {city}
              </h2>
              <p className="text-[#767676] text-sm">
                View local positions
              </p>
            </Link>
          ))}
        </div>

        {/* Job Listings */}
        <div className="space-y-6">
          {stateJobs.map((job, index) => (
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