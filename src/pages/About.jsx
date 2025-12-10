import React from 'react';
import { Link } from 'react-router-dom';

// LinkedIn Icon
const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

// Team Member Card
const TeamCard = ({ image, name, title, brief, linkedin }) => (
  <div className="bg-navy-800/50 rounded-xl p-6 text-center border border-white/10 hover:border-accent/30 transition-all duration-300">
    <img
      src={image}
      alt={name}
      className="rounded-full w-32 h-32 mx-auto object-cover border-2 border-white/10"
      onError={(e) => {
        e.target.style.display = 'none';
      }}
    />
    <h3 className="text-xl font-semibold text-white mt-4">{name}</h3>
    <p className="text-accent">{title}</p>
    <p className="text-slate-400 text-sm mt-2">{brief}</p>
    {linkedin && (
      <a
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 text-slate-400 hover:text-accent transition-colors"
        aria-label={`${name}'s LinkedIn profile`}
      >
        <LinkedInIcon />
      </a>
    )}
  </div>
);

// Timeline Item
const TimelineItem = ({ year, title, description, isLast = false }) => (
  <div className={`relative pl-8 ${!isLast ? 'pb-8' : ''}`}>
    {/* Dot on line */}
    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-accent border-2 border-navy-900" />
    <p className="text-accent font-semibold">{year}</p>
    <p className="text-white font-medium">{title}</p>
    <p className="text-slate-400 text-sm">{description}</p>
  </div>
);

// Partner Logo
const PartnerLogo = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    className="h-12 opacity-70 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300"
    onError={(e) => {
      e.target.style.display = 'none';
    }}
  />
);

const About = () => {
  const teamMembers = [
    {
      image: '/images/team/tom.jpeg',
      name: 'Tom Erickson',
      title: 'Founder & CEO',
      brief: "Leading DSD's vision for democratized deep space infrastructure",
      linkedin: 'https://www.linkedin.com/in/taboraerickson/',
    },
    {
      image: '/images/team/shraddha.png',
      name: 'Dr. Shraddha Barawkar',
      title: 'Chief Robotics Officer',
      brief: 'PhD in Robotics, NASA fellowship. Architecting autonomous spacecraft systems.',
      linkedin: 'https://www.linkedin.com/in/shraddha-barawkar/',
    },
    {
      image: '/images/team/michael.jpeg',
      name: 'Michael G',
      title: 'Chief Information Security Officer',
      brief: 'Cybersecurity leadership experience at Amazon and major healthcare systems.',
      linkedin: 'https://www.linkedin.com/in/michael-garner-cissp-a4310320/',
    },
  ];

  const partners = [
    { src: '/images/team/cyberintelsolutions.png', alt: 'CyberIntel Solutions' },
    { src: '/images/team/theradteam.jpeg', alt: 'The Rad Team' },
    { src: '/images/team/seqre.png', alt: 'Seqre' },
  ];

  const milestones = [
    { year: 'Nov 2024', title: 'Company Founded', description: 'Incorporated in Wyoming' },
    { year: 'Dec 2024', title: 'PDR Complete', description: 'Preliminary Design Review for Neuman spacecraft' },
    { year: '2025', title: 'Seed Round', description: 'Raising $1.2M, YC application' },
    { year: 'Feb 2027', title: 'Launch Window 1', description: 'Venus trajectory deployment' },
    { year: 'Jul 2027', title: 'Launch Window 2', description: 'Mars L4/L5 deployment' },
  ];

  return (
    <div className="min-h-screen bg-navy-900 pt-24">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="font-display text-5xl font-bold text-white">
            Democratizing Deep Space
          </h1>
          <p className="text-xl text-slate-400 mt-4 max-w-2xl mx-auto">
            Building persistent infrastructure beyond Earth orbit at radically lower cost
          </p>
        </div>
      </section>

      {/* Section 1 - Company Story */}
      <section className="py-24 bg-navy-800">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-3xl font-bold text-white">
            The Mission
          </h2>
          <div className="space-y-4 mt-6">
            <p className="text-slate-300 leading-relaxed">
              Deep Space Dynamics was founded in November 2024 in Sheridan, Wyoming with a singular
              insight: the space industry's custom-mission approach creates unnecessary costs and
              delays. By standardizing spacecraft design and leveraging gravitationally stable
              Lagrange points, we can deploy persistent deep space infrastructure at a fraction
              of traditional costs.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Our Neuman-class 6U spacecraft platform delivers space weather intelligence,
              positioning/navigation/timing services, planetary defense capabilities, and
              communications relay—all from identical, modular hardware. This standardization
              creates network effects impossible with bespoke missions.
            </p>
          </div>

          {/* Key Differentiator Box */}
          <div className="mt-8 bg-navy-900/50 rounded-xl p-6 border border-accent/20">
            <p className="text-accent font-semibold">Our Insight</p>
            <p className="text-white mt-2">
              Standardized spacecraft + Lagrange points = 10× cost reduction with superior coverage
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 - Leadership Team */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display text-3xl font-bold text-white text-center">
            Leadership
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <TeamCard key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 - Partners */}
      <section className="py-16 bg-navy-800 border-y border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-xl font-semibold text-white text-center">
            Strategic Partners
          </h3>
          <div className="flex justify-center items-center gap-8 mt-8 flex-wrap">
            {partners.map((partner, index) => (
              <PartnerLogo key={index} {...partner} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 - Timeline */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display text-3xl font-bold text-white text-center">
            Milestones
          </h2>
          <div className="max-w-2xl mx-auto mt-12 border-l-2 border-accent">
            {milestones.map((milestone, index) => (
              <TimelineItem
                key={index}
                {...milestone}
                isLast={index === milestones.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 text-center bg-navy-800">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="font-display text-2xl font-bold text-white">
            Join Our Mission
          </h3>
          <p className="text-slate-400 mt-2">
            We're building the future of deep space infrastructure
          </p>
          <Link
            to="/contact"
            className="inline-block mt-6 bg-accent text-navy-900 px-8 py-3 rounded-lg font-semibold hover:bg-accent-light transition-all duration-300"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
