import React from 'react';

const Team = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Team
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A diverse coalition of scientists, engineers, and visionaries working to extend humanity's reach into the solar system.
          </p>
        </div>

        {/* Leadership Section */}
            {/* CEO */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <img
                src="/images/team/tom.jpeg"
                alt="Tom Erickson"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-primary-600"
              />
              <h2 className="text-xl font-semibold text-gray-900 mb-1">Tom Erickson</h2>
              <p className="text-primary-600 font-medium">Founder & CEO</p>
              <p className="text-sm text-gray-600 mt-2">
                20+ years in public engagement, space entrepreneurship, and project management. Visionary behind Deep Space Dynamics.
              </p>
            </div>


            {/* CISO */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <img
                src="/images/team/michael.jpeg"
                alt="Michael Garner"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-primary-600"
              />
              <h2 className="text-xl font-semibold text-gray-900 mb-1">Michael Garner</h2>
              <p className="text-primary-600 font-medium">CISO</p>
              <p className="text-sm text-gray-600 mt-2">
                A Dynamic Senior IS executive and former Defense Information Systems Agency Cyber Security Analyst with 15+ years experience identifying threats to information asset integrity, availability, and confidentiality.
              </p>
            </div>

          {/* Fractional CSO */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-24 h-24 rounded-full bg-primary-200 mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-primary-600">AK</div>
            <h2 className="text-xl font-semibold text-gray-900 mb-1">David Carter</h2>
            <p className="text-primary-600 font-medium">Fractional CSO</p>
            <p className="text-sm text-gray-600 mt-2">
              Former launch ops at SpaceX and ESA. Brings scalable project execution and international collaboration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
