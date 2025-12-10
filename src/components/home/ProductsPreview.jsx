import React from 'react';
import { Link } from 'react-router-dom';

// Radar/Pulse Icon for TSWI-AI
const RadarIcon = () => (
  <svg className="w-10 h-10 text-accent" fill="none" viewBox="0 0 40 40" stroke="currentColor">
    <circle cx="20" cy="20" r="4" strokeWidth="2" fill="currentColor" />
    <circle cx="20" cy="20" r="10" strokeWidth="1.5" opacity="0.6" />
    <circle cx="20" cy="20" r="16" strokeWidth="1.5" opacity="0.3" />
    <path d="M20 4 L20 8" strokeWidth="2" strokeLinecap="round" />
    <path d="M20 32 L20 36" strokeWidth="2" strokeLinecap="round" />
    <path d="M4 20 L8 20" strokeWidth="2" strokeLinecap="round" />
    <path d="M32 20 L36 20" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Satellite Network Icon for Constellation
const ConstellationIcon = () => (
  <svg className="w-10 h-10 text-accent" fill="none" viewBox="0 0 40 40" stroke="currentColor">
    {/* Central node */}
    <circle cx="20" cy="20" r="3" strokeWidth="2" fill="currentColor" />
    {/* Satellite nodes */}
    <circle cx="8" cy="12" r="2" strokeWidth="1.5" fill="currentColor" opacity="0.8" />
    <circle cx="32" cy="12" r="2" strokeWidth="1.5" fill="currentColor" opacity="0.8" />
    <circle cx="8" cy="28" r="2" strokeWidth="1.5" fill="currentColor" opacity="0.8" />
    <circle cx="32" cy="28" r="2" strokeWidth="1.5" fill="currentColor" opacity="0.8" />
    {/* Connection lines */}
    <path d="M10 13 L18 19" strokeWidth="1.5" opacity="0.5" />
    <path d="M30 13 L22 19" strokeWidth="1.5" opacity="0.5" />
    <path d="M10 27 L18 21" strokeWidth="1.5" opacity="0.5" />
    <path d="M30 27 L22 21" strokeWidth="1.5" opacity="0.5" />
    {/* Orbit ring */}
    <ellipse cx="20" cy="20" rx="16" ry="8" strokeWidth="1" opacity="0.3" strokeDasharray="4 2" />
  </svg>
);

// Code Brackets Icon for API
const ApiIcon = () => (
  <svg className="w-10 h-10 text-accent" fill="none" viewBox="0 0 40 40" stroke="currentColor">
    <path d="M14 10 L6 20 L14 30" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M26 10 L34 20 L26 30" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M22 8 L18 32" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
  </svg>
);

const ProductCard = ({ icon, title, badge, badgeStyle, description, linkText, linkTo, isExternal }) => {
  const LinkComponent = isExternal ? 'a' : Link;
  const linkProps = isExternal
    ? { href: linkTo, target: '_blank', rel: 'noopener noreferrer' }
    : { to: linkTo };

  return (
    <div className="group bg-navy-900/50 backdrop-blur border border-white/10 rounded-xl p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/10">
      {/* Icon */}
      <div className="mb-4">
        {icon}
      </div>

      {/* Title with Badge */}
      <div className="flex items-center gap-3 mb-3">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <span className={`text-xs px-2 py-0.5 rounded-full ${badgeStyle}`}>
          {badge}
        </span>
      </div>

      {/* Description */}
      <p className="text-slate-400 text-sm leading-relaxed mb-4">
        {description}
      </p>

      {/* Link */}
      <LinkComponent
        {...linkProps}
        className="inline-flex items-center text-accent hover:underline text-sm font-medium transition-colors duration-300"
      >
        {linkText}
      </LinkComponent>
    </div>
  );
};

const ProductsPreview = () => {
  const products = [
    {
      icon: <RadarIcon />,
      title: 'TSWI-AI Platform',
      badge: 'BETA',
      badgeStyle: 'bg-accent/20 text-accent',
      description: 'AI-powered tactical space weather intelligence. Predict CME impacts, solar flares, and geomagnetic storms before they affect your assets.',
      linkText: 'Try Beta →',
      linkTo: 'https://tswi-ai.com',
      isExternal: true,
    },
    {
      icon: <ConstellationIcon />,
      title: 'Neuman Constellation',
      badge: '2027',
      badgeStyle: 'bg-solar/20 text-solar',
      description: 'Eight 6U spacecraft across Earth-Moon, Earth-Sun, Venus-Sun, and Mars-Sun Lagrange points. Persistent coverage of the inner solar system.',
      linkText: 'View Architecture →',
      linkTo: '/products#constellation',
      isExternal: false,
    },
    {
      icon: <ApiIcon />,
      title: 'Data API',
      badge: 'COMING SOON',
      badgeStyle: 'bg-slate-700 text-slate-400',
      description: 'RESTful API access to solar wind velocity, particle flux, and magnetometer readings. Built for integration with your existing systems.',
      linkText: 'Join Waitlist →',
      linkTo: '/contact',
      isExternal: false,
    },
  ];

  return (
    <section className="py-24 bg-navy-800">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-accent tracking-widest text-sm font-medium uppercase mb-4">
            Products
          </p>
          <h2 className="font-display text-4xl font-bold text-white">
            Enterprise-Grade Space Intelligence
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            From real-time forecasting to deep space infrastructure
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;
