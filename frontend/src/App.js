import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Components
import MegaMenuHeader from './components/MagicPatterns/MegaMenuHeader';
import MagicFooter from './components/MagicPatterns/MagicFooter';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy-loaded pages for better performance
const Home = React.lazy(() => import('./pages/Home'));
const Giving = React.lazy(() => import('./pages/Giving'));
const Visit = React.lazy(() => import('./pages/Visit'));
const Groups = React.lazy(() => import('./pages/Groups'));
const Media = React.lazy(() => import('./pages/Media'));
const Learn = React.lazy(() => import('./pages/Learn'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Admin = React.lazy(() => import('./pages/Admin'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
          document.querySelector(href).scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });

    // Animation on scroll
    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 0.1
    });

    document.querySelectorAll('.fade-in, .slide-up').forEach(element => {
      observer.observe(element);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function (e) {
          e.preventDefault();
          if (this.getAttribute('href') !== '#' && document.querySelector(this.getAttribute('href'))) {
            document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
            });
          }
        });
      });
      
      observer.disconnect();
    };
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <MegaMenuHeader />
        <main className="flex-grow pt-16"> {/* Added padding-top to account for fixed header */}
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/giving" element={<Giving />} />
              <Route path="/visit" element={<Visit />} />
              <Route path="/groups" element={<Groups />} />
              <Route path="/media" element={<Media />} />
              <Route path="/learn" element={<Learn />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <MagicFooter />
      </div>
    </Router>
  );
}

export default App;

export default App;
