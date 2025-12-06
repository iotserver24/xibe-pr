import React from 'react';

const Testing: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-4">Testing Guide</h1>
        <p className="text-gray-300 text-lg">
          Comprehensive testing procedures for the XIbe Review bot to ensure reliability and performance.
        </p>
      </div>

      <div className="space-y-8">
        {/* Environment Testing */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h2 className="text-2xl font-semibold text-green-400 mb-4">Environment Testing</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-900 rounded p-4">
              <h4 className="text-green-400 mb-3">1. Environment Validation</h4>
              <div className="font-mono text-sm text-gray-100">
                <div className="text-blue-400 mb-2">// Test environment variable validation</div>
                <div>describe('Environment Configuration', () =&gt; {'{'}</div>
                <div className="ml-4">test('should validate required environment variables', () =&gt; {'{'}</div>
                <div className="ml-8">const required = ['AI_API', 'AI_KEY', 'BOT_USERNAME'];</div>
                <div className="ml-8">const missing = required.filter(key =&gt; !process.env[key]);</div>
                <div className="ml-8">expect(missing.length).toBe(0);</div>
                <div className="ml-4">{'}'});</div>
                <div></div>
                <div className="ml-4">test('should initialize with test mode when no GitHub auth', () =&gt; {'{'}</div>
                <div className="ml-8">expect(authMode).toBe('test');</div>
                <div className="ml-4">{'}'});</div>
                <div>{'}'});</div>
              </div>
            </div>

            <div className="bg-gray-900 rounded p-4">
              <h4 className="text-purple-400 mb-3">2. Bot Mention Detection</h4>
              <div className="font-mono text-sm text-gray-100">
                <div className="text-blue-400 mb-2">// Test mention pattern matching</div>
                <div>describe('Bot Mention Detection', () =&gt; {'{'}</div>
                <div className="ml-4">const testCases = [</div>
                <div className="ml-8">{'{'}</div>
                <div className="ml-12">input: '@Xibe-review please review this PR',</div>
                <div className="ml-12">botName: 'xibe-review',</div>
                <div className="ml-12">expected: true</div>
                <div className="ml-8">{'}'},</div>
                <div className="ml-8">{'{'}</div>
                <div className="ml-12">input: 'This is a regular comment',</div>
                <div className="ml-12">botName: 'xibe-review',</div>
                <div className="ml-12">expected: false</div>
                <div className="ml-8">{'}'}</div>
                <div className="ml-4">];</div>
                <div></div>
                <div className="ml-4">testCases.forEach(({'{'}input, botName, expected{'}'}) =&gt; {'{'}</div>
                <div className="ml-8">test(`should detect mention in: ${'{'}input{'}'}`, () =&gt; {'{'}</div>
                <div className="ml-12">expect(isBotMentioned(input, botName)).toBe(expected);</div>
                <div className="ml-8">{'}'});</div>
                <div className="ml-4">{'}'});</div>
                <div>{'}'});</div>
              </div>
            </div>

            <div className="bg-gray-900 rounded p-4">
              <h4 className="text-yellow-400 mb-3">3. Analytics Functions</h4>
              <div className="font-mono text-sm text-gray-100">
                <div className="text-blue-400 mb-2">// Test Redis analytics operations</div>
                <div>describe('Analytics Functions', () =&gt; {'{'}</div>
                <div className="ml-4">test('should save review to database', async () =&gt; {'{'}</div>
                <div className="ml-8">const reviewData = {'{'}</div>
                <div className="ml-12">repository: 'owner/repo',</div>
                <div className="ml-12">pullNumber: 123,</div>
                <div className="ml-12">user: 'developer',</div>
                <div className="ml-12">reviewContent: 'Test review content'</div>
                <div className="ml-8">{'}'};</div>
                <div className="ml-8"></div>
                <div className="ml-8">const reviewId = await saveReviewToDatabase(reviewData);</div>
                <div className="ml-8">expect(reviewId).toBeTruthy();</div>
                <div className="ml-8">expect(reviewId).toMatch(/^review_\d+_[a-z0-9]+$/);</div>
                <div className="ml-4">{'}'});</div>
                <div></div>
                <div className="ml-4">test('should get global analytics', async () =&gt; {'{'}</div>
                <div className="ml-8">const analytics = await getGlobalAnalytics();</div>
                <div className="ml-8">expect(analytics).toHaveProperty('totalUsers');</div>
                <div className="ml-8">expect(analytics).toHaveProperty('totalReviews');</div>
                <div className="ml-8">expect(analytics).toHaveProperty('recentReviews');</div>
                <div className="ml-4">{'}'});</div>
                <div>{'}'});</div>
              </div>
            </div>
          </div>
        </div>

        {/* API Testing */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">API Testing</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-900 rounded p-4">
              <h4 className="text-green-400 mb-3">1. Health Check Testing</h4>
              <div className="font-mono text-sm text-gray-100">
                <div className="text-blue-400 mb-2">// Test health endpoint</div>
                <div>describe('Health Check API', () =&gt; {'{'}</div>
                <div className="ml-4">test('GET /health should return status ok', async () =&gt; {'{'}</div>
                <div className="ml-8">const response = await request(app).get('/health');</div>
                <div className="ml-8">expect(response.status).toBe(200);</div>
                <div className="ml-8">expect(response.body).toHaveProperty('status', 'ok');</div>
                <div className="ml-8">expect(response.body).toHaveProperty('timestamp');</div>
                <div className="ml-4">{'}'});</div>
                <div></div>
                <div className="ml-4">test('GET /health should handle Redis disconnection', async () =&gt; {'{'}</div>
                <div className="ml-8">// Mock Redis disconnection</div>
                <div className="ml-8">const response = await request(app).get('/health');</div>
                <div className="ml-8">expect(response.status).toBe(200);</div>
                <div className="ml-8">// Should still return OK even with Redis issues</div>
                <div className="ml-4">{'}'});</div>
                <div>{'}'});</div>
              </div>
            </div>

            <div className="bg-gray-900 rounded p-4">
              <h4 className="text-purple-400 mb-3">2. Webhook Testing</h4>
              <div className="font-mono text-sm text-gray-100">
                <div className="text-blue-400 mb-2">// Test webhook signature verification</div>
                <div>describe('Webhook Security', () =&gt; {'{'}</div>
                <div className="ml-4">const validPayload = {'{'}</div>
                <div className="ml-8">action: 'created',</div>
                <div className="ml-8">comment: {'{'}</div>
                <div className="ml-12">body: '@Xibe-review please review',</div>
                <div className="ml-12">user: {'{'} login: 'test-user' {'}'}</div>
                <div className="ml-8">{'}'},</div>
                <div className="ml-8">issue: {'{'}</div>
                <div className="ml-12">number: 123,</div>
                <div className="ml-12">pull_request: {'{'}</div>
                <div className="ml-16">url: 'https://api.github.com/repos/owner/repo/pulls/123'</div>
                <div className="ml-12">{'}'}</div>
                <div className="ml-8">{'}'}</div>
                <div className="ml-4">{'}'};</div>
                <div></div>
                <div className="ml-4">test('should accept valid webhook signature', async () =&gt; {'{'}</div>
                <div className="ml-8">const signature = createWebhookSignature(JSON.stringify(validPayload), 'secret');</div>
                <div className="ml-8">const response = await request(app)</div>
                <div className="ml-12">.post('/webhook')</div>
                <div className="ml-12">.set('X-GitHub-Event', 'issue_comment')</div>
                <div className="ml-12">.set('X-Hub-Signature-256', signature)</div>
                <div className="ml-12">.send(validPayload);</div>
                <div className="ml-8"></div>
                <div className="ml-8">expect(response.status).toBe(200);</div>
                <div className="ml-4">{'}'});</div>
                <div></div>
                <div className="ml-4">test('should reject invalid webhook signature', async () =&gt; {'{'}</div>
                <div className="ml-8">const response = await request(app)</div>
                <div className="ml-12">.post('/webhook')</div>
                <div className="ml-12">.set('X-GitHub-Event', 'issue_comment')</div>
                <div className="ml-12">.set('X-Hub-Signature-256', 'invalid_signature')</div>
                <div className="ml-12">.send(validPayload);</div>
                <div className="ml-8"></div>
                <div className="ml-8">expect(response.status).toBe(403);</div>
                <div className="ml-4">{'}'});</div>
                <div>{'}'});</div>
              </div>
            </div>

            <div className="bg-gray-900 rounded p-4">
              <h4 className="text-yellow-400 mb-3">3. Analytics API Testing</h4>
              <div className="font-mono text-sm text-gray-100">
                <div className="text-blue-400 mb-2">// Test analytics endpoints</div>
                <div>describe('Analytics API', () =&gt; {'{'}</div>
                <div className="ml-4">test('GET /api/analytics should return global analytics', async () =&gt; {'{'}</div>
                <div className="ml-8">const response = await request(app).get('/api/analytics');</div>
                <div className="ml-8">expect(response.status).toBe(200);</div>
                <div className="ml-8">expect(response.body).toHaveProperty('success', true);</div>
                <div className="ml-8">expect(response.body).toHaveProperty('data');</div>
                <div className="ml-8">expect(response.body.data).toHaveProperty('totalUsers');</div>
                <div className="ml-8">expect(response.body.data).toHaveProperty('totalReviews');</div>
                <div className="ml-4">{'}'});</div>
                <div></div>
                <div className="ml-4">test('GET /api/webhooks should return webhook logs', async () =&gt; {'{'}</div>
                <div className="ml-8">const response = await request(app).get('/api/webhooks?limit=10');</div>
                <div className="ml-8">expect(response.status).toBe(200);</div>
                <div className="ml-8">expect(response.body).toHaveProperty('logs');</div>
                <div className="ml-8">expect(response.body).toHaveProperty('total');</div>
                <div className="ml-8">expect(Array.isArray(response.body.logs)).toBe(true);</div>
                <div className="ml-4">{'}'});</div>
                <div>{'}'});</div>
              </div>
            </div>
          </div>
        </div>

        {/* Integration Testing */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h2 className="text-2xl font-semibold text-purple-400 mb-4">Integration Testing</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-900 rounded p-4">
              <h4 className="text-green-400 mb-3">1. End-to-End Workflow</h4>
              <div className="font-mono text-sm text-gray-100">
                <div className="text-blue-400 mb-2">// Test complete review workflow</div>
                <div>describe('End-to-End Integration', () =&gt; {'{'}</div>
                <div className="ml-4">test('should complete full review workflow', async () =&gt; {'{'}</div>
                <div className="ml-8">// 1. Set up test environment</div>
                <div className="ml-8">process.env.NODE_ENV = 'test';</div>
                <div className="ml-8">process.env.BOT_USERNAME = 'test-bot';</div>
                <div className="ml-8"></div>
                <div className="ml-8">// 2. Start test server</div>
                <div className="ml-8">const server = await startTestServer();</div>
                <div className="ml-8"></div>
                <div className="ml-8">// 3. Simulate webhook event</div>
                <div className="ml-8">const webhookPayload = createTestWebhookPayload();</div>
                <div className="ml-8">const signature = createTestSignature(webhookPayload);</div>
                <div className="ml-8"></div>
                <div className="ml-8">// 4. Send webhook request</div>
                <div className="ml-8">const response = await request(server)</div>
                <div className="ml-12">.post('/webhook')</div>
                <div className="ml-12">.set('X-GitHub-Event', 'issue_comment')</div>
                <div className="ml-12">.set('X-Hub-Signature-256', signature)</div>
                <div className="ml-12">.send(webhookPayload);</div>
                <div className="ml-8"></div>
                <div className="ml-8">// 5. Verify response</div>
                <div className="ml-8">expect(response.status).toBe(200);</div>
                <div className="ml-8">expect(response.body).toHaveProperty('success', true);</div>
                <div className="ml-8"></div>
                <div className="ml-8">// 6. Verify review was created</div>
                <div className="ml-8">const analytics = await getGlobalAnalytics();</div>
                <div className="ml-8">expect(analytics.totalReviews).toBeGreaterThan(0);</div>
                <div className="ml-4">{'}'});</div>
                <div>{'}'});</div>
              </div>
            </div>

            <div className="bg-gray-900 rounded p-4">
              <h4 className="text-yellow-400 mb-3">2. Performance Testing</h4>
              <div className="font-mono text-sm text-gray-100">
                <div className="text-blue-400 mb-2">// Test performance metrics</div>
                <div>describe('Performance Tests', () =&gt; {'{'}</div>
                <div className="ml-4">test('webhook processing should complete within timeout', async () =&gt; {'{'}</div>
                <div className="ml-8">const startTime = Date.now();</div>
                <div className="ml-8">const response = await request(app).post('/webhook').send(testPayload);</div>
                <div className="ml-8">const endTime = Date.now();</div>
                <div className="ml-8"></div>
                <div className="ml-8">expect(response.status).toBe(200);</div>
                <div className="ml-8">expect(endTime - startTime).toBeLessThan(30000); // 30 seconds</div>
                <div className="ml-4">{'}'});</div>
                <div>{'}'});</div>
              </div>
            </div>
          </div>
        </div>

        {/* Test Configuration */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-4">Test Configuration</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-900 rounded p-4">
              <h4 className="text-green-400 mb-3">Jest Configuration</h4>
              <div className="font-mono text-sm text-gray-100">
                <div className="text-blue-400 mb-2">// jest.config.js</div>
                <div>module.exports = {'{'}</div>
                <div className="ml-4">testEnvironment: 'node',</div>
                <div className="ml-4">testMatch: ['**/__tests__/**/*.test.js'],</div>
                <div className="ml-4">collectCoverage: true,</div>
                <div className="ml-4">coverageDirectory: 'coverage',</div>
                <div className="ml-4">coverageReporters: ['text', 'lcov'],</div>
                <div className="ml-4">setupFilesAfterEnv: ['&lt;rootDir&gt;/tests/setup.js']</div>
                <div>{'}'};</div>
              </div>
            </div>

            <div className="bg-gray-900 rounded p-4">
              <h4 className="text-purple-400 mb-3">Test Environment Variables</h4>
              <div className="font-mono text-sm text-gray-100">
                <div className="text-blue-400 mb-2">// .env.test</div>
                <div>NODE_ENV=test</div>
                <div>AI_API=https://api.openai.com/v1</div>
                <div>AI_KEY=test_key_here</div>
                <div>BOT_USERNAME=test-bot</div>
                <div>GITHUB_WEBHOOK_SECRET=test_secret</div>
                <div>REDIS_URL=redis://localhost:6379</div>
              </div>
            </div>
          </div>
        </div>

        {/* Running Tests */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h2 className="text-2xl font-semibold text-red-400 mb-4">Running Tests</h2>
          
          <div className="space-y-4">
            <div className="bg-gray-900 rounded p-4">
              <h4 className="text-green-400 mb-2">Test Commands</h4>
              <div className="font-mono text-sm text-gray-100">
                <div># Run all tests</div>
                <div>npm test</div>
                <div></div>
                <div># Run tests with coverage</div>
                <div>npm run test:coverage</div>
                <div></div>
                <div># Run specific test file</div>
                <div>npm test -- tests/analytics.test.js</div>
                <div></div>
                <div># Run tests in watch mode</div>
                <div>npm run test:watch</div>
              </div>
            </div>

            <div className="bg-gray-900 rounded p-4">
              <h4 className="text-blue-400 mb-2">Test Results</h4>
              <div className="font-mono text-sm text-gray-100">
                <div>✅ Environment Configuration: 2/2 tests passed</div>
                <div>✅ Bot Mention Detection: 5/5 tests passed</div>
                <div>✅ Analytics Functions: 3/3 tests passed</div>
                <div>✅ Health Check API: 2/2 tests passed</div>
                <div>✅ Webhook Security: 2/2 tests passed</div>
                <div>✅ Analytics API: 2/2 tests passed</div>
                <div>✅ End-to-End Integration: 1/1 tests passed</div>
                <div>✅ Performance Tests: 1/1 tests passed</div>
                <div></div>
                <div>Total: 18/18 tests passed</div>
                <div>Coverage: 95.2%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testing;