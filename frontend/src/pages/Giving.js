import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

const Giving = () => {
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
        backgroundImage="https://images.unsplash.com/photo-1620565404581-e0aea3f826ef"
        title="Why we Give"
        subtitle="God is generous and so He calls us to be as well. What we do with what God has given us shows the world where our hearts are and helps proclaim the gospel. We want to glorify God in every area of our lives, and that includes what we do with our finances."
        ctaText="Give Now"
        ctaLink="#giving-options"
        overlayOpacity={0.7}
        height="h-[70vh]"
      />
      
      {/* Giving Options Section */}
      <section id="giving-options" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
          >
            <h2 className="section-title">Choose Giving Options</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer several convenient ways to give to the ministry of POA Church.
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
            {/* Option 1: One-Time Gift */}
            <motion.div 
              className="bg-white rounded-lg border border-gray-200 p-8 text-center"
              variants={sectionVariants}
            >
              <div className="flex justify-center mb-6">
                <svg className="w-16 h-16 text-poa-blue" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11 17.938A8.001 8.001 0 0012 2a8 8 0 00-1 15.938v2.074c-3.4.248-6 1.029-6 2.986 0 1.657 2.4 3 7 3s7-1.343 7-3c0-1.957-2.6-2.738-6-2.986v-2.074zm1 4.062c-3.578 0-5.16-.785-5.59-1.012.42-.226 2.002-1.01 5.59-1.01s5.17.784 5.59 1.01c-.42.227-2.002 1.012-5.59 1.012z" />
                </svg>
              </div>
              <h3 className="font-seasons text-2xl font-bold mb-4">One-Time Gift</h3>
              <p className="text-gray-600 mb-6">
                Make a one-time donation to support our church's mission and ministries.
              </p>
              <a 
                href="#" 
                className="block w-full btn-primary rounded-full py-3 font-bold"
                onClick={(e) => { e.preventDefault(); alert('This would link to your donation system'); }}
              >
                Give Now
              </a>
            </motion.div>
            
            {/* Option 2: Recurring Giving */}
            <motion.div 
              className="bg-white rounded-lg border border-gray-200 p-8 text-center"
              variants={sectionVariants}
            >
              <div className="flex justify-center mb-6">
                <svg className="w-16 h-16 text-poa-blue" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-18c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8zm1 8v-4h-2v6h5v-2h-3z" />
                </svg>
              </div>
              <h3 className="font-seasons text-2xl font-bold mb-4">Recurring Gift</h3>
              <p className="text-gray-600 mb-6">
                Set up automatic recurring donations on a schedule that works for you.
              </p>
              <a 
                href="#" 
                className="block w-full btn-primary rounded-full py-3 font-bold"
                onClick={(e) => { e.preventDefault(); alert('This would link to your recurring donation system'); }}
              >
                Set Up Recurring Gift
              </a>
            </motion.div>
            
            {/* Option 3: Text To Give */}
            <motion.div 
              className="bg-white rounded-lg border border-gray-200 p-8 text-center"
              variants={sectionVariants}
            >
              <div className="flex justify-center mb-6">
                <svg className="w-16 h-16 text-poa-blue" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 2H7c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 18H7V4h10v16zm-7-5h4v-2h-4v2z" />
                </svg>
              </div>
              <h3 className="font-seasons text-2xl font-bold mb-4">Text To Give</h3>
              <p className="text-gray-600 mb-6">
                Text "POAGIVE" to 77977 to give easily and securely from your mobile device.
              </p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="font-bold">Text "POAGIVE" to:</p>
                <p className="text-2xl font-bold text-poa-blue">77977</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Why We Give Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
          >
            <div>
              <h2 className="section-title">Stewardship</h2>
              <p className="text-lg text-gray-600 mb-6">
                At POA Church, we believe that everything we have comes from God. We are merely stewards of what He has entrusted to us. Giving is not just about funding ministry, but about growing our faith and trust in God.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                When we give, we acknowledge that God is our provider and that we trust Him with our finances. It's an act of worship that demonstrates our gratitude for all He has done.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-poa-blue mb-6">
                <p className="text-lg italic">
                  "Bring the whole tithe into the storehouse, that there may be food in my house. Test me in this," says the LORD Almighty, "and see if I will not throw open the floodgates of heaven and pour out so much blessing that there will not be room enough to store it."
                </p>
                <p className="text-right font-bold mt-2">Malachi 3:10</p>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18" 
                alt="Church community" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
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
              Here are answers to some common questions about giving at POA Church.
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
              <h3 className="font-seasons text-xl font-bold mb-3">Is my giving tax-deductible?</h3>
              <p className="text-gray-600">
                Yes, POA Church is a registered 501(c)(3) nonprofit organization. All donations are tax-deductible to the extent allowed by law. You will receive an annual giving statement for your tax records.
              </p>
            </motion.div>
            
            {/* FAQ Item 2 */}
            <motion.div 
              className="bg-gray-50 rounded-lg p-6"
              variants={sectionVariants}
            >
              <h3 className="font-seasons text-xl font-bold mb-3">How is my giving used?</h3>
              <p className="text-gray-600">
                Your generous gifts support our church's mission, ministries, outreach efforts, building maintenance, staff, and operations. We are committed to financial transparency and good stewardship of all resources.
              </p>
            </motion.div>
            
            {/* FAQ Item 3 */}
            <motion.div 
              className="bg-gray-50 rounded-lg p-6"
              variants={sectionVariants}
            >
              <h3 className="font-seasons text-xl font-bold mb-3">Can I designate my gift for a specific purpose?</h3>
              <p className="text-gray-600">
                Yes, you can designate your gift for a specific ministry, missions, building fund, or other purposes. Just select the appropriate fund when giving online or note it on your check or envelope.
              </p>
            </motion.div>
            
            {/* FAQ Item 4 */}
            <motion.div 
              className="bg-gray-50 rounded-lg p-6"
              variants={sectionVariants}
            >
              <h3 className="font-seasons text-xl font-bold mb-3">Is online giving secure?</h3>
              <p className="text-gray-600">
                Yes, we use industry-standard encryption and security protocols to ensure that your online giving is safe and secure. Your personal and financial information is protected.
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
              Have other questions about giving? We're here to help!
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
            <h2 className="section-title">Give Today</h2>
            <p className="text-xl text-gray-300 mb-10">
              Your generosity makes a difference in the lives of many and furthers the gospel in our community and around the world.
            </p>
            <a 
              href="#" 
              className="btn-primary rounded-full px-8 py-3 font-bold text-lg"
              onClick={(e) => { e.preventDefault(); alert('This would link to your donation system'); }}
            >
              Give Now
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Giving;