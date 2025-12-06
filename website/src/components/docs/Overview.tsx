import React from 'react';

const Overview: React.FC = () => {
  return (
    <div className="prose prose-base sm:prose-lg max-w-none prose-invert">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">🎯 Overview</h1>
        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
          **XIbe Review** is an advanced AI-powered GitHub PR review bot that transforms the code review process
          through intelligent automation, comprehensive security analysis, and actionable feedback.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
        <div className="bg-gray-800 rounded-lg p-4 sm:p-6 border border-gray-700">
          <h3 className="text-base sm:text-lg font-semibold text-blue-400 mb-2 sm:mb-3">🤖 What is XIbe Review?</h3>
          <p className="text-sm sm:text-base text-gray-300">
            XIbe Review is a sophisticated GitHub integration that uses AI models (via xibe.app or other providers) to analyze pull requests,
            detect security vulnerabilities, identify code quality issues, and provide detailed recommendations.
          </p>
        </div>

        <div className="bg-gray-800 rounded-lg p-4 sm:p-6 border border-gray-700">
          <h3 className="text-base sm:text-lg font-semibold text-green-400 mb-2 sm:mb-3">🚀 Core Capabilities</h3>
          <ul className="text-sm sm:text-base text-gray-300 space-y-1">
            <li>• Deep semantic understanding of code changes</li>
            <li>• Security vulnerability detection</li>
            <li>• Code quality and best practices analysis</li>
            <li>• Context-aware review generation</li>
          </ul>
        </div>
      </div>

      <div className="mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">🎯 How It Works</h2>

        <div className="space-y-4">
          <div className="flex items-start space-x-3 sm:space-x-4">
            <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 text-sm sm:text-base">1</div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base sm:text-lg font-semibold text-white">Trigger</h3>
              <p className="text-sm sm:text-base text-gray-300">Simply mention the bot in any PR comment:</p>
              <div className="bg-gray-800 rounded-lg p-3 sm:p-4 mt-2 font-mono text-xs sm:text-sm text-gray-100 overflow-x-auto">
                @Xibe-review please review this PR
              </div>
            </div>
          </div>

          <div className="flex items-start space-x-3 sm:space-x-4">
            <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 text-sm sm:text-base">2</div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base sm:text-lg font-semibold text-white">Analysis</h3>
              <p className="text-sm sm:text-base text-gray-300">The bot performs comprehensive multi-stage analysis:</p>
              <ul className="text-sm sm:text-base text-gray-300 mt-2 space-y-1">
                <li>• File-by-file review and security scanning</li>
                <li>• Quality assessment and best practice evaluation</li>
                <li>• Context integration with PR descriptions</li>
              </ul>
            </div>
          </div>

          <div className="flex items-start space-x-3 sm:space-x-4">
            <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 text-sm sm:text-base">3</div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base sm:text-lg font-semibold text-white">AI Processing</h3>
              <p className="text-sm sm:text-base text-gray-300">Using advanced AI models, the bot:</p>
              <ul className="text-sm sm:text-base text-gray-300 mt-2 space-y-1">
                <li>• Understands code intent and context</li>
                <li>• Identifies bugs, security problems, and quality concerns</li>
                <li>• Suggests specific, actionable improvements</li>
              </ul>
            </div>
          </div>

          <div className="flex items-start space-x-3 sm:space-x-4">
            <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 text-sm sm:text-base">4</div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base sm:text-lg font-semibold text-white">Feedback</h3>
              <p className="text-sm sm:text-base text-gray-300">Posts detailed reviews with:</p>
              <ul className="text-sm sm:text-base text-gray-300 mt-2 space-y-1">
                <li>• Clear APPROVE/REQUEST_CHANGES/COMMENT verdicts</li>
                <li>• Line-by-line feedback with code examples</li>
                <li>• Security alerts and action items</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">🏗️ Architecture Overview</h2>

        <div className="bg-gray-800 rounded-lg p-4 sm:p-6 border border-gray-700 mb-4">
          <h3 className="text-base sm:text-lg font-semibold text-blue-400 mb-2 sm:mb-3">Multi-Agent System</h3>
          <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">
            XIbe Review uses a sophisticated two-stage review process with specialized AI agents:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            <div className="bg-gray-700 rounded-lg p-3 sm:p-4">
              <h4 className="text-sm sm:text-base font-semibold text-green-400 mb-2">🤖 Agent 1: File Analyzer</h4>
              <ul className="text-xs sm:text-sm text-gray-300 space-y-1">
                <li>• Individual file analysis and security scanning</li>
                <li>• Hardcoded value detection</li>
                <li>• Vulnerability identification</li>
                <li>• Detailed analysis of each file</li>
              </ul>
            </div>

            <div className="bg-gray-700 rounded-lg p-3 sm:p-4">
              <h4 className="text-sm sm:text-base font-semibold text-purple-400 mb-2">🤖 Agent 2: Review Synthesizer</h4>
              <ul className="text-xs sm:text-sm text-gray-300 space-y-1">
                <li>• Comprehensive review creation</li>
                <li>• Consolidating findings from all files</li>
                <li>• Prioritizing issues and generating recommendations</li>
                <li>• Professional, structured review comments</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">📋 Review Format</h2>

        <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">
          Each review follows a consistent, professional structure:
        </p>

        <div className="bg-gray-800 rounded-lg p-3 sm:p-4 font-mono text-xs sm:text-sm text-gray-100 overflow-x-auto">
          <div>## 🤖 AI Code Review</div>
          <br />
          <div>**@username** - Thank you for your contribution!</div>
          <br />
          <div>### ✅ **Recommendation**</div>
          <div>APPROVE - Well-structured implementation with proper security measures</div>
          <br />
          <div>### 📋 **Summary**</div>
          <div>**What this PR does:** Implements user authentication system</div>
          <div>**Impact:** Enhances application security</div>
          <div>**Files analyzed:** 3 files</div>
          <br />
          <div>### 🔴 **CRITICAL ISSUES** (if any)</div>
          <div>- 🔴 Hardcoded API key found in src/auth.js (line 15)</div>
          <br />
          <div>### ⚠️ **Security & Best Practices**</div>
          <div>- Consider using environment variables for configuration</div>
          <div>- Add input validation for user data</div>
          <br />
          <div>### ✅ **What's Good**</div>
          <div>- Clean code structure and naming conventions</div>
          <div>- Proper separation of concerns</div>
          <br />
          <div>### 📝 **Action Items**</div>
          <div>- [ ] Move API_KEY to environment variable (@username)</div>
          <div>- [ ] Add input sanitization (@username)</div>
          <br />
          <div>---</div>
          <br />
          <div>🤖 Powered by Xibe AI • 📊 Analysis: 1250 characters across 3 files</div>
        </div>
      </div>

      <div className="mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">🎯 Use Cases</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-gray-800 rounded-lg p-4 sm:p-6 border border-gray-700">
            <h3 className="text-base sm:text-lg font-semibold text-blue-400 mb-2 sm:mb-3">👨‍💻 Individual Developers</h3>
            <ul className="text-sm sm:text-base text-gray-300 space-y-2">
              <li>• Instant feedback without waiting</li>
              <li>• Learn best practices from AI</li>
              <li>• Catch issues before code review</li>
              <li>• Understand complex codebases</li>
            </ul>
          </div>

          <div className="bg-gray-800 rounded-lg p-4 sm:p-6 border border-gray-700">
            <h3 className="text-base sm:text-lg font-semibold text-green-400 mb-2 sm:mb-3">👥 Development Teams</h3>
            <ul className="text-sm sm:text-base text-gray-300 space-y-2">
              <li>• Consistent code quality standards</li>
              <li>• Automated vulnerability detection</li>
              <li>• Knowledge sharing through AI</li>
              <li>• Pre-review analysis</li>
            </ul>
          </div>

          <div className="bg-gray-800 rounded-lg p-4 sm:p-6 border border-gray-700">
            <h3 className="text-base sm:text-lg font-semibold text-purple-400 mb-2 sm:mb-3">🏢 Organizations</h3>
            <ul className="text-sm sm:text-base text-gray-300 space-y-2">
              <li>• Scale without increasing overhead</li>
              <li>• Prevent credential leaks</li>
              <li>• Ensure coding standards compliance</li>
              <li>• Reduce routine review time</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">🚀 Key Benefits</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div className="bg-gray-800 rounded-lg p-4 sm:p-6 border border-gray-700">
            <h3 className="text-base sm:text-lg font-semibold text-blue-400 mb-2 sm:mb-3">⚡ Speed</h3>
            <ul className="text-sm sm:text-base text-gray-300 space-y-1">
              <li>• Reviews in 10-60 seconds</li>
              <li>• 24/7 availability</li>
              <li>• No waiting for reviewers</li>
            </ul>
          </div>

          <div className="bg-gray-800 rounded-lg p-4 sm:p-6 border border-gray-700">
            <h3 className="text-base sm:text-lg font-semibold text-green-400 mb-2 sm:mb-3">🎯 Accuracy</h3>
            <ul className="text-sm sm:text-base text-gray-300 space-y-1">
              <li>• Context-aware analysis</li>
              <li>• Comprehensive coverage</li>
              <li>• Professional quality reviews</li>
            </ul>
          </div>

          <div className="bg-gray-800 rounded-lg p-4 sm:p-6 border border-gray-700">
            <h3 className="text-base sm:text-lg font-semibold text-red-400 mb-2 sm:mb-3">🔒 Security</h3>
            <ul className="text-sm sm:text-base text-gray-300 space-y-1">
              <li>• Proactive vulnerability detection</li>
              <li>• Credential protection</li>
              <li>• Security vulnerability scanning</li>
            </ul>
          </div>

          <div className="bg-gray-800 rounded-lg p-4 sm:p-6 border border-gray-700">
            <h3 className="text-base sm:text-lg font-semibold text-purple-400 mb-2 sm:mb-3">📈 Quality</h3>
            <ul className="text-sm sm:text-base text-gray-300 space-y-1">
              <li>• Best practice enforcement</li>
              <li>• Consistency across projects</li>
              <li>• Long-term maintainability</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">🔄 Integration Examples</h2>

        <div className="space-y-3 sm:space-y-4">
          <div className="bg-gray-800 rounded-lg p-3 sm:p-4">
            <h3 className="text-base sm:text-lg font-semibold text-blue-400 mb-2">Simple Usage</h3>
            <div className="bg-gray-700 rounded p-2 sm:p-3 font-mono text-xs sm:text-sm text-gray-100 overflow-x-auto">
              # In a PR comment<br />
              @Xibe-review please review this PR
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-3 sm:p-4">
            <h3 className="text-base sm:text-lg font-semibold text-green-400 mb-2">With Specific Questions</h3>
            <div className="bg-gray-700 rounded p-2 sm:p-3 font-mono text-xs sm:text-sm text-gray-100 overflow-x-auto">
              # Ask specific questions<br />
              @Xibe-review please review this PR<br />
              Is this authentication approach secure?<br />
              Should I use environment variables for the API key?
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-3 sm:p-4">
            <h3 className="text-base sm:text-lg font-semibold text-purple-400 mb-2">Multiple Mentions (Smart Limiting)</h3>
            <div className="bg-gray-700 rounded p-2 sm:p-3 font-mono text-xs sm:text-sm text-gray-100 overflow-x-auto">
              # The bot intelligently handles multiple mentions<br />
              @Xibe-review please review<br />
              @Xibe-review also check security<br />
              @Xibe-review performance impact?<br />
              <br />
              # Bot responds once with comprehensive analysis
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-4 sm:p-6 text-white">
        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">🚀 Getting Started</h2>
        <p className="text-sm sm:text-base mb-3 sm:mb-4">
          Ready to experience AI-powered code reviews? Here's how to get started:
        </p>
        <div className="space-y-2 text-sm sm:text-base">
          <div>1. <strong>Try It Now:</strong> Comment "@Xibe-review please review this PR" on any GitHub PR</div>
          <div>2. <strong>Set Up Your Own:</strong> Clone the repository and configure environment variables</div>
          <div>3. <strong>Deploy:</strong> Choose from Docker, VPS, or cloud deployment options</div>
          <div>4. <strong>Customize:</strong> Tailor the bot to your team's needs and standards</div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
