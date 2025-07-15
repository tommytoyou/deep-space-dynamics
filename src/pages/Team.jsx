import React from 'react';

const Team = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen"
      style={{ backgroundImage: "url('/images/team/milkyway.jpg')" }}
    >
      <div className="py-20">
        {/* Our Team Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Team</h1>
          <p className="text-lg text-white max-w-2xl mx-auto">
            A diverse coalition of scientists, engineers, and visionaries working to extend humanity's reach into the solar system.
          </p>
        </div>

        {/* Our Team Section */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* CEO */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <img src="/images/team/tom.jpeg" alt="Tom Erickson" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-primary-600" />
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Tom Erickson</h2>
            <p className="text-primary-600 font-medium">Founder & CEO</p>
            <p className="text-sm text-gray-600 mt-2">
              20+ years in public engagement, space entrepreneurship, and project management. Visionary behind Deep Space Dynamics.
            </p>
          </div>

          {/* CISO */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <img src="/images/team/michael.jpeg" alt="Michael Garner" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-primary-600" />
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Michael Garner</h2>
            <p className="text-primary-600 font-medium">CISO</p>
            <p className="text-sm text-gray-600 mt-2">
              A Dynamic Senior IS executive and former Defense Information Systems Agency Cyber Security Analyst with 15+ years experience identifying threats to information asset integrity, availability, and confidentiality.
            </p>
          </div>

          {/* CSO */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <img src="/images/team/david.jpeg" alt="David Carter" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-primary-600" />
            <h2 className="text-xl font-semibold text-gray-900 mb-1">David Carter</h2>
            <p className="text-primary-600 font-medium">Fractional CSO</p>
            <p className="text-sm text-gray-600 mt-2">
              Former CEO & founder Deep Planet, Space Intelligence for the World's Critical Infrastructure & Supply Chains.
            </p>
          </div>
        </div>

        {/* Advisory Board Header */}
        <div className="text-center mt-24 mb-10">
          <h2 className="text-3xl font-bold text-white mb-4">Advisory Board</h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Industry veterans and domain experts helping steer our strategic direction and technical roadmap.
          </p>
        </div>

        {/* Advisory Board Section */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* Dan Schwartz */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <img src="/images/team/dan.jpeg" alt="Dan Schwartz" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-primary-600" />
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Dan Schwartz</h2>
            <p className="text-primary-600 font-medium">Advisor</p>
            <p className="text-sm text-gray-600 mt-2">
              MBA Loyola College in Maryland, CEO P Performance Executive Sales and Fundraising, DPIN Foundation COO, advising on the integration of AI and distributed GPU computing.
            </p>
          </div>

          {/* Dheraj */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <img src="/images/team/dheraj.jpeg" alt="Dheraj Ganjikunta" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-primary-600" />
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Dheraj Ganjikunta</h2>
            <p className="text-primary-600 font-medium">Advisor</p>
            <p className="text-sm text-gray-600 mt-2">
              Co-founder & Lead Program Manager: Brown University's SBUDNIC Program, Ex-McKinsey & Company Senior Business Analyst, Visiting Researcher Brown University. Advises on launch procedures and NASA/NOAA engagement.
            </p>
          </div>

          {/* Eric */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <img src="/images/team/eric.jpeg" alt="Eric R" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-primary-600" />
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Eric Henry</h2>
            <p className="text-primary-600 font-medium">Advisor</p>
            <p className="text-sm text-gray-600 mt-2">
              Former SecOps Deputy Director for the U.S. Government GSA, DoD SecOps expert, Head of Security Operations for Sales Force and AI Blockchain expert.
            </p>
          </div>
        </div>

        {/* Corporate Partners Header */}
        <div className="text-center mt-24 mb-10">
          <h2 className="text-3xl font-bold text-white mb-4">Corporate Partners</h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            We collaborate with pioneering firms in aerospace, technology, and logistics to expand humanity’s reach into deep space.
          </p>
        </div>

        {/* Corporate Partners Section */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* CIS */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <img src="/images/team/cyberintelsolutions.png" alt="CyberIntel Solutions" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-primary-600" />
            <h2 className="text-xl font-semibold text-gray-900 mb-1">CyberIntel Solutions</h2>
            <p className="text-primary-600 font-medium">Post Quantum Encryption Partner</p>
            <p className="text-sm text-gray-600 mt-2">
              Cyber Intel Solution LLC is a cybersecurity firm founded by a former U.S. Special Operations Command member. It offers expert consulting, products, and tailored services to clients worldwide.
            </p>
          </div>

          {/* The Rad Team */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <img src="/images/team/theradteam.jpeg" alt="The Rad Team" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-primary-600" />
            <h2 className="text-xl font-semibold text-gray-900 mb-1">The Rad Team</h2>
            <p className="text-primary-600 font-medium">Radiation Reliability for Space Systems</p>
            <p className="text-sm text-gray-600 mt-2">
              The Rad Team is a specialized radiation reliability consultancy delivering mission-optimized engineering solutions.
            </p>
          </div>

          {/* Seqre */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <img src="/images/team/seqre.png" alt="Seqre" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-primary-600" />
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Seqre</h2>
            <p className="text-primary-600 font-medium">Segmented Interdependent Payloads</p>
            <p className="text-sm text-gray-600 mt-2">
              SEQRE embeds confidential messages in encrypted, shareable codes. It protects data, prevents unauthorized access, and streamlines secure communication.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
