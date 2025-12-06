import React from 'react';

const Webhooks: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-4">GitHub Webhooks Integration</h1>
        <p className="text-gray-300 text-lg">
          Complete guide to GitHub webhook integration, security, and monitoring for the XIbe Review bot.
        </p>
      </div>

      <div className="space-y-8">
        {/* How Webhooks Work */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">How Webhooks Work</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-700 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-green-400 mb-3">Webhook Flow</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                  <div className="text-gray-300">GitHub sends webhook event to your bot endpoint</div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <div className="text-gray-300">Bot verifies webhook signature for security</div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <div className="text-gray-300">Bot processes the event and checks for bot mentions</div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">4</div>
                  <div className="text-gray-300">If mentioned, bot generates AI review and posts comment</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-purple-400 mb-3">Supported Events</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="text-green-400 font-semibold">Primary Events</div>
                  <div className="text-gray-300">• issue_comment - PR comments</div>
                  <div className="text-gray-300">• pull_request - PR creation/updates</div>
                </div>
                <div className="space-y-2">
                  <div className="text-blue-400 font-semibold">Secondary Events</div>
                  <div className="text-gray-300">• issues - Issue comments</div>
                  <div className="text-gray-300">• push - Code changes</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bot Mention Detection */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h2 className="text-2xl font-semibold text-purple-400 mb-4">Bot Mention Detection</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-900 rounded p-4">
              <h3 className="text-lg font-semibold text-green-400 mb-3">Smart Pattern Matching</h3>
              <div className="font-mono text-sm text-gray-100">
                <div className="text-blue-400 mb-2">// Bot mention detection logic</div>
                <div>const isBotMentioned = (text, botName) =&gt; {'{'}</div>
                <div className="ml-4">const patterns = [</div>
                <div className="ml-8">// @Xibe-review, @xibe-review</div>
                <div className="ml-8">new RegExp(`@${'{'}botName{'}'}`, 'i'),</div>
                <div className="ml-8">// @Xibe, @xibe</div>
                <div className="ml-8">new RegExp(`@${'{'}baseName{'}'}`, 'i'),</div>
                <div className="ml-8">// Xibe review, xibe review</div>
                <div className="ml-8">new RegExp(`${'{'}baseName{'}'}\\s+${'{'}reviewWord{'}'}\\s`, 'i')</div>
                <div className="ml-4">];</div>
                <div className="ml-4"></div>
                <div className="ml-4">return patterns.some(pattern =&gt; pattern.test(text));</div>
                <div>{'}'}</div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-700 rounded-lg p-4">
                <h4 className="text-green-400 mb-2">✅ Valid Mentions</h4>
                <div className="space-y-2 text-gray-300">
                  <div>• @Xibe-review please review this PR</div>
                  <div>• @xibe-review can you check this code?</div>
                  <div>• Xibe review this pull request</div>
                  <div>• @Xibe please review</div>
                </div>
              </div>

              <div className="bg-gray-700 rounded-lg p-4">
                <h4 className="text-red-400 mb-2">❌ Invalid Mentions</h4>
                <div className="space-y-2 text-gray-300">
                  <div>• This is a regular comment</div>
                  <div>• @other-bot please review</div>
                  <div>• Xibe is a great tool (no action word)</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Webhook Security */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h2 className="text-2xl font-semibold text-red-400 mb-4">Webhook Security</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-900 rounded p-4">
              <h3 className="text-lg font-semibold text-green-400 mb-3">Signature Verification</h3>
              <div className="font-mono text-sm text-gray-100">
                <div className="text-blue-400 mb-2">// Webhook signature validation</div>
                <div>app.post('/webhook', async (req, res) =&gt; {'{'}</div>
                <div className="ml-4">// Extract signature from headers</div>
                <div className="ml-4">const signature = req.headers['x-hub-signature-256'];</div>
                <div className="ml-4">const payload = JSON.stringify(req.body);</div>
                <div className="ml-4"></div>
                <div className="ml-4">// Verify signature using webhook secret</div>
                <div className="ml-4">const expectedSignature = 'sha256=' + </div>
                <div className="ml-8">crypto.createHmac('sha256', process.env.GITHUB_WEBHOOK_SECRET)</div>
                <div className="ml-8">.update(payload)</div>
                <div className="ml-8">.digest('hex');</div>
                <div className="ml-4"></div>
                <div className="ml-4">if (signature !== expectedSignature) {'{'}</div>
                <div className="ml-8">return res.status(403).json({'{'} error: 'Invalid signature' {'}'});</div>
                <div className="ml-4">{'}'}</div>
                <div>{'}'});</div>
              </div>
            </div>

            <div className="bg-gray-900 rounded p-4">
              <h3 className="text-lg font-semibold text-purple-400 mb-3">Rate Limiting</h3>
              <div className="font-mono text-sm text-gray-100">
                <div className="text-blue-400 mb-2">// Rate limiting implementation</div>
                <div>const rateLimit = new Map();</div>
                <div>const maxRequestsPerMinute = 10;</div>
                <div></div>
                <div>app.use('/webhook', (req, res, next) =&gt; {'{'}</div>
                <div className="ml-4">const clientIP = req.ip;</div>
                <div className="ml-4">const now = Date.now();</div>
                <div className="ml-4">const windowMs = 60 * 1000; // 1 minute</div>
                <div className="ml-4"></div>
                <div className="ml-4">if (!rateLimit.has(clientIP)) {'{'}</div>
                <div className="ml-8">rateLimit.set(clientIP, []);</div>
                <div className="ml-4">{'}'}</div>
                <div className="ml-4"></div>
                <div className="ml-4">const requests = rateLimit.get(clientIP);</div>
                <div className="ml-4">const validRequests = requests.filter(time =&gt; now - time &lt; windowMs);</div>
                <div className="ml-4"></div>
                <div className="ml-4">if (validRequests.length &gt;= maxRequestsPerMinute) {'{'}</div>
                <div className="ml-8">return res.status(429).json({'{'} error: 'Rate limit exceeded' {'}'});</div>
                <div className="ml-4">{'}'}</div>
                <div className="ml-4"></div>
                <div className="ml-4">validRequests.push(now);</div>
                <div className="ml-4">rateLimit.set(clientIP, validRequests);</div>
                <div className="ml-4">next();</div>
                <div>{'}'});</div>
              </div>
            </div>

            <div className="bg-gray-900 rounded p-4">
              <h3 className="text-lg font-semibold text-yellow-400 mb-3">Content Sanitization</h3>
              <div className="font-mono text-sm text-gray-100">
                <div className="text-blue-400 mb-2">// Sanitize webhook content</div>
                <div>const sanitizeContent = (content) =&gt; {'{'}</div>
                <div className="ml-4">return content</div>
                <div className="ml-8">.replace(/&lt;script\b[^&lt;]*(?:(?!&lt;\/script&gt;)&lt;[^&lt;]*)*&lt;\/script&gt;/gi, '')</div>
                <div className="ml-8">.replace(/javascript:/gi, '')</div>
                <div className="ml-8">.substring(0, 10000); // Limit length</div>
                <div>{'}'};</div>
              </div>
            </div>
          </div>
        </div>

        {/* Webhook Configuration */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h2 className="text-2xl font-semibold text-green-400 mb-4">Webhook Configuration</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-900 rounded p-4">
              <h3 className="text-lg font-semibold text-blue-400 mb-3">GitHub App Setup</h3>
              <div className="space-y-4">
                <div className="text-gray-300">
                  <div className="font-semibold text-white mb-2">1. Create GitHub App</div>
                  <div>• Go to GitHub Settings → Developer settings → GitHub Apps</div>
                  <div>• Click "New GitHub App"</div>
                  <div>• Fill in app details and webhook URL</div>
                </div>
                
                <div className="text-gray-300">
                  <div className="font-semibold text-white mb-2">2. Configure Webhook</div>
                  <div>• Webhook URL: https://your-domain.com/webhook</div>
                  <div>• Content type: application/json</div>
                  <div>• Secret: Generate a strong secret</div>
                </div>
                
                <div className="text-gray-300">
                  <div className="font-semibold text-white mb-2">3. Select Events</div>
                  <div>• Issue comments</div>
                  <div>• Pull requests</div>
                  <div>• Issues</div>
                  <div>• Push (optional)</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded p-4">
              <h3 className="text-lg font-semibold text-purple-400 mb-3">Environment Variables</h3>
              <div className="font-mono text-sm text-gray-100">
                <div className="text-blue-400 mb-2">// Required environment variables</div>
                <div>GITHUB_WEBHOOK_SECRET=your_webhook_secret_here</div>
                <div>GITHUB_APP_ID=your_app_id</div>
                <div>GITHUB_PRIVATE_KEY=your_private_key</div>
                <div>BOT_USERNAME=xibe-review</div>
                <div></div>
                <div className="text-green-400">// Optional</div>
                <div>WEBHOOK_TIMEOUT=30000</div>
                <div>MAX_WEBHOOK_SIZE=1048576</div>
              </div>
            </div>
          </div>
        </div>

        {/* Monitoring and Debugging */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-4">Monitoring & Debugging</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-900 rounded p-4">
              <h3 className="text-lg font-semibold text-green-400 mb-3">Webhook Logging</h3>
              <div className="font-mono text-sm text-gray-100">
                <div className="text-blue-400 mb-2">// Webhook event logging</div>
                <div>const logWebhookEvent = (event, payload) =&gt; {'{'}</div>
                <div className="ml-4">const logEntry = {'{'}</div>
                <div className="ml-8">timestamp: new Date().toISOString(),</div>
                <div className="ml-8">event,</div>
                <div className="ml-8">repository: payload.repository?.full_name,</div>
                <div className="ml-8">action: payload.action,</div>
                <div className="ml-8">user: payload.sender?.login</div>
                <div className="ml-4">{'}'};</div>
                <div className="ml-4"></div>
                <div className="ml-4">console.log('Webhook received:', JSON.stringify(logEntry, null, 2));</div>
                <div className="ml-4">await saveWebhookLog(logEntry);</div>
                <div>{'}'};</div>
              </div>
            </div>

            <div className="bg-gray-900 rounded p-4">
              <h3 className="text-lg font-semibold text-blue-400 mb-3">Health Monitoring</h3>
              <div className="font-mono text-sm text-gray-100">
                <div className="text-blue-400 mb-2">// Health check endpoint</div>
                <div>app.get('/health', (req, res) =&gt; {'{'}</div>
                <div className="ml-4">res.status(200).json({'{'}</div>
                <div className="ml-8">status: 'ok',</div>
                <div className="ml-8">timestamp: new Date().toISOString(),</div>
                <div className="ml-8">uptime: process.uptime(),</div>
                <div className="ml-8">memory: process.memoryUsage()</div>
                <div className="ml-4">{'}'});</div>
                <div>{'}'});</div>
              </div>
            </div>

            <div className="bg-gray-900 rounded p-4">
              <h3 className="text-lg font-semibold text-purple-400 mb-3">Debug Commands</h3>
              <div className="font-mono text-sm text-gray-100">
                <div className="text-blue-400 mb-2">// Test webhook locally</div>
                <div>curl -X POST http://localhost:3000/webhook \</div>
                <div className="ml-4">-H "X-GitHub-Event: issue_comment" \</div>
                <div className="ml-4">-H "X-Hub-Signature-256: sha256=YOUR_SIGNATURE" \</div>
                <div className="ml-4">-H "Content-Type: application/json" \</div>
                <div className="ml-4">-d '{'{'}</div>
                <div className="ml-8">"action": "created",</div>
                <div className="ml-8">"comment": {'{'}</div>
                <div className="ml-12">"body": "@Xibe-review please review this PR",</div>
                <div className="ml-12">"user": {'{'} "login": "test-user" {'}'}</div>
                <div className="ml-8">{'}'},</div>
                <div className="ml-8">"repository": {'{'}</div>
                <div className="ml-12">"full_name": "owner/test-repo",</div>
                <div className="ml-12">"owner": {'{'} "login": "owner" {'}'}</div>
                <div className="ml-8">{'}'}</div>
                <div className="ml-4">{'}'}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Best Practices */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h2 className="text-2xl font-semibold text-green-400 mb-4">Best Practices</h2>
          
          <div className="space-y-4">
            <div className="bg-gray-700 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">Security</h3>
              <div className="space-y-2 text-gray-300">
                <div>• Always verify webhook signatures</div>
                <div>• Use HTTPS for webhook endpoints</div>
                <div>• Implement rate limiting</div>
                <div>• Sanitize all incoming data</div>
                <div>• Log security events</div>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-purple-400 mb-2">Performance</h3>
              <div className="space-y-2 text-gray-300">
                <div>• Process webhooks asynchronously</div>
                <div>• Implement proper error handling</div>
                <div>• Use connection pooling</div>
                <div>• Monitor response times</div>
                <div>• Cache frequently accessed data</div>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-yellow-400 mb-2">Reliability</h3>
              <div className="space-y-2 text-gray-300">
                <div>• Implement retry logic</div>
                <div>• Use idempotent operations</div>
                <div>• Handle webhook failures gracefully</div>
                <div>• Monitor webhook delivery</div>
                <div>• Set up alerts for failures</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Webhooks;