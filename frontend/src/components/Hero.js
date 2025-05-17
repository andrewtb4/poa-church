import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = ({ 
  backgroundImage, 
  title, 
  subtitle, 
  ctaText, 
  ctaLink, 
  secondaryCtaText, 
  secondaryCtaLink,
  overlayOpacity = 0.5,
  textAlignment = 'left',
  height = 'h-screen'
}) => {
  // Variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Alignment classes
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end'
  };

  return (
    <div className={`relative ${height} w-full overflow-hidden`}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0 z-10 bg-gradient-to-b from-black"
        style={{ opacity: overlayOpacity }}
      />
      
      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className={`flex flex-col ${alignmentClasses[textAlignment]} max-w-3xl space-y-6`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="hero-text text-white title-spacing" 
              variants={itemVariants}
            >
              {title}
            </motion.h1>
            
            {subtitle && (
              <motion.p 
                className="text-xl md:text-2xl text-gray-200 body-spacing max-w-2xl" 
                variants={itemVariants}
              >
                {subtitle}
              </motion.p>
            )}
            
            <motion.div
              className={`flex flex-col sm:flex-row gap-4 mt-8 ${textAlignment === 'center' ? 'justify-center' : ''}`}
              variants={itemVariants}
            >
              {ctaText && (
                <Link 
                  to={ctaLink || '#'} 
                  className="btn-primary rounded-full px-8 py-3 font-bold text-lg"
                >
                  {ctaText}
                </Link>
              )}
              
              {secondaryCtaText && (
                <Link 
                  to={secondaryCtaLink || '#'} 
                  className="btn-light rounded-full px-8 py-3 font-bold text-lg"
                >
                  {secondaryCtaText}
                </Link>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;