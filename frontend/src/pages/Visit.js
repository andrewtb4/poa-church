import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

const Visit = () => {
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
      <Hero 
        backgroundImage="https://images.unsplash.com/photo-1548625149-fc4a29cf7092"
        title="Visit Us"
        subtitle="We'd love to welcome you to The Pentecostals of Alexandria. Find out what to expect when you visit and how to get here."
        ctaText="Plan Your Visit"
        ctaLink="#plan-your-visit"
        height="h-[70vh]"
        overlayOpacity={0.6}
      />
      
      {/* Plan Your Visit Section */}
      <section id="plan-your-visit" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
          >
            <div>
              <h2 className="section-title">What to Expect</h2>
              <p className="text-lg text-gray-600 mb-6">
                When you visit POA Church, you can expect a warm welcome, vibrant worship, and practical biblical teaching. We're a diverse community of people who love God and love others.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="shrink-0 bg-blue-100 rounded-full p-3">
                    <svg className="w-6 h-6 text-poa-blue" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">Friendly People</h3>
                    <p className="text-gray-600">
                      Our greeters will welcome you and help you find your way around.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="shrink-0 bg-blue-100 rounded-full p-3">
                    <svg className="w-6 h-6 text-poa-blue" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">Inspiring Worship</h3>
                    <p className="text-gray-600">
                      Experience uplifting music and heartfelt worship.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="shrink-0 bg-blue-100 rounded-full p-3">
                    <svg className="w-6 h-6 text-poa-blue" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">Biblical Teaching</h3>
                    <p className="text-gray-600">
                      Practical messages that apply to your everyday life.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="shrink-0 bg-blue-100 rounded-full p-3">
                    <svg className="w-6 h-6 text-poa-blue" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z" />
                      <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">Children's Programs</h3>
                    <p className="text-gray-600">
                      Safe and fun environments for kids of all ages.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <h3 className="font-seasons text-2xl font-bold mb-6">Service Times</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-xl mb-2">Sundays</h4>
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span>Sunday School</span>
                        <span className="font-bold">9:00 AM</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Morning Worship</span>
                        <span className="font-bold">10:00 AM</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-xl mb-2">Wednesdays</h4>
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span>POA Wednesday</span>
                        <span className="font-bold">7:00 PM</span>
                      </li>
                    </ul>
                  </div>
                  
                  <a 
                    href="#" 
                    className="block w-full btn-primary rounded-full py-3 text-center font-bold"
                    onClick={(e) => { e.preventDefault(); alert('This would add the event to your calendar'); }}
                  >
                    Add to Calendar
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Location Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
          >
            <h2 className="section-title">Find Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're located in the heart of Alexandria, LA. Here's how to find us.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
          >
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-seasons text-2xl font-bold mb-4">Our Location</h3>
              <address className="not-italic">
                <p className="text-lg mb-4">
                  <strong>The Pentecostals of Alexandria</strong><br />
                  2817 Rapides Avenue<br />
                  Alexandria, LA 71301
                </p>
                <p className="text-lg mb-6">
                  <strong>Phone:</strong> (318) 445-6238
                </p>
              </address>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://goo.gl/maps/1234" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary rounded-full py-3 px-6 text-center font-bold"
                >
                  Get Directions
                </a>
                <Link 
                  to="/contact" 
                  className="btn-outline rounded-full py-3 px-6 text-center font-bold"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            
            <div className="h-80 bg-gray-300 rounded-lg overflow-hidden">
              {/* This would be a Google Map in a real implementation */}
              <div className="h-full w-full flex items-center justify-center bg-gray-200">
                <p className="text-gray-500 text-lg font-semibold">Interactive Map</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
          >
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions before you visit? Here are answers to some common questions.
            </p>
          </motion.div>
          
          <motion.div 
            className="max-w-3xl mx-auto space-y-6"
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
            {/* FAQ Item 1 */}
            <motion.div 
              className="bg-gray-50 rounded-lg p-6"
              variants={sectionVariants}
            >
              <h3 className="font-seasons text-xl font-bold mb-3">What should I wear?</h3>
              <p className="text-gray-600">
                Come as you are! Some people dress up, while others come in casual attire. We're more concerned with you being here than what you wear.
              </p>
            </motion.div>
            
            {/* FAQ Item 2 */}
            <motion.div 
              className="bg-gray-50 rounded-lg p-6"
              variants={sectionVariants}
            >
              <h3 className="font-seasons text-xl font-bold mb-3">Where do I park?</h3>
              <p className="text-gray-600">
                We have a large parking lot with designated visitor parking spaces. Our parking team will help direct you.
              </p>
            </motion.div>
            
            {/* FAQ Item 3 */}
            <motion.div 
              className="bg-gray-50 rounded-lg p-6"
              variants={sectionVariants}
            >
              <h3 className="font-seasons text-xl font-bold mb-3">What about my kids?</h3>
              <p className="text-gray-600">
                We have safe, fun programs for children of all ages. Our check-in team will help you register your children and find the right classroom.
              </p>
            </motion.div>
            
            {/* FAQ Item 4 */}
            <motion.div 
              className="bg-gray-50 rounded-lg p-6"
              variants={sectionVariants}
            >
              <h3 className="font-seasons text-xl font-bold mb-3">How long is the service?</h3>
              <p className="text-gray-600">
                Our services typically last about 90 minutes, including worship and the message.
              </p>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="text-center mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
          >
            <p className="text-lg text-gray-600 mb-6">
              Have other questions? We're here to help!
            </p>
            <Link to="/contact" className="btn-primary rounded-full px-8 py-3 font-bold">
              Contact Us
            </Link>
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
            <h2 className="section-title">We Can't Wait to Meet You!</h2>
            <p className="text-xl text-gray-300 mb-10">
              Join us this Sunday for a life-changing worship experience. We have a place for you and your family!
            </p>
            <a 
              href="#plan-your-visit" 
              className="btn-primary rounded-full px-8 py-3 font-bold text-lg"
            >
              Plan Your Visit
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Visit;