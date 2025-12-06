import React from 'react';
import Mermaid from '../ui/Mermaid';

const Architecture: React.FC = () => {
  return (
    <div className="prose prose-lg max-w-none prose-invert">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">🏗️ Architecture</h1>
        <p className="text-xl text-gray-300 leading-relaxed">
          Detailed technical architecture and system design of the XIbe Review bot, including the multi-agent
          review system, authentication modes, and integration patterns.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">📊 System Overview</h2>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 mb-6">
          <h3 className="text-lg font-semibold text-blue-400 mb-4">High-Level Architecture</h3>

          <div className="bg-gray-900 rounded p-4 mb-4">
            <div className="text-green-400 mb-4 text-sm">// System Architecture Flow</div>
            <Mermaid 
              chart={`graph TD
                A[GitHub PR Events] --> B[Webhook Handler]
                B --> C[XIbe Review Bot]
                C --> D[AI Provider<br/>xibe.app]
                C --> E[Analysis Engine]
                C --> F[GitHub API]
                E --> G[Security Analysis]
                E --> H[Code Quality Check]
                E --> I[Review Generation]
                F --> J[PR Comments]
                G --> J
                H --> J
                I --> J
                C --> K[Redis Cache]
                K --> L[Analytics Data]
                
                classDef github fill:#24292e,stroke:#f0f6fc,stroke-width:2px,color:#f0f6fc
                classDef bot fill:#1a1a1a,stroke:#00d4aa,stroke-width:2px,color:#00d4aa
                classDef ai fill:#1a1a1a,stroke:#ff6b6b,stroke-width:2px,color:#ff6b6b
                classDef output fill:#1a1a1a,stroke:#4ecdc4,stroke-width:2px,color:#4ecdc4
                classDef cache fill:#1a1a1a,stroke:#ffd93d,stroke-width:2px,color:#ffd93d
                
                class A,B,F,J github
                class C,E,G,H,I bot
                class D ai
                class K,L cache`}
              className="w-full"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-green-400 mb-2">🎯 Input</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• GitHub webhook events</li>
                <li>• PR comments and mentions</li>
                <li>• Repository context</li>
                <li>• User authentication</li>
              </ul>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-blue-400 mb-2">🤖 Processing</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Multi-agent AI analysis</li>
                <li>• Security vulnerability detection</li>
                <li>• Code quality assessment</li>
                <li>• Review synthesis</li>
              </ul>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-purple-400 mb-2">📤 Output</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• GitHub PR comments</li>
                <li>• Structured reviews</li>
                <li>• Analytics data</li>
                <li>• Monitoring logs</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 mb-6">
          <h3 className="text-lg font-semibold text-green-400 mb-4">Technology Stack</h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-blue-400 mb-3">Backend</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• <strong>Runtime:</strong> Node.js (ES Modules)</li>
                <li>• <strong>Framework:</strong> Express.js</li>
                <li>• <strong>AI Integration:</strong> AI Provider API (xibe.app, OpenAI, etc.)</li>
                <li>• <strong>Authentication:</strong> GitHub Apps & PAT</li>
                <li>• <strong>Database:</strong> Redis (caching/analytics)</li>
                <li>• <strong>Deployment:</strong> Docker, PM2, Cloud platforms</li>
              </ul>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-purple-400 mb-3">Frontend</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• <strong>Framework:</strong> React 18 + TypeScript</li>
                <li>• <strong>Styling:</strong> Tailwind CSS</li>
                <li>• <strong>Build Tool:</strong> Vite</li>
                <li>• <strong>Charts:</strong> Recharts</li>
                <li>• <strong>Animations:</strong> Framer Motion</li>
                <li>• <strong>Routing:</strong> React Router</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">🤖 Multi-Agent Review System</h2>

        <p className="text-gray-300 mb-6">
          The bot implements a sophisticated two-stage review process using specialized AI agents,
          each with distinct responsibilities and expertise areas.
        </p>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 mb-6">
          <h3 className="text-lg font-semibold text-blue-400 mb-4">Agent 1: File Analyzer</h3>

          <div className="bg-gray-900 rounded p-4 font-mono text-sm text-gray-100 overflow-x-auto mb-4">
            <div className="text-green-400 mb-2">// File analysis function</div>
            <div>async function analyzeFileWithAI(modelName, prTitle, prBody, file, userComment = null) {`{`}</div>
            <div className="ml-4">// Security-focused analysis with specific prompts</div>
            <div className="ml-4">const analysisPrompt = `</div>
            <div className="ml-8">You are an expert code analyst specializing in security and code quality.</div>
            <div className="ml-8">Analyze this specific file change from a pull request.</div>
            <div className="ml-8">...</div>
            <div className="ml-8">**CRITICAL FOCUS AREAS:**</div>
            <div className="ml-8">1. 🔴 **HARDCODED VALUES** - Identify hardcoded credentials...</div>
            <div className="ml-8">2. 🔴 **SECURITY VULNERABILITIES** - SQL injection, XSS...</div>
            <div className="ml-8">3. 🔴 **CODE SMELLS** - Poor practices, anti-patterns...</div>
            <div className="ml-4">`;</div>
            <div className="ml-4"></div>
            <div className="ml-4">// Send to AI with specific parameters</div>
            <div className="ml-4">const response = await openai.chat.completions.create({`{`}</div>
            <div className="ml-8">model: modelName,        // ANALYSIS_MODEL</div>
            <div className="ml-8">messages: [</div>
            <div className="ml-12">role: 'system',</div>
            <div className="ml-12">content: 'You are a security-focused code analyst...'</div>
            <div className="ml-8">],</div>
            <div className="ml-8">max_tokens: 2000,</div>
            <div className="ml-8">temperature: 0.3,        // Low creativity for accuracy</div>
            <div className="ml-4">{`}`});</div>
            <div className="ml-4"></div>
            <div className="ml-4">return response.choices[0].message.content;</div>
            <div>{`}`}</div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-green-400 mb-2">🎯 Responsibilities</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Individual file analysis</li>
                <li>• Security vulnerability detection</li>
                <li>• Hardcoded value identification</li>
                <li>• Code quality assessment</li>
                <li>• Context-aware analysis</li>
              </ul>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-blue-400 mb-2">⚙️ Configuration</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Model: ANALYSIS_MODEL</li>
                <li>• Max tokens: 2000</li>
                <li>• Temperature: 0.3 (focused)</li>
                <li>• Timeout: 30 seconds</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 mb-6">
          <h3 className="text-lg font-semibold text-purple-400 mb-4">Agent 2: Review Synthesizer</h3>

          <div className="bg-gray-900 rounded p-4 font-mono text-sm text-gray-100 overflow-x-auto mb-4">
            <div className="text-green-400 mb-2">// Review synthesis function</div>
            <div>async function synthesizeReviewFromAnalyses(modelName, prTitle, prBody, files, fileAnalyses, prAuthor, mentionedBy, userComment = null) {`{`}</div>
            <div className="ml-4">// Consolidate all file analyses</div>
            <div className="ml-4">const filesList = files.map(f =&gt; </div>
            <div className="ml-8">`- ${`{f.filename}`} (${`{f.status}`}, +${`{f.additions}`}/-${`{f.deletions}`})`</div>
            <div className="ml-4">).join('\n');</div>
            <div className="ml-4">const allAnalyses = fileAnalyses.join('\n\n---\n\n');</div>
            <div className="ml-4"></div>
            <div className="ml-4">// Create comprehensive synthesis prompt</div>
            <div className="ml-4">const synthesisPrompt = `</div>
            <div className="ml-8">You are an expert code reviewer. Based on detailed file analyses,</div>
            <div className="ml-8">create a comprehensive final review.</div>
            <div className="ml-8">...</div>
            <div className="ml-8">**Individual File Analyses:**</div>
            <div className="ml-8">${`{allAnalyses}`}</div>
            <div className="ml-8">...</div>
            <div className="ml-8">1. Highlight ALL critical issues from individual analyses</div>
            <div className="ml-8">2. Provide clear overall assessment</div>
            <div className="ml-8">3. Use 🔴 emoji for critical issues</div>
            <div className="ml-4">`;</div>
            <div className="ml-4"></div>
            <div className="ml-4">// Send to AI with synthesis parameters</div>
            <div className="ml-4">const response = await openai.chat.completions.create({`{`}</div>
            <div className="ml-8">model: modelName,        // COMMENT_MODEL</div>
            <div className="ml-8">messages: [</div>
            <div className="ml-12">role: 'system',</div>
            <div className="ml-12">content: 'You are a professional code reviewer...'</div>
            <div className="ml-8">],</div>
            <div className="ml-8">max_tokens: 3000,</div>
            <div className="ml-8">temperature: 0.4,        // Balanced creativity</div>
            <div className="ml-4">{`}`});</div>
            <div className="ml-4"></div>
            <div className="ml-4">return response.choices[0].message.content;</div>
            <div>{`}`}</div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-green-400 mb-2">🎯 Responsibilities</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Synthesize all file analyses</li>
                <li>• Create comprehensive review</li>
                <li>• Prioritize issues and findings</li>
                <li>• Generate professional comments</li>
                <li>• Make final recommendations</li>
              </ul>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-blue-400 mb-2">⚙️ Configuration</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Model: COMMENT_MODEL</li>
                <li>• Max tokens: 3000</li>
                <li>• Temperature: 0.4 (balanced)</li>
                <li>• Timeout: 45 seconds</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-semibold text-yellow-400 mb-4">Review Orchestrator</h3>

          <div className="bg-gray-900 rounded p-4 font-mono text-sm text-gray-100 overflow-x-auto mb-4">
            <div className="text-green-400 mb-2">// Main review coordination</div>
            <div>async function reviewCodeWithAI(modelName, prTitle, prBody, files, diff, prAuthor, mentionedBy = null, userComment = null) {`{`}</div>
            <div className="ml-4">console.log(`🚀 Starting multi-agent AI review process`);</div>
            <div className="ml-4">console.log(`   Analysis Model: ${`{ANALYSIS_MODEL}`}`);</div>
            <div className="ml-4">console.log(`   Synthesis Model: ${`{COMMENT_MODEL}`}`);</div>
            <div className="ml-4"></div>
            <div className="ml-4 text-blue-400">// Phase 1: Analyze each file individually</div>
            <div className="ml-4">console.log(`📊 Agent 1: Analyzing ${`{files.length}`} files individually...`);</div>
            <div className="ml-4">const fileAnalyses = [];</div>
            <div className="ml-4"></div>
            <div className="ml-4">for (let i = 0; i &lt; files.length; i++) {`{`}</div>
            <div className="ml-8">const file = files[i];</div>
            <div className="ml-8">console.log(`   [${`{i + 1}`}/${`{files.length}`}] Analyzing: ${`{file.filename}`}`);</div>
            <div className="ml-8"></div>
            <div className="ml-8">try {`{`}</div>
            <div className="ml-12">const analysis = await analyzeFileWithAI(ANALYSIS_MODEL, prTitle, prBody, file, userComment);</div>
            <div className="ml-12">fileAnalyses.push(analysis);</div>
            <div className="ml-12">console.log(`   ✅ Completed: ${`{file.filename}`}`);</div>
            <div className="ml-8">{`} catch (error) {`}</div>
            <div className="ml-12">console.error(`   ❌ Error analyzing ${`{file.filename}`}:`, error.message);</div>
            <div className="ml-12">fileAnalyses.push(`## 📄 **File: ${`{file.filename}`}:**\n\n⚠️ Analysis skipped due to error: ${`{error.message}`}`);</div>
            <div className="ml-8">{`}`}</div>
            <div className="ml-4">{`}`}</div>
            <div className="ml-4"></div>
            <div className="ml-4 text-green-400">// Phase 2: Synthesize comprehensive review</div>
            <div className="ml-4">console.log(`💬 Agent 2: Synthesizing comprehensive review...`);</div>
            <div className="ml-4">const finalReview = await synthesizeReviewFromAnalyses(</div>
            <div className="ml-8">COMMENT_MODEL,</div>
            <div className="ml-8">prTitle,</div>
            <div className="ml-8">prBody,</div>
            <div className="ml-8">files,</div>
            <div className="ml-8">fileAnalyses,</div>
            <div className="ml-8">prAuthor,</div>
            <div className="ml-8">mentionedBy,</div>
            <div className="ml-8">userComment</div>
            <div className="ml-4">);</div>
            <div className="ml-4">console.log(`✅ Agent 2 completed: Final review generated`);</div>
            <div className="ml-4"></div>
            <div className="ml-4">return finalReview;</div>
            <div>{`}`}</div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-blue-400 mb-2">📊 Phase 1: Analysis</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Process each file individually</li>
                <li>• Security and quality analysis</li>
                <li>• Error handling per file</li>
                <li>• Parallel processing ready</li>
              </ul>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-green-400 mb-2">💬 Phase 2: Synthesis</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Consolidate all analyses</li>
                <li>• Generate final review</li>
                <li>• Prioritize findings</li>
                <li>• Create action items</li>
              </ul>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-purple-400 mb-2">🔄 Error Recovery</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Individual file error isolation</li>
                <li>• Graceful degradation</li>
                <li>• Comprehensive logging</li>
                <li>• Fallback mechanisms</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">🔐 Authentication Architecture</h2>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 mb-6">
          <h3 className="text-lg font-semibold text-blue-400 mb-4">GitHub App Authentication (Recommended)</h3>

          <div className="bg-gray-900 rounded p-4 font-mono text-sm text-gray-100 overflow-x-auto mb-4">
            <div className="text-green-400 mb-2">// GitHub App Octokit initialization</div>
            <div>async function getOctokitForInstallation(installationId) {`{`}</div>
            <div className="ml-4">if (authMode === 'app') {`{`}</div>
            <div className="ml-8">// Decode base64 encoded private key</div>
            <div className="ml-8">let privateKey;</div>
            <div className="ml-8">if (GITHUB_PRIVATE_KEY) {`{`}</div>
            <div className="ml-12">privateKey = Buffer.from(GITHUB_PRIVATE_KEY, 'base64').toString('utf-8');</div>
            <div className="ml-8">{`}`}</div>
            <div className="ml-8"></div>
            <div className="ml-8">// Create authenticated Octokit instance</div>
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

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-green-400 mb-2">✅ Advantages</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Bot account with [bot] badge</li>
                <li>• Enhanced security</li>
                <li>• Granular permissions</li>
                <li>• Multiple organization support</li>
                <li>• Scalable for public use</li>
              </ul>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-blue-400 mb-2">⚙️ Configuration</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• App ID from GitHub</li>
                <li>• Base64 encoded private key</li>
                <li>• Webhook secret</li>
                <li>• Bot username format</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 mb-6">
          <h3 className="text-lg font-semibold text-green-400 mb-4">Personal Access Token Authentication</h3>

          <div className="bg-gray-900 rounded p-4 font-mono text-sm text-gray-100 overflow-x-auto mb-4">
            <div className="text-green-400 mb-2">// PAT Octokit initialization</div>
            <div>const defaultOctokit = new Octokit({`{`}</div>
            <div className="ml-4">auth: GITHUB_TOKEN</div>
            <div>{`}`});</div>
            <div></div>
            <div className="text-blue-400 mb-2">// Usage in webhook handler</div>
            <div>if (authMode === 'pat' && defaultOctokit) {`{`}</div>
            <div className="ml-4">octokit = defaultOctokit;</div>
            <div className="ml-4">// Comments appear from personal account</div>
            <div>{`}`}</div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-green-400 mb-2">✅ Advantages</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Quick setup</li>
                <li>• Simple configuration</li>
                <li>• Works with private repos</li>
                <li>• No app registration needed</li>
              </ul>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-red-400 mb-2">⚠️ Limitations</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Limited to token owner's repos</li>
                <li>• Personal account comments</li>
                <li>• Less secure</li>
                <li>• No public installation</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-semibold text-purple-400 mb-4">Test Mode Architecture</h3>

          <div className="bg-gray-900 rounded p-4 font-mono text-sm text-gray-100 overflow-x-auto mb-4">
            <div className="text-green-400 mb-2">// Mock Octokit for testing</div>
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
            <div className="ml-4">{`}`},</div>
            <div className="ml-4">pulls: {`{`}</div>
            <div className="ml-8">get: async ({`{ mediaType }`}) =&gt; {`{`}</div>
            <div className="ml-12">if (mediaType && mediaType.format === 'diff') {`{`}</div>
            <div className="ml-16">return {`{ data: 'Mock diff content for testing' }`};</div>
            <div className="ml-12">{`}`}</div>
            <div className="ml-8">{`}`},</div>
            <div className="ml-8">listFiles: async () =&gt; {`{`}</div>
            <div className="ml-12">return {`{ data: [/* mock file data */] }`};</div>
            <div className="ml-8">{`}`}</div>
            <div className="ml-4">{`}`}</div>
            <div>{`}`}</div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-green-400 mb-2">✅ Benefits</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Full AI functionality</li>
                <li>• No GitHub API calls</li>
                <li>• Perfect for development</li>
                <li>• Test review quality</li>
              </ul>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-blue-400 mb-2">🔧 Use Cases</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Development and testing</li>
                <li>• AI model evaluation</li>
                <li>• Bot behavior testing</li>
                <li>• Demo environments</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">📡 Webhook Architecture</h2>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 mb-6">
          <h3 className="text-lg font-semibold text-blue-400 mb-4">Webhook Processing Pipeline</h3>

          <div className="bg-gray-900 rounded p-4 font-mono text-sm text-gray-100 overflow-x-auto mb-4">
            <div className="text-green-400 mb-2">// Webhook entry point</div>
            <div>app.post('/webhook', async (req, res) =&gt; {`{`}</div>
            <div className="ml-4">// 1. Extract webhook metadata</div>
            <div className="ml-4">const event = req.headers['x-github-event'];</div>
            <div className="ml-4">const payload = req.body;</div>
            <div className="ml-4">const installationId = payload.installation?.id;</div>
            <div className="ml-4"></div>
            <div className="ml-4">// 2. Log webhook event</div>
            <div className="ml-4">const webhookLog = {`{`}</div>
            <div className="ml-8">id: logId,</div>
            <div className="ml-8">timestamp: new Date().toISOString(),</div>
            <div className="ml-8">event,</div>
            <div className="ml-8">installationId,</div>
            <div className="ml-8">repository: payload.repository?.full_name,</div>
            <div className="ml-8">status: 'processing'</div>
            <div className="ml-4">{`}`}</div>
            <div className="ml-4">await addWebhookLog(webhookLog);</div>
            <div className="ml-4"></div>
            <div className="ml-4">// 3. Route to appropriate handler</div>
            <div className="ml-4">if (event === 'issue_comment') {`{`}</div>
            <div className="ml-8">handleIssueCommentEvent(payload, installationId, logId);</div>
            <div className="ml-4">{`} else if (event === 'pull_request') {`}</div>
            <div className="ml-8">handlePullRequestEvent(payload, installationId, logId);</div>
            <div className="ml-4">{`}`}</div>
            <div>{`}`});</div>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-green-400 mb-2">🔄 Event Processing</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Extract webhook metadata and validate signature</li>
                <li>• Log event for monitoring and debugging</li>
                <li>• Route to appropriate event handler</li>
                <li>• Handle errors and update logs</li>
              </ul>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-blue-400 mb-2">🛡️ Security</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Webhook signature verification</li>
                <li>• Rate limiting and spam prevention</li>
                <li>• Input validation and sanitization</li>
                <li>• Error handling without information disclosure</li>
              </ul>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-purple-400 mb-2">📊 Monitoring</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Comprehensive logging to Redis</li>
                <li>• Performance metrics tracking</li>
                <li>• Error rate monitoring</li>
                <li>• Success rate analytics</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-semibold text-yellow-400 mb-4">Event Handling Flow</h3>

          <div className="space-y-4">
            <div className="bg-gray-900 rounded p-4">
              <h4 className="text-green-400 mb-2">Issue Comment Events</h4>
              <div className="font-mono text-sm text-gray-100">
                <div>1. Check if comment is on a PR</div>
                <div>2. Verify bot was mentioned</div>
                <div>3. Confirm not from bot itself</div>
                <div>4. Get PR details and files</div>
                <div>5. Trigger review process</div>
                <div>6. Post review comment</div>
              </div>
            </div>

            <div className="bg-gray-900 rounded p-4">
              <h4 className="text-blue-400 mb-2">Pull Request Events</h4>
              <div className="font-mono text-sm text-gray-100">
                <div>1. Auto-review on PR opened/updated</div>
                <div>2. Fetch PR details and changes</div>
                <div>3. Analyze all modified files</div>
                <div>4. Generate comprehensive review</div>
                <div>5. Post automated review</div>
              </div>
            </div>

            <div className="bg-gray-900 rounded p-4">
              <h4 className="text-purple-400 mb-2">Error Recovery</h4>
              <div className="font-mono text-sm text-gray-100">
                <div>1. Log error details</div>
                <div>2. Update webhook status</div>
                <div>3. Graceful degradation</div>
                <div>4. Retry mechanisms</div>
                <div>5. User notification</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">💾 Data Architecture</h2>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 mb-6">
          <h3 className="text-lg font-semibold text-blue-400 mb-4">Redis Storage Structure</h3>

          <div className="bg-gray-900 rounded p-4 font-mono text-sm text-gray-100 overflow-x-auto mb-4">
            <div className="text-green-400 mb-2">// Review data structure</div>
            <div>review:{`{reviewId}`}: {`{`}</div>
            <div className="ml-4">"id": "review_1234567890_abc123",</div>
            <div className="ml-4">"timestamp": "2024-10-24T10:30:00.000Z",</div>
            <div className="ml-4">"repository": "owner/repo",</div>
            <div className="ml-4">"pullRequest": 123,</div>
            <div className="ml-4">"user": "developer",</div>
            <div className="ml-4">"model": "gpt-4-turbo-preview",</div>
            <div className="ml-4">"reviewContent": "...",</div>
            <div className="ml-4">"processingTime": 1500,</div>
            <div className="ml-4">"status": "completed"</div>
            <div>{`}`}</div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-green-400 mb-2">📊 Analytics Keys</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• <code>analytics:global</code> - Global statistics</li>
                <li>• <code>user:{'{userId}'}:stats</code> - User-specific stats</li>
                <li>• <code>reviews:all</code> - List of all reviews</li>
                <li>• <code>webhook:recent</code> - Recent webhook events</li>
              </ul>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-blue-400 mb-2">🔒 Security</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• TTL on all keys (30 days)</li>
                <li>• No persistent sensitive data</li>
                <li>• Encrypted connections</li>
                <li>• Access logging</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-semibold text-purple-400 mb-4">Performance Considerations</h3>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-blue-400 mb-2">⚡ Caching Strategy</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Redis for analytics caching</li>
                <li>• In-memory fallback</li>
                <li>• Connection pooling</li>
                <li>• Graceful degradation</li>
              </ul>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-green-400 mb-2">🔄 Concurrency</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Redis-based locking</li>
                <li>• Duplicate prevention</li>
                <li>• Async processing</li>
                <li>• Rate limiting</li>
              </ul>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-yellow-400 mb-2">📈 Monitoring</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Response time tracking</li>
                <li>• Error rate monitoring</li>
                <li>• Resource usage</li>
                <li>• Health checks</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white">
        <h3 className="text-xl font-bold mb-4">🏗️ Architecture Best Practices</h3>
        <div className="space-y-3">
          <div><strong>1. Separation of Concerns:</strong> Clear separation between analysis, synthesis, and presentation layers</div>
          <div><strong>2. Error Isolation:</strong> Individual file errors don't break the entire review process</div>
          <div><strong>3. Scalability:</strong> Stateless design supports horizontal scaling</div>
          <div><strong>4. Security:</strong> Multiple authentication modes with appropriate security levels</div>
          <div><strong>5. Monitoring:</strong> Comprehensive logging and analytics for production operations</div>
          <div><strong>6. Testing:</strong> Mock architecture enables full testing without external dependencies</div>
        </div>
      </div>
    </div>
  );
};

export default Architecture;
