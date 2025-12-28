import React from 'react';

const Team = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen relative"
      style={{ backgroundImage: "url('/images/team/milkyway.jpg')" }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        {/* Our Team Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Our Team
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            A diverse coalition of entrepreneurs, cybersecurity experts, and visionaries working to extend humanity's reach throughout the solar system.
          </p>
        </div>

        {/* Cofounders Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3">Leadership Team</h2>
          </div>
          
         <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* CEO */}
            <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-8 text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="relative mb-6">
                <img 
                  src="/images/team/tom.jpeg" 
                  alt="Tom Erickson" 
                  className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-blue-600 shadow-lg" 
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Tom Erickson</h3>
              <p className="text-blue-600 font-semibold mb-4">Founder & CEO</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                20+ years in public engagement, space entrepreneurship, and project management. Visionary behind Deep Space Dynamics.
              </p>
            </div>

            {/* CISO */}
            <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-8 text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="relative mb-6">
                <img 
                  src="/images/team/michael.jpeg" 
                  alt="Michael Garner" 
                  className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-blue-600 shadow-lg" 
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Michael Garner</h3>
              <p className="text-blue-600 font-semibold mb-4">Co-founder & CISO</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                MS Cybersecurity Brown University. Dynamic Senior IS executive and former Defense Information Systems Agency Cybersecurity Analyst with 15+ years experience.
              </p>
            </div>

            {/* CFO */}
{/* 
            <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-8 text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="relative mb-6">
                <img 
                  src="/images/team/david.jpeg" 
                  alt="David Carter" 
                  className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-blue-600 shadow-lg" 
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">David Carter</h3>
              <p className="text-blue-600 font-semibold mb-4">Co-founder & CFO</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                MBA Oxford Said. Former CEO & founder Deep Planet, Space Intelligence for the World's Critical Infrastructure & Supply Chains.
              </p>
            </div>
*/}
          </div>
        </div>

        {/* Advisory Board Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Advisory Board</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Industry veterans and domain experts helping steer our strategic direction and technical roadmap.
          </p>
        </div>

        {/* Advisory Board Section */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24">
          {/* Dan Schwartz */}
          <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-8 text-center hover:transform hover:scale-105 transition-all duration-300">
            <div className="relative mb-6">
              <img 
                src="/images/team/dan.jpeg" 
                alt="Dan Schwartz" 
                className="w-28 h-28 rounded-full mx-auto object-cover border-4 border-purple-600 shadow-lg" 
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Dan Schwartz</h3>
            <p className="text-purple-600 font-semibold mb-4">Strategic Advisor</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              MBA Loyola College. CEO P Performance Executive Sales and Fundraising, DPIN Foundation COO, advising on AI and distributed GPU computing integration.
            </p>
          </div>

          {/* Dheraj */}
          <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-8 text-center hover:transform hover:scale-105 transition-all duration-300">
            <div className="relative mb-6">
              <img 
                src="/images/team/dheraj.jpeg" 
                alt="Dheraj Ganjikunta" 
                className="w-28 h-28 rounded-full mx-auto object-cover border-4 border-purple-600 shadow-lg" 
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Dheraj Ganjikunta</h3>
            <p className="text-purple-600 font-semibold mb-4">Technical Advisor</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Co-founder & Lead Program Manager: Brown University's SBUDNIC Program. Ex-McKinsey Senior Business Analyst. Advises on launch procedures and NASA/NOAA engagement.
            </p>
          </div>

          {/* Eric */}
          <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-8 text-center hover:transform hover:scale-105 transition-all duration-300">
            <div className="relative mb-6">
              <img 
                src="/images/team/eric.jpeg" 
                alt="Eric Henry" 
                className="w-28 h-28 rounded-full mx-auto object-cover border-4 border-purple-600 shadow-lg" 
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Eric Henry</h3>
            <p className="text-purple-600 font-semibold mb-4">Security Advisor</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Former SecOps Deputy Director for U.S. Government GSA. DoD SecOps expert, Head of Security Operations for Salesforce and AI Blockchain expert.
            </p>
          </div>
        </div>

        {/* Corporate Partners Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Strategic Partners</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            We collaborate with first-in-class firms focused on space radiation reliability, cybersecurity technology, and post-quantum encryption to expand humanity's reach into deep space.
          </p>
        </div>

        {/* Corporate Partners Section */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* CIS */}
          <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-8 text-center hover:transform hover:scale-105 transition-all duration-300">
            <div className="relative mb-6">
              <img 
                src="/images/team/cyberintelsolutions.png" 
                alt="CyberIntel Solutions" 
                className="w-28 h-28 rounded-full mx-auto object-cover border-4 border-green-600 shadow-lg" 
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">CyberIntel Solutions</h3>
            <p className="text-green-600 font-semibold mb-4">Post Quantum Encryption Partner</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              World's premier cybersecurity firm founded by a former U.S. Special Operations Command member. Expert consulting, products, and tailored services worldwide.
            </p>
          </div>

          {/* The Rad Team */}
          <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-8 text-center hover:transform hover:scale-105 transition-all duration-300">
            <div className="relative mb-6">
              <img 
                src="/images/team/theradteam.jpeg" 
                alt="The Rad Team" 
                className="w-28 h-28 rounded-full mx-auto object-cover border-4 border-green-600 shadow-lg" 
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">The Rad Team</h3>
            <p className="text-green-600 font-semibold mb-4">Radiation Reliability for Space Systems</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              World's best specialized radiation reliability consultancy delivering mission-optimized engineering solutions for space applications.
            </p>
          </div>

          {/* Seqre */}
          <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-8 text-center hover:transform hover:scale-105 transition-all duration-300">
            <div className="relative mb-6">
              <img 
                src="/images/team/seqre.png" 
                alt="Seqre" 
                className="w-28 h-28 rounded-full mx-auto object-cover border-4 border-green-600 shadow-lg" 
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Seqre</h3>
            <p className="text-green-600 font-semibold mb-4">Segmented Interdependent Payloads</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              SEQRE embeds confidential messages in encrypted, shareable codes. Protects data, prevents unauthorized access, and streamlines secure communication.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;