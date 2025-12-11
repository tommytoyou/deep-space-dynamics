import React, { useState } from 'react';

// Icons
const MailIcon = () => (
  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const MapPinIcon = () => (
  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

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

const SpinnerIcon = () => (
  <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interest: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const interestOptions = [
    { value: '', label: 'Select an option' },
    { value: 'tswi-beta', label: 'TSWI-AI Beta Access' },
    { value: 'partnership', label: 'Partnership Opportunities' },
    { value: 'investment', label: 'Investment Inquiries' },
    { value: 'media', label: 'Media / Press' },
    { value: 'careers', label: 'Careers' },
    { value: 'general', label: 'General Inquiry' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    console.log('Form submitted:', formData);

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      interest: '',
      message: '',
    });
  };

  const inputClasses = "w-full bg-navy-900 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:border-accent focus:outline-none transition-colors duration-300";
  const labelClasses = "block text-sm font-medium text-slate-300 mb-2";

  return (
    <div className="min-h-screen bg-navy-900 pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-16 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="font-display text-5xl font-bold text-white">
            Let's Talk
          </h1>
          <p className="text-xl text-slate-400 mt-4 max-w-2xl mx-auto">
            Whether you're interested in TSWI-AI, partnership opportunities, or joining our mission
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
          {/* Left Column - Contact Form */}
          <div className="bg-navy-800/50 rounded-xl p-8 border border-white/10">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
                <p className="text-slate-400">Thanks! We'll be in touch within 24 hours.</p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 text-accent hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className={labelClasses}>
                    Name <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={inputClasses}
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className={labelClasses}>
                    Email <span className="text-accent">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className={inputClasses}
                  />
                </div>

                {/* Company Field */}
                <div>
                  <label htmlFor="company" className={labelClasses}>
                    Company <span className="text-slate-500">(optional)</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company"
                    className={inputClasses}
                  />
                </div>

                {/* Interest Dropdown */}
                <div>
                  <label htmlFor="interest" className={labelClasses}>
                    I'm interested in...
                  </label>
                  <div className="relative">
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className={`${inputClasses} appearance-none cursor-pointer`}
                    >
                      {interestOptions.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDownIcon />
                  </div>
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className={labelClasses}>
                    Message <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project or inquiry..."
                    className={`${inputClasses} resize-none`}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent text-navy-900 font-semibold py-3 rounded-lg hover:bg-accent-light transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <SpinnerIcon />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column - Contact Info */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <div>
              <h3 className="text-xl font-semibold text-white">Direct Contact</h3>
              <div className="mt-4 space-y-3">
                <a
                  href="mailto:contact@deepspacedynamics.us"
                  className="flex items-center gap-3 text-slate-300 hover:text-accent transition-colors"
                >
                  <MailIcon />
                  contact@deepspacedynamics.us
                </a>
                <div className="flex items-center gap-3 text-slate-300">
                  <MapPinIcon />
                  Sheridan, Wyoming, USA
                </div>
              </div>
            </div>

            {/* Connect */}
            <div>
              <h3 className="text-xl font-semibold text-white">Connect</h3>
              <div className="flex gap-4 mt-4">
                <a
                  href="https://www.linkedin.com/company/deep-space-dynamics/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center text-slate-400 hover:text-accent hover:bg-navy-700 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon />
                </a>
                <a
                  href="https://x.com/DeepSpaceUSA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center text-slate-400 hover:text-accent hover:bg-navy-700 transition-all duration-300"
                  aria-label="Twitter / X"
                >
                  <TwitterIcon />
                </a>
              </div>
            </div>

            {/* For Press */}
            <div className="bg-navy-800/50 rounded-lg p-4 border border-white/10">
              <p className="font-semibold text-white">Media Inquiries</p>
              <a
                href="mailto:contact@deepspacedynamics.us"
                className="text-slate-400 text-sm hover:text-accent transition-colors"
              >
                contact@deepspacedynamics.us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
