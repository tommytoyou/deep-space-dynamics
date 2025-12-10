import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Checkmark Icon
const CheckIcon = () => (
  <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

// Inner Solar System Constellation Diagram
const ConstellationDiagram = () => (
  <svg
    viewBox="0 0 400 400"
    className="w-full max-w-[400px] h-auto mx-auto"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <radialGradient id="sunGlowLarge" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#FF6B35" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#FF6B35" stopOpacity="0" />
      </radialGradient>
    </defs>

    {/* Sun glow */}
    <circle cx="200" cy="200" r="60" fill="url(#sunGlowLarge)" />

    {/* Venus orbit */}
    <circle cx="200" cy="200" r="70" stroke="#334155" strokeWidth="1" fill="none" strokeDasharray="4 4" />

    {/* Earth orbit */}
    <circle cx="200" cy="200" r="120" stroke="#334155" strokeWidth="1" fill="none" strokeDasharray="4 4" />

    {/* Mars orbit */}
    <circle cx="200" cy="200" r="170" stroke="#334155" strokeWidth="1" fill="none" strokeDasharray="4 4" />

    {/* Sun */}
    <circle cx="200" cy="200" r="20" fill="#FF6B35" />

    {/* Venus */}
    <circle cx="130" cy="200" r="5" fill="#f59e0b" />
    <text x="130" y="220" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="Inter">Venus</text>

    {/* Earth */}
    <circle cx="320" cy="200" r="6" fill="#3b82f6" />
    <text x="320" y="220" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="Inter">Earth</text>

    {/* Mars */}
    <circle cx="200" cy="30" r="5" fill="#ef4444" />
    <text x="200" y="20" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="Inter">Mars</text>

    {/* Earth L4 (leading) */}
    <circle cx="260" cy="96" r="8" fill="#00D4AA" />
    <text x="275" y="85" fill="#00D4AA" fontSize="8" fontFamily="Inter">E-L4</text>

    {/* Earth L5 (trailing) */}
    <circle cx="260" cy="304" r="8" fill="#00D4AA" />
    <text x="275" y="318" fill="#00D4AA" fontSize="8" fontFamily="Inter">E-L5</text>

    {/* Venus L4 */}
    <circle cx="165" cy="140" r="8" fill="#00D4AA" />
    <text x="150" y="130" fill="#00D4AA" fontSize="8" fontFamily="Inter">V-L4</text>

    {/* Venus L5 */}
    <circle cx="165" cy="260" r="8" fill="#00D4AA" />
    <text x="150" y="275" fill="#00D4AA" fontSize="8" fontFamily="Inter">V-L5</text>

    {/* Mars L4 */}
    <circle cx="115" cy="60" r="8" fill="#00D4AA" />
    <text x="100" y="50" fill="#00D4AA" fontSize="8" fontFamily="Inter">M-L4</text>

    {/* Mars L5 */}
    <circle cx="285" cy="60" r="8" fill="#00D4AA" />
    <text x="300" y="50" fill="#00D4AA" fontSize="8" fontFamily="Inter">M-L5</text>

    {/* Earth-Sun L1 */}
    <circle cx="280" cy="200" r="6" fill="#00D4AA" opacity="0.7" />
    <text x="280" y="188" textAnchor="middle" fill="#00D4AA" fontSize="7" opacity="0.7" fontFamily="Inter">L1</text>

    {/* Earth-Sun L2 */}
    <circle cx="350" cy="200" r="6" fill="#00D4AA" opacity="0.7" />
    <text x="350" y="188" textAnchor="middle" fill="#00D4AA" fontSize="7" opacity="0.7" fontFamily="Inter">L2</text>

    {/* Legend */}
    <rect x="10" y="360" width="12" height="12" rx="6" fill="#00D4AA" />
    <text x="28" y="370" fill="#94a3b8" fontSize="10" fontFamily="Inter">Neuman Spacecraft</text>
  </svg>
);

// Feature Item Component
const FeatureItem = ({ children }) => (
  <li className="flex items-start gap-3">
    <CheckIcon />
    <span className="text-slate-300">{children}</span>
  </li>
);

// Badge Component
const Badge = ({ children, variant = 'accent' }) => {
  const variants = {
    accent: 'bg-accent/20 text-accent',
    solar: 'bg-solar/20 text-solar',
    slate: 'bg-slate-700 text-slate-400',
  };

  return (
    <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${variants[variant]}`}>
      {children}
    </span>
  );
};

// Capability Card Component
const CapabilityCard = ({ title }) => (
  <div className="bg-navy-900/50 border border-white/10 rounded-lg p-4 text-center">
    <p className="text-white font-medium">{title}</p>
  </div>
);

const Products = () => {
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

  return (
    <div className="min-h-screen bg-navy-900 pt-24">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="font-display text-5xl font-bold text-white">
            Products & Services
          </h1>
          <p className="text-xl text-slate-400 mt-4 max-w-2xl mx-auto">
            Enterprise-grade space weather intelligence and deep space infrastructure
          </p>
        </div>
      </section>

      {/* Section 1 - TSWI-AI Platform */}
      <section id="tswi-ai" className="py-24 bg-navy-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <Badge variant="accent">LIVE BETA</Badge>
              <h2 className="font-display text-4xl font-bold text-white mt-4">
                TSWI-AI Platform
              </h2>
              <p className="text-slate-300 mt-4 leading-relaxed">
                Tactical Space Weather Intelligence powered by machine learning. Our AI analyzes
                solar data in real-time to predict coronal mass ejections, solar flares, and
                geomagnetic storms before they impact your operations.
              </p>

              {/* Features List */}
              <ul className="mt-6 space-y-3">
                <FeatureItem>Real-time CME tracking and trajectory prediction</FeatureItem>
                <FeatureItem>Geomagnetic storm forecasting (Kp index)</FeatureItem>
                <FeatureItem>Asset-specific impact assessments</FeatureItem>
                <FeatureItem>Custom alert thresholds and notifications</FeatureItem>
                <FeatureItem>API integration ready</FeatureItem>
              </ul>

              {/* Pricing Preview */}
              <p className="mt-8 text-slate-400 text-sm">
                <span className="text-white font-medium">Starter (Free Beta)</span> • Professional • Enterprise
              </p>

              {/* CTA */}
              <a
                href="https://tswi-ai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 bg-accent text-navy-900 px-6 py-3 rounded-lg font-semibold hover:bg-accent-light transition-all duration-300"
              >
                Start Free Trial
              </a>
            </div>

            {/* Right - Dashboard Mockup */}
            <div className="rounded-xl bg-navy-700 border border-white/10 aspect-video flex items-center justify-center">
              <p className="text-slate-500">TSWI-AI Dashboard Preview</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Neuman Constellation */}
      <section id="constellation" className="py-24 bg-navy-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Constellation Diagram */}
            <div className="order-2 lg:order-1">
              <ConstellationDiagram />
            </div>

            {/* Right Content */}
            <div className="order-1 lg:order-2">
              <Badge variant="solar">LAUNCHING 2027</Badge>
              <h2 className="font-display text-4xl font-bold text-white mt-4">
                Neuman Constellation
              </h2>
              <p className="text-slate-300 mt-4 leading-relaxed">
                Eight identical 6U Neuman-class spacecraft deployed to Lagrange points across
                the inner solar system. Standardized design enables 10× cost reduction while
                providing persistent deep space coverage.
              </p>

              {/* Capabilities Grid */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <CapabilityCard title="Space Weather Sensing" />
                <CapabilityCard title="PNT Augmentation" />
                <CapabilityCard title="Planetary Defense" />
                <CapabilityCard title="Communications Relay" />
              </div>

              {/* Mission Timeline */}
              <div className="mt-8 space-y-2">
                <p className="text-slate-400 text-sm">
                  <span className="text-solar font-medium">Feb 2027:</span> Launch Window 1 (Venus trajectory)
                </p>
                <p className="text-slate-400 text-sm">
                  <span className="text-solar font-medium">Jul 2027:</span> Launch Window 2 (Mars L4/L5)
                </p>
              </div>

              {/* CTA */}
              <Link
                to="/contact"
                className="inline-block mt-6 border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Join Mission Waitlist
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Data API */}
      <section id="api" className="py-24 bg-navy-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <Badge variant="slate">COMING 2027</Badge>
              <h2 className="font-display text-4xl font-bold text-white mt-4">
                Deep Space Data API
              </h2>
              <p className="text-slate-300 mt-4 leading-relaxed">
                RESTful API access to real-time space environment data from our Lagrange point
                constellation. Built for seamless integration with your existing systems.
              </p>

              {/* Endpoints Preview */}
              <div className="mt-6 space-y-2 font-mono text-sm">
                <p className="text-slate-400">
                  <span className="text-accent">GET</span> /v1/solar-wind
                </p>
                <p className="text-slate-400">
                  <span className="text-accent">GET</span> /v1/particle-flux
                </p>
                <p className="text-slate-400">
                  <span className="text-accent">GET</span> /v1/geomagnetic
                </p>
                <p className="text-slate-400">
                  <span className="text-accent">GET</span> /v1/cme-alerts
                </p>
              </div>

              {/* Tiers */}
              <p className="mt-8 text-slate-400 text-sm">
                <span className="text-white font-medium">Free (100 req/day)</span> • Pro (10K req/day) • Enterprise (Unlimited)
              </p>

              {/* CTA */}
              <Link
                to="/contact"
                className="inline-block mt-6 border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Request API Access
              </Link>
            </div>

            {/* Right - Code Block Mockup */}
            <div className="bg-navy-800 rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <pre className="font-mono text-sm overflow-x-auto">
                <code className="text-slate-300">
{`// Example API Response
{
  "timestamp": "2027-03-15T14:30:00Z",
  "solar_wind": {
    "speed": 450.2,
    "density": 5.8,
    "temperature": 120000
  },
  "geomagnetic": {
    "kp_index": 3,
    "dst": -25,
    "bz": -2.4
  },
  "alerts": [
    {
      "type": "CME",
      "severity": "moderate",
      "eta_hours": 48
    }
  ]
}`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-navy-800 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-slate-400 mb-8">
            Contact us to learn more about our products and how they can support your mission.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-accent text-navy-900 px-8 py-3 rounded-lg font-semibold hover:bg-accent-light transition-all duration-300"
          >
            Contact Sales
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
