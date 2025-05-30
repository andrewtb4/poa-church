import React, { useEffect, useState } from 'react';
import { builder, BuilderComponent } from '@builder.io/react';
import { useLocation } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';

// No need to initialize Builder here as it's done in App.js
// builder.init('7d7f0d54afce4d3e897cc56acdd6e36f');

const BuilderPage = () => {
  const location = useLocation();
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      setLoading(true);
      
      // Get current URL path
      const urlPath = location.pathname;
      
      // Fetch content for current page
      const pageContent = await builder.get('page', {
        url: urlPath === '/' ? '/' : urlPath,
      }).promise();
      
      setContent(pageContent);
      setLoading(false);
    };
    
    fetchContent();
  }, [location.pathname]);

  // Show loading spinner while content is loading
  if (loading) {
    return <LoadingSpinner />;
  }

  // Show 404 if no content found
  if (!content) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
        <p className="text-lg text-gray-600">The page you're looking for doesn't exist.</p>
      </div>
    );
  }

  // Render Builder.io content
  return (
    <BuilderComponent 
      model="page"
      content={content} 
    />
  );
};

export default BuilderPage;