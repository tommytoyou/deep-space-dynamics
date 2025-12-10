import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/home/Hero';
import ProductsPreview from '../components/home/ProductsPreview';
import Stats from '../components/home/Stats';
import Customers from '../components/home/Customers';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Products Preview Section */}
      <ProductsPreview />

      {/* Stats Section */}
      <Stats />

      {/* Customers Section */}
      <Customers />

      {/* CTA Section */}
      <section className="relative py-20 text-center bg-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Explore the Future?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Join us in shaping the next era of space exploration. Partner with Deep Space Dynamics today.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-accent text-navy-900 px-8 py-3 rounded-lg font-semibold hover:bg-accent-light transition-all duration-300 transform hover:scale-105"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
