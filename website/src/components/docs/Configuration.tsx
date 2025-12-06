import React from 'react';

const Configuration: React.FC = () => {
  return (
    <div className="prose prose-lg max-w-none prose-invert">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">🔧 Configuration</h1>
        <p className="text-xl text-gray-300 leading-relaxed">
          Complete setup and configuration guide for the XIbe Review bot, including environment variables,
          authentication modes, and deployment options.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">📋 Environment Variables</h2>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 mb-6">
          <h3 className="text-lg font-semibold text-blue-400 mb-4">Environment File Setup</h3>

          <div className="bg-gray-900 rounded p-4 font-mono text-sm text-gray-100 overflow-x-auto mb-4">
            <div className="text-green-400 mb-2"># Copy example environment file</div>
            <div>cp .env.example .env</div>
            <div></div>
            <div className="text-blue-400 mb-2"># Edit with your configuration</div>
            <div>nano .env</div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-green-400 mb-3">Required Variables</h4>
              <ul className="text-gray-300 text-sm space-y-2">
                <li><code className="bg-gray-800 px-2 py-1 rounded">AI_API</code> - AI API base URL (e.g., xibe.app)</li>
                <li><code className="bg-gray-800 px-2 py-1 rounded">AI_KEY</code> - AI API key</li>
                <li><code className="bg-gray-800 px-2 py-1 rounded">BOT_USERNAME</code> - Bot username for mentions</li>
                <li><code className="bg-gray-800 px-2 py-1 rounded">PORT</code> - Server port (default: 3000)</li>
              </ul>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-blue-400 mb-3">GitHub Authentication</h4>
              <ul className="text-gray-300 text-sm space-y-2">
                <li><strong>GitHub App:</strong> <code>APP_ID</code>, <code>PRIVATE_KEY</code>, <code>WEBHOOK_SECRET</code></li>
                <li><strong>Personal Token:</strong> <code>GITHUB_TOKEN</code></li>
                <li><strong>Test Mode:</strong> No auth required</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 mb-6">
          <h3 className="text-lg font-semibold text-green-400 mb-4">GitHub App Mode (Recommended)</h3>

          <div className="bg-gray-900 rounded p-4 font-mono text-sm text-gray-100 overflow-x-auto mb-4">
            <div className="text-blue-400 mb-2"># GitHub App Configuration</div>
            <div>GITHUB_APP_ID=your_app_id_here</div>
            <div>GITHUB_PRIVATE_KEY="-----BEGIN RSA PRIVATE KEY-----</div>
            <div>nYour_Private_Key_Content_Here</div>
            <div>-----END RSA PRIVATE KEY-----"</div>
            <div>GITHUB_WEBHOOK_SECRET=your_32_character_webhook_secret</div>
            <div>BOT_USERNAME=your-app-name[bot]</div>
            <div></div>
            <div className="text-green-400 mb-2"># OpenAI Configuration</div>
            <div>AI_API=https://api.openai.com</div>
            <div>AI_KEY=sk-your-openai-api-key</div>
            <div>MODEL_ID=gpt-4-turbo-preview</div>
            <div>ANALYSIS_MODEL=gpt-4-turbo-preview</div>
            <div>COMMENT_MODEL=gpt-4-turbo-preview</div>
            <div></div>
            <div className="text-purple-400 mb-2"># Optional Configuration</div>
            <div>PORT=3000</div>
            <div>LOG_LEVEL=info</div>
            <div>NODE_ENV=production</div>
            <div></div>
            <div className="text-yellow-400 mb-2"># Redis (Optional - for analytics)</div>
            <div>UPSTASH_REDIS_REST_URL=your_redis_url</div>
            <div>UPSTASH_REDIS_REST_TOKEN=your_redis_token</div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-green-400 mb-2">✅ Benefits</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Bot account with [bot] badge</li>
                <li>• Enhanced security and permissions</li>
                <li>• Multiple organization support</li>
                <li>• Scalable for public use</li>
                <li>• Professional appearance</li>
              </ul>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-blue-400 mb-2">📋 Requirements</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• GitHub App registration</li>
                <li>• Private key generation</li>
                <li>• Webhook secret (32+ chars)</li>
                <li>• Public repository or domain</li>
                <li>• HTTPS endpoint (production)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 mb-6">
          <h3 className="text-lg font-semibold text-purple-400 mb-4">Personal Access Token Mode</h3>

          <div className="bg-gray-900 rounded p-4 font-mono text-sm text-gray-100 overflow-x-auto mb-4">
            <div className="text-blue-400 mb-2"># Personal Access Token Configuration</div>
            <div>GITHUB_TOKEN=ghp_your_personal_access_token_here</div>
            <div>BOT_USERNAME=pr-review-bot</div>
            <div></div>
            <div className="text-green-400 mb-2"># OpenAI Configuration</div>
            <div>AI_API=https://api.openai.com</div>
            <div>AI_KEY=sk-your-openai-api-key</div>
            <div>MODEL_ID=gpt-4-turbo-preview</div>
            <div>ANALYSIS_MODEL=gpt-4-turbo-preview</div>
            <div>COMMENT_MODEL=gpt-4-turbo-preview</div>
            <div></div>
            <div className="text-yellow-400 mb-2"># Optional Configuration</div>
            <div>PORT=3000</div>
            <div>LOG_LEVEL=info</div>
            <div>NODE_ENV=development</div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-green-400 mb-2">✅ Advantages</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Quick and easy setup</li>
                <li>• No app registration needed</li>
                <li>• Works with private repositories</li>
                <li>• Perfect for individual developers</li>
                <li>• Simple configuration</li>
              </ul>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-red-400 mb-2">⚠️ Limitations</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Limited to token owner's repositories</li>
                <li>• Comments from personal account</li>
                <li>• Less secure than GitHub App</li>
                <li>• Cannot be installed by others</li>
                <li>• No [bot] badge</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-semibold text-yellow-400 mb-4">Test Mode Configuration</h3>

          <div className="bg-gray-900 rounded p-4 font-mono text-sm text-gray-100 overflow-x-auto mb-4">
            <div className="text-blue-400 mb-2"># Test Mode (No GitHub Authentication)</div>
            <div className="text-gray-500"># GITHUB_APP_ID= (leave empty)</div>
            <div className="text-gray-500"># GITHUB_TOKEN= (leave empty)</div>
            <div>BOT_USERNAME=xibe-review</div>
            <div></div>
            <div className="text-green-400 mb-2"># OpenAI Configuration</div>
            <div>AI_API=https://api.openai.com</div>
            <div>AI_KEY=sk-your-openai-api-key</div>
            <div>MODEL_ID=gpt-4-turbo-preview</div>
            <div>ANALYSIS_MODEL=gpt-4-turbo-preview</div>
            <div>COMMENT_MODEL=gpt-4-turbo-preview</div>
            <div></div>
            <div className="text-purple-400 mb-2"># Development Settings</div>
            <div>PORT=3000</div>
            <div>LOG_LEVEL=debug</div>
            <div>NODE_ENV=development</div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-green-400 mb-2">✅ Perfect For</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Development and testing</li>
                <li>• AI model evaluation</li>
                <li>• Bot behavior testing</li>
                <li>• Demo environments</li>
                <li>• Learning and experimentation</li>
              </ul>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-blue-400 mb-2">🔧 Features</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Full AI functionality</li>
                <li>• No GitHub API calls</li>
                <li>• Mock authentication</li>
                <li>• Complete review generation</li>
                <li>• Error simulation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">🔐 Authentication Setup</h2>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 mb-6">
          <h3 className="text-lg font-semibold text-blue-400 mb-4">GitHub App Setup Guide</h3>

          <div className="space-y-6">
            <div className="bg-gray-900 rounded p-4">
              <h4 className="text-green-400 mb-3">Step 1: Create GitHub App</h4>
              <div className="font-mono text-sm text-gray-100 mb-3">
                1. Go to GitHub Settings → Developer settings → GitHub Apps
                2. Click "New GitHub App"
                3. Fill in basic information:
                   - Name: xibe-review-bot
                   - Homepage URL: https://your-domain.com
                   - Description: AI-powered PR review bot
              </div>
            </div>

            <div className="bg-gray-900 rounded p-4">
              <h4 className="text-blue-400 mb-3">Step 2: Configure Webhooks</h4>
              <div className="font-mono text-sm text-gray-100 mb-3">
                Webhook URL: https://your-domain.com/webhook
                Webhook secret: [generate 32+ character random string]
                Content type: application/json

                Subscribe to events:
                - Issue comments (for manual reviews)
                - Pull requests (for auto-reviews)
              </div>
            </div>

            <div className="bg-gray-900 rounded p-4">
              <h4 className="text-purple-400 mb-3">Step 3: Set Permissions</h4>
              <div className="text-gray-300 text-sm mb-3">
                <strong>Repository permissions:</strong>
              </div>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• <strong>Contents:</strong> Read-only (to access repository files)</li>
                <li>• <strong>Issues:</strong> Read & write (to comment on PRs)</li>
                <li>• <strong>Pull requests:</strong> Read & write (to read PRs and post reviews)</li>
                <li>• <strong>Metadata:</strong> Read-only (to access repository metadata)</li>
              </ul>
            </div>

            <div className="bg-gray-900 rounded p-4">
              <h4 className="text-yellow-400 mb-3">Step 4: Generate Private Key</h4>
              <div className="font-mono text-sm text-gray-100">
                1. In your GitHub App settings, scroll to "Private keys"
                2. Click "Generate a private key"
                3. Download the .pem file securely
                4. Copy the contents for your .env file
              </div>
            </div>

            <div className="bg-gray-900 rounded p-4">
              <h4 className="text-red-400 mb-3">Step 5: Install the App</h4>
              <div className="font-mono text-sm text-gray-100">
                1. In your GitHub App page, click "Install App"
                2. Choose your account/organization
                3. Select repositories (or "All repositories")
                4. Complete installation and note the Installation ID
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 mb-6">
          <h3 className="text-lg font-semibold text-green-400 mb-4">Personal Access Token Setup</h3>

          <div className="space-y-4">
            <div className="bg-gray-900 rounded p-4">
              <h4 className="text-blue-400 mb-3">Step 1: Create Personal Access Token</h4>
              <div className="font-mono text-sm text-gray-100">
                1. Go to GitHub Settings → Developer settings → Personal access tokens
                2. Click "Generate new token (classic)"
                3. Set token name: "xibe-review-bot-token"
                4. Set expiration: "No expiration" (or your preferred duration)
              </div>
            </div>

            <div className="bg-gray-900 rounded p-4">
              <h4 className="text-purple-400 mb-3">Step 2: Configure Token Permissions</h4>
              <div className="text-gray-300 text-sm">
                Select these scopes for full functionality:
              </div>
              <ul className="text-gray-300 text-sm mt-2 space-y-1">
                <li>• <code>repo</code> - Full repository access (including private repos)</li>
                <li>• <code>write:discussion</code> - Comment on issues and PRs</li>
                <li>• <code>read:org</code> - Read organization membership (if needed)</li>
              </ul>
            </div>

            <div className="bg-gray-900 rounded p-4">
              <h4 className="text-yellow-400 mb-3">Step 3: Repository Webhook Setup</h4>
              <div className="font-mono text-sm text-gray-100">
                1. Go to your repository Settings → Webhooks
                2. Click "Add webhook"
                3. Set Payload URL: http://your-server:3000/webhook
                4. Content type: application/json
                5. Subscribe to: Issue comments, Pull requests
                6. Click "Add webhook"
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-semibold text-purple-400 mb-4">AI Provider Configuration</h3>

          <div className="space-y-4">
            <div className="bg-gray-900 rounded p-4">
              <h4 className="text-blue-400 mb-3">Step 1: Get OpenAI API Key</h4>
              <div className="font-mono text-sm text-gray-100">
                1. Visit OpenAI Platform (https://platform.openai.com/)
                2. Sign up or log in to your account
                3. Navigate to "API Keys" section
                4. Click "Create new secret key"
                5. Copy the generated key (format: sk-...)
              </div>
            </div>

            <div className="bg-gray-900 rounded p-4">
              <h4 className="text-green-400 mb-3">Step 2: Model Selection</h4>
              <div className="text-gray-300 text-sm mb-3">
                Choose appropriate models for your use case:
              </div>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• <strong>gpt-4-turbo-preview:</strong> Best balance of quality and speed</li>
                <li>• <strong>gpt-4:</strong> Highest quality, slower and more expensive</li>
                <li>• <strong>gpt-3.5-turbo:</strong> Fast and cost-effective</li>
              </ul>
            </div>

            <div className="bg-gray-900 rounded p-4">
              <h4 className="text-yellow-400 mb-3">Step 3: Usage Optimization</h4>
              <div className="font-mono text-sm text-gray-100">
                # Recommended configuration for production
                MODEL_ID=gpt-4-turbo-preview
                ANALYSIS_MODEL=gpt-4-turbo-preview
                COMMENT_MODEL=gpt-4-turbo-preview

                # Monitor usage at your AI provider dashboard
                # Set usage limits in your AI provider account
                # Consider batching requests for efficiency
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">⚙️ Advanced Configuration</h2>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 mb-6">
          <h3 className="text-lg font-semibold text-blue-400 mb-4">Redis Configuration (Optional)</h3>

          <div className="bg-gray-900 rounded p-4 font-mono text-sm text-gray-100 overflow-x-auto mb-4">
            <div className="text-green-400 mb-2"># Upstash Redis (Recommended for production)</div>
            <div>UPSTASH_REDIS_REST_URL=https://your-redis-url.upstash.io</div>
            <div>UPSTASH_REDIS_REST_TOKEN=your_redis_token_here</div>
            <div></div>
            <div className="text-blue-400 mb-2"># Alternative: Local Redis</div>
            <div>REDIS_URL=redis://localhost:6379</div>
            <div>REDIS_PASSWORD=your_redis_password</div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-green-400 mb-2">✅ Benefits</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Analytics and metrics storage</li>
                <li>• Webhook logging</li>
                <li>• Duplicate prevention</li>
                <li>• Performance monitoring</li>
                <li>• User statistics</li>
              </ul>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-blue-400 mb-2">🔧 Without Redis</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• In-memory fallback storage</li>
                <li>• Limited analytics (100 logs max)</li>
                <li>• Basic duplicate prevention</li>
                <li>• Still fully functional</li>
                <li>• Perfect for development</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 mb-6">
          <h3 className="text-lg font-semibold text-green-400 mb-4">Security Configuration</h3>

          <div className="bg-gray-900 rounded p-4 font-mono text-sm text-gray-100 overflow-x-auto mb-4">
            <div className="text-red-400 mb-2"># Security best practices</div>
            <div className="text-gray-500"># Webhook secret (32+ characters)</div>
            <div>GITHUB_WEBHOOK_SECRET=your_very_secure_32_character_secret_here</div>
            <div></div>
            <div className="text-orange-400 mb-2"># HTTPS only in production</div>
            <div>NODE_ENV=production</div>
            <div>PORT=3000</div>
            <div></div>
            <div className="text-yellow-400 mb-2"># Rate limiting configuration</div>
            <div>MAX_MENTIONS_PER_USER=2</div>
            <div>MAX_FILES_PER_REVIEW=50</div>
            <div>MAX_CHARS_PER_FILE=8000</div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-green-400 mb-2">🔐 Authentication</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Strong webhook secrets</li>
                <li>• HTTPS enforcement</li>
                <li>• API key rotation</li>
                <li>• Access logging</li>
              </ul>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-blue-400 mb-2">🛡️ Rate Limiting</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Mention limiting (max 2 per user)</li>
                <li>• File count limits</li>
                <li>• Character limits per file</li>
                <li>• Request throttling</li>
              </ul>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-purple-400 mb-2">📊 Monitoring</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Error logging</li>
                <li>• Performance metrics</li>
                <li>• Security event tracking</li>
                <li>• Audit trails</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-semibold text-yellow-400 mb-4">Performance Tuning</h3>

          <div className="bg-gray-900 rounded p-4 font-mono text-sm text-gray-100 overflow-x-auto mb-4">
            <div className="text-green-400 mb-2"># AI Model optimization</div>
            <div>MODEL_ID=gpt-4-turbo-preview    # Fast and high quality</div>
            <div>ANALYSIS_MODEL=gpt-4-turbo-preview</div>
            <div>COMMENT_MODEL=gpt-4-turbo-preview</div>
            <div></div>
            <div className="text-blue-400 mb-2"># Processing limits</div>
            <div>MAX_FILES_PER_REVIEW=50         # Reasonable file limit</div>
            <div>MAX_CHARS_PER_FILE=8000         # Character limit per file</div>
            <div>MAX_MENTIONS_PER_USER=2         # Prevent spam</div>
            <div></div>
            <div className="text-purple-400 mb-2"># Caching configuration</div>
            <div>REDIS_TTL_REVIEWS=2592000       # 30 days in seconds</div>
            <div>REDIS_TTL_WEBHOOKS=604800       # 7 days in seconds</div>
            <div>REDIS_TTL_LOCKS=600             # 10 minutes for locks</div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-green-400 mb-2">⚡ Performance Tips</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Use Redis for caching</li>
                <li>• Implement connection pooling</li>
                <li>• Monitor memory usage</li>
                <li>• Set appropriate timeouts</li>
                <li>• Use efficient AI models</li>
              </ul>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-blue-400 mb-2">📈 Scaling</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Horizontal scaling support</li>
                <li>• Stateless architecture</li>
                <li>• Redis clustering</li>
                <li>• Load balancing ready</li>
                <li>• CDN integration</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">🔍 Configuration Validation</h2>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 mb-6">
          <h3 className="text-lg font-semibold text-blue-400 mb-4">Testing Your Configuration</h3>

          <div className="space-y-4">
            <div className="bg-gray-900 rounded p-4">
              <h4 className="text-green-400 mb-3">1. Environment Validation</h4>
              <div className="font-mono text-sm text-gray-100">
                # Check if all required environment variables are set
                node -e "
                const required = ['AI_API', 'AI_KEY', 'BOT_USERNAME'];
                const missing = required.filter(key =&gt; !process.env[key]);
                if (missing.length &gt; 0) {'{'}
                  console.error('❌ Missing required environment variables:', missing.join(', '));
                  process.exit(1);
                {'}'}
                console.log('✅ All required environment variables are set');
                "
              </div>
            </div>

            <div className="bg-gray-900 rounded p-4">
              <h4 className="text-blue-400 mb-3">2. Health Check</h4>
              <div className="font-mono text-sm text-gray-100">
                # Test basic bot functionality
                curl http://localhost:3000/health

                # Expected response:
                # {`{"status":"ok","timestamp":"2024-10-24T10:30:00.000Z"}`}
              </div>
            </div>

            <div className="bg-gray-900 rounded p-4">
              <h4 className="text-purple-400 mb-3">3. OpenAI API Test</h4>
              <div className="font-mono text-sm text-gray-100">
                # Test OpenAI API connectivity
                curl -H "Authorization: Bearer $AI_KEY" \
                     -H "Content-Type: application/json" \
                       -d '{`{"model": "gpt-3.5-turbo", "messages": [{"role": "user", "content": "Hello"}]}`}' \
                     https://api.openai.com/v1/chat/completions
              </div>
            </div>

            <div className="bg-gray-900 rounded p-4">
              <h4 className="text-yellow-400 mb-3">4. Redis Connection Test</h4>
              <div className="font-mono text-sm text-gray-100">
                # Test Redis connectivity (if configured)
                curl http://localhost:3000/api/test-redis

                # Expected response:
                # {`{"status":"connected","test":"passed","timestamp":"2024-10-24T10:30:00.000Z"}`}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-semibold text-green-400 mb-4">Troubleshooting Configuration Issues</h3>

          <div className="space-y-4">
            <div className="bg-gray-900 rounded p-4">
              <h4 className="text-red-400 mb-2">❌ Missing Environment Variables</h4>
              <div className="font-mono text-sm text-gray-100">
                # Check which variables are missing
                node -e "
                const vars = ['AI_API', 'AI_KEY', 'BOT_USERNAME', 'GITHUB_APP_ID', 'GITHUB_TOKEN'];
                vars.forEach(key =&gt; {'{'}
                  console.log(`${'${'}key{'}'}: ${'${'}process.env[key] ? '✅ Set' : '❌ Missing'${'}'}`);
                {'}'});
                "
              </div>
            </div>

            <div className="bg-gray-900 rounded p-4">
              <h4 className="text-red-400 mb-2">❌ Invalid Private Key Format</h4>
              <div className="font-mono text-sm text-gray-100">
                # Check if private key is properly base64 encoded
                node -e "
                try {'{'}
                  const key = process.env.GITHUB_PRIVATE_KEY;
                  if (!key) throw new Error('Private key not set');
                  const decoded = Buffer.from(key, 'base64').toString('utf-8');
                  console.log('✅ Private key format is valid');
                {'}'} catch (error) {'{'}
                  console.error('❌ Invalid private key format:', error.message);
                {'}'}
                "
              </div>
            </div>

            <div className="bg-gray-900 rounded p-4">
              <h4 className="text-red-400 mb-2">❌ GitHub Authentication Issues</h4>
              <div className="font-mono text-sm text-gray-100">
                # Test GitHub API connectivity
                curl -H "Authorization: Bearer $GITHUB_TOKEN" \
                     https://api.github.com/user

                # Or test GitHub App authentication
                curl -H "Authorization: Bearer $GITHUB_TOKEN" \
                     -H "Accept: application/vnd.github.machine-man-preview+json" \
                     https://api.github.com/app
              </div>
            </div>

            <div className="bg-gray-900 rounded p-4">
              <h4 className="text-red-400 mb-2">❌ Webhook Signature Verification</h4>
              <div className="font-mono text-sm text-gray-100">
                # Test webhook signature validation
                # The bot will log signature verification errors
                # Check logs for "invalid signature" or "signature mismatch"

                # Verify webhook secret matches between GitHub and your .env
                echo "GitHub webhook secret: $GITHUB_WEBHOOK_SECRET"
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white">
        <h3 className="text-xl font-bold mb-4">🎯 Configuration Best Practices</h3>
        <div className="space-y-3">
          <div><strong>1. Environment Variables:</strong> Never commit .env files to version control</div>
          <div><strong>2. Security:</strong> Use strong, unique secrets and rotate them regularly</div>
          <div><strong>3. Testing:</strong> Test configuration in development before deploying to production</div>
          <div><strong>4. Monitoring:</strong> Set up monitoring and alerting for configuration changes</div>
          <div><strong>5. Documentation:</strong> Keep configuration documentation up to date</div>
          <div><strong>6. Backups:</strong> Regularly backup configuration files and credentials</div>
        </div>
      </div>
    </div>
  );
};

export default Configuration;
