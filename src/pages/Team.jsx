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
        <div className="grid md:grid-cols-3 gap-10">
          {/* CEO */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-24 h-24 rounded-full bg-primary-200 mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-primary-600">TE</div>
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Tom Erickson</h2>
            <p className="text-primary-600 font-medium">Founder & CEO</p>
            <p className="text-sm text-gray-600 mt-2">
              20+ years in project management, space entrepreneurship, and public engagement. Visionary behind Deep Space Dynamics.
            </p>
          </div>

          {/* CTO */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-24 h-24 rounded-full bg-primary-200 mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-primary-600">SC</div>
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Dr. Sarah Chen</h2>
            <p className="text-primary-600 font-medium">Chief Technology Officer</p>
            <p className="text-sm text-gray-600 mt-2">
              Former NASA propulsion systems lead. Oversees innovation across CubeSat hardware, autonomy, and mission architecture.
            </p>
          </div>

          {/* Ops */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-24 h-24 rounded-full bg-primary-200 mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-primary-600">AK</div>
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Dr. Amara Kim</h2>
            <p className="text-primary-600 font-medium">Chief Operations Officer</p>
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
