import React from 'react';
import { Link } from 'react-router-dom';

// Social Icons
const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const solutionsLinks = [
    { to: '/solutions/government', label: 'Government' },
    { to: '/solutions/commercial', label: 'Commercial' },
    { to: '/solutions/cislunar', label: 'Cislunar' },
  ];

  const developersLinks = [
    { to: '/developers#api-docs', label: 'API Documentation' },
    { to: '/developers#guides', label: 'Integration Guides' },
    { to: '/contact', label: 'Support' },
  ];

  const resourcesLinks = [
    { to: '/resources', label: 'Blog' },
    { to: '/resources', label: 'Whitepapers' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-navy-900 border-t border-white/10 py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top Section - 4 Column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1 - Company Info */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-bold text-white text-lg hover:text-accent transition-colors">
              Deep Space Dynamics
            </Link>
            <p className="text-slate-500 text-sm mt-2">
              Persistent deep space intelligence
            </p>
            <p className="text-slate-500 text-sm mt-1">
              Sheridan, Wyoming
            </p>
            {/* Social Links */}
            <div className="flex gap-3 mt-4">
              <a
                href="https://www.linkedin.com/company/deep-space-dynamics/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-navy-800 flex items-center justify-center text-slate-400 hover:text-accent hover:bg-navy-700 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://x.com/DeepSpaceUSA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-navy-800 flex items-center justify-center text-slate-400 hover:text-accent hover:bg-navy-700 transition-all duration-300"
                aria-label="Twitter / X"
              >
                <TwitterIcon />
              </a>
            </div>
          </div>

          {/* Column 2 - Solutions */}
          <div>
            <h4 className="text-white font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2">
              {solutionsLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-slate-400 hover:text-accent text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Developers */}
          <div>
            <h4 className="text-white font-semibold mb-4">Developers</h4>
            <ul className="space-y-2">
              {developersLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-slate-400 hover:text-accent text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {resourcesLinks.map((link, index) => (
                <li key={`${link.label}-${index}`}>
                  <Link
                    to={link.to}
                    className="text-slate-400 hover:text-accent text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} Deep Space Dynamics. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
