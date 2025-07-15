import React from 'react';

const Product = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Products
          </h1>
          <p className="text-lg text-gray-600">
            Designed for space, built for impact. Our modular platforms serve government, research, and commercial missions.
          </p>
        </div>

        {/* Product Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Neuman CubeSat */}
          <div className="border border-gray-200 rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Neuman-Class CubeSat</h2>
            <p className="text-gray-600 mb-4">
              Our flagship 3U CubeSat platform optimized for interplanetary exploration, asteroid detection, and scientific research.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Radiation-hardened electronics</li>
              <li>AI onboard autonomy</li>
              <li>Plug-and-play payload integration</li>
              <li>Solar + battery hybrid power</li>
            </ul>
          </div>

          {/* Swarm Infrastructure */}
          <div className="border border-gray-200 rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Swarm CubeSat Constellations</h2>
            <p className="text-gray-600 mb-4">
              Our CubeSat swarms are engineered for scalable asteroid detection and collaborative mission coordination at planetary scale.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Autonomous formation flying</li>
              <li>Distributed sensing and data fusion</li>
              <li>Self-healing mesh communications</li>
            </ul>
          </div>

          {/* Ground Interface */}
          <div className="border border-gray-200 rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Ground Operations Suite</h2>
            <p className="text-gray-600 mb-4">
              Our command and data handling software integrates with existing ground systems, offering real-time control and insight.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Cloud-native dashboard</li>
              <li>Encrypted telemetry streams</li>
              <li>Mission replay & analytics</li>
            </ul>
          </div>

          {/* Licensing / Services */}
          <div className="border border-gray-200 rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">OEM Licensing & Customization</h2>
            <p className="text-gray-600 mb-4">
              We license our CubeSat designs and mission software for universities, startups, and space agencies.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>White-label CubeSat kits</li>
              <li>Custom mission design support</li>
              <li>Training and documentation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
