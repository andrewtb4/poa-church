import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { builder } from '@builder.io/react';

// MagicPatterns Components
import MegaMenuHeader from './components/MagicPatterns/MegaMenuHeader';
import MagicFooter from './components/MagicPatterns/MagicFooter';
import LoadingSpinner from './components/LoadingSpinner';

// Builder.io Components
import BuilderPage from './components/BuilderPage';

// Register MagicPatterns components with Builder.io
import { registerMagicPatternsComponents } from './builder-magic-patterns';

// Initialize Builder.io
builder.init('7d7f0d54afce4d3e897cc56acdd6e36f');

// Register MagicPatterns components
registerMagicPatternsComponents();

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <MegaMenuHeader />
        <main className="flex-grow pt-16">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              {/* Route all paths to BuilderPage */}
              <Route path="*" element={<BuilderPage />} />
            </Routes>
          </Suspense>
        </main>
        <MagicFooter />
      </div>
    </Router>
  );
}

export default App;