import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BuilderComponent, builder } from '@builder.io/react';
import { BUILDER_PUBLIC_API_KEY } from './builder-config';

// Initialize Builder with API key
builder.init('7d7f0d54afce4d3e897cc56acdd6e36f');

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';
import BuilderPage from './components/BuilderPage';

// Lazy-loaded pages for better performance
const Home = React.lazy(() => import('./pages/Home'));
const Giving = React.lazy(() => import('./pages/Giving'));
const Visit = React.lazy(() => import('./pages/Visit'));
const Groups = React.lazy(() => import('./pages/Groups'));
const Media = React.lazy(() => import('./pages/Media'));
const Learn = React.lazy(() => import('./pages/Learn'));
const Admin = React.lazy(() => import('./pages/Admin'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href !== '#') {
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
          document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
          });
        });
      });
      
      observer.disconnect();
    };
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/giving" element={<Giving />} />
              <Route path="/visit" element={<Visit />} />
              <Route path="/groups" element={<Groups />} />
              <Route path="/media" element={<Media />} />
              <Route path="/learn" element={<Learn />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/builder" element={<BuilderPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
