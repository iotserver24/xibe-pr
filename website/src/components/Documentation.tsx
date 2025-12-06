import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

// Documentation sections
import Overview from './docs/Overview';
import Architecture from './docs/Architecture';
import Configuration from './docs/Configuration';
import APIReference from './docs/APIReference';
import Webhooks from './docs/Webhooks';
import ReviewProcess from './docs/ReviewProcess';
import Deployment from './docs/Deployment';
import Testing from './docs/Testing';
import Troubleshooting from './docs/Troubleshooting';
import CodeExamples from './docs/CodeExamples';

interface NavItem {
  path: string;
  title: string;
  description: string;
  icon: string;
}

const navigationItems: NavItem[] = [
  {
    path: '',
    title: 'Overview',
    description: 'What XIbe Review is and how it works',
    icon: '🎯'
  },
  {
    path: 'architecture',
    title: 'Architecture',
    description: 'Technical architecture and system design',
    icon: '🏗️'
  },
  {
    path: 'configuration',
    title: 'Configuration',
    description: 'Setup and environment variables',
    icon: '🔧'
  },
  {
    path: 'webhooks',
    title: 'Webhooks',
    description: 'GitHub webhook integration',
    icon: '📡'
  },
  {
    path: 'review-process',
    title: 'Review Process',
    description: 'Multi-agent review system',
    icon: '🤖'
  },
  {
    path: 'api-reference',
    title: 'API Reference',
    description: 'Complete API documentation',
    icon: '🔌'
  },
  {
    path: 'code-examples',
    title: 'Code Examples',
    description: 'Bot implementation examples',
    icon: '💻'
  },
  {
    path: 'deployment',
    title: 'Deployment',
    description: 'Installation and deployment guides',
    icon: '🚀'
  },
  {
    path: 'testing',
    title: 'Testing',
    description: 'Test procedures and validation',
    icon: '🧪'
  },
  {
    path: 'troubleshooting',
    title: 'Troubleshooting',
    description: 'Common issues and solutions',
    icon: '🔍'
  }
];

const Documentation: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Apply dark theme to documentation
    document.body.classList.add('dark');
    document.body.classList.add('bg-gray-900');
    document.body.classList.add('text-white');

    return () => {
      document.body.classList.remove('dark', 'bg-gray-900', 'text-white');
    };
  }, []);

  const currentPath = location.pathname.replace('/docs', '') || '';
  const currentNavItem = navigationItems.find(item => item.path === currentPath) || navigationItems[0];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700 sticky top-0 z-50 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 max-w-7xl mx-auto">
            <div className="flex items-center min-w-0">
              <Link to="/" className="text-lg sm:text-xl font-bold text-blue-400 hover:text-blue-300 whitespace-nowrap">
                🤖 XIbe Review
              </Link>
              <span className="ml-2 sm:ml-4 text-gray-300 hidden sm:inline">|</span>
              <span className="ml-2 sm:ml-4 text-gray-400 text-sm sm:text-base truncate">Documentation</span>
            </div>

            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="hidden md:flex items-center space-x-2">
                <Link
                  to="/"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                >
                  Home
                </Link>
                <Link
                  to="/analytics"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                >
                  Dashboard
                </Link>
              </div>

              <div className="hidden md:flex items-center space-x-2">
                <a
                  href="https://anishkumar.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                >
                  Portfolio
                </a>
                <a
                  href="https://razorpay.me/@megavault"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-md text-sm font-medium bg-green-600 hover:bg-green-700 text-white"
                >
                  💝 Donate
                </a>
              </div>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 flex-shrink-0"
                aria-label="Toggle mobile menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
              >
                Home
              </Link>
              <Link
                to="/analytics"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
              >
                Dashboard
              </Link>
              <a
                href="https://anishkumar.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
              >
                Portfolio
              </a>
              <a
                href="https://razorpay.me/@megavault"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 rounded-md text-base font-medium bg-green-600 hover:bg-green-700 text-white"
              >
                💝 Donate
              </a>
              
              {/* Mobile navigation */}
              <div className="pt-4 border-t border-gray-600">
                <div className="text-sm font-medium text-gray-400 mb-2">Documentation</div>
                {navigationItems.map((item) => (
                  <Link
                    key={item.path}
                    to={`/docs${item.path ? `/${item.path}` : ''}`}
                    className={`block px-2 py-1.5 rounded-md text-sm transition-colors ${
                      (item.path === '' && currentPath === '') || item.path === currentPath
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-300 hover:text-white hover:bg-gray-700'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="mr-2">{item.icon}</span>
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      <div className="flex w-full overflow-x-hidden">
        {/* Sidebar */}
        <aside className="hidden lg:block w-72 bg-gray-800 border-r border-gray-700 fixed left-0 top-16 h-[calc(100vh-4rem)] overflow-y-auto z-40">
          <div className="p-4">
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-white mb-1">
                {currentNavItem.icon} {currentNavItem.title}
              </h2>
              <p className="text-sm text-gray-400">{currentNavItem.description}</p>
            </div>

            <nav className="space-y-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={`/docs${item.path ? `/${item.path}` : ''}`}
                  className={`block px-2 py-1.5 rounded-md text-sm transition-colors ${
                    (item.path === '' && currentPath === '') || item.path === currentPath
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-gray-700'
                  }`}
                >
                  <span className="mr-2">{item.icon}</span>
                  {item.title}
                </Link>
              ))}
            </nav>

            <div className="mt-6 pt-4 border-t border-gray-700">
              <div className="text-xs text-gray-500 space-y-1">
                <div>Version: 1.0.0</div>
                <div>Last updated: October 2024</div>
                <div className="mt-2">
                  <Link to="/" className="text-blue-400 hover:text-blue-300">
                    ← Back to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 lg:ml-72 w-full min-w-0">
          <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-4 sm:py-8">
            <Routes>
              <Route index element={<Overview />} />
              <Route path="architecture" element={<Architecture />} />
              <Route path="configuration" element={<Configuration />} />
              <Route path="api-reference" element={<APIReference />} />
              <Route path="webhooks" element={<Webhooks />} />
              <Route path="review-process" element={<ReviewProcess />} />
              <Route path="code-examples" element={<CodeExamples />} />
              <Route path="deployment" element={<Deployment />} />
              <Route path="testing" element={<Testing />} />
              <Route path="troubleshooting" element={<Troubleshooting />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Documentation;
