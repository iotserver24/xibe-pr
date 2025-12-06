import React from 'react';

const CodeExamples: React.FC = () => {
  return (
    <div className="prose prose-lg max-w-none prose-invert">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">💻 Code Examples</h1>
        <p className="text-xl text-gray-300 leading-relaxed">
          Comprehensive code examples and implementation details for the XIbe Review bot, including
          the multi-agent review system, webhook handling, and API integrations.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">🤖 Main Bot Implementation</h2>

        <p className="text-gray-300 mb-4">
          The core bot functionality is implemented in <code className="bg-gray-800 px-2 py-1 rounded text-gray-100">bot.js</code>.
          Here's the complete implementation with detailed explanations:
        </p>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 mb-6">
          <h3 className="text-lg font-semibold text-blue-400 mb-4">Environment Configuration</h3>
          <div className="bg-gray-900 rounded p-4 font-mono text-sm text-gray-100 overflow-x-auto">
            <div className="text-green-400 mb-2"># .env file configuration</div>
            <div># GitHub App Authentication (Recommended)</div>
            <div>GITHUB_APP_ID=your_app_id</div>
            <div>GITHUB_PRIVATE_KEY="-----BEGIN RSA PRIVATE KEY-----..."</div>
            <div>GITHUB_WEBHOOK_SECRET=your_webhook_secret</div>
            <div>BOT_USERNAME=your-bot-name[bot]</div>
            <br />
            <div># Personal Access Token (Alternative)</div>
            <div>GITHUB_TOKEN=ghp_your_personal_access_token</div>
            <div>BOT_USERNAME=pr-review-bot</div>
            <br />
            <div># AI Provider Configuration</div>
            <div>AI_API=https://api.xibe.app/openai/v1</div>
            <div>AI_KEY=your-xibe-api-key</div>
            <div>MODEL_ID=gpt-4-turbo-preview</div>
            <div>ANALYSIS_MODEL=gpt-4-turbo-preview</div>
            <div>COMMENT_MODEL=gpt-4-turbo-preview</div>
            <br />
            <div># Redis Configuration (Optional)</div>
            <div>UPSTASH_REDIS_REST_URL=your_redis_url</div>
            <div>UPSTASH_REDIS_REST_TOKEN=your_redis_token</div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 mb-6">
          <h3 className="text-lg font-semibold text-green-400 mb-4">Multi-Agent Review System</h3>
          <p className="text-gray-300 mb-4">
            The bot uses a sophisticated two-stage review process with specialized AI agents:
          </p>

          <div className="bg-gray-900 rounded p-4 font-mono text-sm text-gray-100 overflow-x-auto mb-4">
            <div className="text-blue-400 mb-2">// Stage 1: Analyze individual files</div>
            <div>async function analyzeFileWithAI(modelName, prTitle, prBody, file, userComment = null) {`{`}</div>
            <div className="ml-4">const maxInputChars = 8000;</div>
            <div className="ml-4">const filePatch = (file.patch || '').substring(0, maxInputChars);</div>
            <div className="ml-4"></div>
            <div className="ml-4 text-green-400">// Create detailed analysis prompt</div>
            <div className="ml-4">let analysisPrompt = `You are an expert code analyst specializing in security and code quality...</div>
            <div className="ml-4">**PR Context:**</div>
            <div className="ml-4">- Title: ${`{prTitle}`}</div>
            <div className="ml-4">- Description: ${`{prBody || 'No description provided'}`}</div>
            <div className="ml-4">...</div>
            <div className="ml-4">**CRITICAL FOCUS AREAS:**</div>
            <div className="ml-4">1. 🔴 **HARDCODED VALUES** - Identify hardcoded credentials, API keys...</div>
            <div className="ml-4">2. 🔴 **SECURITY VULNERABILITIES** - SQL injection, XSS, authentication issues...</div>
            <div className="ml-4">3. 🔴 **CODE SMELLS** - Poor practices, anti-patterns, potential bugs`;</div>
            <div className="ml-4"></div>
            <div className="ml-4">const response = await openai.chat.completions.create({`{`}</div>
            <div className="ml-8">model: modelName,</div>
            <div className="ml-8">messages: [</div>
            <div className="ml-12">role: 'system',</div>
            <div className="ml-12">content: 'You are a security-focused code analyst...'</div>
            <div className="ml-8">],</div>
            <div className="ml-8">max_tokens: 2000,</div>
            <div className="ml-8">temperature: 0.3,</div>
            <div className="ml-4">{`}`});</div>
            <div className="ml-4"></div>
            <div className="ml-4">return response.choices[0].message.content;</div>
            <div>{`}`}</div>
          </div>

          <div className="bg-gray-900 rounded p-4 font-mono text-sm text-gray-100 overflow-x-auto mb-4">
            <div className="text-blue-400 mb-2">// Stage 2: Synthesize comprehensive review</div>
            <div>async function synthesizeReviewFromAnalyses(modelName, prTitle, prBody, files, fileAnalyses, prAuthor, mentionedBy, userComment = null) {`{`}</div>
              <div className="ml-4">const filesList = files.map(f =&gt; `- ${`{f.filename}`} (${`{f.status}`}, +${`{f.additions}`}/-${`{f.deletions}`})`).join('\n');</div>
            <div className="ml-4">const allAnalyses = fileAnalyses.join('\n\n---\n\n');</div>
            <div className="ml-4"></div>
            <div className="ml-4 text-green-400">// Create synthesis prompt</div>
            <div className="ml-4">let synthesisPrompt = `You are an expert code reviewer...</div>
            <div className="ml-4">**Individual File Analyses:**</div>
            <div className="ml-4">${`{allAnalyses}`}</div>
            <div className="ml-4">...</div>
            <div className="ml-4">**YOUR TASK:**</div>
            <div className="ml-4">Create a comprehensive review that:</div>
            <div className="ml-4">1. Highlight ALL critical issues from individual analyses</div>
            <div className="ml-4">2. Provides a clear overall assessment</div>
            <div className="ml-4">3. Uses 🔴 emoji to highlight critical issues`;</div>
            <div className="ml-4"></div>
            <div className="ml-4">const response = await openai.chat.completions.create({`{`}</div>
            <div className="ml-8">model: modelName,</div>
            <div className="ml-8">messages: [</div>
            <div className="ml-12">role: 'system',</div>
            <div className="ml-12">content: 'You are a professional code reviewer...'</div>
            <div className="ml-8">],</div>
            <div className="ml-8">max_tokens: 3000,</div>
            <div className="ml-8">temperature: 0.4,</div>
            <div className="ml-4">{`}`});</div>
            <div className="ml-4"></div>
            <div className="ml-4">return response.choices[0].message.content;</div>
            <div>{`}`}</div>
          </div>

          <div className="bg-gray-900 rounded p-4 font-mono text-sm text-gray-100 overflow-x-auto">
            <div className="text-purple-400 mb-2">// Main review orchestrator</div>
            <div>async function reviewCodeWithAI(modelName, prTitle, prBody, files, diff, prAuthor, mentionedBy = null, userComment = null) {`{`}</div>
            <div className="ml-4">console.log(`🚀 Starting multi-agent AI review process`);</div>
            <div className="ml-4"></div>
            <div className="ml-4 text-blue-400">// Agent 1: Analyze each file individually</div>
            <div className="ml-4">console.log(`📊 Agent 1: Analyzing ${`{files.length}`} files individually...`);</div>
            <div className="ml-4">const fileAnalyses = [];</div>
            <div className="ml-4"></div>
            <div className="ml-4">for (let i = 0; i &lt; files.length; i++) {`{`}</div>
            <div className="ml-8">const file = files[i];</div>
            <div className="ml-8">const analysis = await analyzeFileWithAI(ANALYSIS_MODEL, prTitle, prBody, file, userComment);</div>
            <div className="ml-8">fileAnalyses.push(analysis);</div>
            <div className="ml-4">{`}`}</div>
            <div className="ml-4"></div>
            <div className="ml-4 text-green-400">// Agent 2: Synthesize all analyses</div>
            <div className="ml-4">const finalReview = await synthesizeReviewFromAnalyses(</div>
            <div className="ml-8">COMMENT_MODEL, prTitle, prBody, files, fileAnalyses, prAuthor, mentionedBy, userComment</div>
            <div className="ml-4">);</div>
            <div className="ml-4"></div>
            <div className="ml-4">return finalReview;</div>
            <div>{`}`}</div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 mb-6">
          <h3 className="text-lg font-semibold text-purple-400 mb-4">GitHub Integration</h3>

          <div className="bg-gray-900 rounded p-4 font-mono text-sm text-gray-100 overflow-x-auto mb-4">
            <div className="text-blue-400 mb-2">// Webhook handler for PR reviews</div>
              <div>app.post('/webhook', async (req, res) =&gt; {`{`}</div>
            <div className="ml-4">const event = req.headers['x-github-event'];</div>
            <div className="ml-4">const payload = req.body;</div>
            <div className="ml-4">const installationId = payload.installation?.id;</div>
            <div className="ml-4"></div>
            <div className="ml-4 text-green-400">// Handle issue_comment events (manual reviews)</div>
            <div className="ml-4">if (event === 'issue_comment' && payload.action === 'created') {`{`}</div>
            <div className="ml-8">const comment = payload.comment;</div>
            <div className="ml-8">const issue = payload.issue;</div>
            <div className="ml-8"></div>
            <div className="ml-8 text-purple-400">// Check if bot was mentioned</div>
            <div className="ml-8">const isMentioned = isBotMentioned(comment.body || '', BOT_USERNAME);</div>
            <div className="ml-8">const isFromBotSelf = comment.user?.login === `${`{BOT_USERNAME}`}[bot]`;</div>
            <div className="ml-8"></div>
            <div className="ml-8">if (issue.pull_request && isMentioned && !isFromBotSelf) {`{`}</div>
            <div className="ml-12 text-yellow-400">// Get PR details and trigger review</div>
            <div className="ml-12">const owner = payload.repository.owner.login;</div>
            <div className="ml-12">const repo = payload.repository.name;</div>
            <div className="ml-12">const pullNumber = issue.number;</div>
            <div className="ml-12"></div>
            <div className="ml-12">// Get authenticated Octokit instance</div>
            <div className="ml-12">let octokit;</div>
            <div className="ml-12">if (authMode === 'app' && installationId) {`{`}</div>
            <div className="ml-16">octokit = await getOctokitForInstallation(installationId);</div>
            <div className="ml-12">{`}`} else if (authMode === 'pat' && defaultOctokit) {`{`}</div>
            <div className="ml-16">octokit = defaultOctokit;</div>
            <div className="ml-12">{`}`}</div>
            <div className="ml-12"></div>
            <div className="ml-12 text-red-400">// Trigger the review process</div>
            <div className="ml-12">handlePRReviewRequest(octokit, owner, repo, pullNumber, comment.id, logId, false, installationId, comment.body, comment.user?.login);</div>
            <div className="ml-8">{`}`}</div>
            <div className="ml-4">{`}`}</div>
            <div>{`}`});</div>
          </div>

          <div className="bg-gray-900 rounded p-4 font-mono text-sm text-gray-100 overflow-x-auto">
            <div className="text-green-400 mb-2">// Bot mention detection with multiple patterns</div>
              <div>const isBotMentioned = (text, botName) =&gt; {`{`}</div>
            <div className="ml-4">const botNameParts = botName.split('-');</div>
            <div className="ml-4">const baseName = botNameParts[0]; // "xibe"</div>
            <div className="ml-4">const reviewWord = botNameParts[1]; // "review"</div>
            <div className="ml-4"></div>
            <div className="ml-4">const patterns = [</div>
            <div className="ml-8">// @Xibe-review, @xibe-review, @XIbe-review</div>
            <div className="ml-8">new RegExp(`@${`{botName}`}`, 'i'),</div>
            <div className="ml-8">// @Xibe, @xibe (just @name)</div>
            <div className="ml-8">new RegExp(`@${`{baseName}`}`, 'i'),</div>
            <div className="ml-8">// Xibe review, xibe review</div>
            <div className="ml-8">new RegExp(`${`{baseName}`}\\s+${`{reviewWord}`}\\b`, 'i'),</div>
            <div className="ml-8">// xibe-review, Xibe-review</div>
            <div className="ml-8">new RegExp(`${`{botName}`}\\b`, 'i'),</div>
            <div className="ml-4">];</div>
            <div className="ml-4"></div>
              <div className="ml-4">return patterns.some(pattern =&gt; pattern.test(text));</div>
            <div>{`}`}</div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 mb-6">
          <h3 className="text-lg font-semibold text-yellow-400 mb-4">Redis Analytics & Caching</h3>

          <div className="bg-gray-900 rounded p-4 font-mono text-sm text-gray-100 overflow-x-auto mb-4">
            <div className="text-blue-400 mb-2">// Save review data for analytics</div>
            <div>async function saveReviewToDatabase(reviewData) {`{`}</div>
            <div className="ml-4">const reviewId = `review_${`{Date.now()}`}_${`{Math.random().toString(36).substr(2, 9)}`}`;</div>
            <div className="ml-4">const reviewRecord = {`{`}</div>
            <div className="ml-8">id: reviewId,</div>
            <div className="ml-8">timestamp: new Date().toISOString(),</div>
            <div className="ml-8">repository: reviewData.repository,</div>
            <div className="ml-8">pullRequest: reviewData.pullNumber,</div>
            <div className="ml-8">user: reviewData.user,</div>
            <div className="ml-8">installationId: reviewData.installationId,</div>
            <div className="ml-8">model: reviewData.model,</div>
            <div className="ml-8">reviewContent: reviewData.reviewContent,</div>
            <div className="ml-8">processingTime: reviewData.processingTime,</div>
            <div className="ml-8">status: 'completed'</div>
            <div className="ml-4">{`}`}</div>
            <div className="ml-4"></div>
            <div className="ml-4 text-green-400">// Store individual review with 30-day TTL</div>
            <div className="ml-4">await redis.setex(`review:${`{reviewId}`}`, 86400 * 30, JSON.stringify(reviewRecord));</div>
            <div className="ml-4"></div>
            <div className="ml-4 text-purple-400">// Update user statistics</div>
            <div className="ml-4">await redis.hincrby(`user:${`{reviewData.user}`}:stats`, 'reviews', 1);</div>
            <div className="ml-4">await redis.hset(`user:${`{reviewData.user}`}:info`, {`{`}</div>
            <div className="ml-8">lastActive: new Date().toISOString(),</div>
            <div className="ml-8">totalReviews: await redis.hget(`user:${`{reviewData.user}`}:stats`, 'reviews') || 0</div>
            <div className="ml-4">{`}`});</div>
            <div className="ml-4"></div>
            <div className="ml-4 text-yellow-400">// Update global analytics</div>
            <div className="ml-4">await redis.hincrby('analytics:global', 'totalReviews', 1);</div>
            <div className="ml-4">await redis.hincrby('analytics:global', 'totalUsers', 1);</div>
            <div className="ml-4"></div>
            <div className="ml-4">return reviewId;</div>
            <div>{`}`}</div>
          </div>

          <div className="bg-gray-900 rounded p-4 font-mono text-sm text-gray-100 overflow-x-auto">
            <div className="text-green-400 mb-2">// Get comprehensive analytics</div>
            <div>async function getGlobalAnalytics() {`{`}</div>
            <div className="ml-4">const analytics = await redis.hgetall('analytics:global');</div>
            <div className="ml-4">const recentReviews = await redis.lrange('reviews:all', 0, 9);</div>
            <div className="ml-4"></div>
            <div className="ml-4">return {`{`}</div>
            <div className="ml-8">totalUsers: parseInt(analytics.totalUsers || 0),</div>
            <div className="ml-8">totalReviews: parseInt(analytics.totalReviews || 0),</div>
            <div className="ml-8">recentReviews: recentReviews.length</div>
            <div className="ml-4">{`}`}</div>
            <div>{`}`}</div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 mb-6">
          <h3 className="text-lg font-semibold text-red-400 mb-4">Authentication Modes</h3>

          <div className="bg-gray-900 rounded p-4 font-mono text-sm text-gray-100 overflow-x-auto mb-4">
            <div className="text-blue-400 mb-2">// GitHub App Authentication (Recommended)</div>
            <div>async function getOctokitForInstallation(installationId) {`{`}</div>
            <div className="ml-4">if (authMode === 'app') {`{`}</div>
            <div className="ml-8">const octokit = new Octokit({`{`}</div>
            <div className="ml-12">authStrategy: createAppAuth,</div>
            <div className="ml-12">auth: {`{`}</div>
            <div className="ml-16">appId: GITHUB_APP_ID,</div>
            <div className="ml-16">privateKey: privateKey,</div>
            <div className="ml-16">installationId: installationId,</div>
            <div className="ml-12">{`}`},</div>
            <div className="ml-8">{`}`});</div>
            <div className="ml-8">return octokit;</div>
            <div className="ml-4">{`}`}</div>
            <div>{`}`}</div>
          </div>

          <div className="bg-gray-900 rounded p-4 font-mono text-sm text-gray-100 overflow-x-auto mb-4">
            <div className="text-green-400 mb-2">// Personal Access Token Authentication</div>
            <div>const defaultOctokit = new Octokit({`{`}</div>
            <div className="ml-4">auth: GITHUB_TOKEN</div>
            <div>{`}`});</div>
          </div>

          <div className="bg-gray-900 rounded p-4 font-mono text-sm text-gray-100 overflow-x-auto">
            <div className="text-purple-400 mb-2">// Test Mode (Mock Authentication)</div>
            <div>return {`{`}</div>
            <div className="ml-4">reactions: {`{`}</div>
              <div className="ml-8">createForIssueComment: async () =&gt; {`{`}</div>
            <div className="ml-12">throw {`{ status: 404, message: 'Mock: Comment not found' }`};</div>
            <div className="ml-8">{`}`}</div>
            <div className="ml-4">{`}`},</div>
            <div className="ml-4">issues: {`{`}</div>
              <div className="ml-8">createComment: async () =&gt; {`{`}</div>
            <div className="ml-12">throw {`{ status: 403, message: 'Mock: Resource not accessible' }`};</div>
            <div className="ml-8">{`}`}</div>
            <div className="ml-4">{`}`}</div>
            <div>{`}`}</div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 mb-6">
          <h3 className="text-lg font-semibold text-blue-400 mb-4">API Endpoints</h3>

          <div className="bg-gray-900 rounded p-4 font-mono text-sm text-gray-100 overflow-x-auto mb-4">
            <div className="text-green-400 mb-2">// Health check endpoint</div>
              <div>app.get('/health', (req, res) =&gt; {`{`}</div>
            <div className="ml-4">res.status(200).json({`{`}</div>
            <div className="ml-8">status: 'ok',</div>
            <div className="ml-8">timestamp: new Date().toISOString()</div>
            <div className="ml-4">{`}`});</div>
            <div>{`}`});</div>
          </div>

          <div className="bg-gray-900 rounded p-4 font-mono text-sm text-gray-100 overflow-x-auto mb-4">
            <div className="text-purple-400 mb-2">// Analytics dashboard</div>
              <div>app.get('/api/analytics/dashboard', async (req, res) =&gt; {`{`}</div>
            <div className="ml-4">const analytics = await getGlobalAnalytics();</div>
            <div className="ml-4">const recentReviews = await getRecentReviews(5);</div>
            <div className="ml-4">const webhookStats = await getWebhookStats();</div>
            <div className="ml-4">const installations = await getGitHubAppInstallations();</div>
            <div className="ml-4"></div>
            <div className="ml-4">res.json({`{`}</div>
            <div className="ml-8">success: true,</div>
            <div className="ml-8">data: {`{`}</div>
            <div className="ml-12">global: analytics,</div>
            <div className="ml-12">webhooks: webhookStats,</div>
            <div className="ml-12">recentActivity: recentReviews,</div>
            <div className="ml-12">installations: installations</div>
            <div className="ml-8">{`}`}</div>
            <div className="ml-4">{`}`});</div>
            <div>{`}`});</div>
          </div>

          <div className="bg-gray-900 rounded p-4 font-mono text-sm text-gray-100 overflow-x-auto">
            <div className="text-yellow-400 mb-2">// Webhook logging and monitoring</div>
              <div>app.get('/api/webhooks', async (req, res) =&gt; {`{`}</div>
            <div className="ml-4">const limit = parseInt(req.query.limit) || 50;</div>
            <div className="ml-4">const status = req.query.status;</div>
            <div className="ml-4">const logs = await getWebhookLogs(limit, status);</div>
            <div className="ml-4">const stats = await getWebhookStats();</div>
            <div className="ml-4"></div>
            <div className="ml-4">res.json({`{`}</div>
            <div className="ml-8">logs,</div>
            <div className="ml-8">total: stats.total,</div>
            <div className="ml-8">filtered: logs.length</div>
            <div className="ml-4">{`}`});</div>
            <div>{`}`});</div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 mb-6">
          <h3 className="text-lg font-semibold text-green-400 mb-4">Complete Usage Examples</h3>

          <div className="space-y-4">
            <div className="bg-gray-900 rounded p-4">
              <h4 className="text-blue-400 mb-2">Basic PR Review Request</h4>
              <div className="font-mono text-sm text-gray-100">
                <div className="text-green-400 mb-2"># In a GitHub PR comment:</div>
                <div>@Xibe-review please review this PR</div>
                <div></div>
                <div className="text-yellow-400 mt-2"># Bot responds with:</div>
                <div>## 🤖 AI Code Review</div>
                <div>**@username** - Thank you for your contribution!</div>
                <div>### ✅ **Recommendation**</div>
                <div>APPROVE - Well-structured implementation</div>
                <div>### 📋 **Summary**</div>
                <div>**What this PR does:** Implements user authentication</div>
                <div>### ⚠️ **Security & Best Practices**</div>
                <div>- Consider using environment variables</div>
                <div>### ✅ **What's Good**</div>
                <div>- Clean code structure</div>
              </div>
            </div>

            <div className="bg-gray-900 rounded p-4">
              <h4 className="text-purple-400 mb-2">Security-Focused Review</h4>
              <div className="font-mono text-sm text-gray-100">
                <div className="text-green-400 mb-2"># Ask specific security questions:</div>
                <div>@Xibe-review please review this PR</div>
                <div>Is this authentication approach secure?</div>
                <div>Should I use environment variables for the API key?</div>
                <div>Are there any potential vulnerabilities?</div>
                <div></div>
                <div className="text-yellow-400 mt-2"># Bot analyzes with security focus:</div>
                <div>### 🔴 **CRITICAL ISSUES**</div>
                <div>- 🔴 Hardcoded API key found (line 15)</div>
                <div>- 🔴 Missing input validation</div>
                <div>### ✅ **Recommendation**</div>
                <div>REQUEST_CHANGES - Security issues must be addressed</div>
              </div>
            </div>

            <div className="bg-gray-900 rounded p-4">
              <h4 className="text-red-400 mb-2">Performance Analysis</h4>
              <div className="font-mono text-sm text-gray-100">
                <div className="text-green-400 mb-2"># Request performance review:</div>
                <div>@Xibe-review please review this PR</div>
                <div>Focus on performance impact of these changes</div>
                <div>Are there any potential bottlenecks?</div>
                <div></div>
                <div className="text-yellow-400 mt-2"># Bot analyzes performance implications:</div>
                <div>### 💡 **Suggestions for Improvement**</div>
                <div>- Consider implementing caching for database queries</div>
                <div>- Database queries could be optimized</div>
                <div>- Add performance monitoring</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white">
          <h3 className="text-xl font-bold mb-4">🚀 Implementation Tips</h3>
          <div className="space-y-3">
            <div><strong>Environment Variables:</strong> Always use environment variables for sensitive data</div>
            <div><strong>Error Handling:</strong> Implement comprehensive error handling for production use</div>
            <div><strong>Rate Limiting:</strong> The bot automatically limits mentions to prevent spam</div>
            <div><strong>Redis Caching:</strong> Use Redis for analytics and duplicate prevention</div>
            <div><strong>Testing:</strong> Test mode allows full functionality without GitHub API calls</div>
            <div><strong>Monitoring:</strong> Monitor webhook delivery and response times in production</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeExamples;
