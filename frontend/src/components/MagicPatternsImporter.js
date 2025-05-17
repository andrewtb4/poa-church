import React, { useState } from 'react';

const MagicPatternsImporter = () => {
  const [files, setFiles] = useState([]);
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [importedComponents, setImportedComponents] = useState([]);
  
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
      const importedList = [];
      
      // For each file, parse the JSON
      for (const file of files) {
        const reader = new FileReader();
        
        reader.onload = async (e) => {
          try {
            const componentData = JSON.parse(e.target.result);
            // In a real implementation, you would register with Builder.io
            importedList.push({
              name: file.name.replace('.json', ''),
              type: componentData.type || 'component'
            });
            setImportedComponents([...importedList]);
          } catch (parseError) {
            console.error('Error parsing file:', parseError);
            setStatus('error');
            setErrorMessage(`Error parsing file ${file.name}: ${parseError.message}`);
          }
        };
        
        reader.readAsText(file);
      }
      
      // Simulate successful import
      setTimeout(() => {
        setStatus('success');
      }, 1500);
      
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
          <p>Components have been successfully imported.</p>
          
          {importedComponents.length > 0 && (
            <div className="mt-3">
              <p className="font-semibold">Imported Components:</p>
              <ul className="list-disc pl-5 mt-2">
                {importedComponents.map((comp, index) => (
                  <li key={index}>{comp.name} ({comp.type})</li>
                ))}
              </ul>
            </div>
          )}
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