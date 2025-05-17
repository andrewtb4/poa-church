import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="https://images.unsplash.com/photo-1548625149-fc4a29cf7092?q=80&w=80&h=80&fit=crop" 
              alt="POA Church" 
              className="h-10 w-10 rounded-full"
            />
            <span className={`ml-2 font-seasons font-bold text-xl ${scrolled ? 'text-poa-black' : 'text-white'}`}>
              POA Church
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link 
              to="/visit" 
              className={`nav-link ${scrolled ? 'text-poa-black' : 'text-white'} ${location.pathname === '/visit' ? 'font-bold' : ''}`}>
              Visit
            </Link>
            <Link 
              to="/groups" 
              className={`nav-link ${scrolled ? 'text-poa-black' : 'text-white'} ${location.pathname === '/groups' ? 'font-bold' : ''}`}>
              POA Groups
            </Link>
            <Link 
              to="/media" 
              className={`nav-link ${scrolled ? 'text-poa-black' : 'text-white'} ${location.pathname === '/media' ? 'font-bold' : ''}`}>
              Media
            </Link>
            <Link 
              to="/give" 
              className={`nav-link ${scrolled ? 'text-poa-black' : 'text-white'} ${location.pathname === '/giving' ? 'font-bold' : ''}`}>
              Give
            </Link>
            <Link 
              to="/learn" 
              className={`nav-link ${scrolled ? 'text-poa-black' : 'text-white'} ${location.pathname === '/learn' ? 'font-bold' : ''}`}>
              Learn
            </Link>
            <Link 
              to="/contact" 
              className={`nav-link ${scrolled ? 'text-poa-black' : 'text-white'} ${location.pathname === '/contact' ? 'font-bold' : ''}`}>
              Contact
            </Link>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/subscribe" className={`btn rounded-full px-5 py-2 ${scrolled ? 'bg-white text-poa-black border border-poa-black' : 'bg-white text-poa-black'}`}>
              Subscribe
            </Link>
            <Link to="/login" className={`btn rounded-full px-5 py-2 ${scrolled ? 'bg-poa-black text-white' : 'bg-poa-black text-white'}`}>
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden focus:outline-none" 
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg 
              className={`w-6 h-6 ${scrolled ? 'text-poa-black' : 'text-white'}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-lg"
        >
          <div className="px-4 py-3 space-y-3">
            <Link 
              to="/visit" 
              className={`block py-2 px-3 text-poa-black rounded-md ${location.pathname === '/visit' ? 'bg-gray-100 font-bold' : ''}`}
            >
              Visit
            </Link>
            <Link 
              to="/groups" 
              className={`block py-2 px-3 text-poa-black rounded-md ${location.pathname === '/groups' ? 'bg-gray-100 font-bold' : ''}`}
            >
              POA Groups
            </Link>
            <Link 
              to="/media" 
              className={`block py-2 px-3 text-poa-black rounded-md ${location.pathname === '/media' ? 'bg-gray-100 font-bold' : ''}`}
            >
              Media
            </Link>
            <Link 
              to="/giving" 
              className={`block py-2 px-3 text-poa-black rounded-md ${location.pathname === '/giving' ? 'bg-gray-100 font-bold' : ''}`}
            >
              Give
            </Link>
            <Link 
              to="/learn" 
              className={`block py-2 px-3 text-poa-black rounded-md ${location.pathname === '/learn' ? 'bg-gray-100 font-bold' : ''}`}
            >
              Learn
            </Link>
            <Link 
              to="/contact" 
              className={`block py-2 px-3 text-poa-black rounded-md ${location.pathname === '/contact' ? 'bg-gray-100 font-bold' : ''}`}
            >
              Contact
            </Link>
            <div className="flex flex-col space-y-2 mt-4">
              <Link to="/subscribe" className="btn bg-white text-poa-black border border-poa-black">
                Subscribe
              </Link>
              <Link to="/login" className="btn bg-poa-black text-white">
                Login
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;