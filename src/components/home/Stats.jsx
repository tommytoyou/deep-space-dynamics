import React from 'react';

// Lagrange Points Diagram SVG
const LagrangeDiagram = () => (
  <svg
    viewBox="0 0 300 200"
    className="w-full max-w-[300px] h-auto"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background glow */}
    <defs>
      <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#FF6B35" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#FF6B35" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="lagrangeGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#00D4AA" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#00D4AA" stopOpacity="0" />
      </radialGradient>
    </defs>

    {/* Sun glow */}
    <circle cx="80" cy="100" r="40" fill="url(#sunGlow)" />

    {/* Earth orbit */}
    <ellipse
      cx="150"
      cy="100"
      rx="100"
      ry="60"
      stroke="#334155"
      strokeWidth="1"
      strokeDasharray="4 4"
      fill="none"
    />

    {/* Sun */}
    <circle cx="80" cy="100" r="14" fill="#FF6B35" />
    <text x="80" y="130" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="Inter">
      Sun
    </text>

    {/* Earth */}
    <circle cx="220" cy="100" r="8" fill="#3b82f6" />
    <text x="220" y="125" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="Inter">
      Earth
    </text>

    {/* L4 Point (leading) */}
    <circle cx="180" cy="50" r="16" fill="url(#lagrangeGlow)" />
    <circle cx="180" cy="50" r="5" fill="#00D4AA" />
    <text x="180" y="35" textAnchor="middle" fill="#00D4AA" fontSize="10" fontWeight="600" fontFamily="Inter">
      L4
    </text>

    {/* L5 Point (trailing) */}
    <circle cx="180" cy="150" r="16" fill="url(#lagrangeGlow)" />
    <circle cx="180" cy="150" r="5" fill="#00D4AA" />
    <text x="180" y="175" textAnchor="middle" fill="#00D4AA" fontSize="10" fontWeight="600" fontFamily="Inter">
      L5
    </text>

    {/* L1 Point (between Sun and Earth) */}
    <circle cx="170" cy="100" r="3" fill="#00D4AA" opacity="0.6" />
    <text x="170" y="88" textAnchor="middle" fill="#00D4AA" fontSize="8" opacity="0.6" fontFamily="Inter">
      L1
    </text>

    {/* L2 Point (beyond Earth) */}
    <circle cx="245" cy="100" r="3" fill="#00D4AA" opacity="0.6" />
    <text x="245" y="88" textAnchor="middle" fill="#00D4AA" fontSize="8" opacity="0.6" fontFamily="Inter">
      L2
    </text>

    {/* Connection lines to L4/L5 */}
    <line x1="80" y1="100" x2="180" y2="50" stroke="#00D4AA" strokeWidth="1" strokeDasharray="2 3" opacity="0.3" />
    <line x1="220" y1="100" x2="180" y2="50" stroke="#00D4AA" strokeWidth="1" strokeDasharray="2 3" opacity="0.3" />
    <line x1="80" y1="100" x2="180" y2="150" stroke="#00D4AA" strokeWidth="1" strokeDasharray="2 3" opacity="0.3" />
    <line x1="220" y1="100" x2="180" y2="150" stroke="#00D4AA" strokeWidth="1" strokeDasharray="2 3" opacity="0.3" />
  </svg>
);

const StatCard = ({ value, label, valueColor = 'text-white' }) => (
  <div className="bg-navy-800/50 rounded-lg p-6 text-center">
    <h3 className={`text-4xl font-bold ${valueColor}`}>{value}</h3>
    <p className="text-slate-400 mt-2">{label}</p>
  </div>
);

const Stats = () => {
  const stats = [
    { value: '10×', label: 'Cost reduction vs traditional', valueColor: 'text-white' },
    { value: '8', label: 'Initial constellation spacecraft', valueColor: 'text-white' },
    { value: '2027', label: 'First launch window', valueColor: 'text-solar' },
  ];

  return (
    <section className="py-24 bg-navy-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Why Lagrange Points? */}
          <div>
            <h2 className="font-display text-3xl font-bold text-white">
              Strategic Positioning
            </h2>
            <p className="text-slate-300 mt-4 leading-relaxed">
              Lagrange points are gravitationally stable positions where spacecraft can maintain
              position with minimal fuel. Our constellation at L4 and L5 points across the inner
              solar system provides persistent observation of space weather events hours to days
              before they reach Earth.
            </p>

            {/* Lagrange Diagram */}
            <div className="mt-8 flex justify-center lg:justify-start">
              <LagrangeDiagram />
            </div>
          </div>

          {/* Right Column - Stats Grid */}
          <div className="grid grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
