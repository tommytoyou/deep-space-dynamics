import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen"
      style={{ backgroundImage: "url('/images/team/milkyway.jpg')" }}
    >
      {/* Hero Section */}
      <section className="text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Pioneering the Future of
            <span className="block text-primary-400">Space Exploration</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
            Deep Space Dynamics develops cutting-edge technology solutions for next-generation space missions, enabling humanity's expansion beyond Earth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/mission" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              Our Mission
            </Link>
            <Link to="/technology" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              Technology
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Explore the Future?</h2>
        <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
          Join us in shaping the next era of space exploration. Partner with Deep Space Dynamics today.
        </p>
        <Link to="/contact" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors inline-block">
          Get in Touch
        </Link>
      </section>
    </div>
  );
};

export default Home;