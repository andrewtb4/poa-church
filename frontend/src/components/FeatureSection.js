import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FeatureSection = ({ 
  title,
  subtitle,
  features = [],
  backgroundColor = 'white'
}) => {
  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  
  // Background color class map
  const bgColorMap = {
    'white': 'bg-white',
    'gray': 'bg-gray-50',
    'dark': 'bg-poa-dark text-white',
    'blue': 'bg-poa-blue text-white',
  };
  
  // Title color based on background
  const titleColorClass = backgroundColor === 'white' || backgroundColor === 'gray' 
    ? 'text-poa-black' 
    : 'text-white';
  
  // Subtitle color based on background
  const subtitleColorClass = backgroundColor === 'white' || backgroundColor === 'gray' 
    ? 'text-gray-600' 
    : 'text-gray-300';
  
  return (
    <section className={`py-20 ${bgColorMap[backgroundColor] || 'bg-white'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <h2 className={`section-title ${titleColorClass}`}>{title}</h2>
          {subtitle && (
            <p className={`text-xl max-w-3xl mx-auto ${subtitleColorClass}`}>
              {subtitle}
            </p>
          )}
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className={`p-6 rounded-lg ${backgroundColor === 'white' ? 'bg-gray-50' : 'bg-white text-poa-black'}`}
              variants={itemVariants}
            >
              <div className="mb-4">
                {/* Placeholder for icon - in a real implementation, you would use the icon from feature.icon */}
                <div className="h-12 w-12 bg-poa-blue rounded-full flex items-center justify-center text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
              <p className={`mb-4 ${backgroundColor === 'white' || backgroundColor === 'gray' ? 'text-gray-600' : 'text-gray-700'}`}>
                {feature.description}
              </p>
              {feature.link && (
                <Link to={feature.link} className="text-poa-blue font-medium hover:underline">
                  Learn More →
                </Link>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureSection;