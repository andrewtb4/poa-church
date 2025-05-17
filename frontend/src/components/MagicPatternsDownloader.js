import React, { useState } from 'react';

const MagicPatternsDownloader = () => {
  const [downloadStatus, setDownloadStatus] = useState('idle');
  const [importedComponents, setImportedComponents] = useState([]);
  
  // Function to simulate downloading files from Google Drive
  const downloadComponents = async () => {
    try {
      setDownloadStatus('downloading');
      
      // Simulate downloading the components
      setTimeout(() => {
        // Simulate successful download
        const simulatedComponents = [
          { name: 'Hero Component', id: 'comp1', type: 'hero' },
          { name: 'Feature Grid', id: 'comp2', type: 'feature' },
          { name: 'Testimonial Slider', id: 'comp3', type: 'testimonial' }
        ];
        
        setImportedComponents(simulatedComponents);
        setDownloadStatus('success');
      }, 2000);
    } catch (error) {
      console.error('Error downloading components:', error);
      setDownloadStatus('error');
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-bold mb-4">Download Magic Patterns Components</h2>
      <p className="text-gray-600 mb-4">
        Import your components from Google Drive to use with Builder.io
      </p>
      
      <div className="mb-6">
        <p className="font-medium mb-2">Google Drive Link:</p>
        <a 
          href="https://drive.google.com/drive/folders/1nb65wl8YcbVqHubI8CJ8IvbZh-SopOrI?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-poa-blue hover:underline break-all"
        >
          https://drive.google.com/drive/folders/1nb65wl8YcbVqHubI8CJ8IvbZh-SopOrI?usp=sharing
        </a>
      </div>
      
      <button 
        onClick={downloadComponents}
        disabled={downloadStatus === 'downloading'}
        className={`px-6 py-3 rounded-full font-bold ${
          downloadStatus === 'downloading' 
            ? 'bg-gray-300 cursor-not-allowed' 
            : 'bg-poa-blue text-white hover:bg-opacity-90'
        }`}
      >
        {downloadStatus === 'downloading' ? 'Downloading...' : 'Download Components'}
      </button>
      
      {downloadStatus === 'success' && (
        <div className="mt-6">
          <h3 className="font-bold text-lg mb-3">Downloaded Components:</h3>
          <ul className="bg-gray-50 rounded-md p-4 space-y-2">
            {importedComponents.map((component) => (
              <li key={component.id} className="flex items-center p-2 border-b border-gray-200 last:border-0">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{component.name}</span>
                <span className="ml-2 text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
                  {component.type}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            These components are now ready to be used. You can import them using the component importer below.
          </p>
        </div>
      )}
      
      {downloadStatus === 'error' && (
        <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
          <p className="font-semibold">Error</p>
          <p>There was an error downloading the components. Please try again later.</p>
        </div>
      )}
      
      <p className="mt-6 text-sm text-gray-500">
        Note: This is a demonstration of downloading components from Google Drive. In a production environment, you would implement proper Google Drive API integration for this functionality.
      </p>
    </div>
  );
};

export default MagicPatternsDownloader;