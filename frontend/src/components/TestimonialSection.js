import React from 'react';
import { motion } from 'framer-motion';

const TestimonialSection = ({ 
  title,
  subtitle,
  testimonials = []
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
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <h2 className="section-title">{title}</h2>
          {subtitle && (
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-lg shadow-md p-6"
              variants={itemVariants}
            >
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <svg className="h-8 w-8 text-poa-blue opacity-50" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M14.42 11.528c-.636.272-1.328.581-2.076.927-.704.309-1.375.654-2.015 1.036-.704.4-1.278.836-1.719 1.309-.441.491-.713.982-.814 1.473 0 .036-.6.054-.18.054a8.007 8.007 0 01-.136-.708 3.874 3.874 0 01-.036-.545c0-.727.245-1.391.733-1.991.49-.582 1.086-1.118 1.791-1.61.705-.509 1.437-.945 2.195-1.309.76-.345 1.409-.618 1.946-.818l.149.182zm12.173 0c-.636.272-1.328.581-2.077.927-.704.309-1.373.654-2.014 1.036-.704.4-1.277.836-1.718 1.309-.441.491-.714.982-.814 1.473 0 .036-.6.054-.18.054a7.957 7.957 0 01-.136-.708 3.874 3.874 0 01-.036-.545c0-.727.245-1.391.732-1.991.491-.582 1.087-1.118 1.791-1.61.705-.509 1.437-.945 2.196-1.309.759-.345 1.409-.618 1.946-.818l.148.182z" />
                  </svg>
                </div>
                <p className="text-gray-700 italic mb-6 flex-grow">
                  {testimonial.quote}
                </p>
                <div className="flex items-center">
                  {testimonial.image && (
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author} 
                      className="h-12 w-12 rounded-full object-cover mr-4"
                    />
                  )}
                  <div>
                    <h4 className="font-bold">{testimonial.author}</h4>
                    {testimonial.role && (
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;