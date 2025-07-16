import React from 'react';

const Technology = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen"
      style={{ backgroundImage: "url('/images/team/milkyway.jpg')" }}
    >
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Technology
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Cutting-edge systems powering space exploration, defense, and sustainability.
            </p>
          </div>

          {/* Feature Blocks */}
          <div className="grid md:grid-cols-2 gap-10">
            {/* Neuman CubeSat */}
            <div className="bg-white bg-opacity-95 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Neuman-Class Spacecraft</h2>
              <p className="text-gray-700 mb-2">
                A modular 3U Spacecraft designed for asteroid detection, interplanetary science, and real-time data relays from deep space missions.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Radiation-hardened avionics</li>
                <li>AI-powered navigation & autonomy</li>
                <li>Furlable Solar Sails</li>
                <li>Real-time imaging and telemetry</li>
              </ul>
            </div>

            {/* Propulsion */}
            <div className="bg-white bg-opacity-95 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Unbreakable Encryption</h2>
              <p className="text-gray-700 mb-2">
               The combination of post-quantum encryption, evaporating time-to-live QR codes and information capsules combined with segmented interdependent payloads make Deep Space Dynamics communications arguably the most secure in the Solar System.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>CyberIntel Solutions Post-Quantum Encryption</li>
                <li>Seqre TTL Evaporating QR codes</li>
                <li>Segmented Interdependent Payloadss</li>
              </ul>
            </div>

            {/* Sensing */}
            <div className="bg-white bg-opacity-95 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Asteroid Detection Arrays</h2>
              <p className="text-gray-700 mb-2">
                Onboard visible and infrared optics scan for NEOs (Near-Earth Objects) and deep-belt asteroids.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Teledyne CIS sensors</li>
                <li>Real-time orbital path modeling</li>
                <li>Deep-space object classification</li>
              </ul>
            </div>

            {/* AI / Comms */}
            <div className="bg-white bg-opacity-95 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">AI & Edge Computing</h2>
              <p className="text-gray-700 mb-2">
                Onboard AI manages fault detection, mission planning, and cross-satellite swarm collaboration.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Low-latency mesh communication</li>
                <li>Redundant decision trees</li>
                <li>Integrated with ground control AI dashboard</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;