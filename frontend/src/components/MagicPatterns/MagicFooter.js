import React from 'react';
import { Link } from 'react-router-dom';

// Exact clone of the footer from MagicPatterns
const MagicFooter = ({
  newsletterTitle = 'Subscribe To Our Newsletter',
  quickLinks = [
    {
      title: 'Pages',
      links: [
        { label: 'Visit POA', url: '/visit' },
        { label: 'POA Groups', url: '/groups' },
        { label: 'Media', url: '/media' },
        { label: 'Give', url: '/giving' },
        { label: 'Story', url: '/about/story' },
        { label: 'Meet Our Pastors', url: '/about/pastors' },
      ],
    },
    {
      title: 'Quicklinks',
      links: [
        { label: 'POA Kids', url: '/kids' },
        { label: 'Refuge Student Ministries', url: '/students' },
        { label: 'Ministries Discover POA', url: '/ministries/discover' },
        { label: 'Prayer Request', url: '/prayer' },
        { label: 'Adult Ministries', url: '/ministries/adults' },
        { label: 'Restoration', url: '/ministries/restoration' },
      ],
    },
  ],
}) => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Newsletter Subscription */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">{newsletterTitle}</h2>
          <div className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Your Email*"
              className="rounded-full px-6 py-3 flex-grow bg-white text-black focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-white text-black px-8 py-3 font-medium hover:bg-gray-100 transition-colors"
            >
              Submit
            </button>
          </div>
        </div>

        <hr className="border-gray-800 mb-12" />

        {/* Footer Nav Sections */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Quick Links Columns */}
          {quickLinks.map((section, index) => (
            <div key={index}>
              <h3 className="font-bold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link to={link.url} className="text-gray-400 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Service Schedule Column */}
          <div>
            <h3 className="font-bold text-lg mb-4">Service Schedule</h3>
            <div className="space-y-6">
              <div>
                <p className="font-bold mb-2">SUNDAYS:</p>
                <p className="text-gray-400 mb-2">Sunday School - 9:00 AM</p>
                <p className="text-gray-400">Morning Worship - 10:00 AM</p>
              </div>
              <div>
                <p className="font-bold mb-2">WEDNESDAYS:</p>
                <p className="text-gray-400">POA Wednesday - 7:00 PM</p>
              </div>
            </div>
          </div>

          {/* Social Media Column */}
          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="space-y-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                </svg>
                Facebook
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.986.01-4.04.058-.976.045-1.505.207-1.858.344-.466.181-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.048 1.055-.058 1.37-.058 4.041 0 2.67.01 2.986.058 4.04.045.976.207 1.505.344 1.858.181.466.398.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058 2.67 0 2.987-.01 4.04-.058.976-.045 1.505-.207 1.858-.344.466-.181.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041 0-2.67-.01-2.986-.058-4.04-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.055-.048-1.37-.058-4.041-.058zm0 3.063a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 8.468a3.333 3.333 0 100-6.666 3.333 3.333 0 000 6.666zm6.538-8.469a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" />
                </svg>
                Instagram
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.46 5.66a8.38 8.38 0 01-2.36.64 4.2 4.2 0 001.85-2.32c-.82.48-1.72.82-2.67 1.01a4.18 4.18 0 00-7.12 3.81c-3.47-.17-6.56-1.84-8.63-4.37a4.14 4.14 0 00-.57 2.1c0 1.45.74 2.73 1.86 3.47a4.14 4.14 0 01-1.89-.52v.05a4.18 4.18 0 003.35 4.1 4.2 4.2 0 01-1.88.07 4.18 4.18 0 003.9 2.9 8.4 8.4 0 01-5.19 1.79c-.34 0-.67-.02-1-.06a11.82 11.82 0 006.4 1.88c7.68 0 11.88-6.36 11.88-11.87 0-.18-.01-.36-.02-.54a8.5 8.5 0 002.08-2.16l-.01-.01z" />
                </svg>
                X
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                Youtube
              </a>
            </div>
          </div>
        </div>

        {/* White Steeple Books Section */}
        <div className="mb-12">
          <h3 className="text-gray-400 font-bold mb-4">WHITE STEEPLE BOOKS & MUSIC</h3>
          <div className="md:flex md:justify-between md:items-center">
            <p className="text-gray-400 max-w-xl mb-4 md:mb-0">
              Interested in purchasing study materials, media or resources? 
              Please visit WHITE STEEPLE BOOKS AND MUSIC or call 318.487.8997.
            </p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between text-sm text-gray-400">
          <p>© {new Date().getFullYear()} The Pentecostals of Alexandria. All rights reserved.</p>
          <div className="flex mt-4 md:mt-0 space-x-6">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MagicFooter;