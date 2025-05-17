import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="h-10 w-10 bg-black rounded-full flex items-center justify-center">
                <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/>
                  <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="currentColor"/>
                </svg>
              </div>
            </Link>
            
            {/* Social Icons - Visible on Desktop */}
            <div className="hidden md:flex ml-4 space-x-2">
              <a href="#" className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm-4-9h8v2H8v-2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link 
                  to="/visit" 
                  className={`font-medium text-sm ${location.pathname === '/visit' ? 'text-black font-bold' : 'text-gray-600 hover:text-black'}`}
                >
                  Visit
                </Link>
              </li>
              <li>
                <Link 
                  to="/groups" 
                  className={`font-medium text-sm ${location.pathname === '/groups' ? 'text-black font-bold' : 'text-gray-600 hover:text-black'}`}
                >
                  POA Groups
                </Link>
              </li>
              <li>
                <Link 
                  to="/media" 
                  className={`font-medium text-sm ${location.pathname === '/media' ? 'text-black font-bold' : 'text-gray-600 hover:text-black'}`}
                >
                  Sermons
                </Link>
              </li>
              <li>
                <Link 
                  to="/giving" 
                  className={`font-medium text-sm ${location.pathname === '/giving' ? 'text-black font-bold' : 'text-gray-600 hover:text-black'}`}
                >
                  Give
                </Link>
              </li>
              <li className="relative group">
                <Link 
                  to="/learn" 
                  className={`font-medium text-sm flex items-center ${location.pathname === '/learn' ? 'text-black font-bold' : 'text-gray-600 hover:text-black'}`}
                >
                  Learn
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                
                {/* Dropdown Menu */}
                <div className="absolute left-0 top-full mt-2 w-48 rounded-md shadow-lg bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="py-1">
                    <Link to="/learn/new-believers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      New Believers
                    </Link>
                    <Link to="/learn/bible-studies" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Bible Studies
                    </Link>
                    <Link to="/learn/growth-track" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Growth Track
                    </Link>
                    <Link to="/learn/leadership" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Leadership
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/subscribe"
              className="rounded-full border border-black px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100"
            >
              Subscribe
            </Link>
            <Link
              to="/login"
              className="rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-opacity-90"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMobileMenu}>
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/visit" 
                className={`font-medium ${location.pathname === '/visit' ? 'text-black font-bold' : 'text-gray-600'}`}
              >
                Visit
              </Link>
              <Link 
                to="/groups" 
                className={`font-medium ${location.pathname === '/groups' ? 'text-black font-bold' : 'text-gray-600'}`}
              >
                POA Groups
              </Link>
              <Link 
                to="/media" 
                className={`font-medium ${location.pathname === '/media' ? 'text-black font-bold' : 'text-gray-600'}`}
              >
                Sermons
              </Link>
              <Link 
                to="/giving" 
                className={`font-medium ${location.pathname === '/giving' ? 'text-black font-bold' : 'text-gray-600'}`}
              >
                Give
              </Link>
              <div className="space-y-2">
                <Link 
                  to="/learn" 
                  className={`font-medium ${location.pathname === '/learn' ? 'text-black font-bold' : 'text-gray-600'}`}
                >
                  Learn
                </Link>
                <div className="pl-4 space-y-2">
                  <Link to="/learn/new-believers" className="block text-sm text-gray-600">
                    New Believers
                  </Link>
                  <Link to="/learn/bible-studies" className="block text-sm text-gray-600">
                    Bible Studies
                  </Link>
                  <Link to="/learn/growth-track" className="block text-sm text-gray-600">
                    Growth Track
                  </Link>
                  <Link to="/learn/leadership" className="block text-sm text-gray-600">
                    Leadership
                  </Link>
                </div>
              </div>
              <div className="pt-2 flex flex-col space-y-3">
                <Link
                  to="/subscribe"
                  className="rounded-full border border-black px-4 py-2 text-sm font-medium text-center transition-colors hover:bg-gray-100"
                >
                  Subscribe
                </Link>
                <Link
                  to="/login"
                  className="rounded-full bg-black px-4 py-2 text-sm font-medium text-white text-center transition-colors hover:bg-opacity-90"
                >
                  Login
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;