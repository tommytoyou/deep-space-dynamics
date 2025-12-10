import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import Government from './pages/solutions/Government';
import Commercial from './pages/solutions/Commercial';
import Cislunar from './pages/solutions/Cislunar';
import Developers from './pages/Developers';
import Resources from './pages/Resources';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product" element={<Navigate to="/products" replace />} />
              <Route path="/solutions/government" element={<Government />} />
              <Route path="/solutions/commercial" element={<Commercial />} />
              <Route path="/solutions/cislunar" element={<Cislunar />} />
              <Route path="/developers" element={<Developers />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/about" element={<About />} />
              {/* Legacy routes redirect to About */}
              <Route path="/team" element={<Navigate to="/about" replace />} />
              <Route path="/mission" element={<Navigate to="/about" replace />} />
              <Route path="/technology" element={<Navigate to="/products" replace />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;