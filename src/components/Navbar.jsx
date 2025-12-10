import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

// Icons as simple SVG components
const MoonIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

const SunIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const ChevronDownIcon = ({ className = '' }) => (
  <svg className={`w-4 h-4 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const Navbar = () => {
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [developersDropdownOpen, setDevelopersDropdownOpen] = useState(false);
  const [mobileSolutionsExpanded, setMobileSolutionsExpanded] = useState(false);
  const [mobileDevelopersExpanded, setMobileDevelopersExpanded] = useState(false);
  const solutionsDropdownRef = useRef(null);
  const developersDropdownRef = useRef(null);
  const solutionsTimeoutRef = useRef(null);
  const developersTimeoutRef = useRef(null);

  // Solutions dropdown - Products column
  const productLinks = [
    { to: '/products#tswi-ai', label: 'TSWI-AI Platform' },
    { to: '/products#constellation', label: 'Neuman Constellation' },
    { to: '/products#api', label: 'Data API' },
  ];

  // Solutions dropdown - By Sector column
  const sectorLinks = [
    { to: '/solutions/government', label: 'Government' },
    { to: '/solutions/commercial', label: 'Commercial Operators' },
    { to: '/solutions/cislunar', label: 'Cislunar Economy' },
  ];

  // Developers dropdown
  const developerLinks = [
    { to: '/developers#api-docs', label: 'API Documentation' },
    { to: '/developers#guides', label: 'Integration Guides' },
    { to: '/contact', label: 'Support' },
  ];

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (solutionsDropdownRef.current && !solutionsDropdownRef.current.contains(event.target)) {
        setSolutionsDropdownOpen(false);
      }
      if (developersDropdownRef.current && !developersDropdownRef.current.contains(event.target)) {
        setDevelopersDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileSolutionsExpanded(false);
    setMobileDevelopersExpanded(false);
  }, [location.pathname]);

  const handleSolutionsEnter = () => {
    if (solutionsTimeoutRef.current) {
      clearTimeout(solutionsTimeoutRef.current);
    }
    setSolutionsDropdownOpen(true);
    setDevelopersDropdownOpen(false);
  };

  const handleSolutionsLeave = () => {
    solutionsTimeoutRef.current = setTimeout(() => {
      setSolutionsDropdownOpen(false);
    }, 150);
  };

  const handleDevelopersEnter = () => {
    if (developersTimeoutRef.current) {
      clearTimeout(developersTimeoutRef.current);
    }
    setDevelopersDropdownOpen(true);
    setSolutionsDropdownOpen(false);
  };

  const handleDevelopersLeave = () => {
    developersTimeoutRef.current = setTimeout(() => {
      setDevelopersDropdownOpen(false);
    }, 150);
  };

  const isSolutionsActive = location.pathname === '/products' || location.pathname.startsWith('/products') || location.pathname.startsWith('/solutions');
  const isDevelopersActive = location.pathname.startsWith('/developers');

  return (
    <nav className="sticky top-0 z-50 glass-morphism-navy border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-xl font-bold text-white hover:text-accent transition-colors duration-300"
            >
              Deep Space Dynamics
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {/* Home Link */}
            <Link
              to="/"
              className={`text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300 ${
                location.pathname === '/'
                  ? 'text-accent bg-white/5'
                  : 'text-white/80 hover:text-white hover:bg-white/5'
              }`}
            >
              Home
            </Link>

            {/* Solutions Dropdown (Multi-column) */}
            <div
              ref={solutionsDropdownRef}
              className="relative"
              onMouseEnter={handleSolutionsEnter}
              onMouseLeave={handleSolutionsLeave}
            >
              <button
                className={`flex items-center gap-1 text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300 ${
                  isSolutionsActive
                    ? 'text-accent bg-white/5'
                    : 'text-white/80 hover:text-white hover:bg-white/5'
                }`}
                onClick={() => setSolutionsDropdownOpen(!solutionsDropdownOpen)}
              >
                Solutions
                <ChevronDownIcon
                  className={`transition-transform duration-300 ${solutionsDropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {/* Solutions Dropdown Menu - Multi-column */}
              <div
                className={`absolute top-full left-0 mt-2 py-4 px-2 glass-morphism-navy rounded-lg border border-white/10 shadow-xl transition-all duration-300 ${
                  solutionsDropdownOpen
                    ? 'opacity-100 visible translate-y-0'
                    : 'opacity-0 invisible -translate-y-2'
                }`}
              >
                <div className="grid grid-cols-2 gap-4 min-w-[400px]">
                  {/* Products Column */}
                  <div>
                    <h4 className="text-accent text-xs font-semibold uppercase tracking-wider px-4 pb-2 mb-2 border-b border-white/10">
                      Products
                    </h4>
                    {productLinks.map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        className="block px-4 py-2 text-sm text-white/80 hover:text-white border-l-2 border-transparent hover:border-accent transition-all duration-300"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                  {/* By Sector Column */}
                  <div>
                    <h4 className="text-accent text-xs font-semibold uppercase tracking-wider px-4 pb-2 mb-2 border-b border-white/10">
                      By Sector
                    </h4>
                    {sectorLinks.map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        className="block px-4 py-2 text-sm text-white/80 hover:text-white border-l-2 border-transparent hover:border-accent transition-all duration-300"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Developers Dropdown */}
            <div
              ref={developersDropdownRef}
              className="relative"
              onMouseEnter={handleDevelopersEnter}
              onMouseLeave={handleDevelopersLeave}
            >
              <button
                className={`flex items-center gap-1 text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300 ${
                  isDevelopersActive
                    ? 'text-accent bg-white/5'
                    : 'text-white/80 hover:text-white hover:bg-white/5'
                }`}
                onClick={() => setDevelopersDropdownOpen(!developersDropdownOpen)}
              >
                Developers
                <ChevronDownIcon
                  className={`transition-transform duration-300 ${developersDropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {/* Developers Dropdown Menu */}
              <div
                className={`absolute top-full left-0 mt-2 w-56 py-2 glass-morphism-navy rounded-lg border border-white/10 shadow-xl transition-all duration-300 ${
                  developersDropdownOpen
                    ? 'opacity-100 visible translate-y-0'
                    : 'opacity-0 invisible -translate-y-2'
                }`}
              >
                {developerLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="block px-4 py-3 text-sm text-white/80 hover:text-white border-l-2 border-transparent hover:border-accent transition-all duration-300"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* About Link */}
            <Link
              to="/about"
              className={`text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300 ${
                location.pathname === '/about'
                  ? 'text-accent bg-white/5'
                  : 'text-white/80 hover:text-white hover:bg-white/5'
              }`}
            >
              About
            </Link>

            {/* Resources Link */}
            <Link
              to="/resources"
              className={`text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300 ${
                location.pathname === '/resources'
                  ? 'text-accent bg-white/5'
                  : 'text-white/80 hover:text-white hover:bg-white/5'
              }`}
            >
              Resources
            </Link>

            {/* Contact Link */}
            <Link
              to="/contact"
              className={`text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300 ${
                location.pathname === '/contact'
                  ? 'text-accent bg-white/5'
                  : 'text-white/80 hover:text-white hover:bg-white/5'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Right Side Elements */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/5 transition-all duration-300"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <MoonIcon /> : <SunIcon />}
            </button>

            {/* Request Demo Button */}
            <Link
              to="/contact"
              className="bg-accent text-navy-900 font-semibold px-4 py-2 rounded-lg hover:bg-accent-light transition-all duration-300 transform hover:scale-105"
            >
              Request Demo
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Theme Toggle (Mobile) */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/5 transition-all duration-300"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <MoonIcon /> : <SunIcon />}
            </button>

            {/* Hamburger Menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/5 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-in Menu */}
      <div
        className={`md:hidden fixed inset-0 top-16 z-40 transition-all duration-300 ${
          mobileMenuOpen ? 'visible' : 'invisible'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-72 glass-morphism-navy border-l border-white/10 transform transition-transform duration-300 ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full p-4">
            {/* Navigation Links */}
            <div className="flex-1 space-y-1">
              {/* Home */}
              <Link
                to="/"
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  location.pathname === '/'
                    ? 'text-accent bg-white/5'
                    : 'text-white/80 hover:text-white hover:bg-white/5'
                }`}
              >
                Home
              </Link>

              {/* Solutions (Expandable Accordion) */}
              <div>
                <button
                  onClick={() => setMobileSolutionsExpanded(!mobileSolutionsExpanded)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isSolutionsActive
                      ? 'text-accent bg-white/5'
                      : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  Solutions
                  <ChevronDownIcon
                    className={`transition-transform duration-300 ${mobileSolutionsExpanded ? 'rotate-180' : ''}`}
                  />
                </button>

                {/* Solutions Submenu */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    mobileSolutionsExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pl-4 py-2 space-y-1">
                    {/* Products Section */}
                    <h4 className="text-accent text-xs font-semibold uppercase tracking-wider px-4 pt-2 pb-1">
                      Products
                    </h4>
                    {productLinks.map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        className="block px-4 py-2 text-sm text-white/70 hover:text-white border-l-2 border-transparent hover:border-accent transition-all duration-300"
                      >
                        {link.label}
                      </Link>
                    ))}
                    {/* By Sector Section */}
                    <h4 className="text-accent text-xs font-semibold uppercase tracking-wider px-4 pt-3 pb-1">
                      By Sector
                    </h4>
                    {sectorLinks.map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        className="block px-4 py-2 text-sm text-white/70 hover:text-white border-l-2 border-transparent hover:border-accent transition-all duration-300"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Developers (Expandable Accordion) */}
              <div>
                <button
                  onClick={() => setMobileDevelopersExpanded(!mobileDevelopersExpanded)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isDevelopersActive
                      ? 'text-accent bg-white/5'
                      : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  Developers
                  <ChevronDownIcon
                    className={`transition-transform duration-300 ${mobileDevelopersExpanded ? 'rotate-180' : ''}`}
                  />
                </button>

                {/* Developers Submenu */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    mobileDevelopersExpanded ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pl-4 py-2 space-y-1">
                    {developerLinks.map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        className="block px-4 py-2 text-sm text-white/70 hover:text-white border-l-2 border-transparent hover:border-accent transition-all duration-300"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* About */}
              <Link
                to="/about"
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  location.pathname === '/about'
                    ? 'text-accent bg-white/5'
                    : 'text-white/80 hover:text-white hover:bg-white/5'
                }`}
              >
                About
              </Link>

              {/* Resources */}
              <Link
                to="/resources"
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  location.pathname === '/resources'
                    ? 'text-accent bg-white/5'
                    : 'text-white/80 hover:text-white hover:bg-white/5'
                }`}
              >
                Resources
              </Link>

              {/* Contact */}
              <Link
                to="/contact"
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  location.pathname === '/contact'
                    ? 'text-accent bg-white/5'
                    : 'text-white/80 hover:text-white hover:bg-white/5'
                }`}
              >
                Contact
              </Link>
            </div>

            {/* Request Demo Button (Bottom) */}
            <div className="pt-4 border-t border-white/10">
              <Link
                to="/contact"
                className="block w-full text-center bg-accent text-navy-900 font-semibold px-4 py-3 rounded-lg hover:bg-accent-light transition-all duration-300"
              >
                Request Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
