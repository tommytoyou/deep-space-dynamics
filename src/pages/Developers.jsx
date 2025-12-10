import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Badge Component
const Badge = ({ children, variant = 'slate' }) => {
  const variants = {
    accent: 'bg-accent/20 text-accent',
    slate: 'bg-slate-700 text-slate-400',
  };

  return (
    <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${variants[variant]}`}>
      {children}
    </span>
  );
};

// External Link Icon
const ExternalLinkIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

// Python Icon
const PythonIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
    <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/>
  </svg>
);

// JavaScript Icon
const JavaScriptIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
    <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
  </svg>
);

// Webhook Icon
const WebhookIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
  </svg>
);

// Document Icon
const DocumentIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

// GitHub Icon
const GitHubIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

// Status Icon
const StatusIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

// Support Icon
const SupportIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

// Endpoint Row Component
const EndpointRow = ({ method, path, description }) => (
  <div className="flex items-start gap-4 py-3 border-b border-white/5 last:border-0">
    <span className="text-accent font-mono text-sm font-semibold w-12">{method}</span>
    <span className="text-white font-mono text-sm flex-1">{path}</span>
    <span className="text-slate-400 text-sm">{description}</span>
  </div>
);

// SDK Card Component
const SDKCard = ({ title, icon, badge }) => (
  <div className="bg-navy-800/50 rounded-xl p-6 border border-white/10 hover:border-accent/30 transition-all duration-300">
    <div className="text-accent mb-4">{icon}</div>
    <div className="flex items-center gap-3 mb-2">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      {badge && <Badge>{badge}</Badge>}
    </div>
  </div>
);

// Support Link Card Component
const SupportLinkCard = ({ title, icon, to, external }) => {
  const content = (
    <div className="bg-navy-900/50 rounded-xl p-6 border border-white/10 hover:border-accent/30 transition-all duration-300 flex items-center gap-4">
      <div className="text-accent">{icon}</div>
      <span className="text-white font-medium flex-1">{title}</span>
      {external && <ExternalLinkIcon />}
    </div>
  );

  if (external) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" className="block">
        {content}
      </a>
    );
  }

  return (
    <Link to={to} className="block">
      {content}
    </Link>
  );
};

const Developers = () => {
  const location = useLocation();

  // Handle hash navigation
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  const endpoints = [
    { method: 'GET', path: '/v1/solar-wind', description: 'Solar wind velocity, density, IMF' },
    { method: 'GET', path: '/v1/particle-flux', description: 'Proton and electron flux levels' },
    { method: 'GET', path: '/v1/geomagnetic', description: 'Kp index, Dst, auroral activity' },
    { method: 'GET', path: '/v1/cme-alerts', description: 'Coronal mass ejection tracking' },
    { method: 'GET', path: '/v1/flare-alerts', description: 'Solar flare detection and classification' },
  ];

  const rateLimits = [
    { tier: 'Free', requests: '100', historical: '7 days', support: 'Community' },
    { tier: 'Pro', requests: '10,000', historical: '1 year', support: 'Email' },
    { tier: 'Enterprise', requests: 'Unlimited', historical: 'Full archive', support: '24/7' },
  ];

  return (
    <div className="min-h-screen bg-navy-900 pt-24">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="font-display text-5xl font-bold text-white">
            Developers
          </h1>
          <p className="text-xl text-slate-400 mt-4 max-w-2xl mx-auto">
            Integrate space weather intelligence into your applications
          </p>
        </div>
      </section>

      {/* Section 1 - API Documentation */}
      <section id="api-docs" className="py-24 bg-navy-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <Badge>COMING 2027</Badge>
            <h2 className="font-display text-4xl font-bold text-white mt-4">
              API Documentation
            </h2>
            <p className="text-slate-400 mt-4 max-w-2xl">
              RESTful API providing real-time and historical space weather data from our Lagrange point constellation.
            </p>
          </div>

          {/* Endpoints Preview */}
          <div className="bg-navy-900/50 rounded-xl p-6 border border-white/10 mb-8">
            <h3 className="text-lg font-semibold text-white mb-4">Endpoints</h3>
            <div className="divide-y divide-white/5">
              {endpoints.map((endpoint) => (
                <EndpointRow
                  key={endpoint.path}
                  method={endpoint.method}
                  path={endpoint.path}
                  description={endpoint.description}
                />
              ))}
            </div>
          </div>

          {/* Authentication Example */}
          <div className="bg-navy-900 rounded-xl p-6 border border-white/10 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
              <span className="text-slate-500 text-sm ml-2">Authentication Example</span>
            </div>
            <pre className="font-mono text-sm overflow-x-auto">
              <code className="text-slate-300">
{`curl -X GET "https://api.deepspacedynamics.us/v1/solar-wind" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`}
              </code>
            </pre>
          </div>

          {/* Rate Limits Table */}
          <div className="bg-navy-900/50 rounded-xl p-6 border border-white/10 mb-8">
            <h3 className="text-lg font-semibold text-white mb-4">Rate Limits</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-3 px-4 text-slate-400 font-medium text-sm">Tier</th>
                    <th className="py-3 px-4 text-slate-400 font-medium text-sm">Requests/day</th>
                    <th className="py-3 px-4 text-slate-400 font-medium text-sm">Historical Data</th>
                    <th className="py-3 px-4 text-slate-400 font-medium text-sm">Support</th>
                  </tr>
                </thead>
                <tbody>
                  {rateLimits.map((tier) => (
                    <tr key={tier.tier} className="border-b border-white/5 last:border-0">
                      <td className="py-3 px-4 text-white font-medium">{tier.tier}</td>
                      <td className="py-3 px-4 text-slate-300">{tier.requests}</td>
                      <td className="py-3 px-4 text-slate-300">{tier.historical}</td>
                      <td className="py-3 px-4 text-slate-300">{tier.support}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* CTA */}
          <Link
            to="/contact"
            className="inline-block bg-accent text-navy-900 px-6 py-3 rounded-lg font-semibold hover:bg-accent-light transition-all duration-300"
          >
            Join API Waitlist
          </Link>
        </div>
      </section>

      {/* Section 2 - Integration Guides */}
      <section id="guides" className="py-24 bg-navy-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-4xl font-bold text-white mb-12">
            Integration Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SDKCard
              title="Python SDK"
              icon={<PythonIcon />}
              badge="Coming 2027"
            />
            <SDKCard
              title="JavaScript SDK"
              icon={<JavaScriptIcon />}
              badge="Coming 2027"
            />
            <SDKCard
              title="Webhook Configuration"
              icon={<WebhookIcon />}
              badge="Coming 2027"
            />
            <SDKCard
              title="Data Formats & Standards"
              icon={<DocumentIcon />}
              badge="Coming 2027"
            />
          </div>
        </div>
      </section>

      {/* Section 3 - Support */}
      <section id="support" className="py-16 bg-navy-800">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-3xl font-bold text-white mb-8">
            Support & Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SupportLinkCard
              title="GitHub Repository"
              icon={<GitHubIcon />}
              to="#"
              external
            />
            <SupportLinkCard
              title="API Status"
              icon={<StatusIcon />}
              to="#"
              external
            />
            <SupportLinkCard
              title="Contact Support"
              icon={<SupportIcon />}
              to="/contact"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Developers;
