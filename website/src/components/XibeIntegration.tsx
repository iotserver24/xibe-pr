import { ExternalLink, Brain, Zap, Shield, ArrowRight, CheckCircle, Star, Users } from 'lucide-react';

const XibeIntegration = () => {
  const features = [
    {
      icon: Brain,
      title: 'Advanced AI Models',
      description: 'Access to cutting-edge GPT models optimized for code analysis',
      details: ['GPT-4 Turbo', 'Code-specific training', 'Multi-language support']
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast response times with optimized inference',
      details: ['Sub-second responses', 'Batch processing', 'Auto-scaling']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with data encryption and privacy',
      details: ['End-to-end encryption', 'Zero data retention', 'GDPR compliant']
    }
  ];

  const benefits = [
    '99.9% uptime guarantee',
    '24/7 expert support',
    'Custom model fine-tuning',
    'Advanced analytics dashboard',
    'API rate limiting',
    'Multi-region deployment'
  ];

  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-900 text-primary-100 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4" />
            <span>Powered by Xibe AI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-4">
            Enterprise-Grade AI{' '}
            <span className="gradient-text">Platform</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Built on Xibe AI's robust infrastructure, xibe-pr1 delivers production-ready
            code review capabilities with enterprise-level reliability and performance.
          </p>
        </div>

        {/* Main Integration Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="dark-card rounded-2xl p-8 shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-100 mb-4">
                Seamless Integration
              </h3>
              <p className="text-gray-300 mb-6">
                xibe-pr1 is built from the ground up on Xibe AI's platform, ensuring
                seamless integration with the latest AI capabilities and enterprise features.
              </p>
              <div className="space-y-3">
                {[
                  'Native API integration',
                  'Optimized for code analysis',
                  'Real-time processing',
                  'Scalable architecture'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-xibe-500 to-primary-600 rounded-2xl p-8 text-white">
              <h4 className="text-xl font-semibold mb-4">Why Xibe AI?</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-xibe-200 mt-1" />
                  <div>
                    <h5 className="font-medium">Developer-First</h5>
                    <p className="text-xibe-100 text-sm">
                      Built by developers for developers with deep understanding of coding workflows
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Zap className="w-6 h-6 text-xibe-200 mt-1" />
                  <div>
                    <h5 className="font-medium">Performance Optimized</h5>
                    <p className="text-xibe-100 text-sm">
                      Optimized inference pipeline specifically for code analysis and review tasks
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-xibe-200 mt-1" />
                  <div>
                    <h5 className="font-medium">Enterprise Ready</h5>
                    <p className="text-xibe-100 text-sm">
                      Production-grade infrastructure with 99.9% uptime and enterprise security
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="dark-card text-center group hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-900 to-primary-800 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-100 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {feature.description}
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center justify-center space-x-2">
                      <div className="w-1 h-1 bg-primary-500 rounded-full"></div>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Benefits & CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-100 mb-6">
              Enterprise Benefits
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>
            <a
              href="https://xibe.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary flex items-center space-x-2 w-fit"
            >
              <span>Explore Xibe AI</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="dark-card rounded-2xl p-8 shadow-xl">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <ArrowRight className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-100 mb-4">
                Ready to Get Started?
              </h4>
              <p className="text-gray-300 mb-6">
                Join thousands of developers using Xibe AI for intelligent code analysis.
                Set up xibe-pr1 in minutes with our comprehensive guides.
              </p>
              <div className="space-y-3">
                <a
                  href="/setup"
                  className="btn btn-primary w-full flex items-center justify-center space-x-2"
                >
                  <span>Setup Guide</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="https://xibe.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary w-full"
                >
                  Get API Key
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default XibeIntegration;
