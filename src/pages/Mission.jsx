import React from 'react';

const Mission = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Mission
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            To advance humanity's presence in space through innovative technology, strategic partnerships, and sustainable exploration practices that benefit all of mankind.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Vision Statement</h2>
          <p className="text-lg text-gray-700 mb-6">
            We envision a future where humanity thrives across the solar system — sustainable colonies on Mars, asteroid mining operations, and orbital research stations. Deep Space Dynamics will be the backbone of this next era.
          </p>
          <p className="text-lg text-gray-700">
            Our commitment goes beyond exploration — it's about securing Earth’s future through space-enabled breakthroughs in technology, resource access, and defense.
          </p>
        </div>

        {/* Core Values & Objectives */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Core Values</h3>
            <ul className="space-y-3 text-gray-700">
              <li><span className="text-primary-600 mr-2">•</span><strong>Innovation:</strong> Bold engineering beyond Earth</li>
              <li><span className="text-primary-600 mr-2">•</span><strong>Integrity:</strong> Ethical science with global impact</li>
              <li><span className="text-primary-600 mr-2">•</span><strong>Sustainability:</strong> Self-sufficient systems for long-term survival</li>
              <li><span className="text-primary-600 mr-2">•</span><strong>Security:</strong> Protecting Earth through strategic orbital defense</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Strategic Objectives</h3>
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
