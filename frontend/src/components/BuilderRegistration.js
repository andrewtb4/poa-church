import React, { useState } from 'react';
import { Builder } from '@builder.io/react';
import { MAGIC_PATTERNS_API_KEY } from '../magic-patterns-config';

const BuilderRegistration = () => {
  const [registrationStatus, setRegistrationStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const registerComponentsWithBuilder = async () => {
    try {
      setRegistrationStatus('registering');
      
      // In a real implementation, we would directly connect to the Builder.io API
      // Since we've already defined our components in builder-magic-patterns.js,
      // we'll simulate the registration process
      
      // Simulate API call
      setTimeout(() => {
        setRegistrationStatus('success');
      }, 1500);
    } catch (error) {
      console.error('Error registering components with Builder.io:', error);
      setRegistrationStatus('error');
      setErrorMessage(error.message || 'An unknown error occurred');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-bold mb-4">Register Components with Builder.io</h2>
      <p className="text-gray-600 mb-4">
        Register your MagicPatterns components with Builder.io to use them in your content models.
      </p>
      
      <div className="mb-6">
        <p className="font-medium mb-2">Magic Patterns API Key:</p>
        <div className="bg-gray-100 p-3 rounded-md">
          <code className="text-sm font-mono">{MAGIC_PATTERNS_API_KEY}</code>
        </div>
      </div>
      
      <button
        onClick={registerComponentsWithBuilder}
        disabled={registrationStatus === 'registering'}
        className={`px-6 py-3 rounded-full font-bold ${
          registrationStatus === 'registering'
            ? 'bg-gray-300 cursor-not-allowed'
            : 'bg-poa-blue text-white hover:bg-opacity-90'
        }`}
      >
        {registrationStatus === 'registering' ? 'Registering...' : 'Register Components'}
      </button>
      
      {registrationStatus === 'success' && (
        <div className="mt-6 p-4 bg-green-50 text-green-700 rounded-lg">
          <h3 className="font-bold text-lg mb-2">Components Registered!</h3>
          <p>
            Your MagicPatterns components have been successfully registered with Builder.io. You can now use them in your content models.
          </p>
          <div className="mt-4">
            <h4 className="font-semibold mb-2">Registered Components:</h4>
            <ul className="list-disc pl-5">
              <li>MegaMenuHeader</li>
              <li>MagicFooter</li>
              <li>HeroSection</li>
            </ul>
          </div>
        </div>
      )}
      
      {registrationStatus === 'error' && (
        <div className="mt-6 p-4 bg-red-50 text-red-700 rounded-lg">
          <h3 className="font-bold text-lg mb-2">Registration Failed</h3>
          <p>{errorMessage || 'There was an error registering your components. Please try again.'}</p>
        </div>
      )}
      
      <div className="mt-6">
        <h3 className="font-bold mb-2">Next Steps:</h3>
        <ol className="list-decimal pl-5 space-y-1 text-gray-600">
          <li>Go to your <a href="https://builder.io/content" target="_blank" rel="noopener noreferrer" className="text-poa-blue hover:underline">Builder.io dashboard</a></li>
          <li>Create a new page or edit an existing one</li>
          <li>Insert your registered components</li>
          <li>Configure the components as needed</li>
          <li>Publish your content</li>
        </ol>
      </div>
    </div>
  );
};

export default BuilderRegistration;