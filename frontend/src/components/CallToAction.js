import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CallToAction = ({ 
  title,
  subtitle,
  buttonText,
  buttonLink,
  backgroundColor = 'dark'
}) => {
  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  
  // Background color class map
  const bgColorMap = {
    'white': 'bg-white text-poa-black',
    'gray': 'bg-gray-50 text-poa-black',
    'dark': 'bg-poa-dark text-white',
    'blue': 'bg-poa-blue text-white',
  };
  
  // Button style based on background
  const buttonClass = backgroundColor === 'white' || backgroundColor === 'gray' 
    ? 'btn-primary' 
    : 'btn-light';
  
  // Subtitle color based on background
  const subtitleColorClass = backgroundColor === 'white' || backgroundColor === 'gray' 
    ? 'text-gray-600' 
    : 'text-gray-300';
  
  return (
    <section className={`py-20 ${bgColorMap[backgroundColor] || 'bg-poa-dark text-white'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <h2 className="section-title">{title}</h2>
          {subtitle && (
            <p className={`text-xl mb-10 ${subtitleColorClass}`}>
              {subtitle}
            </p>
          )}
          {buttonText && buttonLink && (
            <Link 
              to={buttonLink} 
              className={`${buttonClass} rounded-full px-8 py-3 font-bold text-lg`}
            >
              {buttonText}
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;