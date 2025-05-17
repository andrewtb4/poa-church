import React from 'react';
import { Link } from 'react-router-dom';

// Exact clone of the hero section from MagicPatterns
const HeroSection = ({
  title = "Join a Spirit-Filled Community in the Heart of Alexandria",
  description = "Welcome to The Pentecostals of Alexandria Where Lives Are Changed. Guide your community toward healing with step-by-step guidance to activate prayer ministries and form interest groups.",
  buttonText = "Get Started Today",
  buttonLink = "/visit",
  backgroundImage = null,
}) => {
  return (
    <div className="relative w-full min-h-screen flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={
          backgroundImage
            ? {
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }
            : { backgroundColor: '#f3f4f6' }
        }
      >
        {/* Gradient Overlay */}
        {backgroundImage && (
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30" />
        )}
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-24">
        <div className="max-w-3xl">
          {/* Title */}
          <h1 
            className={`text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-8 ${
              backgroundImage ? 'text-white' : 'text-black'
            }`}
          >
            {title}
          </h1>

          {/* Description */}
          <p 
            className={`text-xl md:text-2xl mb-12 ${
              backgroundImage ? 'text-gray-200' : 'text-gray-700'
            }`}
          >
            {description}
          </p>

          {/* CTA Button */}
          <div>
            <Link
              to={buttonLink}
              className="inline-flex items-center rounded-full bg-white px-8 py-4 text-base md:text-lg font-semibold text-black shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black"
            >
              {buttonText}
              <svg className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;