import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-space-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">Deep Space Dynamics</h3>
            <p className="text-space-300 text-sm">
              © {currentYear} Deep Space Dynamics. All rights reserved.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
            <a href="#" className="text-space-300 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-space-300 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-space-300 hover:text-white text-sm transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-space-300 hover:text-white text-sm transition-colors">
              Contact
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-space-700 text-center">
          <p className="text-space-400 text-xs">
            Advancing humanity's reach into the cosmos through innovative technology and strategic partnerships.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
