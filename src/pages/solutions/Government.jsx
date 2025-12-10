import React from 'react';
import { Link } from 'react-router-dom';

// Checkmark Icon
const CheckIcon = () => (
  <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

// Shield Icon for compliance badges
const ShieldIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

// Agency Card Component
const AgencyCard = ({ name, description, logo, logoAlt }) => (
  <div className="bg-navy-800 border border-white/10 rounded-xl p-6 hover:border-accent/50 transition-all duration-300">
    <div className="flex justify-center mb-4">
      <img src={logo} alt={logoAlt} className="h-16 w-auto" />
    </div>
    <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
    <p className="text-slate-400">{description}</p>
  </div>
);

// Capability Item Component
const CapabilityItem = ({ title, description }) => (
  <div className="flex items-start gap-4">
    <div className="mt-1">
      <CheckIcon />
    </div>
    <div>
      <h4 className="text-white font-medium">{title}</h4>
      <p className="text-slate-400 text-sm mt-1">{description}</p>
    </div>
  </div>
);

// Compliance Badge Component
const ComplianceBadge = ({ label }) => (
  <div className="flex items-center gap-2 bg-navy-800 border border-white/10 rounded-lg px-4 py-3">
    <ShieldIcon />
    <span className="text-white font-medium">{label}</span>
  </div>
);

const Government = () => {
  const agencies = [
    {
      name: 'NASA',
      description: 'Artemis mission support, deep space monitoring',
      logo: '/images/partners/nasa.svg',
      logoAlt: 'NASA',
    },
    {
      name: 'NOAA',
      description: 'Space weather forecasting, SWPC integration',
      logo: '/images/partners/noaa.png',
      logoAlt: 'NOAA',
    },
    {
      name: 'Space Force',
      description: 'Space domain awareness, asset protection',
      logo: '/images/partners/spaceforce.svg',
      logoAlt: 'U.S. Space Force',
    },
    {
      name: 'AFRL',
      description: 'Research partnerships, technology validation',
      logo: '/images/partners/afrl.svg',
      logoAlt: 'AFRL',
    },
  ];

  const capabilities = [
    {
      title: 'Early Warning Systems',
      description: 'CME detection hours ahead of Earth impact, enabling proactive mission protection',
    },
    {
      title: 'Multi-Point Observation',
      description: 'Lagrange constellation provides 360° solar coverage impossible from Earth orbit',
    },
    {
      title: 'Secure Data Delivery',
      description: 'ITAR-compliant data handling and secure transmission protocols',
    },
    {
      title: 'Custom Integration Support',
      description: 'Dedicated engineering team for seamless integration with existing systems',
    },
  ];

  return (
    <div className="min-h-screen bg-navy-900 pt-24">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="font-display text-5xl font-bold text-white">
            Government Solutions
          </h1>
          <p className="text-xl text-slate-400 mt-4 max-w-2xl mx-auto">
            Mission-critical space weather intelligence for federal agencies
          </p>
        </div>
      </section>

      {/* Target Agencies Section */}
      <section className="py-16 bg-navy-800">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-3xl font-bold text-white text-center mb-12">
            Supporting Federal Missions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {agencies.map((agency) => (
              <AgencyCard
                key={agency.name}
                name={agency.name}
                description={agency.description}
                logo={agency.logo}
                logoAlt={agency.logoAlt}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-3xl font-bold text-white text-center mb-12">
            Government-Grade Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {capabilities.map((capability) => (
              <CapabilityItem
                key={capability.title}
                title={capability.title}
                description={capability.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-16 bg-navy-800">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-2xl font-bold text-white text-center mb-8">
            Compliance & Certifications
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <ComplianceBadge label="ITAR Compliant" />
            <ComplianceBadge label="FedRAMP Ready" />
            <ComplianceBadge label="Registered Lobbyist" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-900 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Ready to Support Your Mission?
          </h2>
          <p className="text-slate-400 mb-8">
            Connect with our government sales team to discuss your requirements.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-accent text-navy-900 px-8 py-3 rounded-lg font-semibold hover:bg-accent-light transition-all duration-300"
          >
            Contact Government Sales
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Government;
