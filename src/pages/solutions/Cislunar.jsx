import React from 'react';
import { Link } from 'react-router-dom';

// Checkmark Icon
const CheckIcon = () => (
  <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

// Focus Area Card Component
const FocusAreaCard = ({ title, description, icon }) => (
  <div className="bg-navy-800 border border-white/10 rounded-xl p-6 hover:border-accent/50 transition-all duration-300">
    <div className="text-3xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-slate-400">{description}</p>
  </div>
);

// Why DSD Item Component
const WhyDSDItem = ({ children }) => (
  <li className="flex items-start gap-3">
    <div className="mt-1">
      <CheckIcon />
    </div>
    <span className="text-slate-300">{children}</span>
  </li>
);

const Cislunar = () => {
  const focusAreas = [
    {
      title: 'Lunar Gateway Support',
      description: 'Space weather monitoring for Gateway station operations and crew safety',
      icon: '🌙',
    },
    {
      title: 'Artemis Mission Coordination',
      description: 'Real-time solar event tracking for crewed lunar missions',
      icon: '🚀',
    },
    {
      title: 'LunaNet Compatibility',
      description: 'Designed to integrate with NASA\'s lunar communications architecture',
      icon: '📡',
    },
    {
      title: 'Earth-Moon L4/L5 Coverage',
      description: 'Dedicated spacecraft at cislunar Lagrange points for persistent monitoring',
      icon: '🛰️',
    },
  ];

  const whyDSDReasons = [
    'Only commercial provider with planned cislunar Lagrange presence',
    'Purpose-built for deep space, not adapted from LEO',
    'Supporting NASA\'s cislunar architecture from day one',
  ];

  return (
    <div className="min-h-screen bg-navy-900 pt-24">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="font-display text-5xl font-bold text-white">
            Cislunar Economy
          </h1>
          <p className="text-xl text-slate-400 mt-4 max-w-2xl mx-auto">
            Infrastructure for the next frontier
          </p>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="py-16 bg-navy-800">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-3xl font-bold text-white text-center mb-12">
            Cislunar Focus Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {focusAreas.map((area) => (
              <FocusAreaCard
                key={area.title}
                title={area.title}
                description={area.description}
                icon={area.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why DSD Section */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl font-bold text-white mb-6">
                Why Deep Space Dynamics?
              </h2>
              <p className="text-slate-400 mb-8">
                As humanity expands beyond Earth orbit, space weather intelligence becomes
                mission-critical. We're building the infrastructure to support the cislunar economy.
              </p>
              <ul className="space-y-4">
                {whyDSDReasons.map((reason) => (
                  <WhyDSDItem key={reason}>{reason}</WhyDSDItem>
                ))}
              </ul>
            </div>
            {/* Cislunar Diagram Placeholder */}
            <div className="rounded-xl bg-navy-800 border border-white/10 aspect-square flex items-center justify-center">
              <div className="text-center">
                <p className="text-slate-500 mb-2">Earth-Moon System</p>
                <p className="text-accent text-sm">L4/L5 Coverage Diagram</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-navy-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-6">
            Building for the Long Term
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            The cislunar economy will require persistent infrastructure for communications,
            navigation, and situational awareness. Our Neuman constellation is designed
            from the ground up to meet these challenges, providing the foundation for
            sustainable operations beyond Earth orbit.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-900 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Shape the Future of Cislunar Operations
          </h2>
          <p className="text-slate-400 mb-8">
            Partner with us to build the infrastructure for humanity's next frontier.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-accent text-navy-900 px-8 py-3 rounded-lg font-semibold hover:bg-accent-light transition-all duration-300"
          >
            Partner With Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Cislunar;
