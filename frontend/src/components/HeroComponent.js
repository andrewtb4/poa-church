import React from 'react';
import { Link } from 'react-router-dom';

const HeroComponent = ({
  title = "Join a Spirit-Filled Community in the Heart of Alexandria",
  description = "Welcome to The Pentecostals of Alexandria Where Lives Are Changed. Guide your community toward healing with step-by-step guidance to activate prayer ministries and form interest groups.",
  buttonText = "Get Started Today",
  buttonLink = "/visit",
  backgroundImage = null,
}) => {
  return (
    <div className="relative w-full">
      {/* Background image with fallback color */}
      <div
        className="absolute inset-0 bg-gray-100"
        style={
          backgroundImage
            ? {
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }
            : {}
        }
      />

      {/* Overlay for darker background images */}
      {backgroundImage && (
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      )}

      {/* Content */}
      <div className="relative container mx-auto px-4 py-24 md:py-36">
        <div className="flex flex-col items-center text-center">
          {/* Image placeholder */}
          {!backgroundImage && (
            <div className="mb-12 w-full max-w-3xl h-64 md:h-80 bg-gray-200 rounded-2xl shadow-lg" />
          )}

          {/* Title */}
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl ${backgroundImage ? 'text-white' : 'text-black'}`}>
            {title}
          </h1>

          {/* Description */}
          <p className={`text-lg md:text-xl mb-10 max-w-2xl ${backgroundImage ? 'text-gray-200' : 'text-gray-600'}`}>
            {description}
          </p>

          {/* CTA Button */}
          <Link
            to={buttonLink}
            className="rounded-full bg-black text-white px-8 py-4 font-medium text-lg hover:bg-opacity-90 transition-colors"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;