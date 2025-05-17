import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';

const Media = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // State for filtering messages
  const [activeFilter, setActiveFilter] = useState('all');

  // Mock data for sermons
  const sermons = [
    {
      id: 1,
      title: 'The God Who Sees',
      speaker: 'Pastor Gentry Mangun',
      date: 'May 21, 2023',
      thumbnail: 'https://images.unsplash.com/photo-1620565404581-e0aea3f826ef',
      youtubeId: 'dQw4w9WgXcQ',
      category: 'sunday-morning'
    },
    {
      id: 2,
      title: 'Living by Faith',
      speaker: 'Pastor Anthony Mangun',
      date: 'May 14, 2023',
      thumbnail: 'https://images.unsplash.com/photo-1620565404581-e0aea3f826ef',
      youtubeId: 'dQw4w9WgXcQ',
      category: 'sunday-morning'
    },
    {
      id: 3,
      title: 'Prayer That Moves Mountains',
      speaker: 'Pastor Gentry Mangun',
      date: 'May 10, 2023',
      thumbnail: 'https://images.unsplash.com/photo-1620565404581-e0aea3f826ef',
      youtubeId: 'dQw4w9WgXcQ',
      category: 'wednesday'
    },
    {
      id: 4,
      title: 'The Power of Unity',
      speaker: 'Pastor Anthony Mangun',
      date: 'May 7, 2023',
      thumbnail: 'https://images.unsplash.com/photo-1620565404581-e0aea3f826ef',
      youtubeId: 'dQw4w9WgXcQ',
      category: 'sunday-morning'
    },
    {
      id: 5,
      title: 'Overcoming Fear',
      speaker: 'Pastor Gentry Mangun',
      date: 'May 3, 2023',
      thumbnail: 'https://images.unsplash.com/photo-1620565404581-e0aea3f826ef',
      youtubeId: 'dQw4w9WgXcQ',
      category: 'wednesday'
    },
    {
      id: 6,
      title: 'Called to Serve',
      speaker: 'Pastor Anthony Mangun',
      date: 'April 30, 2023',
      thumbnail: 'https://images.unsplash.com/photo-1620565404581-e0aea3f826ef',
      youtubeId: 'dQw4w9WgXcQ',
      category: 'sunday-morning'
    },
    {
      id: 7,
      title: 'The Heart of Worship',
      speaker: 'Pastor Gentry Mangun',
      date: 'April 26, 2023',
      thumbnail: 'https://images.unsplash.com/photo-1620565404581-e0aea3f826ef',
      youtubeId: 'dQw4w9WgXcQ',
      category: 'wednesday'
    },
    {
      id: 8,
      title: 'Walking in the Spirit',
      speaker: 'Pastor Anthony Mangun',
      date: 'April 23, 2023',
      thumbnail: 'https://images.unsplash.com/photo-1620565404581-e0aea3f826ef',
      youtubeId: 'dQw4w9WgXcQ',
      category: 'sunday-morning'
    },
    {
      id: 9,
      title: 'Faith Over Fear: Special Event',
      speaker: 'Guest Speaker',
      date: 'April 15, 2023',
      thumbnail: 'https://images.unsplash.com/photo-1620565404581-e0aea3f826ef',
      youtubeId: 'dQw4w9WgXcQ',
      category: 'special'
    }
  ];

  // Filter sermons based on active filter
  const filteredSermons = activeFilter === 'all' 
    ? sermons 
    : sermons.filter(sermon => sermon.category === activeFilter);

  // Function to handle video click
  const handleVideoClick = (youtubeId) => {
    // In a real implementation, this might open a modal or redirect to a dedicated page
    window.open(`https://www.youtube.com/watch?v=${youtubeId}`, '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero 
        backgroundImage="https://images.unsplash.com/photo-1620565404581-e0aea3f826ef"
        title="POA Media"
        subtitle="Watch and listen to messages that will inspire, challenge, and encourage you in your faith journey."
        ctaText="Latest Message"
        ctaLink="#latest-message"
        overlayOpacity={0.7}
        height="h-[70vh]"
      />
      
      {/* Latest Message Section */}
      <section id="latest-message" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
          >
            <h2 className="section-title">Latest Message</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch our most recent sermon and be encouraged in your faith.
            </p>
          </motion.div>
          
          <motion.div 
            className="max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
          >
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative pb-[56.25%]">
                <iframe 
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                  title="The God Who Sees | Gentry Mangun"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap justify-between items-start gap-4">
                  <div>
                    <h3 className="font-seasons text-3xl font-bold mb-2">The God Who Sees</h3>
                    <p className="text-gray-600 text-lg mb-4">Pastor Gentry Mangun | May 21, 2023</p>
                    <p className="text-gray-700 mb-6 max-w-3xl">
                      God sees us in our moments of struggle and triumph. In this powerful message, Pastor Gentry Mangun explores how we can connect with the God who sees all and knows all, yet still loves us unconditionally.
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <a 
                      href="#" 
                      className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-md transition-colors"
                      onClick={(e) => { e.preventDefault(); alert('This would download the sermon notes'); }}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12l-6-6 1.5-1.5L10 9l4.5-4.5L16 6l-6 6z" />
                        <path d="M2 14h16v2H2z" />
                      </svg>
                      Download Notes
                    </a>
                    <a 
                      href="#" 
                      className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-md transition-colors"
                      onClick={(e) => { e.preventDefault(); alert('This would share the sermon'); }}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                      </svg>
                      Share
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Message Archive Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
          >
            <h2 className="section-title">Message Archive</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse our library of past sermons to find inspiration and biblical teaching on a variety of topics.
            </p>
          </motion.div>
          
          {/* Filter Tabs */}
          <motion.div 
            className="flex flex-wrap justify-center gap-2 mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
          >
            <button 
              className={`px-6 py-3 rounded-full font-bold transition-colors ${activeFilter === 'all' ? 'bg-poa-blue text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
              onClick={() => setActiveFilter('all')}
            >
              All Messages
            </button>
            <button 
              className={`px-6 py-3 rounded-full font-bold transition-colors ${activeFilter === 'sunday-morning' ? 'bg-poa-blue text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
              onClick={() => setActiveFilter('sunday-morning')}
            >
              Sunday Morning
            </button>
            <button 
              className={`px-6 py-3 rounded-full font-bold transition-colors ${activeFilter === 'wednesday' ? 'bg-poa-blue text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
              onClick={() => setActiveFilter('wednesday')}
            >
              Wednesday Night
            </button>
            <button 
              className={`px-6 py-3 rounded-full font-bold transition-colors ${activeFilter === 'special' ? 'bg-poa-blue text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
              onClick={() => setActiveFilter('special')}
            >
              Special Events
            </button>
          </motion.div>
          
          {/* Message Grid */}
          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {filteredSermons.map((sermon) => (
              <motion.div 
                key={sermon.id}
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                variants={sectionVariants}
                onClick={() => handleVideoClick(sermon.youtubeId)}
              >
                <div className="relative">
                  <img 
                    src={sermon.thumbnail} 
                    alt={sermon.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-16 w-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
                      <svg className="h-10 w-10 text-poa-blue" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zM8 9l5 3-5 3V9z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-seasons text-xl font-bold mb-2">{sermon.title}</h3>
                  <p className="text-gray-600 mb-2">{sermon.speaker}</p>
                  <p className="text-gray-500 text-sm">{sermon.date}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Load More Button */}
          <motion.div 
            className="text-center mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
          >
            <button 
              className="btn-primary rounded-full px-8 py-3 font-bold"
              onClick={() => alert('This would load more sermons in a real implementation')}
            >
              Load More Messages
            </button>
          </motion.div>
        </div>
      </section>
      
      {/* Podcast Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
          >
            <div>
              <h2 className="section-title">POA Podcast</h2>
              <p className="text-lg text-gray-600 mb-6">
                Take POA with you wherever you go! Subscribe to our podcast to listen to sermons, interviews, and special teaching series on your favorite podcast platform.
              </p>
              <div className="space-y-6">
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="#" 
                    className="flex items-center gap-2 bg-black text-white font-semibold py-3 px-5 rounded-lg"
                    onClick={(e) => { e.preventDefault(); alert('This would link to Apple Podcasts'); }}
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.5 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm-2.5 16.5v-13l8 6.5-8 6.5z" />
                    </svg>
                    Apple Podcasts
                  </a>
                  <a 
                    href="#" 
                    className="flex items-center gap-2 bg-[#1DB954] text-white font-semibold py-3 px-5 rounded-lg"
                    onClick={(e) => { e.preventDefault(); alert('This would link to Spotify'); }}
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.76 14.83c-.16.27-.5.37-.77.21-2.1-1.28-4.73-1.57-7.83-.86-.33.09-.65-.11-.74-.44-.09-.33.11-.65.44-.74 3.4-.77 6.32-.43 8.68 1.05.27.17.36.5.22.78zm1-2.37c-.2.34-.63.45-.97.24-2.4-1.48-6.06-1.9-8.9-1.04-.37.11-.76-.09-.87-.46-.11-.37.09-.76.46-.87 3.23-.98 7.27-.5 10.05 1.2.34.2.45.63.23.97zm.11-2.41c-2.89-1.71-7.65-1.87-10.4-1.03-.44.13-.9-.11-1.03-.55-.13-.44.11-.9.55-1.03 3.17-.96 8.44-.78 11.76 1.19.4.24.54.77.3 1.18-.23.4-.77.53-1.17.3z" />
                    </svg>
                    Spotify
                  </a>
                  <a 
                    href="#" 
                    className="flex items-center gap-2 bg-[#6200EE] text-white font-semibold py-3 px-5 rounded-lg"
                    onClick={(e) => { e.preventDefault(); alert('This would link to Google Podcasts'); }}
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                    </svg>
                    Google Podcasts
                  </a>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="font-bold text-xl mb-4">Latest Episodes</h3>
                <div className="space-y-4">
                  <div className="flex gap-4 items-center p-4 bg-gray-50 rounded-lg">
                    <div className="shrink-0 h-12 w-12 bg-poa-blue rounded-full flex items-center justify-center">
                      <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold">The God Who Sees</h4>
                      <p className="text-sm text-gray-500">May 21, 2023 • 45 min</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-center p-4 bg-gray-50 rounded-lg">
                    <div className="shrink-0 h-12 w-12 bg-poa-blue rounded-full flex items-center justify-center">
                      <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold">Living by Faith</h4>
                      <p className="text-sm text-gray-500">May 14, 2023 • 42 min</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-center p-4 bg-gray-50 rounded-lg">
                    <div className="shrink-0 h-12 w-12 bg-poa-blue rounded-full flex items-center justify-center">
                      <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold">Prayer That Moves Mountains</h4>
                      <p className="text-sm text-gray-500">May 10, 2023 • 38 min</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18" 
                alt="POA Podcast" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-poa-dark text-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
          >
            <h2 className="section-title">Never Miss a Message</h2>
            <p className="text-xl text-gray-300 mb-10">
              Subscribe to receive the latest messages and updates directly in your inbox.
            </p>
            <div className="max-w-md mx-auto">
              <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => { e.preventDefault(); alert('This would subscribe the user to updates'); }}>
                <input 
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-poa-blue"
                  required
                />
                <button 
                  type="submit"
                  className="btn-primary rounded-full px-6 py-3 font-bold whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Media;