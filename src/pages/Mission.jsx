import React from 'react';

const Mission = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen"
      style={{ backgroundImage: "url('/images/team/milkyway.jpg')" }}
    >
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Mission: Three-Phase Strategic Deployment
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              To advance humanity's presence in space through innovative technology, strategic partnerships, and sustainable exploration practices that benefit all of mankind.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white bg-opacity-95 rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Phase 1: Inner Solar System Sensor Network</h2>
            <p className="text-lg text-gray-700 mb-6">
              We envision a future where humanity thrives across the solar system — sustainable colonies on Mars, asteroid mining operations, and orbital research stations. Deep Space Dynamics will be the backbone of this next era.
            </p>
            <p className="text-lg text-gray-700">
              Our commitment goes beyond exploration — it's about securing Earth's future through space-enabled breakthroughs in technology, resource access, and defense.
            </p>
          </div>

          {/* Core Values */}
          <div className="bg-white bg-opacity-95 rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Phase 2: Main Asteroid Belt Prospecting for Rare Earths & Strategic Minerals</h2>
            <ul className="space-y-3 text-gray-700">
              <li><span className="text-primary-600 mr-2">•</span><strong>Innovation:</strong> Bold engineering beyond Earth</li>
              <li><span className="text-primary-600 mr-2">•</span><strong>Integrity:</strong> Ethical science with global impact</li>
              <li><span className="text-primary-600 mr-2">•</span><strong>Sustainability:</strong> Self-sufficient systems for long-term survival</li>
              <li><span className="text-primary-600 mr-2">•</span><strong>Security:</strong> Protecting Earth through strategic orbital defense</li>
            </ul>
          </div>

          {/* Strategic Objectives */}
          <div className="bg-white bg-opacity-95 rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Phase 3: Outer Solar System Sensor Network</h2>
            <ul className="space-y-3 text-gray-700">
              <li><span className="text-primary-600 mr-2">•</span>Develop next-gen CubeSats and propulsion systems</li>
              <li><span className="text-primary-600 mr-2">•</span>Deploy deep space missions for planetary science</li>
              <li><span className="text-primary-600 mr-2">•</span>Deliver asteroid detection and deflection tech</li>
              <li><span className="text-primary-600 mr-2">•</span>Partner with governments and agencies for security and exploration</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;