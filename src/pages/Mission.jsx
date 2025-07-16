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

          {/* Phase 1 */}
          <div className="bg-white bg-opacity-95 rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Phase 1: Inner Solar System Sensor Network</h2>
            <p className="text-lg text-gray-700 mb-6">
              Deep Space Dynamics will deploy Neuman 3U spacecraft to the Lagrange Points and key orbital positions around Venus, Earth, Mars, and the Moon. This strategic network will serve as an early warning system for coronal mass ejections and asteroid threats, enhancing planetary defense capabilities. In addition, these Neuman 3U spacecraft will function as communications and navigation nodes to support cislunar logistics and future Mars-bound missions. Over time, this architecture will form the initial backbone of an interplanetary communication and data relay system, enabling persistent, autonomous space operations throughout the inner solar system.
            </p>
            <p className="text-lg text-gray-700">
              Our commitment goes beyond exploration — it's about securing Earth's future through space-enabled breakthroughs in technology, resource access, and defense.
            </p>
          </div>

          {/* Phase 2 */}
          <div className="bg-white bg-opacity-95 rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Phase 2: Main Asteroid Belt Prospecting for Rare Earths & Strategic Minerals</h2>
            <p className="text-lg text-gray-700 mb-6">
              Deep Space Dynamics will extend its Lagrange point coverage to include Mercury and deploy Neuman 3U spacecraft to conduct advanced prospecting missions throughout the Asteroid Belt. These missions will focus on identifying rare earth elements and performing strategic resource mapping to evaluate the potential for future in-situ resource utilization (ISRU). Additionally, the Neuman 3U spacecraft will enable deep-space trajectory tracking and provide essential orbital redundancy. This expansion will further strengthen the inner solar system’s mesh network, reinforcing the backbone of autonomous, resilient space infrastructure for American-led deep-space operations.
            </p>
            <p className="text-lg text-gray-700">
              Through innovative extraction technologies and automated mining systems, we'll establish sustainable resource flows that reduce Earth's dependence on terrestrial mining while opening new frontiers for economic growth.
            </p>
          </div>

          {/* Phase 3 */}
          <div className="bg-white bg-opacity-95 rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Phase 3: Outer Solar System Sensor Network</h2>
            <p className="text-lg text-gray-700 mb-6">
              Extending its reach to the outer solar system, Deep Space Dynamics will deploy an advanced network of Neuman 3U spacecraft equipped with sophisticated sensors to monitor deep-space threats, study distant planetary bodies, and establish early warning systems that enhance Earth’s protection. This expansion will scale to over 1,000 Neuman 3U spacecraft strategically positioned across Jupiter’s Trojan clusters and key outer planetary corridors. These spacecraft will provide redundant, solar system–wide communications and continuous monitoring, solidifying a global American footprint in deep-space infrastructure, scientific leadership, and strategic deterrence.
            </p>
            <p className="text-lg text-gray-700">
              This comprehensive surveillance network will provide unprecedented insights into solar system dynamics while serving as humanity's first line of defense against cosmic threats and enabling scientific discoveries that will shape our understanding of the universe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;