import React from 'react';

const Product = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen"
      style={{ backgroundImage: "url('/images/team/milkyway.jpg')" }}
    >
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Products
            </h1>
            <p className="text-lg text-white">
              Designed for space, built for impact. Our modular platforms serve government, research, and commercial missions.
            </p>
          </div>

          {/* Product Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Neuman CubeSat */}
            <div className="bg-white bg-opacity-95 border border-gray-200 rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Neuman 3U Spacecraft </h2>
              <p className="text-gray-600 mb-4">
                 Spacecraft-as-a-Service mission-ready for planetary science, asteroid defense, deep-space operations, and autonomous infrastructure.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Radiation-hardened electronics</li>
                <li>Autonomous AI </li>
                <li>Full Spectrum Scientific Payload</li>
                <li>Solar + battery hybrid power</li>
                <li>Furlable Solar Sail in development</li>
              </ul>
            </div>

            {/* Swarm Infrastructure */}
            <div className="bg-white bg-opacity-95 border border-gray-200 rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Space Weather Dew Line</h2>
              <p className="text-gray-600 mb-4">
                Tactical Space Weather Intelligence TSWI - Real-time, high-resolution space weather data from Lagrange point spacecraft, supporting military and commercial operations.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li> Solar events monitoring</li>
                <li>Distributed sensing and data fusion</li>
                <li>Real-time space weather alerts</li>
                <li>U.S. Space Force & NASA support</li>
              </ul>
            </div>

            {/* Ground Interface */}
            <div className="bg-white bg-opacity-95 border border-gray-200 rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2"> Asteroid Detection Grid</h2>
              <p className="text-gray-600 mb-4">
               Lagrange-Based Asteroid Detection Grid LAD-G Neuman 3U Spacecraft at Earth, Venus, Mars, and Moon  L4/L5 points form an orbital net for real-time NEO and asteroid threat detection.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Strategic optimal vantage</li>
                <li>Synchronized optical/IR imaging</li>
                <li>Track Sunward Earthbound NEOs</li>
                <li>AI-driven data fusion</li>
              </ul>
            </div>

            {/* Licensing / Services */}
            <div className="bg-white bg-opacity-95 border border-gray-200 rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Navigation Relay</h2>
              <p className="text-gray-600 mb-4">
                Lagrange Point Communications & Navigation Relay LPCNR Neuman Spacecraft at Lagrange points provide deep-space communication and navigation support for spacecraft and lunar missions.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>RF/optical reliable data relay</li>
                <li>Position triangulation navigation</li>
                <li>Serving NASA, DoD, and U.S. commercial spaceflight</li>
              </ul>
            </div>

            {/* Deep Space Communications */}
            <div className="bg-white bg-opacity-95 border border-gray-200 rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Academic Subscriptions</h2>
              <p className="text-gray-600 mb-4">
                High-resolution space data access from Lagrange point Neumans, tailored for university research and academic institutions.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Real-time NEO and space weather</li>
                <li>Secure, encrypted data access</li>
                <li>Support university STEM programs</li>
                <li>Interplanetary relay compatibility</li>
              </ul>
            </div>

            {/* Mission Planning AI */}
            <div className="bg-white bg-opacity-95 border border-gray-200 rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Mineral Subscriptions</h2>
              <p className="text-gray-600 mb-4">
                Asteroid Prospecting Subscriptions Real-time prospecting data for rare earths and strategic minerals from Neumans in the Main Asteroid Belt and Jupiter's Trojans.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>High-res mineral mapping</li>
                <li>AI spectral rare earth detection</li>
                <li>Post-quantum secure encryption</li>
                <li>Serving NASA, DoD, and U.S. aerospace industries</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;