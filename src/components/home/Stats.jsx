import React from 'react';

// Lagrange Points Diagram SVG
const LagrangeDiagram = () => (
  <svg
    viewBox="0 0 300 300"
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
    </defs>

    {/* Sun glow */}
    <circle cx="150" cy="150" r="40" fill="url(#sunGlow)" />

    {/* Venus orbit */}
    <circle cx="150" cy="150" r="50" stroke="#334155" strokeWidth="1" fill="none" strokeDasharray="4 4" />

    {/* Earth orbit */}
    <circle cx="150" cy="150" r="85" stroke="#334155" strokeWidth="1" fill="none" strokeDasharray="4 4" />

    {/* Mars orbit */}
    <circle cx="150" cy="150" r="125" stroke="#334155" strokeWidth="1" fill="none" strokeDasharray="4 4" />

    {/* Sun */}
    <circle cx="150" cy="150" r="14" fill="#FF6B35" />

    {/* Venus (positioned at left of orbit) */}
    <circle cx="100" cy="150" r="4" fill="#f59e0b" />
    <text x="100" y="165" textAnchor="middle" fill="#94a3b8" fontSize="7" fontFamily="Inter">Venus</text>

    {/* Venus L4 (60° ahead of Venus) */}
    {/* Venus at 180° (left), L4 at 120°: x = 150 + 50*cos(120°), y = 150 + 50*sin(120°) */}
    <circle cx="125" cy="106.7" r="5" fill="#00D4AA" />
    <text x="110" y="100" fill="#00D4AA" fontSize="7" fontWeight="600" fontFamily="Inter">VS-L4</text>

    {/* Venus L5 (60° behind Venus) */}
    {/* Venus at 180° (left), L5 at 240°: x = 150 + 50*cos(240°), y = 150 + 50*sin(240°) */}
    <circle cx="125" cy="193.3" r="5" fill="#00D4AA" />
    <text x="110" y="205" fill="#00D4AA" fontSize="7" fontWeight="600" fontFamily="Inter">VS-L5</text>

    {/* Earth (positioned at right of orbit) */}
    <circle cx="235" cy="150" r="6" fill="#3b82f6" />
    <text x="235" y="168" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="Inter">Earth</text>

    {/* Moon orbit around Earth (dashed circle) */}
    <circle cx="235" cy="150" r="16" stroke="#475569" strokeWidth="1" fill="none" strokeDasharray="2 2" />

    {/* Moon (positioned on orbit at right side) */}
    <circle cx="251" cy="150" r="2" fill="#9ca3af" />
    <text x="262" y="153" fill="#94a3b8" fontSize="6" fontFamily="Inter">Luna</text>

    {/* Earth-Moon L4 (60° ahead of Moon on lunar orbit) */}
    <circle cx="243" cy="136.1" r="4" fill="#00D4AA" />
    <text x="254" y="132" fill="#00D4AA" fontSize="6" fontWeight="600" fontFamily="Inter">EL-L4</text>

    {/* Earth-Moon L5 (60° behind Moon on lunar orbit) */}
    <circle cx="243" cy="163.9" r="4" fill="#00D4AA" />
    <text x="254" y="170" fill="#00D4AA" fontSize="6" fontWeight="600" fontFamily="Inter">EL-L5</text>

    {/* Earth-Sun L4 (60° ahead of Earth on Earth orbit) */}
    {/* Earth at 0° (right), L4 at -60°: x = 150 + 85*cos(-60°), y = 150 + 85*sin(-60°) */}
    <circle cx="192.5" cy="76.4" r="5" fill="#00D4AA" />
    <text x="205" y="70" fill="#00D4AA" fontSize="7" fontWeight="600" fontFamily="Inter">ES-L4</text>

    {/* Earth-Sun L5 (60° behind Earth on Earth orbit) */}
    {/* Earth at 0° (right), L5 at 60°: x = 150 + 85*cos(60°), y = 150 + 85*sin(60°) */}
    <circle cx="192.5" cy="223.6" r="5" fill="#00D4AA" />
    <text x="205" y="232" fill="#00D4AA" fontSize="7" fontWeight="600" fontFamily="Inter">ES-L5</text>

    {/* Mars (positioned at top of orbit) */}
    <circle cx="150" cy="25" r="4" fill="#ef4444" />
    <text x="150" y="17" textAnchor="middle" fill="#94a3b8" fontSize="7" fontFamily="Inter">Mars</text>

    {/* Mars-Sun L4 (60° ahead of Mars) */}
    {/* Mars at 270° (top), L4 at 210°: x = 150 + 125*cos(210°), y = 150 + 125*sin(210°) */}
    <circle cx="41.7" cy="87.5" r="5" fill="#00D4AA" />
    <text x="25" y="82" fill="#00D4AA" fontSize="7" fontWeight="600" fontFamily="Inter">MS-L4</text>

    {/* Mars-Sun L5 (60° behind Mars) */}
    {/* Mars at 270° (top), L5 at 330°: x = 150 + 125*cos(330°), y = 150 + 125*sin(330°) */}
    <circle cx="258.3" cy="87.5" r="5" fill="#00D4AA" />
    <text x="270" y="82" fill="#00D4AA" fontSize="7" fontWeight="600" fontFamily="Inter">MS-L5</text>
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
