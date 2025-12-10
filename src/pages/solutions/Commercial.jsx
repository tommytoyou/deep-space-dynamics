import React from 'react';

// Checkmark Icon
const CheckIcon = () => (
  <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

// Use Case Card Component
const UseCaseCard = ({ title, description, icon }) => (
  <div className="bg-navy-800 border border-white/10 rounded-xl p-6 hover:border-accent/50 transition-all duration-300">
    <div className="text-3xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-slate-400">{description}</p>
  </div>
);

// Value Prop Item Component
const ValuePropItem = ({ children }) => (
  <li className="flex items-center gap-3">
    <CheckIcon />
    <span className="text-slate-300">{children}</span>
  </li>
);

const Commercial = () => {
  const useCases = [
    {
      title: 'Satellite Constellation Operators',
      description: 'Collision avoidance planning and radiation alerts for fleet protection',
      icon: '🛰️',
    },
    {
      title: 'Launch Providers',
      description: 'Window optimization and solar event timing for safe launches',
      icon: '🚀',
    },
    {
      title: 'Insurance & Underwriters',
      description: 'Risk assessment data for space asset coverage decisions',
      icon: '📊',
    },
    {
      title: 'Ground Infrastructure',
      description: 'Geomagnetic storm impact predictions for power grid operators',
      icon: '⚡',
    },
  ];

  const valueProps = [
    'Real-time alerts via API',
    'Historical data for modeling',
    '24/7 monitoring coverage',
    'Custom threshold configuration',
  ];

  return (
    <div className="min-h-screen bg-navy-900 pt-24">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="font-display text-5xl font-bold text-white">
            Commercial Operators
          </h1>
          <p className="text-xl text-slate-400 mt-4 max-w-2xl mx-auto">
            Protect your assets from LEO to GEO and beyond
          </p>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 bg-navy-800">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-3xl font-bold text-white text-center mb-12">
            Industry Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((useCase) => (
              <UseCaseCard
                key={useCase.title}
                title={useCase.title}
                description={useCase.description}
                icon={useCase.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Value Props Section */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl font-bold text-white mb-6">
                Enterprise-Ready Platform
              </h2>
              <p className="text-slate-400 mb-8">
                Our TSWI-AI platform is designed for commercial operations at scale,
                providing the reliability and flexibility your business demands.
              </p>
              <ul className="space-y-4">
                {valueProps.map((prop) => (
                  <ValuePropItem key={prop}>{prop}</ValuePropItem>
                ))}
              </ul>
            </div>
            <div className="rounded-xl bg-navy-800 border border-white/10 aspect-video flex items-center justify-center">
              <p className="text-slate-500">Commercial Dashboard Preview</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-800 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Start Protecting Your Assets Today
          </h2>
          <p className="text-slate-400 mb-8">
            Try our TSWI-AI platform free and see the difference real-time space weather intelligence makes.
          </p>
          <a
            href="https://tswi-ai.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent text-navy-900 px-8 py-3 rounded-lg font-semibold hover:bg-accent-light transition-all duration-300"
          >
            Start Free Trial
          </a>
        </div>
      </section>
    </div>
  );
};

export default Commercial;
