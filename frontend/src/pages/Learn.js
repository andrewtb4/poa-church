import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

const Learn = () => {
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
  
  // Mock data for resources
  const resources = [
    {
      id: 1,
      title: 'Foundations of Faith',
      description: 'Our core beliefs and teachings about God, Jesus, the Holy Spirit, salvation, and more.',
      image: 'https://images.unsplash.com/photo-1620565404581-e0aea3f826ef',
      link: '/learn/foundations'
    },
    {
      id: 2,
      title: 'Bible Reading Plans',
      description: 'Structured plans to help you read through the Bible with devotional guidance.',
      image: 'https://images.unsplash.com/photo-1620565404581-e0aea3f826ef',
      link: '/learn/bible-reading'
    },
    {
      id: 3,
      title: 'Prayer Guides',
      description: 'Resources to enrich your prayer life and deepen your communication with God.',
      image: 'https://images.unsplash.com/photo-1620565404581-e0aea3f826ef',
      link: '/learn/prayer'
    },
    {
      id: 4,
      title: 'Growth Track',
      description: 'A step-by-step path to help you grow in your relationship with Jesus and connect to church life.',
      image: 'https://images.unsplash.com/photo-1620565404581-e0aea3f826ef',
      link: '/learn/growth-track'
    },
    {
      id: 5,
      title: 'Leadership Development',
      description: 'Training resources for current and aspiring leaders to develop their God-given potential.',
      image: 'https://images.unsplash.com/photo-1620565404581-e0aea3f826ef',
      link: '/learn/leadership'
    },
    {
      id: 6,
      title: 'Family Devotionals',
      description: 'Resources to help families grow together spiritually through fun, engaging activities.',
      image: 'https://images.unsplash.com/photo-1620565404581-e0aea3f826ef',
      link: '/learn/family'
    }
  ];

  // Mock data for upcoming classes
  const classes = [
    {
      id: 1,
      title: 'New Believers Class',
      description: 'An introduction to the basics of Christian faith for new believers.',
      day: 'Sundays',
      time: '9:00 AM',
      location: 'Room 103',
      startDate: 'June 4, 2023'
    },
    {
      id: 2,
      title: 'Spiritual Disciplines',
      description: 'Learn practical ways to grow spiritually through prayer, Bible study, fasting, and more.',
      day: 'Wednesdays',
      time: '6:30 PM',
      location: 'Room 205',
      startDate: 'June 7, 2023'
    },
    {
      id: 3,
      title: 'Financial Peace',
      description: 'Biblical principles for managing money, getting out of debt, and building wealth.',
      day: 'Tuesdays',
      time: '7:00 PM',
      location: 'Fellowship Hall',
      startDate: 'June 13, 2023'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero 
        backgroundImage="https://images.unsplash.com/photo-1620565404581-e0aea3f826ef"
        title="Grow Your Faith"
        subtitle="Explore resources, classes, and tools to help you grow in your relationship with Jesus and understand the Bible better."
        ctaText="Browse Resources"
        ctaLink="#resources"
        height="h-[70vh]"
        overlayOpacity={0.7}
      />
      
      {/* Resources Section */}
      <section id="resources" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
          >
            <h2 className="section-title">Resources for Growth</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore these resources to deepen your understanding of God's Word and grow in your faith.
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
            {resources.map((resource) => (
              <motion.div 
                key={resource.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                variants={sectionVariants}
              >
                <img 
                  src={resource.image} 
                  alt={resource.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-seasons text-xl font-bold mb-2">{resource.title}</h3>
                  <p className="text-gray-600 mb-6">{resource.description}</p>
                  <Link 
                    to={resource.link} 
                    className="block w-full btn-primary rounded-full py-2 text-center font-bold"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Classes Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
          >
            <h2 className="section-title">Upcoming Classes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join one of our classes to learn with others in a structured environment.
            </p>
          </motion.div>
          
          <motion.div 
            className="max-w-4xl mx-auto space-y-8"
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
            {classes.map((classItem) => (
              <motion.div 
                key={classItem.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                variants={sectionVariants}
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="font-seasons text-2xl font-bold mb-2">{classItem.title}</h3>
                      <p className="text-gray-600 mb-4">{classItem.description}</p>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div>
                            <p className="text-sm text-gray-500">Day</p>
                            <p className="font-semibold">{classItem.day}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Time</p>
                            <p className="font-semibold">{classItem.time}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Location</p>
                            <p className="font-semibold">{classItem.location}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Start Date</p>
                            <p className="font-semibold">{classItem.startDate}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center">
                      <button 
                        className="btn-primary rounded-full px-6 py-3 font-bold"
                        onClick={() => alert(`This would register for ${classItem.title}`)}
                      >
                        Register
                      </button>
                    </div>
                  </div>
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
            <Link to="/classes" className="text-poa-blue font-semibold hover:underline">
              View All Classes →
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Bible Study Tools Section */}
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
              <h2 className="section-title">Bible Study Tools</h2>
              <p className="text-lg text-gray-600 mb-6">
                Enhance your personal Bible study with these recommended tools and resources.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="shrink-0 bg-blue-100 rounded-full p-3">
                    <svg className="w-6 h-6 text-poa-blue" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">Bible Apps</h3>
                    <p className="text-gray-600 mb-3">
                      Access the Bible anytime, anywhere with these free mobile apps.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <a 
                        href="https://www.youversion.com/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full transition-colors"
                      >
                        YouVersion
                      </a>
                      <a 
                        href="https://www.bible.com/bible" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full transition-colors"
                      >
                        Bible App
                      </a>
                      <a 
                        href="https://www.blueletterbible.org/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full transition-colors"
                      >
                        Blue Letter Bible
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="shrink-0 bg-blue-100 rounded-full p-3">
                    <svg className="w-6 h-6 text-poa-blue" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">Study Resources</h3>
                    <p className="text-gray-600 mb-3">
                      Enhance your understanding with these Bible study tools.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <a 
                        href="https://www.biblestudytools.com/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full transition-colors"
                      >
                        Bible Study Tools
                      </a>
                      <a 
                        href="https://www.biblehub.com/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full transition-colors"
                      >
                        Bible Hub
                      </a>
                      <a 
                        href="https://www.logos.com/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full transition-colors"
                      >
                        Logos Bible Software
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="shrink-0 bg-blue-100 rounded-full p-3">
                    <svg className="w-6 h-6 text-poa-blue" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">Devotional Apps</h3>
                    <p className="text-gray-600 mb-3">
                      Daily devotionals to inspire your faith journey.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <a 
                        href="https://www.bible.com/reading-plans" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full transition-colors"
                      >
                        YouVersion Plans
                      </a>
                      <a 
                        href="https://www.bible.com/app" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full transition-colors"
                      >
                        Bible App Devotionals
                      </a>
                      <a 
                        href="https://www.faithlife.com/products/faithlife-study-bible" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full transition-colors"
                      >
                        Faithlife Study Bible
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link 
                  to="/learn/bible-tools" 
                  className="btn-primary rounded-full px-6 py-3 font-bold inline-flex items-center"
                >
                  View All Resources
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1620565404581-e0aea3f826ef" 
                alt="Bible study" 
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
            <h2 className="section-title">Start Your Growth Journey</h2>
            <p className="text-xl text-gray-300 mb-10">
              Whether you're new to faith or have been following Jesus for years, we have resources to help you take your next step.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/learn/new-believers" 
                className="btn-primary rounded-full px-8 py-3 font-bold"
              >
                New to Faith
              </Link>
              <Link 
                to="/learn/next-steps" 
                className="btn-light rounded-full px-8 py-3 font-bold"
              >
                Next Steps
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Learn;