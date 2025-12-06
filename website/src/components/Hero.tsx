import { ExternalLink, Github, Heart, Shield, Zap, Brain, CheckCircle, Star, FileText, BarChart } from 'lucide-react';
import Prism from './ui/prism';
import { useBotUptime } from '../hooks/useBotUptime';
import { Link } from 'react-router-dom';
import SimpleAnalytics from './SimpleAnalytics';

const Hero = () => {
  const { uptime, loading, error } = useBotUptime();
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-x-hidden">
      {/* Animated Prism Background */}
      <div className="fixed inset-0 opacity-60 will-change-transform pointer-events-none" style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}>
        <Prism
          animationType="3drotate"
          timeScale={0.5}
          height={3.5}
          baseWidth={5.5}
          scale={3.6}
          hueShift={0}
          colorFrequency={1}
          noise={0.5}
          glow={1}
          bloom={1}
          transparent={true}
          suspendWhenOffscreen={true}
        />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 border-b border-gray-700 bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 sm:py-4">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center">
                <img src="/logo.png" alt="XIBE REVIEW" className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <span className="text-lg sm:text-xl font-bold text-white">Xibe Review</span>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Bot Status Indicator */}
              <div className="flex items-center space-x-1 sm:space-x-2">
                <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${uptime?.bot.status === 'running' ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></div>
                <span className="text-xs sm:text-sm text-gray-300 hidden sm:inline">
                  {loading ? 'Loading...' : uptime?.bot.status === 'running' ? 'Bot Online' : 'Bot Offline'}
                </span>
                <span className="text-xs text-gray-300 sm:hidden">
                  {loading ? '...' : uptime?.bot.status === 'running' ? 'Online' : 'Offline'}
                </span>
              </div>

              {/* Login Button */}
              {/* <a
                href="/auth/callback"
                className="inline-flex items-center space-x-1 sm:space-x-2 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-medium px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg transition-colors duration-200"
              >
                <LogIn className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Login</span>
              </a> */}

              {/* Privacy Policy Link */}
              <Link
                to="/privacy"
                className="text-gray-300 hover:text-white transition-colors"
                title="Privacy Policy"
              >
                <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>

              <a href="https://github.com/iotserver24" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="https://xibe.app" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-6 sm:mb-8">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
              <span className="text-blue-300 text-xs sm:text-sm font-medium">Multi-Agent AI Code Review</span>
            </div>

            {/* Bot Status Card */}
            {uptime && (
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg px-4 py-3 sm:px-6 mb-6 sm:mb-8">
                <div className="flex items-center space-x-2">
                  <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${uptime.bot.status === 'running' ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></div>
                  <span className="text-white font-medium text-sm sm:text-base">
                    {uptime.bot.status === 'running' ? 'Bot Online' : 'Bot Offline'}
                  </span>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-400">
                  <span>Uptime: {uptime.bot.uptime.formatted}</span>
                  <span className="hidden sm:inline">•</span>
                  <span>Model: {uptime.bot.configuration.model}</span>
                  <span className="hidden sm:inline">•</span>
                  <span>Memory: {uptime.bot.memory.rss}MB</span>
                </div>
              </div>
            )}

            {/* Error Display */}
            {error && (
              <div className="flex items-center justify-center space-x-2 bg-red-900/20 border border-red-800 rounded-lg px-3 py-2 sm:px-4 mb-6 sm:mb-8">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-red-300 text-xs sm:text-sm">Status unavailable</span>
              </div>
            )}

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Automate Your{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Code Reviews
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl sm:max-w-3xl mx-auto px-4">
              Get instant, intelligent feedback on your pull requests.
              Our multi-agent AI system uses specialized models for comprehensive code analysis and professional review generation.
              <br />
              <span className="text-purple-400 font-medium">📊 Real-time analytics dashboard available!</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4">
              <a
                href={import.meta.env.VITE_GITHUB_APP_URL || "https://github.com/apps/xibe-review/installations/new"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 sm:space-x-3 bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base md:text-lg font-semibold px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Install GitHub App</span>
                <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
              </a>
              <a
                href="https://xibe.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 sm:space-x-3 bg-gray-800 hover:bg-gray-700 text-white text-sm sm:text-base md:text-lg font-semibold px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-4 rounded-lg transition-all duration-200 border border-gray-600"
              >
                <span>AI API Provider</span>
                <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
              </a>
              <Link
                to="/docs"
                className="inline-flex items-center justify-center space-x-2 sm:space-x-3 bg-purple-600 hover:bg-purple-700 text-white text-sm sm:text-base md:text-lg font-semibold px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Docs</span>
              </Link>
              <Link
                to="/analytics"
                className="inline-flex items-center justify-center space-x-2 sm:space-x-3 bg-indigo-600 hover:bg-indigo-700 text-white text-sm sm:text-base md:text-lg font-semibold px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <BarChart className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Analytics</span>
              </Link>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4 sm:p-6 text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">AI-Powered Analysis</h3>
              <p className="text-sm sm:text-base text-gray-400">Advanced GPT models analyze your code for quality, security, and best practices.</p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4 sm:p-6 text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Security First</h3>
              <p className="text-sm sm:text-base text-gray-400">Identifies potential security vulnerabilities and suggests secure coding practices.</p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4 sm:p-6 text-center sm:col-span-2 lg:col-span-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Lightning Fast</h3>
              <p className="text-sm sm:text-base text-gray-400">Get comprehensive reviews in seconds, not hours. Integrates seamlessly with GitHub.</p>
            </div>
          </div>

          {/* How it works */}
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-4 sm:p-6 md:p-8 mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-6 sm:mb-8">How It Works</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span className="text-lg sm:text-xl md:text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Install App</h3>
                <p className="text-sm sm:text-base text-gray-400">Add the GitHub App to your repository with one click.</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span className="text-lg sm:text-xl md:text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Mention Bot</h3>
                <p className="text-sm sm:text-base text-gray-400">Simply mention the bot in any PR comment to trigger a review.</p>
                <div className="flex flex-wrap justify-center gap-1 sm:gap-2 mt-3 sm:mt-4">
                  <code className="bg-gray-700 px-2 py-1 rounded text-xs sm:text-sm">xibe</code>
                  <code className="bg-gray-700 px-2 py-1 rounded text-xs sm:text-sm">@xibe-review</code>
                </div>
              </div>

              <div className="text-center sm:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span className="text-lg sm:text-xl md:text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Get Review</h3>
                <p className="text-sm sm:text-base text-gray-400">Receive detailed AI feedback on your code instantly.</p>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">Why Choose Xibe Review?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-300">Completely Free</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-300">No Setup Required</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-300">Enterprise Security</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-300">24/7 Available</span>
              </div>
            </div>
          </div>

          {/* Simple Analytics */}
          <div className="mb-12 sm:mb-16">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Live Statistics</h2>
              <p className="text-gray-400">Real-time metrics from our AI code review system</p>
            </div>
            <SimpleAnalytics />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-700 bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <span className="text-gray-400 text-sm">Made by</span>
              <a href="https://github.com/iotserver24" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 font-medium text-sm">@iotserver24</a>
              <span className="text-gray-400 text-sm hidden sm:inline">•</span>
              <a href="https://anishkumar.tech" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-sm">Portfolio</a>
            </div>

            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 lg:space-x-6">
              <span className="text-gray-400 text-sm">Powered by</span>
              <a href="https://xibe.app" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 font-medium text-sm">XIBE AI</a>
              <Link to="/privacy" className="text-blue-400 hover:text-blue-300 text-sm">Privacy Policy</Link>
              <a
                href="https://razorpay.me/@megavault"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 sm:space-x-2 bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg transition-colors duration-200 text-sm"
              >
                <Heart className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Donate</span>
              </a>
            </div>
          </div>

          <div className="text-center text-gray-500 text-xs sm:text-sm mt-4">
            <p>
              This project is <a href="https://github.com/iotserver24/xibe-pr" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">Open Source</a> • Completely free to use
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Hero;