import { useState } from 'react';
import { Code, Eye, EyeOff } from 'lucide-react';

const DemoSection = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [showCode, setShowCode] = useState(true);

  const demos = [
    {
      title: 'Security Vulnerability Detection',
      description: 'The bot identifies SQL injection vulnerabilities and suggests secure alternatives',
      trigger: '@xibe-review please review this PR',
      code: `// Vulnerable code
const userId = req.params.id;
const query = "SELECT * FROM users WHERE id = " + userId;

// Fixed code
const query = "SELECT * FROM users WHERE id = ?";
db.query(query, [userId], callback);`,
      review: `## 🚨 Security Issue Found

**Issue:** SQL injection vulnerability detected in user query construction.

**Risk Level:** High - This could allow attackers to execute arbitrary SQL.

**Recommendation:** Use parameterized queries to prevent SQL injection attacks.

**Best Practice:** Always use parameterized queries when dealing with user input.

---

**✅ Recommendation: APPROVE** with security fixes`
    },
    {
      title: 'Code Quality Improvement',
      description: 'Suggests better coding patterns and best practices',
      trigger: '@xibe-review please review this PR',
      code: `// Before: Manual loop
let total = 0;
for(let i = 0; i < items.length; i++) {
  total += items[i].price * items[i].quantity;
}

// After: Functional approach
const total = items.reduce((sum, item) => {
  return sum + (item.price * item.quantity);
}, 0);`,
      review: `## 💡 Code Quality Suggestion

**Issue:** Loop can be simplified using array methods.

**Current:** Traditional for loop with manual indexing.

**Suggestion:** Use reduce() method for more functional approach.

**Benefits:** More concise, functional programming style, better readability.

---

**✅ Recommendation: APPROVE** with improvements`
    },
    {
      title: 'Performance Optimization',
      description: 'Identifies performance bottlenecks and suggests optimizations',
      trigger: '@xibe-review please review this PR',
      code: `// Inefficient: Multiple DOM queries
const elements = document.querySelectorAll('.item');
elements.forEach(el => {
  el.style.color = 'red';
  el.style.fontSize = '14px';
});

// Optimized: Batch operations
const elements = document.querySelectorAll('.item');
const styles = { color: 'red', fontSize: '14px' };
elements.forEach(el => Object.assign(el.style, styles));`,
      review: `## ⚡ Performance Analysis

**Issue:** Inefficient DOM manipulation with multiple style assignments.

**Impact:** Multiple reflows and repaints, affecting performance.

**Suggestion:** Use Object.assign() or CSS classes for batch updates.

**Benefits:** Reduced DOM thrashing, better performance, cleaner code.

---

**✅ Recommendation: APPROVE** with performance improvements`
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            See It In{' '}
            <span className="gradient-text">Action</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience how xibe-pr1 analyzes code and provides intelligent feedback.
            Click through the examples to see different types of reviews.
          </p>
        </div>

        {/* Demo Interface */}
        <div className="card">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900">Interactive Demo</h3>
            <button
              onClick={() => setShowCode(!showCode)}
              className="btn btn-ghost flex items-center space-x-2"
            >
              {showCode ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              <span>{showCode ? 'Hide' : 'Show'} Code</span>
            </button>
          </div>

          {/* Demo Tabs */}
          <div className="flex space-x-1 bg-gray-100 rounded-lg p-1 mb-6">
            {demos.map((demo, index) => (
              <button
                key={index}
                onClick={() => setActiveDemo(index)}
                className={`flex-1 px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                  activeDemo === index
                    ? 'bg-white text-primary-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {demo.title.split(' ')[0]}
              </button>
            ))}
          </div>

          {/* Demo Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Side - GitHub PR Simulation */}
            <div className="space-y-4">
              <div className="bg-gray-900 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-400 text-sm ml-2">GitHub PR</span>
                </div>

                {/* PR Comment */}
                <div className="bg-blue-600 rounded-lg p-3 mb-3">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center">
                      <span className="text-xs text-white font-bold">JD</span>
                    </div>
                    <span className="text-white text-sm font-medium">johndoe</span>
                    <span className="text-blue-200 text-xs">mentioned this PR</span>
                  </div>
                  <div className="bg-blue-500 rounded p-2">
                    <code className="text-blue-100 text-sm">
                      {demos[activeDemo].trigger}
                    </code>
                  </div>
                </div>

                {/* Bot Reaction */}
                <div className="flex items-center space-x-2 text-gray-400 text-sm">
                  <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center">
                    <span className="text-xs">🤖</span>
                  </div>
                  <span>xibe-review</span>
                  <span>reacted with 👀</span>
                </div>
              </div>

              {/* Code Changes */}
              {showCode && (
                <div className="bg-gray-900 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <Code className="w-4 h-4 text-green-400" />
                    <span className="text-gray-400 text-sm">Code Changes</span>
                  </div>
                  <pre className="text-green-400 text-sm overflow-x-auto">
                    <code>{demos[activeDemo].code}</code>
                  </pre>
                </div>
              )}
            </div>

            {/* Right Side - Bot Review */}
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center">
                    <span className="text-xs text-white font-bold">🤖</span>
                  </div>
                  <span className="font-medium text-gray-900">xibe-review</span>
                  <span className="text-gray-500 text-sm">AI Code Review</span>
                </div>

                <div className="prose prose-sm max-w-none">
                  <div className="text-gray-700 whitespace-pre-line">
                    {demos[activeDemo].review}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-200 flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>Powered by Xibe AI</span>
                    <span>•</span>
                    <span>GPT-4</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-green-600 font-medium">Live</span>
                  </div>
                </div>
              </div>

              {/* Demo Navigation */}
              <div className="flex items-center justify-between">
                <button
                  onClick={() => setActiveDemo((prev) => (prev - 1 + demos.length) % demos.length)}
                  className="btn btn-secondary"
                >
                  Previous
                </button>
                <div className="flex items-center space-x-2">
                  {demos.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveDemo(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        activeDemo === index ? 'bg-primary-600' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={() => setActiveDemo((prev) => (prev + 1) % demos.length)}
                  className="btn btn-primary"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary-600 to-xibe-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Experience AI-Powered Code Reviews?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Deploy xibe-pr1 on your repositories and see the difference intelligent code review can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#setup"
                className="btn bg-white text-primary-600 hover:bg-gray-100 text-lg px-8 py-3"
              >
                Start Setup Guide
              </a>
              <a
                href="https://github.com/iotserver24/xibe-pr1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn border border-white/30 text-white hover:bg-white/10 text-lg px-8 py-3"
              >
                View Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
