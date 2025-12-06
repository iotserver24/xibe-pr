import { Brain, Shield, Zap, BarChart3, Settings, Users, CheckCircle } from 'lucide-react';
import { BOT_FEATURES } from '../lib/constants';

const iconMap = {
  Brain,
  Shield,
  Zap,
  BarChart3,
  Settings,
  Users,
};

const Features = () => {
  return (
    <section id="features" className="py-24 dark-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-4">
            Why Choose{' '}
            <span className="gradient-text">xibe-pr1</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the next generation of code review automation with our multi-agent AI system.
            Built for developers, by developers.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {BOT_FEATURES.map((feature, index) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <div
                key={index}
                className="dark-card group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary-900 to-xibe-900 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-100 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Comparison Section */}
        <div className="bg-gray-800 rounded-2xl p-8 lg:p-12 border border-gray-700">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-100 mb-4">
              Better Than Traditional Code Review
            </h3>
            <p className="text-lg text-gray-300">
              See how xibe-pr1 compares to traditional methods
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* xibe-pr1 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-600 to-xibe-600 rounded-full mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-100 mb-2">xibe-pr1</h4>
              <div className="space-y-2">
                {['✅ AI-Powered Analysis', '✅ Instant Reviews', '✅ Security Detection', '✅ Best Practices', '✅ 24/7 Available', '✅ Consistent Quality'].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>{item.split(' ')[1]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Manual Review */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-700 rounded-full mb-4">
                <Users className="w-8 h-8 text-gray-300" />
              </div>
              <h4 className="text-xl font-semibold text-gray-100 mb-2">Manual Review</h4>
              <div className="space-y-2">
                {['⚠️ Time Consuming', '⚠️ Inconsistent', '⚠️ Human Error', '⚠️ Limited Expertise', '⚠️ Business Hours', '⚠️ Variable Quality'].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2 text-sm text-gray-400">
                    <span className="w-4 h-4 rounded-full bg-yellow-500 flex items-center justify-center text-xs">!</span>
                    <span>{item.split(' ')[1]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Other Bots */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-700 rounded-full mb-4">
                <Settings className="w-8 h-8 text-gray-300" />
              </div>
              <h4 className="text-xl font-semibold text-gray-100 mb-2">Other Bots</h4>
              <div className="space-y-2">
                {['⚠️ Basic Analysis', '⚠️ Slow Response', '⚠️ Limited Security', '⚠️ Rule-Based', '⚠️ Setup Complex', '⚠️ Inconsistent'].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2 text-sm text-gray-400">
                    <span className="w-4 h-4 rounded-full bg-yellow-500 flex items-center justify-center text-xs">!</span>
                    <span>{item.split(' ')[1]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-600 to-xibe-600 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Ready to Transform Your Code Reviews?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of developers who trust xibe-pr1 for their code quality
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#setup"
                className="btn bg-white text-primary-600 hover:bg-gray-100 text-lg px-8 py-4"
              >
                Get Started Now
              </a>
              <a
                href="https://xibe.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn border border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
