import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h1 className="font-seasons text-9xl font-bold text-poa-blue">404</h1>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Page Not Found</h2>
          <p className="mt-2 text-sm text-gray-600">
            We couldn't find the page you're looking for.
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <Link
            to="/"
            className="btn-primary rounded-full w-full flex justify-center py-3 px-4 text-sm font-medium"
          >
            Return to Home
          </Link>
          <div className="flex items-center justify-center">
            <span className="text-sm">
              Need help? <Link to="/contact" className="font-medium text-poa-blue hover:text-indigo-500">Contact Us</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;