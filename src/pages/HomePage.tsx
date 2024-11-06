import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { states } from '../data/states';

export default function HomePage() {
  const [searchTerm, setSearchTerm] = React.useState('');
  
  const filteredStates = states.filter(state =>
    state.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>CDL Jobs by State | Find Local Truck Driving Jobs Near You</title>
        <meta 
          name="description" 
          content="Browse CDL truck driving jobs across all US states. Find local and OTR positions with top carriers like Giltner. Great pay, benefits, and home time available."
        />
        <meta 
          name="keywords" 
          content="CDL jobs, truck driving jobs, local truck driver jobs, OTR jobs, company driver jobs, owner operator jobs"
        />
        <link rel="canonical" href="https://yourcdljobs.com" />
      </Helmet>
      <div className="min-h-screen bg-[#f3f2f1]">
        {/* Rest of the component remains the same */}
        {/* Hero Section */}
        <div className="bg-[#2557a7] text-white py-12 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl font-bold mb-6">
              Find CDL Jobs Near You
            </h1>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Search by state..."
                className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 text-lg shadow-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* States Grid */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredStates.map((state) => (
              <Link
                key={state.abbreviation}
                to={`/state/${state.abbreviation.toLowerCase()}`}
                className="bg-white rounded-lg p-6 hover:shadow-md transition-shadow border border-gray-200"
              >
                <h2 className="text-xl font-semibold text-[#2557a7] mb-1">
                  {state.name}
                </h2>
                <p className="text-[#767676] text-sm">
                  View available positions
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white border-t border-gray-200 mt-12 py-12 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Are you hiring CDL drivers?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Post your job listings and reach thousands of qualified drivers.
            </p>
            <Link
              to="/post-job"
              className="inline-block bg-[#2557a7] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#1f4d98] transition-colors text-lg"
            >
              Post a Job
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}