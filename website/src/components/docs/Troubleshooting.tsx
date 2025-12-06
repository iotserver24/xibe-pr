import React from 'react';

const Troubleshooting: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-4">Troubleshooting Guide</h1>
        <p className="text-gray-300 text-lg">
          Comprehensive troubleshooting guide for common issues with the XIbe Review bot.
        </p>
      </div>

      <div className="space-y-8">
        {/* Bot Not Responding */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h2 className="text-2xl font-semibold text-red-400 mb-4">Bot Not Responding</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-900 rounded p-4">
              <h3 className="text-lg font-semibold text-green-400 mb-3">Step 1: Check Environment Variables</h3>
              <div className="font-mono text-sm text-gray-100">
                <div className="text-blue-400 mb-2"># Verify all required variables are set</div>
                <div>node -e "</div>
                <div className="ml-4">const required = ['AI_API', 'AI_KEY', 'BOT_USERNAME'];</div>
                <div className="ml-4">const missing = required.filter(key =&gt; !process.env[key]);</div>
                <div className="ml-4">if (missing.length &gt; 0) {'{'}</div>
                <div className="ml-8">console.error('❌ Missing required variables:', missing.join(', '));</div>
                <div className="ml-8">process.exit(1);</div>
                <div className="ml-4">{'}'}</div>
                <div className="ml-4">console.log('✅ All required variables are set');</div>
                <div>"</div>
              </div>
            </div>

            <div className="bg-gray-900 rounded p-4">
              <h3 className="text-lg font-semibold text-blue-400 mb-3">Step 2: Test Bot Health</h3>
              <div className="font-mono text-sm text-gray-100">
                <div className="text-blue-400 mb-2"># Check if bot is running</div>
                <div>curl http://localhost:3000/health</div>
                <div></div>
                <div className="text-green-400"># Expected response:</div>
                <div>{'{'}</div>
                <div className="ml-4">"status": "ok",</div>
                <div className="ml-4">"timestamp": "2024-10-24T10:30:00.000Z"</div>
                <div>{'}'}</div>
              </div>
            </div>

            <div className="bg-gray-900 rounded p-4">
              <h3 className="text-lg font-semibold text-purple-400 mb-3">Step 3: Check Bot Logs</h3>
              <div className="font-mono text-sm text-gray-100">
                <div className="text-blue-400 mb-2"># View recent logs</div>
                <div>tail -f logs/bot.log</div>
                <div></div>
                <div className="text-blue-400 mb-2"># Check for errors</div>
                <div>grep -i error logs/bot.log</div>
                <div></div>
                <div className="text-blue-400 mb-2"># Check webhook activity</div>
                <div>grep -i webhook logs/bot.log</div>
              </div>
            </div>
          </div>
        </div>

        {/* Authentication Issues */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-4">Authentication Issues</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-900 rounded p-4">
              <h3 className="text-lg font-semibold text-green-400 mb-3">GitHub App Authentication</h3>
              <div className="font-mono text-sm text-gray-100">
                <div className="text-blue-400 mb-2"># Test GitHub App credentials</div>
                <div>node -e "</div>
                <div className="ml-4">try {'{'}</div>
                <div className="ml-8">const key = process.env.GITHUB_PRIVATE_KEY;</div>
                <div className="ml-8">if (!key) throw new Error('Private key not set');</div>
                <div className="ml-8">const decoded = Buffer.from(key, 'base64').toString('utf-8');</div>
                <div className="ml-8">console.log('✅ Private key format is valid');</div>
                <div className="ml-4">{'}'} catch (error) {'{'}</div>
                <div className="ml-8">console.error('❌ Invalid private key format:', error.message);</div>
                <div className="ml-4">{'}'}</div>
                <div>"</div>
              </div>
            </div>

            <div className="bg-gray-900 rounded p-4">
              <h3 className="text-lg font-semibold text-blue-400 mb-3">Personal Access Token</h3>
              <div className="font-mono text-sm text-gray-100">
                <div className="text-blue-400 mb-2"># Test PAT authentication</div>
                <div>curl -H "Authorization: token $GITHUB_TOKEN" \</div>
                <div className="ml-4">https://api.github.com/user</div>
                <div></div>
                <div className="text-green-400"># Expected response:</div>
                <div>{'{'}</div>
                <div className="ml-4">"login": "your-username",</div>
                <div className="ml-4">"id": 123456,</div>
                <div className="ml-4">"name": "Your Name"</div>
                <div>{'}'}</div>
              </div>
            </div>

            <div className="bg-gray-900 rounded p-4">
              <h3 className="text-lg font-semibold text-purple-400 mb-3">Webhook Secret</h3>
              <div className="font-mono text-sm text-gray-100">
                <div className="text-blue-400 mb-2"># Test webhook signature generation</div>
                <div>node -e "</div>
                <div className="ml-4">const crypto = require('crypto');</div>
                <div className="ml-4">const secret = process.env.GITHUB_WEBHOOK_SECRET;</div>
                <div className="ml-4">const payload = JSON.stringify({'{'}test: 'data'{'}'});</div>
                <div className="ml-4">const signature = 'sha256=' + crypto.createHmac('sha256', secret).update(payload).digest('hex');</div>
                <div className="ml-4">console.log('Generated signature:', signature);</div>
                <div>"</div>
              </div>
            </div>
          </div>
        </div>

        {/* AI API Issues */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">AI API Issues</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-900 rounded p-4">
              <h3 className="text-lg font-semibold text-green-400 mb-3">API Connectivity</h3>
              <div className="font-mono text-sm text-gray-100">
                <div className="text-blue-400 mb-2"># Test AI API connection</div>
                <div>curl -H "Authorization: Bearer $AI_KEY" \</div>
                <div className="ml-4">-H "Content-Type: application/json" \</div>
                <div className="ml-4">-d '{'{'}</div>
                <div className="ml-8">"model": "gpt-3.5-turbo",</div>
                <div className="ml-8">"messages": [...]</div>
                <div className="ml-4">{'}'} \</div>
                <div className="ml-4">https://api.openai.com/v1/chat/completions</div>
              </div>
            </div>

            <div className="bg-gray-900 rounded p-4">
              <h3 className="text-lg font-semibold text-blue-400 mb-3">API Key Validation</h3>
              <div className="font-mono text-sm text-gray-100">
                <div className="text-blue-400 mb-2"># Check API key format</div>
                <div>echo "AI Key: ${'{'}AI_KEY:0:10{'}'}..." # First 10 chars only</div>
                <div></div>
                <div className="text-blue-400 mb-2"># Verify key has credits</div>
                <div>curl -H "Authorization: Bearer $AI_KEY" \</div>
                <div className="ml-4">https://api.openai.com/v1/usage</div>
              </div>
            </div>

            <div className="bg-gray-900 rounded p-4">
              <h3 className="text-lg font-semibold text-purple-400 mb-3">Rate Limiting</h3>
              <div className="font-mono text-sm text-gray-100">
                <div className="text-blue-400 mb-2"># Check rate limit status</div>
                <div>curl -I -H "Authorization: Bearer $AI_KEY" \</div>
                <div className="ml-4">https://api.openai.com/v1/chat/completions</div>
                <div></div>
                <div className="text-green-400"># Look for these headers:</div>
                <div># x-ratelimit-limit-requests: 500</div>
                <div># x-ratelimit-remaining-requests: 499</div>
                <div># x-ratelimit-reset-requests: 1640995200</div>
              </div>
            </div>
          </div>
        </div>

        {/* Network Issues */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h2 className="text-2xl font-semibold text-purple-400 mb-4">Network Issues</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-900 rounded p-4">
              <h3 className="text-lg font-semibold text-green-400 mb-3">Internet Connectivity</h3>
              <div className="font-mono text-sm text-gray-100">
                <div className="text-blue-400 mb-2"># Test basic connectivity</div>
                <div>ping google.com</div>
                <div></div>
                <div className="text-blue-400 mb-2"># Test GitHub API access</div>
                <div>curl -I https://api.github.com</div>
                <div></div>
                <div className="text-blue-400 mb-2"># Test AI API access</div>
                <div>curl -I https://api.xibe.app</div>
              </div>
            </div>

            <div className="bg-gray-900 rounded p-4">
              <h3 className="text-lg font-semibold text-blue-400 mb-3">Firewall/Proxy Issues</h3>
              <div className="font-mono text-sm text-gray-100">
                <div className="text-blue-400 mb-2"># Check if ports are blocked</div>
                <div>telnet api.github.com 443</div>
                <div>telnet api.openai.com 443</div>
                <div></div>
                <div className="text-blue-400 mb-2"># Test with proxy (if applicable)</div>
                <div>curl --proxy http://proxy:port https://api.github.com</div>
              </div>
            </div>

            <div className="bg-gray-900 rounded p-4">
              <h3 className="text-lg font-semibold text-purple-400 mb-3">DNS Resolution</h3>
              <div className="font-mono text-sm text-gray-100">
                <div className="text-blue-400 mb-2"># Test DNS resolution</div>
                <div>nslookup api.github.com</div>
                <div>nslookup api.xibe.app</div>
                <div></div>
                <div className="text-blue-400 mb-2"># Check DNS servers</div>
                <div>cat /etc/resolv.conf</div>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Issues */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h2 className="text-2xl font-semibold text-orange-400 mb-4">Performance Issues</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-900 rounded p-4">
              <h3 className="text-lg font-semibold text-green-400 mb-3">Memory Usage</h3>
              <div className="font-mono text-sm text-gray-100">
                <div className="text-blue-400 mb-2"># Check memory usage</div>
                <div>ps aux | grep node</div>
                <div></div>
                <div className="text-blue-400 mb-2"># Monitor memory in real-time</div>
                <div>top -p $(pgrep -f "node.*bot")</div>
                <div></div>
                <div className="text-green-400"># Expected: Memory usage should be &lt; 100MB</div>
              </div>
            </div>

            <div className="bg-gray-900 rounded p-4">
              <h3 className="text-lg font-semibold text-blue-400 mb-3">CPU Usage</h3>
              <div className="font-mono text-sm text-gray-100">
                <div className="text-blue-400 mb-2"># Check CPU usage</div>
                <div>htop</div>
                <div></div>
                <div className="text-blue-400 mb-2"># Monitor bot performance</div>
                <div>curl http://localhost:3000/api/status/uptime</div>
                <div></div>
                <div className="text-green-400"># Look at:</div>
                <div># - Memory usage (should be &lt; 100MB)</div>
                <div># - Processing times</div>
                <div># - Recent webhook activity</div>
                <div># - Error rates</div>
              </div>
            </div>

            <div className="bg-gray-900 rounded p-4">
              <h3 className="text-lg font-semibold text-purple-400 mb-3">Database Performance</h3>
              <div className="font-mono text-sm text-gray-100">
                <div className="text-blue-400 mb-2"># Check Redis connection</div>
                <div>redis-cli ping</div>
                <div></div>
                <div className="text-blue-400 mb-2"># Monitor Redis performance</div>
                <div>redis-cli info stats</div>
                <div></div>
                <div className="text-blue-400 mb-2"># Check Redis memory usage</div>
                <div>redis-cli info memory</div>
              </div>
            </div>
          </div>
        </div>

        {/* Common Solutions */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h2 className="text-2xl font-semibold text-green-400 mb-4">Common Solutions</h2>
          
          <div className="space-y-4">
            <div className="bg-gray-700 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">Quick Fixes</h3>
              <div className="space-y-2 text-gray-300">
                <div>• Restart the bot: <code className="bg-gray-800 px-2 py-1 rounded">pm2 restart bot</code></div>
                <div>• Check logs: <code className="bg-gray-800 px-2 py-1 rounded">pm2 logs bot</code></div>
                <div>• Update dependencies: <code className="bg-gray-800 px-2 py-1 rounded">npm update</code></div>
                <div>• Clear cache: <code className="bg-gray-800 px-2 py-1 rounded">redis-cli flushall</code></div>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-purple-400 mb-2">Configuration Issues</h3>
              <div className="space-y-2 text-gray-300">
                <div>• Verify all environment variables are set</div>
                <div>• Check webhook URL is accessible</div>
                <div>• Ensure GitHub App has correct permissions</div>
                <div>• Verify AI API key has sufficient credits</div>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-yellow-400 mb-2">When to Contact Support</h3>
              <div className="space-y-2 text-gray-300">
                <div>• Bot consistently fails to respond</div>
                <div>• Authentication errors persist after verification</div>
                <div>• Performance issues that can't be resolved</div>
                <div>• Unexpected behavior in production</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Troubleshooting;