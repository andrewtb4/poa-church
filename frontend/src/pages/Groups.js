import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

const Groups = () => {
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

  // Mock data for groups
  const groups = [
    {
      id: 1,
      title: 'Young Adults',
      description: 'Connect with other young adults in their 20s and 30s for fellowship, Bible study, and community service.',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18',
      days: 'Tuesdays',
      time: '7:00 PM',
      location: 'Church Campus - Room 201'
    },
    {
      id: 2,
      title: 'Married Couples',
      description: 'Strengthen your marriage through Bible-based teaching, discussion, and support from other couples.',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18',
      days: 'Every other Thursday',
      time: '6:30 PM',
      location: 'Rotating Homes'
    },
    {
      id: 3,
      title: 'Women of Faith',
      description: 'Join with other women for encouragement, prayer, and study of God\'s Word.',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18',
      days: 'Wednesdays',
      time: '10:00 AM',
      location: 'Church Campus - Room 103'
    },
    {
      id: 4,
      title: 'Men\'s Fellowship',
      description: 'Build brotherhood and grow in your faith alongside other men seeking to follow Christ.',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18',
      days: 'First Saturday',
      time: '8:00 AM',
      location: 'Church Campus - Fellowship Hall'
    },
    {
      id: 5,
      title: 'College Students',
      description: 'A community of college-age students growing in faith together during this pivotal time of life.',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18',
      days: 'Sundays',
      time: '12:30 PM',
      location: 'Church Campus - Room 105'
    },
    {
      id: 6,
      title: 'Senior Saints',
      description: 'Fellowship and Bible study for seniors who want to continue growing in their faith journey.',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18',
      days: 'Tuesdays',
      time: '2:00 PM',
      location: 'Church Campus - Fellowship Hall'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero 
        backgroundImage="https://images.unsplash.com/photo-1511632765486-a01980e01a18"
        title="POA Groups"
        subtitle="Connect with others, grow in your faith, and find your place in our church family through POA Groups."
        ctaText="Find a Group"
        ctaLink="#find-groups"
        height="h-[70vh]"
        overlayOpacity={0.7}
      />
      
      {/* About Groups Section */}
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
              <h2 className="section-title">Why Join a Group?</h2>
              <p className="text-lg text-gray-600 mb-6">
                At POA Church, we believe that life change happens best in the context of relationships. POA Groups are the primary way to build those relationships and grow in your faith.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                In a POA Group, 8-12 people meet regularly to pursue spiritual growth, build meaningful relationships, and serve others together.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="shrink-0 bg-blue-100 rounded-full p-3">
                    <svg className="w-6 h-6 text-poa-blue" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">Connection</h3>
                    <p className="text-gray-600">
                      Develop authentic relationships with others who share your faith.
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
                    <h3 className="font-bold text-xl mb-1">Growth</h3>
                    <p className="text-gray-600">
                      Deepen your relationship with God through Bible study and prayer.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="shrink-0 bg-blue-100 rounded-full p-3">
                    <svg className="w-6 h-6 text-poa-blue" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">Support</h3>
                    <p className="text-gray-600">
                      Receive prayer, encouragement, and practical help during life's challenges.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="shrink-0 bg-blue-100 rounded-full p-3">
                    <svg className="w-6 h-6 text-poa-blue" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                      <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">Purpose</h3>
                    <p className="text-gray-600">
                      Discover and use your gifts to serve others and make a difference.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18" 
                alt="People in a small group" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Find a Group Section */}
      <section id="find-groups" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
          >
            <h2 className="section-title">Find Your Group</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse our current groups and find the perfect fit for you. New groups form regularly throughout the year.
            </p>
          </motion.div>
          
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
            {groups.map((group) => (
              <motion.div 
                key={group.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                variants={sectionVariants}
              >
                <img 
                  src={group.image} 
                  alt={group.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-seasons text-xl font-bold mb-2">{group.title}</h3>
                  <p className="text-gray-600 mb-4">{group.description}</p>
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <div className="flex items-center mb-2">
                      <svg className="w-5 h-5 text-poa-blue mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{group.days} at {group.time}</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-poa-blue mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{group.location}</span>
                    </div>
                  </div>
                  <Link 
                    to={`/groups/${group.id}`} 
                    className="block w-full btn-primary rounded-full py-2 text-center font-bold"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="text-center mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
          >
            <p className="text-lg text-gray-600 mb-6">
              Don't see a group that fits your needs or schedule? Let us help you find the right group!
            </p>
            <Link 
              to="/contact" 
              className="btn-primary rounded-full px-8 py-3 font-bold"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Host a Group Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
          >
            <div className="order-2 md:order-1">
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <h3 className="font-seasons text-2xl font-bold mb-6">Become a Host</h3>
                <p className="text-gray-600 mb-6">
                  Hosting a group is a rewarding way to build community and help others grow in their faith. We provide training, resources, and support to make hosting simple and effective.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 bg-poa-blue text-white rounded-full font-bold">1</span>
                    <div>
                      <h4 className="font-bold text-lg">Training</h4>
                      <p className="text-gray-600">Attend a host orientation to learn the basics of leading a group.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 bg-poa-blue text-white rounded-full font-bold">2</span>
                    <div>
                      <h4 className="font-bold text-lg">Resources</h4>
                      <p className="text-gray-600">Receive curriculum, discussion guides, and other helpful materials.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 bg-poa-blue text-white rounded-full font-bold">3</span>
                    <div>
                      <h4 className="font-bold text-lg">Support</h4>
                      <p className="text-gray-600">Connect with a coach who will guide and encourage you along the way.</p>
                    </div>
                  </div>
                  
                  <Link 
                    to="/groups/host" 
                    className="block w-full btn-primary rounded-full py-3 text-center font-bold mt-8"
                  >
                    Learn More About Hosting
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <h2 className="section-title">Lead Others to Grow</h2>
              <p className="text-lg text-gray-600 mb-6">
                You don't need to be a Bible scholar or have a perfect life to host a POA Group. You just need a heart to see people connect and grow in their faith.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Opening your home (or finding another meeting place) and facilitating conversation using our simple curriculum is all it takes to start making a difference in others' lives.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-poa-blue mb-6">
                <p className="text-lg italic">
                  "I was nervous about hosting at first, but the training and support made it so easy. Now I can't imagine not having my group - they've become like family!"
                </p>
                <p className="text-right font-bold mt-2">- Sarah M., Group Host</p>
              </div>
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
            <h2 className="section-title">Ready to Connect?</h2>
            <p className="text-xl text-gray-300 mb-10">
              Take your next step and join a POA Group today. It could be the beginning of life-changing relationships!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="#find-groups" 
                className="btn-primary rounded-full px-8 py-3 font-bold"
              >
                Find a Group
              </a>
              <Link 
                to="/groups/host" 
                className="btn-light rounded-full px-8 py-3 font-bold"
              >
                Host a Group
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Groups;