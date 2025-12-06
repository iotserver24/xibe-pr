import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Eye, Lock, Database, Users, Mail } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
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
              <Link
                to="/"
                className="inline-flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm">Back to Home</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Privacy Policy Content */}
      <main className="relative z-10 py-8 sm:py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 sm:p-8 md:p-12">
            <div className="text-center mb-8 sm:mb-12">
              <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
                <Shield className="w-5 h-5 text-blue-400" />
                <span className="text-blue-300 text-sm font-medium">Privacy Policy</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                Your Privacy Matters
              </h1>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                We are committed to protecting your privacy and ensuring the security of your data.
              </p>
            </div>

            <div className="prose prose-invert max-w-none">
              <div className="space-y-8">
                {/* Last Updated */}
                <div className="bg-gray-700/30 rounded-lg p-4 border border-gray-600">
                  <p className="text-sm text-gray-300 mb-0">
                    <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                </div>

                {/* Information We Collect */}
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Database className="w-6 h-6 text-blue-400 mr-3" />
                    Information We Collect
                  </h2>
                  <div className="space-y-4 text-gray-300">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">GitHub Data</h3>
                      <p>When you install our GitHub App, we collect:</p>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Repository information (name, description, visibility)</li>
                        <li>Pull request data (code, comments, metadata)</li>
                        <li>User information (GitHub username, profile data)</li>
                        <li>Installation and configuration settings</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Usage Data</h3>
                      <p>We automatically collect:</p>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Bot interaction logs and performance metrics</li>
                        <li>Error reports and debugging information</li>
                        <li>API usage statistics</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* How We Use Information */}
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Eye className="w-6 h-6 text-green-400 mr-3" />
                    How We Use Your Information
                  </h2>
                  <div className="space-y-4 text-gray-300">
                    <ul className="list-disc list-inside ml-4 space-y-2">
                      <li>Provide AI-powered code review services</li>
                      <li>Improve our bot's performance and accuracy</li>
                      <li>Debug issues and provide technical support</li>
                      <li>Generate usage analytics and reports</li>
                      <li>Ensure compliance with GitHub's terms of service</li>
                    </ul>
                  </div>
                </section>

                {/* Data Security */}
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Lock className="w-6 h-6 text-red-400 mr-3" />
                    Data Security
                  </h2>
                  <div className="space-y-4 text-gray-300">
                    <p>We implement industry-standard security measures to protect your data:</p>
                    <ul className="list-disc list-inside ml-4 space-y-2">
                      <li>End-to-end encryption for all data transmission</li>
                      <li>Secure cloud infrastructure with regular security audits</li>
                      <li>Access controls and authentication protocols</li>
                      <li>Regular data backups and disaster recovery procedures</li>
                      <li>Compliance with GitHub's security requirements</li>
                    </ul>
                  </div>
                </section>

                {/* Data Sharing */}
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Users className="w-6 h-6 text-purple-400 mr-3" />
                    Data Sharing
                  </h2>
                  <div className="space-y-4 text-gray-300">
                    <p>We do not sell, trade, or rent your personal information. We may share data only in these circumstances:</p>
                    <ul className="list-disc list-inside ml-4 space-y-2">
                      <li>With your explicit consent</li>
                      <li>To comply with legal obligations</li>
                      <li>To protect our rights and prevent fraud</li>
                      <li>With trusted service providers who assist in our operations</li>
                    </ul>
                  </div>
                </section>

                {/* Your Rights */}
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
                  <div className="space-y-4 text-gray-300">
                    <p>You have the right to:</p>
                    <ul className="list-disc list-inside ml-4 space-y-2">
                      <li>Access your personal data</li>
                      <li>Request correction of inaccurate data</li>
                      <li>Request deletion of your data</li>
                      <li>Withdraw consent for data processing</li>
                      <li>Export your data in a portable format</li>
                    </ul>
                  </div>
                </section>

                {/* Third-Party Services */}
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Third-Party Services</h2>
                  <div className="space-y-4 text-gray-300">
                    <p>Our service integrates with:</p>
                    <ul className="list-disc list-inside ml-4 space-y-2">
                      <li><strong>GitHub:</strong> For repository access and pull request management</li>
                      <li><strong>Xibe AI:</strong> For AI-powered code analysis</li>
                      <li><strong>Cloud Infrastructure:</strong> For secure data storage and processing</li>
                    </ul>
                    <p>These services have their own privacy policies, which we encourage you to review.</p>
                  </div>
                </section>

                {/* Contact Information */}
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Mail className="w-6 h-6 text-yellow-400 mr-3" />
                    Contact Us
                  </h2>
                  <div className="space-y-4 text-gray-300">
                    <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
                    <div className="bg-gray-700/30 rounded-lg p-4 border border-gray-600">
                      <p className="mb-2"><strong>Email:</strong> privacy@xibe.app</p>
                      <p className="mb-2"><strong>GitHub:</strong> <a href="https://github.com/iotserver24" className="text-blue-400 hover:text-blue-300">@iotserver24</a></p>
                      <p><strong>Website:</strong> <a href="https://xibe.app" className="text-blue-400 hover:text-blue-300">xibe.app</a></p>
                    </div>
                  </div>
                </section>

                {/* Changes to Policy */}
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Changes to This Policy</h2>
                  <div className="text-gray-300">
                    <p>We may update this Privacy Policy from time to time. We will notify you of any changes by:</p>
                    <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                      <li>Posting the new Privacy Policy on this page</li>
                      <li>Sending you an email notification</li>
                      <li>Updating the "Last Updated" date at the top of this policy</li>
                    </ul>
                    <p className="mt-4">Your continued use of our service after any changes constitutes acceptance of the updated policy.</p>
                  </div>
                </section>
              </div>
            </div>

            {/* Back to Home Button */}
            <div className="text-center mt-12">
              <Link
                to="/"
                className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Home</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;