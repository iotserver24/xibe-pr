import { ExternalLink, Heart, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-xibe-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">X</span>
              </div>
              <span className="text-xl font-bold">xibe-pr1</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              AI-powered GitHub PR review bot that provides intelligent code analysis,
              security reviews, and automated feedback using advanced GPT models.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://xibe.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
              <a
                href="mailto:support@xibe.app"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-gray-100 mb-4">Product</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/#features" className="hover:text-white transition-colors duration-200">Features</a></li>
              <li><a href="/dashboard" className="hover:text-white transition-colors duration-200">Dashboard</a></li>
              <li><a href="/setup" className="hover:text-white transition-colors duration-200">Setup Guide</a></li>
              <li><a href="https://xibe.app" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">Documentation</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-gray-100 mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="mailto:support@xibe.app" className="hover:text-white transition-colors duration-200">Report Issues</a></li>
              <li><a href="mailto:support@xibe.app" className="hover:text-white transition-colors duration-200">Get Help</a></li>
              <li><a href="mailto:support@xibe.app" className="hover:text-white transition-colors duration-200">Contact Support</a></li>
              <li><a href="https://xibe.app" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">Xibe AI Platform</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <span>© {currentYear} xibe-pr1. Built with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>by Xibe AI.</span>
          </div>

          <div className="flex items-center space-x-6 mt-4 sm:mt-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Powered by Xibe AI</span>
            </div>
            <span className="text-gray-600">•</span>
            <span className="text-gray-400 text-sm">
              Proprietary License
            </span>
          </div>
        </div>

        {/* Status Bar */}
        <div className="border-t border-gray-800 mt-4 pt-4 flex items-center justify-center space-x-2 text-gray-500 text-xs">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span>Bot Status: Online • Last updated: {new Date().toLocaleTimeString()}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
