import React, { useState } from 'react';

// PDF Icon
const PDFIcon = () => (
  <svg className="w-12 h-12 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 13h6m-6 4h4" />
  </svg>
);

// Empty State Icon
const EmptyIcon = () => (
  <svg className="w-16 h-16 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  </svg>
);

// Category Badge Component
const CategoryBadge = ({ children, variant = 'accent' }) => {
  const variants = {
    accent: 'bg-accent/20 text-accent',
    solar: 'bg-solar/20 text-solar',
    purple: 'bg-purple-500/20 text-purple-400',
  };

  return (
    <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${variants[variant]}`}>
      {children}
    </span>
  );
};

// Tab Button Component
const TabButton = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
      active
        ? 'bg-accent text-navy-900'
        : 'bg-navy-800 text-slate-400 hover:text-white'
    }`}
  >
    {children}
  </button>
);

// Blog Card Component
const BlogCard = ({ category, categoryVariant, title, excerpt, meta, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="block"
  >
    <article className="bg-navy-800/50 rounded-xl overflow-hidden border border-white/10 hover:border-accent/30 transform hover:scale-[1.02] transition-all duration-300 group h-full">
      {/* Image Placeholder */}
      <div className="aspect-video bg-navy-700 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <CategoryBadge variant={categoryVariant}>{category}</CategoryBadge>
        <h3 className="text-lg font-semibold text-white mt-3 mb-2 group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4">
          {excerpt}
        </p>
        <p className="text-slate-500 text-xs">
          {meta}
        </p>
      </div>
    </article>
  </a>
);

// Whitepaper Card Component
const WhitepaperCard = ({ title, description, href }) => (
  <div className="bg-navy-800/50 rounded-xl p-6 border border-white/10 flex items-start gap-6">
    <div className="flex-shrink-0">
      <PDFIcon />
    </div>
    <div className="flex-1">
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-slate-400 text-sm mb-4">{description}</p>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 rounded-lg text-sm font-medium bg-accent text-navy-900 hover:bg-accent/90 transition-colors"
        >
          Download PDF
        </a>
      ) : (
        <button
          disabled
          className="px-4 py-2 rounded-lg text-sm font-medium bg-slate-700 text-slate-500 cursor-not-allowed"
        >
          Coming Soon
        </button>
      )}
    </div>
  </div>
);

// Empty State Component
const EmptyState = ({ title, subtitle }) => (
  <div className="text-center py-16">
    <div className="flex justify-center mb-4">
      <EmptyIcon />
    </div>
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-slate-400">{subtitle}</p>
  </div>
);

const Resources = () => {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'blog', label: 'Blog' },
    { id: 'whitepapers', label: 'Whitepapers' },
    { id: 'case-studies', label: 'Case Studies' },
  ];

  const blogPosts = [
    {
      category: 'Policy',
      categoryVariant: 'purple',
      title: 'Economic Strength and the Rule of Law',
      excerpt: 'History shows that the strength of great powers rests on the link between economics and military reach. If humanity is to expand into space, the foundation of law must be laid alongside exploration.',
      meta: 'September 24, 2025 · 4 min read',
      link: 'https://www.linkedin.com/pulse/economic-strength-rule-law-tom-erickson--aplke/',
    },
    {
      category: 'Infrastructure',
      categoryVariant: 'accent',
      title: 'The Case for Distributed Space Infrastructure — Before It\'s Too Late',
      excerpt: 'We are flying blind, and the stakes could not be higher. In the glare of the Sun, thousands of asteroids are entirely invisible to Earth-based telescopes. Distributed space-based infrastructure is the answer.',
      meta: 'August 1, 2025 · 6 min read',
      link: 'https://www.linkedin.com/pulse/case-distributed-space-infrastructure-before-its-too-late-erickson--wthbe/',
    },
    {
      category: 'Mars',
      categoryVariant: 'solar',
      title: 'Three Ways Neumans Will Benefit a Mars Colony',
      excerpt: 'As humanity prepares to establish a permanent presence on Mars, Deep Space Dynamics\' Neuman-class Spacecraft offers an essential foundation for early-stage colonization.',
      meta: 'May 4, 2025 · 5 min read',
      link: 'https://www.linkedin.com/pulse/three-ways-neumans-benefit-mars-colony-tom-erickson-jys4e/',
    },
  ];

  const whitepapers = [
    {
      title: 'Securing America\'s Space Industrial Base',
      description: 'Policy framework for space as critical infrastructure under PPD-21',
      href: '/docs/WhitePaper_CriticalInfrastructure.pdf',
    },
  ];

  const caseStudies = [
    {
      title: 'Neuman-B 6U SpaceDrone',
      description: '100% American aerospace manufacturing executive summary',
      href: '/docs/NeumanB_CaseStudy.pdf',
    },
  ];

  const showBlogPosts = activeTab === 'all' || activeTab === 'blog';
  const showWhitepapers = activeTab === 'all' || activeTab === 'whitepapers';
  const showCaseStudies = activeTab === 'all' || activeTab === 'case-studies';

  return (
    <div className="min-h-screen bg-navy-900 pt-24">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="font-display text-5xl font-bold text-white">
            Resources
          </h1>
          <p className="text-xl text-slate-400 mt-4 max-w-2xl mx-auto">
            Insights on space weather, deep space infrastructure, and planetary defense
          </p>

          {/* Tab Navigation */}
          <div className="flex justify-center gap-4 mt-8 flex-wrap">
            {tabs.map((tab) => (
              <TabButton
                key={tab.id}
                active={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </TabButton>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">
          {/* Blog Posts */}
          {showBlogPosts && (
            <div className="mb-16">
              {activeTab === 'all' && (
                <h2 className="font-display text-2xl font-bold text-white mb-8">Latest Articles</h2>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                  <BlogCard
                    key={post.title}
                    category={post.category}
                    categoryVariant={post.categoryVariant}
                    title={post.title}
                    excerpt={post.excerpt}
                    meta={post.meta}
                    link={post.link}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Whitepapers */}
          {showWhitepapers && (
            <div className="mb-16">
              {activeTab === 'all' && (
                <h2 className="font-display text-2xl font-bold text-white mb-8">Whitepapers</h2>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {whitepapers.map((paper) => (
                  <WhitepaperCard
                    key={paper.title}
                    title={paper.title}
                    description={paper.description}
                    href={paper.href}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Case Studies */}
          {showCaseStudies && (
            <div className="mb-16">
              {activeTab === 'all' && (
                <h2 className="font-display text-2xl font-bold text-white mb-8">Case Studies</h2>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {caseStudies.map((study) => (
                  <WhitepaperCard
                    key={study.title}
                    title={study.title}
                    description={study.description}
                    href={study.href}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Resources;
