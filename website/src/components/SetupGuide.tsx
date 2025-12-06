import { useState } from 'react';
import { Copy, Check, ExternalLink, Terminal, Settings, Key, Zap } from 'lucide-react';
import { SETUP_STEPS, REVIEW_EXAMPLES } from '../lib/constants';

const SetupGuide = () => {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      setTimeout(() => setCopiedText(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-4">
            Setup Guide
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get your multi-agent AI PR review bot up and running in minutes.
            Configure specialized AI models and choose your preferred authentication method.
          </p>
        </div>

        {/* Quick Start */}
        <div className="dark-card mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-100">Quick Start</h2>
              <p className="text-gray-400">Deploy in 5 minutes with Docker</p>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-4 mb-4 border border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300 text-sm">Docker Deployment</span>
              <button
                onClick={() => copyToClipboard('docker run -d --env-file .env xibe-pr1-bot')}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                {copiedText === 'docker run -d --env-file .env xibe-pr1-bot' ?
                  <Check className="w-4 h-4" /> :
                  <Copy className="w-4 h-4" />
                }
              </button>
            </div>
            <code className="text-green-400 text-sm">
              docker run -d --env-file .env xibe-pr1-bot
            </code>
          </div>

          <p className="text-gray-400 text-sm">
            Make sure to configure your environment variables first. See the detailed setup below.
          </p>
        </div>

        {/* Setup Steps */}
        <div className="space-y-8 mb-12">
          {SETUP_STEPS.map((step, index) => (
            <div key={index} className="dark-card">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-100 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {step.description}
                  </p>

                  {step.code && (
                    <div className="bg-gray-800 rounded-lg p-4 mb-4 border border-gray-700">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-300 text-sm">Environment Variables</span>
                        <button
                          onClick={() => copyToClipboard(step.code || '')}
                          className="text-gray-400 hover:text-white transition-colors duration-200"
                        >
                          {copiedText === step.code ?
                            <Check className="w-4 h-4" /> :
                            <Copy className="w-4 h-4" />
                          }
                        </button>
                      </div>
                      <pre className="text-green-400 text-sm overflow-x-auto">
                        <code>{step.code}</code>
                      </pre>
                    </div>
                  )}

                  {step.command && (
                    <div className="bg-gray-800 rounded-lg p-4 mb-4 border border-gray-700">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-300 text-sm">Command</span>
                        <button
                          onClick={() => copyToClipboard(step.command || '')}
                          className="text-gray-400 hover:text-white transition-colors duration-200"
                        >
                          {copiedText === step.command ?
                            <Check className="w-4 h-4" /> :
                            <Copy className="w-4 h-4" />
                          }
                        </button>
                      </div>
                      <code className="text-blue-400 text-sm">
                        {step.command}
                      </code>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Review Examples */}
        <div className="dark-card mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Terminal className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-100">Review Examples</h2>
              <p className="text-gray-400">See what the bot can do for your code</p>
            </div>
          </div>

          <div className="space-y-6">
            {REVIEW_EXAMPLES.map((example, index) => (
              <div key={index} className="border border-gray-700 rounded-lg overflow-hidden">
                <div className="bg-gray-800 px-4 py-3 border-b border-gray-700">
                  <h4 className="font-semibold text-gray-100">{example.title}</h4>
                  <p className="text-sm text-gray-400">{example.description}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-4 border-r border-gray-700">
                    <h5 className="font-medium text-gray-100 mb-2">Code</h5>
                    <pre className="text-sm bg-gray-900 text-green-400 p-3 rounded overflow-x-auto">
                      <code>{example.code}</code>
                    </pre>
                  </div>

                  <div className="p-4">
                    <h5 className="font-medium text-gray-100 mb-2">AI Review</h5>
                    <div className="text-sm text-gray-300 bg-gray-800 p-3 rounded border border-gray-700">
                      {example.review}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Deployment Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="dark-card">
            <div className="flex items-center space-x-3 mb-4">
              <Settings className="w-6 h-6 text-primary-400" />
              <h3 className="text-lg font-semibold text-gray-100">Self-Hosted</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-300 mb-4">
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                <span>Full control over your data</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                <span>Customizable configuration</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                <span>Docker & PM2 support</span>
              </li>
            </ul>
            <a
              href="https://xibe.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-full flex items-center justify-center space-x-2"
            >
              <span>Get Started</span>
            </a>
          </div>

          <div className="dark-card">
            <div className="flex items-center space-x-3 mb-4">
              <Key className="w-6 h-6 text-primary-400" />
              <h3 className="text-lg font-semibold text-gray-100">Cloud Deployment</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-300 mb-4">
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                <span>Production hosting</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                <span>Auto-scaling included</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                <span>Enterprise security</span>
              </li>
            </ul>
            <a
              href="https://xibe.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary w-full flex items-center justify-center space-x-2"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Enterprise Setup</span>
            </a>
          </div>
        </div>

        {/* Support */}
        <div className="dark-card text-center">
          <h3 className="text-xl font-semibold text-gray-100 mb-4">
            Need Help?
          </h3>
          <p className="text-gray-300 mb-6">
            Get enterprise support and professional assistance for your deployment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:support@xibe.app"
              className="btn btn-primary"
            >
              Contact Support
            </a>
            <a
              href="mailto:support@xibe.app"
              className="btn btn-secondary"
            >
              Get Enterprise Quote
            </a>
            <a
              href="https://xibe.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              Xibe AI Platform
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetupGuide;
