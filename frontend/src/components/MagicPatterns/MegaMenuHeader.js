import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Exact clone of the header from MagicPatterns
const MegaMenuHeader = ({ 
  logoText = 'POA Church',
  menuItems = [
    { label: 'Visit', link: '/visit' },
    { label: 'POA Groups', link: '/groups' },
    { label: 'Sermons', link: '/media' },
    { label: 'Give', link: '/giving' },
    { 
      label: 'Learn', 
      link: '/learn',
      submenu: [
        { label: 'New Believers', link: '/learn/new-believers' },
        { label: 'Bible Studies', link: '/learn/bible-studies' },
        { label: 'Growth Track', link: '/learn/growth-track' },
        { label: 'Leadership', link: '/learn/leadership' },
      ]
    },
  ]
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
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

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const handleMenuItemHover = (index) => {
    const menuItem = menuItems[index];
    if (menuItem?.submenu) {
      setIsMegaMenuOpen(true);
      setActiveSubmenu(index);
    } else {
      setIsMegaMenuOpen(false);
      setActiveSubmenu(null);
    }
  };

  const handleMenuLeave = () => {
    setIsMegaMenuOpen(false);
    setActiveSubmenu(null);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMegaMenuOpen ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
      onMouseLeave={handleMenuLeave}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="h-10 w-10 bg-black rounded-full flex items-center justify-center">
                <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
              </div>
              <span className={`text-lg font-semibold ${isScrolled || isMegaMenuOpen ? 'text-black' : 'text-white'}`}>
                {logoText}
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex">
            <ul className="flex space-x-8">
              {menuItems.map((item, index) => (
                <li 
                  key={index} 
                  className="relative"
                  onMouseEnter={() => handleMenuItemHover(index)}
                >
                  <Link 
                    to={item.link} 
                    className={`font-medium text-sm flex items-center ${
                      location.pathname === item.link 
                        ? 'text-black font-bold' 
                        : `${isScrolled || isMegaMenuOpen ? 'text-gray-700' : 'text-white'} hover:text-black`
                    }`}
                  >
                    {item.label}
                    {item.submenu && (
                      <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
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
          <button className="lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <svg 
              className={`h-6 w-6 ${isScrolled ? 'text-black' : 'text-white'}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mega Menu */}
      {isMegaMenuOpen && activeSubmenu !== null && menuItems[activeSubmenu]?.submenu && (
        <div className="hidden lg:block absolute w-full bg-white shadow-lg border-t border-gray-200">
          <div className="container mx-auto px-4 py-6">
            <div className="grid grid-cols-4 gap-6">
              {menuItems[activeSubmenu].submenu.map((subItem, index) => (
                <Link 
                  key={index} 
                  to={subItem.link}
                  className="p-4 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="font-medium mb-1">{subItem.label}</div>
                  <p className="text-sm text-gray-600">Explore {subItem.label} resources and guidance</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg border-t border-gray-200">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col divide-y divide-gray-200">
              {menuItems.map((item, index) => (
                <div key={index} className="py-3">
                  <Link 
                    to={item.link} 
                    className={`block font-medium ${location.pathname === item.link ? 'text-black font-bold' : 'text-gray-700'}`}
                  >
                    {item.label}
                  </Link>
                  {item.submenu && (
                    <div className="pl-4 mt-2 space-y-2">
                      {item.submenu.map((subItem, subIndex) => (
                        <Link 
                          key={subIndex} 
                          to={subItem.link}
                          className="block text-sm text-gray-600 hover:text-black"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="py-3 space-y-3">
                <Link
                  to="/subscribe"
                  className="block rounded-full border border-black px-4 py-2 text-sm font-medium text-center transition-colors hover:bg-gray-100"
                >
                  Subscribe
                </Link>
                <Link
                  to="/login"
                  className="block rounded-full bg-black px-4 py-2 text-sm font-medium text-white text-center transition-colors hover:bg-opacity-90"
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

export default MegaMenuHeader;