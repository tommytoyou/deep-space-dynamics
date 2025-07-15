import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/mission', label: 'Mission' },
    { to: '/technology', label: 'Technology' },
    { to: '/product', label: 'Product' },
    { to: '/team', label: 'Team' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold text-space-800 hover:text-primary-600 transition-colors">
              Deep Space Dynamics
            </Link>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-end space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium px-3 py-2 transition-colors ${
                  location.pathname === link.to
                    ? 'text-primary-600 border-b-2 border-primary-600'
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
