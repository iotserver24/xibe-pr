import React from 'react';

const APIReference: React.FC = () => {
  return (
    <div className="prose prose-lg max-w-none prose-invert">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">🔌 API Reference</h1>
        <p className="text-xl text-gray-300 leading-relaxed">
          Complete documentation of all API endpoints, request/response formats, and integration examples
          for the XIbe Review bot system.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">📋 API Overview</h2>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 mb-6">
          <h3 className="text-lg font-semibold text-blue-400 mb-4">Base URL</h3>
          <div className="bg-gray-900 rounded p-4 font-mono text-sm text-gray-100">
            Production: https://your-domain.com<br />
            Development: http://localhost:3000
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 mb-6">
          <h3 className="text-lg font-semibold text-green-400 mb-4">Authentication</h3>
          <p className="text-gray-300 mb-4">
            Most endpoints don't require authentication for basic usage. Webhook endpoints require proper GitHub webhook signatures.
          </p>
          <div className="bg-gray-900 rounded p-4 font-mono text-sm text-gray-100">
            # Webhook signature verification<br />
            X-Hub-Signature-256: sha256=abc123...<br />
            X-GitHub-Event: issue_comment<br />
            X-GitHub-Delivery: 12345
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-semibold text-purple-400 mb-4">Rate Limits</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-700 rounded p-4">
              <h4 className="font-semibold text-blue-400 mb-2">Public Endpoints</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• 100 requests/minute per IP</li>
                <li>• 1000 requests/hour per IP</li>
                <li>• No authentication required</li>
              </ul>
            </div>
            <div className="bg-gray-700 rounded p-4">
              <h4 className="font-semibold text-red-400 mb-2">Webhook Endpoints</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• GitHub rate limits apply</li>
                <li>• Webhook signature required</li>
                <li>• Retry logic implemented</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">🌐 Webhook Endpoints</h2>

        <div className="space-y-6">
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-blue-400">POST /webhook</h3>
              <span className="bg-green-600 text-white px-2 py-1 rounded text-sm">Primary</span>
            </div>

            <p className="text-gray-300 mb-4">
              Main webhook endpoint for GitHub events. Handles pull request reviews, issue comments, and bot mentions.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-400 mb-3">Headers Required</h4>
                <div className="bg-gray-900 rounded p-4 font-mono text-sm text-gray-100">
                  X-GitHub-Event: issue_comment<br />
                  X-GitHub-Delivery: 1234567890abcdef<br />
                  X-Hub-Signature-256: sha256=abc123def456...<br />
                  Content-Type: application/json
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-purple-400 mb-3">Supported Events</h4>
                <ul className="text-gray-300 space-y-1">
                  <li>• issue_comment (created, edited)</li>
                  <li>• pull_request (opened, synchronize, reopened)</li>
                  <li>• pull_request_review (submitted)</li>
                </ul>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold text-yellow-400 mb-3">Example Request</h4>
              <div className="bg-gray-900 rounded p-4 font-mono text-sm text-gray-100 overflow-x-auto">
                <div className="text-green-400 mb-2">// Issue comment webhook payload</div>
                <div>{`{`}</div>
                <div className="ml-4">"action": "created",</div>
                <div className="ml-4">"issue": {`{`}</div>
                <div className="ml-8">"number": 123,</div>
                <div className="ml-8">"pull_request": {`{`}</div>
                <div className="ml-12">"url": "https://api.github.com/repos/owner/repo/pulls/123"</div>
                <div className="ml-8">{`}`}</div>
                <div className="ml-4">{`}`},</div>
                <div className="ml-4">"comment": {`{`}</div>
                <div className="ml-8">"id": 456789,</div>
                <div className="ml-8">"body": "@Xibe-review please review this PR",</div>
                <div className="ml-8">"user": {`{`}</div>
                <div className="ml-12">"login": "developer"</div>
                <div className="ml-8">{`}`}</div>
                <div className="ml-4">{`}`},</div>
                <div className="ml-4">"repository": {`{`}</div>
                <div className="ml-8">"name": "my-repo",</div>
                <div className="ml-8">"full_name": "owner/my-repo",</div>
                <div className="ml-8">"owner": {`{`}</div>
                <div className="ml-12">"login": "owner"</div>
                <div className="ml-8">{`}`}</div>
                <div className="ml-4">{`}`}</div>
                <div>{`}`}</div>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold text-blue-400 mb-3">Response</h4>
              <div className="bg-gray-900 rounded p-4 font-mono text-sm text-gray-100">
                <div className="text-green-400 mb-2">// Success response</div>
                <div>HTTP 200</div>
                <div>{`{`}</div>
                <div className="ml-4">"message": "Review request received",</div>
                <div className="ml-4">"logId": "webhook_1234567890_abc123"</div>
                <div>{`}`}</div>
                <br />
                <div className="text-red-400 mb-2">// Error response</div>
                <div>HTTP 500</div>
                <div>{`{`}</div>
                <div className="ml-4">"error": "Internal server error",</div>
                <div className="ml-4">"logId": "webhook_1234567890_abc123"</div>
                <div>{`}`}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">📊 Analytics & Monitoring Endpoints</h2>

        <div className="space-y-6">
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-green-400">GET /health</h3>
              <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm">Health Check</span>
            </div>

            <p className="text-gray-300 mb-4">
              Basic health check endpoint to verify the bot is running and responsive.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-400 mb-3">Example Request</h4>
                <div className="bg-gray-900 rounded p-4 font-mono text-sm text-gray-100">
                  curl http://localhost:3000/health
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-green-400 mb-3">Response</h4>
                <div className="bg-gray-900 rounded p-4 font-mono text-sm text-gray-100">
                  <div>HTTP 200 OK</div>
                  <div>{`{`}</div>
                  <div className="ml-4">"status": "ok",</div>
                  <div className="ml-4">"timestamp": "2024-10-24T10:30:00.000Z"</div>
                  <div>{`}`}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-purple-400">GET /api/status/uptime</h3>
              <span className="bg-purple-600 text-white px-2 py-1 rounded text-sm">Detailed Status</span>
            </div>

            <p className="text-gray-300 mb-4">
              Comprehensive uptime and system status information including memory usage, configuration, and recent activity.
            </p>

            <div className="mt-6">
              <h4 className="font-semibold text-green-400 mb-3">Response Schema</h4>
              <div className="bg-gray-900 rounded p-4 font-mono text-sm text-gray-100 overflow-x-auto">
                <div>{`{`}</div>
                <div className="ml-4">"bot": {`{`}</div>
                <div className="ml-8">"status": "running",</div>
                <div className="ml-8">"uptime": {`{`}</div>
                <div className="ml-12">"seconds": 3600,</div>
                <div className="ml-12">"formatted": "1h 0m 0s",</div>
                <div className="ml-12">"started": "2024-10-24T09:30:00.000Z"</div>
                <div className="ml-8">{`}`},</div>
                <div className="ml-8">"memory": {`{`}</div>
                <div className="ml-12">"rss": 85,</div>
                <div className="ml-12">"heapTotal": 45,</div>
                <div className="ml-12">"heapUsed": 32,</div>
                <div className="ml-12">"external": 12</div>
                <div className="ml-8">{`}`},</div>
                <div className="ml-8">"configuration": {`{`}</div>
                <div className="ml-12">"authMode": "app",</div>
                <div className="ml-12">"githubAppId": "123456",</div>
                <div className="ml-12">"botUsername": "xibe-review[bot]",</div>
                <div className="ml-12">"model": "gpt-4-turbo-preview"</div>
                <div className="ml-8">{`}`}</div>
                <div className="ml-4">{`}`},</div>
                <div className="ml-4">"webhooks": {`{`}</div>
                <div className="ml-8">"total": 150,</div>
                <div className="ml-8">"completed": 145,</div>
                <div className="ml-8">"error": 3,</div>
                <div className="ml-8">"ignored": 2,</div>
                <div className="ml-8">"successRate": 97</div>
                <div className="ml-4">{`}`}</div>
                <div>{`}`}</div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-blue-400">GET /api/analytics/dashboard</h3>
              <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm">Dashboard Data</span>
            </div>

            <p className="text-gray-300 mb-4">
              Complete dashboard data including global analytics, recent reviews, webhook statistics, and installation information.
            </p>

            <div className="mt-6">
              <h4 className="font-semibold text-green-400 mb-3">Query Parameters</h4>
              <div className="bg-gray-900 rounded p-4 font-mono text-sm text-gray-100 mb-4">
                ?format=json (default)<br />
                ?format=html (for browser viewing)
              </div>

              <h4 className="font-semibold text-purple-400 mb-3">Response Schema</h4>
              <div className="bg-gray-900 rounded p-4 font-mono text-sm text-gray-100 overflow-x-auto">
                <div>{`{`}</div>
                <div className="ml-4">"success": true,</div>
                <div className="ml-4">"data": {`{`}</div>
                <div className="ml-8">"global": {`{`}</div>
                <div className="ml-12">"totalUsers": 42,</div>
                <div className="ml-12">"totalReviews": 156,</div>
                <div className="ml-12">"recentReviews": 5</div>
                <div className="ml-8">{`}`},</div>
                <div className="ml-8">"webhooks": {`{`}</div>
                <div className="ml-12">"total": 156,</div>
                <div className="ml-12">"completed": 150,</div>
                <div className="ml-12">"error": 4,</div>
                <div className="ml-12">"processing": 2</div>
                <div className="ml-8">{`}`},</div>
                <div className="ml-8">"recentActivity": [...],</div>
                <div className="ml-8">"installations": 8,</div>
                <div className="ml-8">"bot": {`{`}</div>
                <div className="ml-12">"status": "running",</div>
                <div className="ml-12">"uptime": 86400,</div>
                <div className="ml-12">"models": {`{`}</div>
                <div className="ml-16">"default": "gpt-4-turbo-preview",</div>
                <div className="ml-16">"analysis": "gpt-4-turbo-preview",</div>
                <div className="ml-16">"comment": "gpt-4-turbo-preview"</div>
                <div className="ml-12">{`}`}</div>
                <div className="ml-8">{`}`}</div>
                <div className="ml-4">{`}`},</div>
                <div className="ml-4">"timestamp": "2024-10-24T10:30:00.000Z"</div>
                <div>{`}`}</div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-yellow-400">GET /api/webhooks</h3>
              <span className="bg-yellow-600 text-white px-2 py-1 rounded text-sm">Webhook Logs</span>
            </div>

            <p className="text-gray-300 mb-4">
              Retrieve webhook event logs for monitoring and debugging purposes.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-400 mb-3">Query Parameters</h4>
                <div className="bg-gray-900 rounded p-4 font-mono text-sm text-gray-100">
                  ?limit=50 (default: 50, max: 1000)<br />
                  ?status=completed (optional filter)<br />
                  ?status=error (optional filter)<br />
                  ?status=ignored (optional filter)
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-green-400 mb-3">Example Request</h4>
                <div className="bg-gray-900 rounded p-4 font-mono text-sm text-gray-100">
                  curl "http://localhost:3000/api/webhooks?limit=10&status=completed"
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold text-purple-400 mb-3">Response Schema</h4>
              <div className="bg-gray-900 rounded p-4 font-mono text-sm text-gray-100 overflow-x-auto">
                <div>{`{`}</div>
                <div className="ml-4">"logs": [</div>
                <div className="ml-8">{`{`}</div>
                <div className="ml-12">"id": "webhook_1234567890_abc123",</div>
                <div className="ml-12">"timestamp": "2024-10-24T10:30:00.000Z",</div>
                <div className="ml-12">"event": "issue_comment",</div>
                <div className="ml-12">"repository": "owner/repo",</div>
                <div className="ml-12">"user": "developer",</div>
                <div className="ml-12">"status": "completed",</div>
                <div className="ml-12">"processingTime": 1500</div>
                <div className="ml-8">{`}`}</div>
                <div className="ml-4">],</div>
                <div className="ml-4">"total": 156,</div>
                <div className="ml-4">"filtered": 10</div>
                <div>{`}`}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">🔧 Management Endpoints</h2>

        <div className="space-y-6">
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-red-400">DELETE /api/webhooks</h3>
              <span className="bg-red-600 text-white px-2 py-1 rounded text-sm">Admin Only</span>
            </div>

            <p className="text-gray-300 mb-4">
              Clear all webhook logs from the system. Useful for maintenance and debugging.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-400 mb-3">Example Request</h4>
                <div className="bg-gray-900 rounded p-4 font-mono text-sm text-gray-100">
                  curl -X DELETE http://localhost:3000/api/webhooks
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-green-400 mb-3">Response</h4>
                <div className="bg-gray-900 rounded p-4 font-mono text-sm text-gray-100">
                  <div>HTTP 200 OK</div>
                  <div>{`{`}</div>
                  <div className="ml-4">"message": "Webhook logs cleared"</div>
                  <div>{`}`}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-purple-400">GET /api/troubleshoot</h3>
              <span className="bg-purple-600 text-white px-2 py-1 rounded text-sm">Diagnostics</span>
            </div>

            <p className="text-gray-300 mb-4">
              Comprehensive troubleshooting information including configuration validation, recent errors, and recommendations.
            </p>

            <div className="mt-6">
              <h4 className="font-semibold text-green-400 mb-3">Response Schema</h4>
              <div className="bg-gray-900 rounded p-4 font-mono text-sm text-gray-100 overflow-x-auto">
                <div>{`{`}</div>
                <div className="ml-4">"status": "healthy",</div>
                <div className="ml-4">"issues": [],</div>
                <div className="ml-4">"recommendations": [],</div>
                <div className="ml-4">"stats": {`{`}</div>
                <div className="ml-8">"totalWebhooks": 156,</div>
                <div className="ml-8">"errors": 2,</div>
                <div className="ml-8">"completed": 154,</div>
                <div className="ml-8">"botMentions": 45</div>
                <div className="ml-4">{`}`},</div>
                <div className="ml-4">"configuration": {`{`}</div>
                <div className="ml-8">"authMode": "app",</div>
                <div className="ml-8">"hasGitHubApp": true,</div>
                <div className="ml-8">"hasGitHubPAT": false,</div>
                <div className="ml-8">"hasAI": true,</div>
                <div className="ml-8">"botUsername": "xibe-review[bot]"</div>
                <div className="ml-4">{`}`}</div>
                <div>{`}`}</div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-blue-400">GET /api/models</h3>
              <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm">Model Info</span>
            </div>

            <p className="text-gray-300 mb-4">
              Information about available AI models and current configuration.
            </p>

            <div className="mt-6">
              <h4 className="font-semibold text-green-400 mb-3">Response Schema</h4>
              <div className="bg-gray-900 rounded p-4 font-mono text-sm text-gray-100 overflow-x-auto">
                <div>{`{`}</div>
                <div className="ml-4">"models": [</div>
                <div className="ml-8">{`{`}</div>
                <div className="ml-12">"name": "gpt-4-turbo-preview",</div>
                <div className="ml-12">"description": "Current AI model configured via environment variables",</div>
                <div className="ml-12">"maxInputChars": 8000,</div>
                <div className="ml-12">"temperature": 0.7,</div>
                <div className="ml-12">"reasoning": false,</div>
                <div className="ml-12">"bestFor": ["general-purpose"]</div>
                <div className="ml-8">{`}`}</div>
                <div className="ml-4">],</div>
                <div className="ml-4">"total": 1,</div>
                <div className="ml-4">"defaultModel": "gpt-4-turbo-preview"</div>
                <div>{`}`}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">📈 Analytics Endpoints</h2>

        <div className="space-y-6">
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-green-400">GET /api/analytics</h3>
              <span className="bg-green-600 text-white px-2 py-1 rounded text-sm">Global Analytics</span>
            </div>

            <p className="text-gray-300 mb-4">
              Global analytics including total users, reviews, and recent activity.
            </p>

            <div className="mt-6">
              <h4 className="font-semibold text-blue-400 mb-3">Response Schema</h4>
              <div className="bg-gray-900 rounded p-4 font-mono text-sm text-gray-100 overflow-x-auto">
                <div>{`{`}</div>
                <div className="ml-4">"success": true,</div>
                <div className="ml-4">"data": {`{`}</div>
                <div className="ml-8">"totalUsers": 42,</div>
                <div className="ml-8">"totalReviews": 156,</div>
                <div className="ml-8">"recentReviews": 5</div>
                <div className="ml-4">{`}`},</div>
                <div className="ml-4">"timestamp": "2024-10-24T10:30:00.000Z"</div>
                <div>{`}`}</div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-blue-400">GET /api/analytics/user/{'{userId}'}</h3>
              <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm">User Analytics</span>
            </div>

            <p className="text-gray-300 mb-4">
              Individual user statistics and review history.
            </p>

            <div className="mt-6">
              <h4 className="font-semibold text-green-400 mb-3">Path Parameters</h4>
              <div className="bg-gray-900 rounded p-4 font-mono text-sm text-gray-100 mb-4">
                userId: GitHub username (e.g., "developer")
              </div>

              <h4 className="font-semibold text-purple-400 mb-3">Response Schema</h4>
              <div className="bg-gray-900 rounded p-4 font-mono text-sm text-gray-100 overflow-x-auto">
                <div>{`{`}</div>
                <div className="ml-4">"success": true,</div>
                <div className="ml-4">"data": {`{`}</div>
                <div className="ml-8">"userId": "developer",</div>
                <div className="ml-8">"totalReviews": 12,</div>
                <div className="ml-8">"lastActive": "2024-10-24T09:15:00.000Z"</div>
                <div className="ml-4">{`}`},</div>
                <div className="ml-4">"timestamp": "2024-10-24T10:30:00.000Z"</div>
                <div>{`}`}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">🔄 Integration Examples</h2>

        <div className="space-y-6">
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-blue-400 mb-4">JavaScript/Node.js Integration</h3>

            <div className="bg-gray-900 rounded p-4 font-mono text-sm text-gray-100 overflow-x-auto mb-4">
              <div className="text-green-400 mb-2">// Health check integration</div>
              <div>const checkBotHealth = async () =&gt; {`{`}</div>
              <div className="ml-4">try {`{`}</div>
              <div className="ml-8">const response = await fetch('http://localhost:3000/health');</div>
              <div className="ml-8">const data = await response.json();</div>
              <div className="ml-8"></div>
              <div className="ml-8">if (data.status === 'ok') {`{`}</div>
              <div className="ml-12">console.log('✅ Bot is healthy');</div>
              <div className="ml-8">{`} else {`}</div>
              <div className="ml-12">console.error('❌ Bot health check failed');</div>
              <div className="ml-8">{`}`}</div>
              <div className="ml-4">{`} catch (error) {`}</div>
              <div className="ml-8">console.error('Network error:', error);</div>
              <div className="ml-4">{`}`}</div>
              <div>{`}`}</div>
            </div>

            <div className="bg-gray-900 rounded p-4 font-mono text-sm text-gray-100 overflow-x-auto mb-4">
              <div className="text-purple-400 mb-2">// Analytics integration</div>
              <div>const getAnalytics = async () =&gt; {`{`}</div>
              <div className="ml-4">const response = await fetch('http://localhost:3000/api/analytics/dashboard');</div>
              <div className="ml-4">const data = await response.json();</div>
              <div className="ml-4"></div>
              <div className="ml-4">console.log(`Bot has reviewed ${`{data.data.global.totalReviews}`} PRs`);</div>
              <div className="ml-4">console.log(`Success rate: ${`{data.data.webhooks.successRate}`}%`);</div>
              <div className="ml-4">console.log(`Recent activity: ${`{data.data.recentActivity.length}`} reviews`);</div>
              <div>{`}`}</div>
            </div>

            <div className="bg-gray-900 rounded p-4 font-mono text-sm text-gray-100 overflow-x-auto">
              <div className="text-yellow-400 mb-2">// Webhook monitoring</div>
              <div>const monitorWebhooks = async () =&gt; {`{`}</div>
              <div className="ml-4">const response = await fetch('http://localhost:3000/api/webhooks?status=error');</div>
              <div className="ml-4">const data = await response.json();</div>
              <div className="ml-4"></div>
              <div className="ml-4">if (data.logs.length &gt; 0) {`{`}</div>
              <div className="ml-8">console.log('⚠️ Recent webhook errors detected:');</div>
              <div className="ml-8">data.logs.forEach(log =&gt; {`{`}</div>
              <div className="ml-12">console.log(`- ${`{log.repository}`}: ${`{log.error}`}`);</div>
              <div className="ml-8">{`}`});</div>
              <div className="ml-4">{`}`}</div>
              <div>{`}`}</div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-green-400 mb-4">Python Integration</h3>

            <div className="bg-gray-900 rounded p-4 font-mono text-sm text-gray-100 overflow-x-auto mb-4">
              <div className="text-green-400 mb-2"># Python health check</div>
              <div>import requests</div>
              <div></div>
              <div>def check_bot_health():</div>
              <div className="ml-4">try:</div>
              <div className="ml-8">response = requests.get('http://localhost:3000/health')</div>
              <div className="ml-8">data = response.json()</div>
              <div className="ml-8"></div>
              <div className="ml-8">if data['status'] == 'ok':</div>
              <div className="ml-12">print("✅ Bot is healthy")</div>
              <div className="ml-12">return True</div>
              <div className="ml-8">else:</div>
              <div className="ml-12">print("❌ Bot health check failed")</div>
              <div className="ml-12">return False</div>
              <div className="ml-4">except Exception as e:</div>
              <div className="ml-8">print(f"Network error: {'{'}e{'}'}")</div>
              <div className="ml-8">return False</div>
            </div>

            <div className="bg-gray-900 rounded p-4 font-mono text-sm text-gray-100 overflow-x-auto">
              <div className="text-blue-400 mb-2"># Analytics dashboard</div>
              <div>def get_analytics():</div>
              <div className="ml-4">response = requests.get('http://localhost:3000/api/analytics/dashboard')</div>
              <div className="ml-4">data = response.json()</div>
              <div className="ml-4"></div>
              <div className="ml-4">if data['success']:</div>
              <div className="ml-8">analytics = data['data']</div>
              <div className="ml-8">print(f"Total reviews: {'{'}analytics['global']['totalReviews']{'}'}")</div>
              <div className="ml-8">print(f"Success rate: {'{'}analytics['webhooks']['successRate']{'}'}%")</div>
              <div className="ml-8">print(f"Installations: {'{'}analytics['installations']{'}'}")</div>
              <div className="ml-8">return analytics</div>
              <div className="ml-4">else:</div>
              <div className="ml-8">print(f"Error: {'{'}data['error']{'}'}")</div>
              <div className="ml-8">return None</div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-purple-400 mb-4">cURL Examples</h3>

            <div className="space-y-4">
              <div className="bg-gray-900 rounded p-4">
                <h4 className="text-green-400 mb-2">Health Check</h4>
                <div className="font-mono text-sm text-gray-100">
                  curl http://localhost:3000/health
                </div>
              </div>

              <div className="bg-gray-900 rounded p-4">
                <h4 className="text-blue-400 mb-2">Detailed Status</h4>
                <div className="font-mono text-sm text-gray-100">
                  curl http://localhost:3000/api/status/uptime
                </div>
              </div>

              <div className="bg-gray-900 rounded p-4">
                <h4 className="text-purple-400 mb-2">Recent Webhook Logs</h4>
                <div className="font-mono text-sm text-gray-100">
                  curl "http://localhost:3000/api/webhooks?limit=20&status=completed"
                </div>
              </div>

              <div className="bg-gray-900 rounded p-4">
                <h4 className="text-red-400 mb-2">Troubleshooting Info</h4>
                <div className="font-mono text-sm text-gray-100">
                  curl http://localhost:3000/api/troubleshoot
                </div>
              </div>

              <div className="bg-gray-900 rounded p-4">
                <h4 className="text-yellow-400 mb-2">Clear Logs</h4>
                <div className="font-mono text-sm text-gray-100">
                  curl -X DELETE http://localhost:3000/api/webhooks
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white">
        <h3 className="text-xl font-bold mb-4">🔗 Webhook Integration Guide</h3>
        <div className="space-y-3">
          <div><strong>1. Security:</strong> Always verify webhook signatures in production</div>
          <div><strong>2. Rate Limiting:</strong> Implement retry logic for failed requests</div>
          <div><strong>3. Monitoring:</strong> Monitor the /health and /api/status/uptime endpoints</div>
          <div><strong>4. Error Handling:</strong> Handle different response codes appropriately</div>
          <div><strong>5. Analytics:</strong> Use the analytics endpoints to track bot performance</div>
          <div><strong>6. Troubleshooting:</strong> Check /api/troubleshoot for configuration issues</div>
        </div>
      </div>
    </div>
  );
};

export default APIReference;
