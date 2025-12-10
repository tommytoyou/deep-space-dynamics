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
const BlogCard = ({ category, categoryVariant, title, excerpt, meta }) => (
  <article className="bg-navy-800/50 rounded-xl overflow-hidden border border-white/10 hover:border-accent/30 transform hover:scale-[1.02] transition-all duration-300 group">
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
);

// Whitepaper Card Component
const WhitepaperCard = ({ title, description }) => (
  <div className="bg-navy-800/50 rounded-xl p-6 border border-white/10 flex items-start gap-6">
    <div className="flex-shrink-0">
      <PDFIcon />
    </div>
    <div className="flex-1">
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-slate-400 text-sm mb-4">{description}</p>
      <button
        disabled
        className="px-4 py-2 rounded-lg text-sm font-medium bg-slate-700 text-slate-500 cursor-not-allowed"
      >
        Coming Soon
      </button>
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
      category: 'Space Weather',
      categoryVariant: 'accent',
      title: 'Understanding Coronal Mass Ejections: Why Early Warning Matters',
      excerpt: 'CMEs can travel at speeds up to 3,000 km/s. Learn why detection at Lagrange points provides critical hours of advance warning.',
      meta: 'Coming Soon · 8 min read',
    },
    {
      category: 'Technology',
      categoryVariant: 'solar',
      title: 'Why Lagrange Points: The Strategic Advantage of Gravitational Stability',
      excerpt: "Traditional space weather monitoring relies on single-point observation. Here's why multi-point Lagrange coverage changes everything.",
      meta: 'Coming Soon · 6 min read',
    },
    {
      category: 'Industry',
      categoryVariant: 'purple',
      title: 'The $10B Problem: Space Weather Risk to Global Infrastructure',
      excerpt: 'From satellite operators to power grids, space weather poses significant risks. We break down the economic impact.',
      meta: 'Coming Soon · 10 min read',
    },
  ];

  const whitepapers = [
    {
      title: 'Initial-8 Mission Architecture',
      description: 'Technical overview of our Lagrange point constellation',
    },
    {
      title: 'TSWI-AI Technical Overview',
      description: 'AI/ML approach to space weather prediction',
    },
  ];

  const showBlogPosts = activeTab === 'all' || activeTab === 'blog';
  const showWhitepapers = activeTab === 'all' || activeTab === 'whitepapers';
  const showCaseStudies = activeTab === 'case-studies';

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
                  />
                ))}
              </div>
            </div>
          )}

          {/* Case Studies */}
          {showCaseStudies && (
            <EmptyState
              title="Case studies coming soon"
              subtitle="Be the first to know when we publish customer success stories."
            />
          )}
        </div>
      </section>
    </div>
  );
};

export default Resources;
