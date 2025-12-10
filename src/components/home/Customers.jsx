import React from 'react';

const LogoPlaceholder = ({ name }) => (
  <div className="bg-slate-800/50 rounded px-6 py-3 text-slate-500 text-sm font-medium">
    {name}
  </div>
);

const Customers = () => {
  const customers = [
    'NASA',
    'NOAA',
    'Space Force',
    'Commercial Operators',
  ];

  return (
    <section className="py-16 bg-navy-800 border-y border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        {/* Eyebrow */}
        <p className="text-slate-500 tracking-widest text-sm text-center uppercase">
          Built For
        </p>

        {/* Logo Row */}
        <div className="flex justify-center items-center gap-8 md:gap-12 mt-8 flex-wrap">
          {customers.map((customer, index) => (
            <LogoPlaceholder key={index} name={customer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Customers;
