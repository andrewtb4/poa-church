import React, { useState, useEffect } from 'react';
import { builder } from '@builder.io/react';
import { BUILDER_PUBLIC_API_KEY } from './builder-config';

const MagicPatternsImporter = () => {
  const [files, setFiles] = useState([]);
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');
  
  // Function to handle file selection
  const handleFileSelect = (event) => {
    setFiles(Array.from(event.target.files));
    setStatus('ready');
  };
  
  // Function to import Magic Patterns components
  const importComponents = async () => {
    if (files.length === 0) {
      setStatus('error');
      setErrorMessage('Please select files to import.');
      return;
    }
    
    try {
      setStatus('importing');
      
      // For each file, parse the JSON and register it as a component in Builder.io
      for (const file of files) {
        const reader = new FileReader();
        
        reader.onload = async (e) => {
          try {
            const componentData = JSON.parse(e.target.result);
            
            // Register the component with Builder.io
            // Note: This is a simplified example. In a real implementation,
            // you would need to adapt the MagicPatterns format to Builder.io's format.
            await builder.create('component', {
              name: file.name.replace('.json', ''),
              data: componentData,
              published: 'published',
            }).promise();
          } catch (parseError) {
            console.error('Error parsing file:', parseError);
            setStatus('error');
            setErrorMessage(`Error parsing file ${file.name}: ${parseError.message}`);
          }
        };
        
        reader.readAsText(file);
      }
      
      setStatus('success');
    } catch (error) {
      console.error('Error importing components:', error);
      setStatus('error');
      setErrorMessage(`Error importing components: ${error.message}`);
    }
  };
  
  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Import Magic Patterns Components</h2>
      
      <div className="mb-6">
        <label className="block font-semibold mb-2">Select Component Files</label>
        <input 
          type="file" 
          accept=".json" 
          multiple 
          onChange={handleFileSelect}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <p className="text-sm text-gray-500 mt-1">Select the JSON files exported from Magic Patterns</p>
      </div>
      
      <button 
        onClick={importComponents}
        disabled={status === 'importing' || files.length === 0}
        className={`w-full py-2 px-4 rounded-md font-semibold ${status === 'importing' ? 'bg-gray-300 cursor-not-allowed' : 'bg-poa-blue text-white'}`}
      >
        {status === 'importing' ? 'Importing...' : 'Import Components'}
      </button>
      
      {status === 'error' && (
        <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
          <p className="font-semibold">Error</p>
          <p>{errorMessage}</p>
        </div>
      )}
      
      {status === 'success' && (
        <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-md">
          <p className="font-semibold">Success!</p>
          <p>Components have been successfully imported to Builder.io.</p>
        </div>
      )}
      
      <div className="mt-6">
        <h3 className="font-semibold mb-2">Instructions</h3>
        <ol className="list-decimal pl-5 space-y-2 text-gray-700">
          <li>Download your components from Magic Patterns (JSON format)</li>
          <li>Select the component files using the file picker above</li>
          <li>Click "Import Components" to add them to your Builder.io space</li>
          <li>The components will be available in the Builder.io editor</li>
        </ol>
      </div>
    </div>
  );
};

export default MagicPatternsImporter;