import React from 'react';
import { Link } from 'react-router-dom';

// Chevron Down Icon
const ChevronDownIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

// Simple icon placeholders for trust badges
const BadgeIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

const Hero = () => {
  const trustBadges = [
    { label: 'NASA Partner Track', icon: true },
    { label: 'YC S25 Applicant', icon: true },
    { label: 'ITAR Compliant', icon: true },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Layer 1: Base Navy */}
      <div className="absolute inset-0 bg-navy-900 z-0" />

      {/* Background Layer 2: Radial Gradient Overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(15, 33, 64, 0.8) 0%, transparent 70%)',
        }}
      />

      {/* Background Layer 3: Starfield Animation */}
      <div className="absolute inset-0 z-[2] starfield" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow Text */}
        <p className="text-accent tracking-widest text-sm font-medium mb-6 uppercase">
          Lagrange Point Infrastructure
        </p>

        {/* Main Headline */}
        <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-tight">
          Persistent Deep Space
          <span className="block">Intelligence</span>
        </h1>

        {/* Subhead */}
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mt-6 leading-relaxed">
          Neuman-class spacecraft at Lagrange points delivering space weather forecasting,
          PNT services, and planetary defense—at 10x lower cost than traditional missions.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Link
            to="/products#tswi-ai"
            className="bg-accent text-navy-900 px-6 py-3 rounded-lg font-semibold hover:bg-accent-light transition-all duration-300 transform hover:scale-105"
          >
            Explore TSWI-AI
          </Link>
          <Link
            to="/products#constellation"
            className="border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
          >
            View Constellation
          </Link>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-16 opacity-70">
          {trustBadges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-sm text-slate-400 uppercase tracking-wide"
            >
              {badge.icon && <BadgeIcon />}
              <span>{badge.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight,
              behavior: 'smooth',
            });
          }}
          className="text-white/50 hover:text-white/80 transition-colors duration-300 animate-bounce"
          aria-label="Scroll to explore"
        >
          <ChevronDownIcon />
          <span className="sr-only">Scroll to explore</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
