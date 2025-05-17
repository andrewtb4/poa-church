import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HeroSection from '../components/MagicPatterns/HeroSection';

const Home = () => {
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
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection 
        title="Join a Spirit-Filled Community in the Heart of Alexandria"
        description="Welcome to The Pentecostals of Alexandria Where Lives Are Changed. Guide your community toward healing with step-by-step guidance to activate prayer ministries and form interest groups."
        buttonText="Get Started Today"
        buttonLink="/visit"
        backgroundImage="https://images.unsplash.com/photo-1478147427282-58a87a120781"
      />
      
      {/* Worship Times Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="grid md:grid-cols-2 gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
          >
            <div>
              <h2 className="section-title">Worship With Us</h2>
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h3 className="font-seasons text-xl font-bold mb-4">Sundays</h3>
                  <ul className="space-y-2">
                    <li className="flex gap-2">
                      <span className="font-bold">9:00 AM</span>
                      <span>Sunday School</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-bold">10:00 AM</span>
                      <span>Morning Worship</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h3 className="font-seasons text-xl font-bold mb-4">Wednesdays</h3>
                  <ul className="space-y-2">
                    <li className="flex gap-2">
                      <span className="font-bold">7:00 PM</span>
                      <span>POA Wednesday</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 space-y-4">
                <Link 
                  to="/visit" 
                  className="inline-block btn-primary rounded-full px-8 py-3 font-bold"
                >
                  Plan Your Visit
                </Link>
                <p className="text-gray-600">
                  We'd love to see you at our next service. Find directions, parking information, and what to expect.
                </p>
              </div>
            </div>
            
            <div className="h-full">
              <img 
                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18" 
                alt="Church gathering" 
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Latest Message Section */}
      <section className="py-16 bg-gray-50">
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
              Join us for our latest sermon series and grow your faith through powerful teaching.
            </p>
          </motion.div>
          
          <motion.div 
            className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:flex-1">
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
              </div>
              <div className="p-6 md:flex-1 md:p-8">
                <h3 className="font-seasons text-2xl font-bold mb-2">The God Who Sees</h3>
                <p className="text-gray-600 mb-4">Gentry Mangun</p>
                <p className="text-gray-700 mb-6">
                  God sees us in our moments of struggle and triumph. Discover how to connect with the God who sees all and knows all.
                </p>
                <Link to="/media" className="btn-primary rounded-full px-6 py-2">
                  Watch More
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-20 bg-poa-dark text-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
          >
            <h2 className="section-title">Join Our Community</h2>
            <p className="text-xl text-gray-300 mb-10">
              Connect with others, grow in your faith, and find your place in our church family.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/groups" className="btn-primary rounded-full px-8 py-3 font-bold">
                Find a Group
              </Link>
              <Link to="/giving" className="btn-light rounded-full px-8 py-3 font-bold">
                Give Today
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Upcoming Events Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
          >
            <h2 className="section-title">Upcoming Events</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join us for these special events and connect with our church community.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
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
            {/* Event 1 */}
            <motion.div 
              className="bg-white rounded-lg shadow-md overflow-hidden"
              variants={sectionVariants}
            >
              <img 
                src="https://images.unsplash.com/photo-1643487563696-95398e3b1290" 
                alt="Baptism Sunday" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-poa-blue font-bold mb-2">June 4, 2023</div>
                <h3 className="font-seasons text-xl font-bold mb-2">Baptism Sunday</h3>
                <p className="text-gray-600 mb-4">
                  Join us for a special service celebrating new believers taking their next step of faith through baptism.
                </p>
                <Link to="/events/baptism-sunday" className="text-poa-blue font-semibold hover:underline">
                  Learn More →
                </Link>
              </div>
            </motion.div>
            
            {/* Event 2 */}
            <motion.div 
              className="bg-white rounded-lg shadow-md overflow-hidden"
              variants={sectionVariants}
            >
              <img 
                src="https://images.unsplash.com/photo-1620565404581-e0aea3f826ef" 
                alt="Host A Group" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-poa-blue font-bold mb-2">Ongoing</div>
                <h3 className="font-seasons text-xl font-bold mb-2">Host A Group</h3>
                <p className="text-gray-600 mb-4">
                  Learn how you can open your home and heart to host a small group and build meaningful connections.
                </p>
                <Link to="/groups/host" className="text-poa-blue font-semibold hover:underline">
                  Learn More →
                </Link>
              </div>
            </motion.div>
            
            {/* Event 3 */}
            <motion.div 
              className="bg-white rounded-lg shadow-md overflow-hidden"
              variants={sectionVariants}
            >
              <img 
                src="https://images.unsplash.com/photo-1548625149-fc4a29cf7092" 
                alt="Upcoming Events" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-poa-blue font-bold mb-2">Various Dates</div>
                <h3 className="font-seasons text-xl font-bold mb-2">More Events</h3>
                <p className="text-gray-600 mb-4">
                  View our full calendar of upcoming events, services, and special gatherings at POA Church.
                </p>
                <Link to="/events" className="text-poa-blue font-semibold hover:underline">
                  View All Events →
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;