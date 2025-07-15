<div className="bg-gray-50 py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Team</h1>

    {/* Side-by-side layout */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {/* Tom */}
      <div className="bg-white p-6 rounded-lg shadow text-center">
        <img src="/images/team/tom.jpeg" alt="Tom Erickson" className="w-28 h-28 rounded-full mx-auto mb-4 object-cover" />
        <h2 className="text-xl font-semibold">Tom Erickson</h2>
        <p className="text-blue-600 font-medium">Founder & CEO</p>
        <p className="text-sm text-gray-600 mt-2">20+ years in public engagement, space entrepreneurship, and project management. Visionary behind Deep Space Dynamics.</p>
      </div>

      {/* Michael */}
      <div className="bg-white p-6 rounded-lg shadow text-center">
        <img src="/images/team/michael.jpeg" alt="Michael Garner" className="w-28 h-28 rounded-full mx-auto mb-4 object-cover" />
        <h2 className="text-xl font-semibold">Michael Garner</h2>
        <p className="text-blue-600 font-medium">CISO</p>
        <p className="text-sm text-gray-600 mt-2">Cyber Security Analyst with 15+ years experience in threat identification and IS defense.</p>
      </div>

      {/* David */}
      <div className="bg-white p-6 rounded-lg shadow text-center">
        <img src="/images/team/david.jpeg" alt="David Carter" className="w-28 h-28 rounded-full mx-auto mb-4 object-cover" />
        <h2 className="text-xl font-semibold">David Carter</h2>
        <p className="text-blue-600 font-medium">Fractional CSO</p>
        <p className="text-sm text-gray-600 mt-2">Founder of Deep Planet. Expert in space intelligence & critical infrastructure defense.</p>
      </div>
    </div>
  </div>
</div>
export default Team;
