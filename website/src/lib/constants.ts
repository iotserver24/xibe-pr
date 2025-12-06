// URLs are configured via environment variables
export const BOT_URL = import.meta.env.VITE_BOT_URL || '';
export const SITE_URL = import.meta.env.VITE_SITE_URL || '';

export const BOT_FEATURES = [
  {
    icon: 'Brain',
    title: 'Multi-Agent AI System',
    description: 'Two-stage AI analysis with specialized models for comprehensive code review',
    details: [
      'Stage 1: Deep code analysis with specialized models',
      'Stage 2: Professional review generation',
      'Multiple AI model support (DeepSeek, OpenAI, Gemini)',
      'Intelligent model selection based on code complexity'
    ]
  },
  {
    icon: 'Shield',
    title: 'Security Review',
    description: 'Automated vulnerability detection and security best practices',
    details: [
      'Common vulnerability detection',
      'Security best practices enforcement',
      'OWASP compliance checking',
      'Authentication & authorization review'
    ]
  },
  {
    icon: 'Zap',
    title: 'Auto-Review',
    description: 'Automatic PR reviews triggered by events or mentions',
    details: [
      'GitHub webhook integration',
      'Smart mention detection',
      'Real-time processing',
      'Batch review capabilities'
    ]
  },
  {
    icon: 'BarChart3',
    title: 'Analytics Dashboard',
    description: 'Comprehensive monitoring and performance analytics',
    details: [
      'Webhook event tracking',
      'Review success rates',
      'Performance metrics',
      'Usage analytics'
    ]
  },
  {
    icon: 'Settings',
    title: 'Easy Configuration',
    description: 'Simple setup with GitHub App or Personal Access Token',
    details: [
      'GitHub App integration',
      'Personal Access Token support',
      'Environment variable configuration',
      'Docker deployment ready'
    ]
  },
  {
    icon: 'Users',
    title: 'Team Collaboration',
    description: 'Seamless integration with development workflows',
    details: [
      'Multi-repository support',
      'Organization-wide deployment',
      'Collaborative review threads',
      'Team notification management'
    ]
  }
];

export const SETUP_STEPS = [
  {
    title: 'Choose Authentication',
    description: 'Select between GitHub App (recommended) or Personal Access Token',
    code: `# GitHub App (Recommended)
GITHUB_APP_ID=your_app_id
GITHUB_PRIVATE_KEY="-----BEGIN RSA PRIVATE KEY-----\\n..."
GITHUB_WEBHOOK_SECRET=your_webhook_secret

# Or Personal Access Token
GITHUB_TOKEN=ghp_your_token_here`
  },
  {
    title: 'Configure Multi-Agent AI Models',
    description: 'Set up specialized AI models for analysis and comment generation',
    code: `# Two-Stage AI Models Configuration
ANALYSIS_MODEL=deepseek          # Model for Stage 1: Code Analysis
COMMENT_MODEL=openai-large       # Model for Stage 2: Comment Generation

# AI API Configuration
AI_API=https://api.xibe.app/openai
AI_KEY=your_ai_api_key`
  },
  {
    title: 'Deploy the Bot',
    description: 'Deploy using Docker, PM2, or cloud platforms',
    command: 'docker run -d --env-file .env xibe-pr1-bot'
  },
  {
    title: 'Install on Repository',
    description: 'Install the GitHub App on your repositories or set up webhooks',
    code: `# For GitHub App
1. Go to GitHub Settings > Developer settings > GitHub Apps
2. Install your app on target repositories
3. Configure webhook URL: [YOUR_BOT_DOMAIN]/webhook

# For Personal Access Token
1. Go to Repository Settings > Webhooks
2. Add webhook with URL: [YOUR_BOT_DOMAIN]/webhook`
  }
];

export const REVIEW_EXAMPLES = [
  {
    title: 'Security Vulnerability Detection',
    description: 'The bot identifies potential security issues in code',
    code: `// Potential security issue detected
const query = "SELECT * FROM users WHERE id = " + userId;

// Suggestion: Use parameterized queries
const query = "SELECT * FROM users WHERE id = ?";
const result = db.query(query, [userId]);`,
    review: `## 🚨 Security Issue Found

**Issue:** SQL injection vulnerability detected in user query construction.

**Location:** ` + "`database.js:15`" + `

**Risk Level:** High - This could allow attackers to execute arbitrary SQL.

**Recommendation:** Use parameterized queries or prepared statements to prevent SQL injection attacks.

**Best Practice:** Always use parameterized queries when dealing with user input.`
  },
  {
    title: 'Code Quality Improvement',
    description: 'The bot suggests improvements for better code quality',
    code: `function calculateTotal(items) {
  let total = 0;
  for(let i = 0; i < items.length; i++) {
    total += items[i].price * items[i].quantity;
  }
  return total;
}`,
    review: `## 💡 Code Quality Suggestion

**Issue:** Loop can be simplified using array methods.

**Current Code:** Traditional for loop with manual indexing.

**Suggestion:** Use ` + "`reduce()`" + ` method for more functional approach:

` + "```javascript" + `
function calculateTotal(items) {
  return items.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);
}
` + "```" + `

**Benefits:** More concise, functional programming style, better readability.`
  }
];
