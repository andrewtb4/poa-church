import React from 'react';
import MagicPatternsImporter from '../components/MagicPatternsImporter';
import MagicPatternsDownloader from '../components/MagicPatternsDownloader';
import BuilderRegistration from '../components/BuilderRegistration';

const AdminPage = () => {
  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-seasons text-4xl font-bold mb-8">Admin Dashboard</h1>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Builder.io Integration</h2>
            <p className="text-gray-600 mb-4">
              This site is integrated with Builder.io for content management. You can use Builder.io to:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-600 mb-6">
              <li>Create and edit pages without coding</li>
              <li>Manage content across the site</li>
              <li>Import and use Magic Patterns components</li>
            </ul>
            <a 
              href="https://builder.io/content" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary rounded-full px-6 py-2 font-bold inline-block"
            >
              Open Builder.io Editor
            </a>
          </div>
          
          <BuilderRegistration />
          
          <MagicPatternsDownloader />
          
          <MagicPatternsImporter />
          
          <div className="bg-white rounded-lg shadow-md p-6 mt-8">
            <h2 className="text-2xl font-bold mb-4">Help & Resources</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <a 
                href="https://www.builder.io/c/docs/getting-started" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block p-4 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors"
              >
                <h3 className="font-bold text-lg mb-1">Builder.io Documentation</h3>
                <p className="text-gray-600">Learn how to use Builder.io to manage your content</p>
              </a>
              
              <a 
                href="https://www.magicpatterns.com/docs" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block p-4 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors"
              >
                <h3 className="font-bold text-lg mb-1">Magic Patterns Documentation</h3>
                <p className="text-gray-600">Learn how to create components with Magic Patterns</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;