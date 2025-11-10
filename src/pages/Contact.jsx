import React from 'react';

const Contact = () => {

  return (
    <div
      className="bg-cover bg-center min-h-screen"
      style={{ backgroundImage: "url('/images/team/milkyway.jpg')" }}
    >
      <div className="min-h-screen p-6 pt-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-white mb-8 mt-8">Contact Us</h1>
          <p className="text-white text-center mb-16">
            Have a mission, investment inquiry, or collaboration idea? Let's talk.
          </p>

          {/* Three Contact Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* General Contact */}
            <div className="bg-[#eeeeee] bg-opacity-95 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-indigo-700 mb-4">General Contact</h2>
              <div className="space-y-3">
                <div>
                  <h3 className="font-medium text-gray-700">Address</h3>
                  <p className="text-gray-600">
                    30 N Gould St Ste R<br />
                    Sheridan, WY 82801<br />
                    United States
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-700">Email</h3>
                  <p className="text-gray-600">
                    <a href="mailto:info@company.com" className="text-indigo-600 hover:text-indigo-700">
                      contact@deepspacedynamics.us
                    </a>
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-700">Phone</h3>
                  <p className="text-gray-600">+1 (771) 220-4452</p>
                </div>
              </div>
            </div>

            {/* Press Inquiries */}
            <div className="bg-[#eeeeee] bg-opacity-95 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Press Inquiries</h2>
              <div className="space-y-3">
                <p className="text-gray-600">
                  For media inquiries, interviews, and press releases about our space missions and technology.
                </p>
                <div>
                  <h3 className="font-medium text-gray-700">Press Contact</h3>
                  <p className="text-gray-600">
                    <a href="mailto:press@company.com" className="text-indigo-600 hover:text-indigo-700">
                      contact@deepspacedynamics.us
                    </a>
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-700">Media Kit</h3>
                  <p className="text-gray-600">
                    <a href="#" className="text-indigo-600 hover:text-indigo-700">
                      Download Press Kit
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Business Partners */}
            <div className="bg-[#eeeeee] bg-opacity-95 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Business Partners</h2>
              <div className="space-y-3">
                <p className="text-gray-600">
                  For partnerships, collaborations, and business development opportunities.
                </p>
                <div>
                  <h3 className="font-medium text-gray-700">Partnerships</h3>
                  <p className="text-gray-600">
                    <a href="mailto:partners@company.com" className="text-indigo-600 hover:text-indigo-700">
                     tom.erickson@deepspacedynamics.us 
                    </a>
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-700">Business Development</h3>
                  <p className="text-gray-600">
                    <a href="mailto:business@company.com" className="text-indigo-600 hover:text-indigo-700">
                     Dave@deepspacedynamics.us 
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;