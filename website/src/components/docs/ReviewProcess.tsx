import React from 'react';

const ReviewProcess: React.FC = () => {
  return (
    <div className="prose prose-lg max-w-none prose-invert">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">🤖 Review Process</h1>
        <p className="text-xl text-gray-300 leading-relaxed">
          Detailed documentation of the multi-agent review system, workflow stages, AI analysis process,
          and how the bot generates comprehensive code reviews.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">🔄 Complete Review Workflow</h2>

        <div className="space-y-6">
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">1</div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-blue-400 mb-3">🎯 Trigger Detection</h3>
                <p className="text-gray-300 mb-4">
                  The review process begins when a user mentions the bot in a GitHub PR comment or when a PR is automatically created/updated.
                </p>

                <div className="bg-gray-900 rounded p-4 font-mono text-sm text-gray-100 overflow-x-auto mb-4">
                  <div className="text-green-400 mb-2">// Bot mention detection</div>
                  <div>const isBotMentioned = (text, botName) =&gt; {`{`}</div>
                  <div className="ml-4">const patterns = [</div>
                  <div className="ml-8">// @Xibe-review, @xibe-review</div>
                  <div className="ml-8">new RegExp(`@${`{botName}`}`, 'i'),</div>
                  <div className="ml-8">// @Xibe, @xibe</div>
                  <div className="ml-8">new RegExp(`@${`{baseName}`}`, 'i'),</div>
                  <div className="ml-8">// Xibe review, xibe review</div>
                  <div className="ml-8">new RegExp(`${`{baseName}`}\\s+${`{reviewWord}`}\\b`, 'i'),</div>
                  <div className="ml-4">];</div>
                  <div className="ml-4">return patterns.some(pattern =&gt; pattern.test(text));</div>
                  <div>{`}`}</div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-700 rounded-lg p-4">
                    <h4 className="font-semibold text-green-400 mb-2">Manual Triggers</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• PR comment mentions</li>
                      <li>• Specific questions or requests</li>
                      <li>• Custom review focus areas</li>
                    </ul>
                  </div>
                  <div className="bg-gray-700 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-400 mb-2">Auto Triggers</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• PR opened events</li>
                      <li>• PR synchronize events</li>
                      <li>• PR reopened events</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex items-start space-x-4">
              <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">2</div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-green-400 mb-3">📥 Data Collection</h3>
                <p className="text-gray-300 mb-4">
                  The bot collects comprehensive PR context including files, diffs, descriptions, and user information.
                </p>

                <div className="bg-gray-900 rounded p-4 font-mono text-sm text-gray-100 overflow-x-auto mb-4">
                  <div className="text-blue-400 mb-2">// Fetch PR details</div>
                  <div>const prResponse = await octokit.pulls.get({`{`}</div>
                  <div className="ml-4">owner,</div>
                  <div className="ml-4">repo,</div>
                  <div className="ml-4">pull_number: pullNumber,</div>
                  <div>{`}`});</div>
                  <div>const pr = prResponse.data;</div>
                  <div></div>
                  <div className="text-green-400 mb-2">// Fetch file changes</div>
                  <div>const {`{ data: files }`} = await octokit.pulls.listFiles({`{`}</div>
                  <div className="ml-4">owner,</div>
                  <div className="ml-4">repo,</div>
                  <div className="ml-4">pull_number: pullNumber,</div>
                  <div>{`}`});</div>
                  <div></div>
                  <div className="text-purple-400 mb-2">// Fetch diff content</div>
                  <div>const {`{ data: pr }`} = await octokit.pulls.get({`{`}</div>
                  <div className="ml-4">owner,</div>
                  <div className="ml-4">repo,</div>
                  <div className="ml-4">pull_number: pullNumber,</div>
                  <div className="ml-4">mediaType: {`{`}</div>
                  <div className="ml-8">format: 'diff',</div>
                  <div className="ml-4">{`}`},</div>
                  <div>{`}`});</div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gray-700 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-400 mb-2">📋 PR Metadata</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Title and description</li>
                      <li>• Author information</li>
                      <li>• Labels and assignees</li>
                      <li>• Creation and update times</li>
                    </ul>
                  </div>
                  <div className="bg-gray-700 rounded-lg p-4">
                    <h4 className="font-semibold text-green-400 mb-2">📄 File Analysis</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Modified files list</li>
                      <li>• Additions and deletions</li>
                      <li>• File patches and diffs</li>
                      <li>• File types and languages</li>
                    </ul>
                  </div>
                  <div className="bg-gray-700 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-400 mb-2">🔗 Context</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Repository information</li>
                      <li>• Branch details</li>
                      <li>• Commit history</li>
                      <li>• User permissions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex items-start space-x-4">
              <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">3</div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-purple-400 mb-3">🤖 Agent 1: File Analysis</h3>
                <p className="text-gray-300 mb-4">
                  Each file is analyzed individually by the specialized file analyzer agent with focus on security and quality.
                </p>

                <div className="bg-gray-900 rounded p-4 font-mono text-sm text-gray-100 overflow-x-auto mb-4">
                  <div className="text-blue-400 mb-2">// Security-focused file analysis</div>
                  <div>async function analyzeFileWithAI(modelName, prTitle, prBody, file, userComment = null) {`{`}</div>
                  <div className="ml-4">const maxInputChars = 8000;</div>
                  <div className="ml-4">const filePatch = (file.patch || '').substring(0, maxInputChars);</div>
                  <div className="ml-4"></div>
                  <div className="ml-4 text-green-400">// Create detailed analysis prompt</div>
                  <div className="ml-4">let analysisPrompt = `</div>
                  <div className="ml-8">You are an expert code analyst specializing in security and code quality.</div>
                  <div className="ml-8">Analyze this specific file change from a pull request.</div>
                  <div className="ml-8"></div>
                  <div className="ml-8">**PR Context:**</div>
                  <div className="ml-8">- Title: ${`{prTitle}`}</div>
                  <div className="ml-8">- Description: ${`{prBody || 'No description provided'}`}</div>
                  <div className="ml-8"></div>
                  <div className="ml-8">**File Being Analyzed:**</div>
                  <div className="ml-8">- Filename: ${`{file.filename}`}</div>
                  <div className="ml-8">- Status: ${`{file.status}`}</div>
                  <div className="ml-8">- Changes: +${`{file.additions}`} additions, -${`{file.deletions}`} deletions</div>
                  <div className="ml-8"></div>
                  <div className="ml-8">**Code Changes:**</div>
                  <div className="ml-8">\`\`\`diff</div>
                  <div className="ml-8">${`{filePatch}`}</div>
                  <div className="ml-8">\`\`\`</div>
                  <div className="ml-4">`;</div>
                  <div className="ml-4"></div>
                  <div className="ml-4">if (userComment) {`{`}</div>
                  <div className="ml-8">analysisPrompt += `\n\n**User's Request/Question:**\n"${`{userComment}`}"\n\n**IMPORTANT:** Address the user's specific request or question in your analysis.`;</div>
                  <div className="ml-4">{`}`}</div>
                  <div className="ml-4"></div>
                  <div className="ml-4">analysisPrompt += `</div>
                  <div className="ml-8">**CRITICAL FOCUS AREAS:**</div>
                  <div className="ml-8">1. 🔴 **HARDCODED VALUES** - Identify any hardcoded credentials, API keys, secrets...</div>
                  <div className="ml-8">2. 🔴 **SECURITY VULNERABILITIES** - SQL injection, XSS, authentication issues...</div>
                  <div className="ml-8">3. 🔴 **CODE SMELLS** - Poor practices, anti-patterns, potential bugs</div>
                  <div className="ml-4">`;</div>
                  <div className="ml-4"></div>
                  <div className="ml-4">// AI Analysis Request</div>
                  <div className="ml-4">const response = await openai.chat.completions.create({`{`}</div>
                  <div className="ml-8">model: modelName,</div>
                  <div className="ml-8">messages: [</div>
                  <div className="ml-12">role: 'system',</div>
                  <div className="ml-12">content: 'You are a security-focused code analyst. Identify hardcoded values, security vulnerabilities, and code quality issues. Be specific and actionable. Use 🔴 emoji for critical issues.',</div>
                  <div className="ml-8">],</div>
                  <div className="ml-8">max_tokens: 2000,</div>
                  <div className="ml-8">temperature: 0.3,</div>
                  <div className="ml-4">{`}`});</div>
                  <div className="ml-4"></div>
                  <div className="ml-4">return response.choices[0].message.content;</div>
                  <div>{`}`}</div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-700 rounded-lg p-4">
                    <h4 className="font-semibold text-red-400 mb-2">🔍 Security Focus</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Hardcoded credentials detection</li>
                      <li>• API key and secret identification</li>
                      <li>• SQL injection vulnerability scanning</li>
                      <li>• XSS and CSRF detection</li>
                      <li>• Authentication bypass analysis</li>
                    </ul>
                  </div>
                  <div className="bg-gray-700 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-400 mb-2">📊 Quality Analysis</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Code smell identification</li>
                      <li>• Best practice violations</li>
                      <li>• Performance optimization</li>
                      <li>• Maintainability assessment</li>
                      <li>• Error handling review</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex items-start space-x-4">
              <div className="bg-yellow-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">4</div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-yellow-400 mb-3">💬 Agent 2: Review Synthesis</h3>
                <p className="text-gray-300 mb-4">
                  All individual file analyses are consolidated into a comprehensive, professional review by the synthesis agent.
                </p>

                <div className="bg-gray-900 rounded p-4 font-mono text-sm text-gray-100 overflow-x-auto mb-4">
                  <div className="text-green-400 mb-2">// Synthesize all analyses into final review</div>
                  <div>async function synthesizeReviewFromAnalyses(modelName, prTitle, prBody, files, fileAnalyses, prAuthor, mentionedBy, userComment = null) {`{`}</div>
                  <div className="ml-4">// Prepare comprehensive context</div>
                  <div className="ml-4">const filesList = files.map(f =&gt; </div>
                  <div className="ml-8">`- ${`{f.filename}`} (${`{f.status}`}, +${`{f.additions}`}/-${`{f.deletions}`})`</div>
                  <div className="ml-4">).join('\n');</div>
                  <div className="ml-4">const allAnalyses = fileAnalyses.join('\n\n---\n\n');</div>
                  <div className="ml-4"></div>
                  <div className="ml-4">let synthesisPrompt = `</div>
                  <div className="ml-8">You are an expert code reviewer. Based on detailed file-by-file analyses,</div>
                  <div className="ml-8">create a comprehensive final review.</div>
                  <div className="ml-8"></div>
                  <div className="ml-8">**PR Context:**</div>
                  <div className="ml-8">- Title: ${`{prTitle}`}</div>
                  <div className="ml-8">- Description: ${`{prBody || 'No description provided'}`}</div>
                  <div className="ml-8">- Author: @${`{prAuthor}`}</div>
                  <div className="ml-8">- Files Changed (${`{files.length}`} files):</div>
                  <div className="ml-8">${`{filesList}`}</div>
                  <div className="ml-8"></div>
                  <div className="ml-8">**Individual File Analyses:**</div>
                  <div className="ml-8">${`{allAnalyses}`}</div>
                  <div className="ml-4">`;</div>
                  <div className="ml-4"></div>
                  <div className="ml-4">if (userComment) {`{`}</div>
                  <div className="ml-8">synthesisPrompt += `\n\n**User's Request/Question:**\n"${`{userComment}`}"\n\n**IMPORTANT:** Address the user's specific request in your final review.`;</div>
                  <div className="ml-4">{`}`}</div>
                  <div className="ml-4"></div>
                  <div className="ml-4">synthesisPrompt += `</div>
                  <div className="ml-8">**YOUR TASK:**</div>
                  <div className="ml-8">Create a comprehensive, professional code review that:</div>
                  <div className="ml-8">1. Highlight ALL critical issues (hardcoded values, security vulnerabilities) from individual analyses</div>
                  <div className="ml-8">2. Provides a clear overall assessment</div>
                  <div className="ml-8">3. Tags relevant users appropriately</div>
                  <div className="ml-8">4. Uses 🔴 emoji to highlight critical issues for visibility</div>
                  <div className="ml-8">5. Gives actionable recommendations</div>
                  <div className="ml-4">`;</div>
                  <div className="ml-4"></div>
                  <div className="ml-4">// AI Synthesis Request</div>
                  <div className="ml-4">const response = await openai.chat.completions.create({`{`}</div>
                  <div className="ml-8">model: modelName,</div>
                  <div className="ml-8">messages: [</div>
                  <div className="ml-12">role: 'system',</div>
                  <div className="ml-12">content: `You are a professional code reviewer. Synthesize file analyses into a clear, actionable review. Highlight critical issues with 🔴 emoji. Tag users appropriately. Be constructive and specific.`,</div>
                  <div className="ml-8">],</div>
                  <div className="ml-8">max_tokens: 3000,</div>
                  <div className="ml-8">temperature: 0.4,</div>
                  <div className="ml-4">{`}`});</div>
                  <div className="ml-4"></div>
                  <div className="ml-4">return response.choices[0].message.content;</div>
                  <div>{`}`}</div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-700 rounded-lg p-4">
                    <h4 className="font-semibold text-green-400 mb-2">🎯 Synthesis Goals</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Consolidate all findings</li>
                      <li>• Prioritize critical issues</li>
                      <li>• Create actionable recommendations</li>
                      <li>• Generate professional format</li>
                      <li>• Address user questions</li>
                    </ul>
                  </div>
                  <div className="bg-gray-700 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-400 mb-2">📋 Output Structure</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Clear recommendation (APPROVE/CHANGES)</li>
                      <li>• Summary of changes</li>
                      <li>• Critical issues (🔴)</li>
                      <li>• Security & best practices</li>
                      <li>• Action items with checkboxes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex items-start space-x-4">
              <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">5</div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-red-400 mb-3">📤 Review Publication</h3>
                <p className="text-gray-300 mb-4">
                  The final review is posted as a GitHub comment with proper formatting, user tagging, and analytics tracking.
                </p>

                <div className="bg-gray-900 rounded p-4 font-mono text-sm text-gray-100 overflow-x-auto mb-4">
                  <div className="text-blue-400 mb-2">// Post review comment</div>
                  <div>async function postReviewComment(octokit, owner, repo, pullNumber, comment) {`{`}</div>
                  <div className="ml-4">try {`{`}</div>
                  <div className="ml-8">await octokit.issues.createComment({`{`}</div>
                  <div className="ml-12">owner,</div>
                  <div className="ml-12">repo,</div>
                  <div className="ml-12">issue_number: pullNumber,</div>
                  <div className="ml-12">body: comment,</div>
                  <div className="ml-8">{`}`});</div>
                  <div className="ml-8">console.log(`✅ Posted review comment to PR #${`{pullNumber}`}`);</div>
                  <div className="ml-8">return true;</div>
                  <div className="ml-4">{`} catch (error) {`}</div>
                  <div className="ml-8">console.error('❌ Error posting comment:', error.message);</div>
                  <div className="ml-8">return false;</div>
                  <div className="ml-4">{`}`}</div>
                  <div>{`}`}</div>
                </div>

                <div className="bg-gray-900 rounded p-4 font-mono text-sm text-gray-100 overflow-x-auto mb-4">
                  <div className="text-green-400 mb-2">// Review comment with metadata</div>
                  <div>const reviewComment = `${`{review}`}</div>
                  <div></div>
                  <div>---</div>
                  <div></div>
                  <div>&lt;div align="center"&gt;</div>
                  <div></div>
                  <div>**🤖 Powered by [Xibe AI](https://xibe.app)**${`{isAutoReview ? ' • Auto-generated' : ''}`}</div>
                  <div>**📊 Analysis:** ${`{totalCharsAnalyzed}`} characters analyzed across ${`{files.length}`} file${`{files.length !== 1 ? 's' : ''}`}</div>
                  <div>[💙 Support Development](https://razorpay.me/@megavault) • [📚 Documentation](https://xibe.app)</div>
                  <div></div>
                  <div>&lt;/div&gt;`;</div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gray-700 rounded-lg p-4">
                    <h4 className="font-semibold text-green-400 mb-2">💬 Comment Features</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Professional formatting</li>
                      <li>• User tagging (@username)</li>
                      <li>• Clear action items</li>
                      <li>• Attribution footer</li>
                    </ul>
                  </div>
                  <div className="bg-gray-700 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-400 mb-2">📊 Analytics</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Processing time tracking</li>
                      <li>• Success/failure logging</li>
                      <li>• User statistics</li>
                      <li>• Performance metrics</li>
                    </ul>
                  </div>
                  <div className="bg-gray-700 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-400 mb-2">🔒 Safety</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Mention limiting (max 2 per user)</li>
                      <li>• Content sanitization</li>
                      <li>• Error recovery</li>
                      <li>• Rate limiting</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">🔧 AI Model Configuration</h2>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 mb-6">
          <h3 className="text-lg font-semibold text-blue-400 mb-4">Model Selection Strategy</h3>

          <div className="bg-gray-900 rounded p-4 font-mono text-sm text-gray-100 overflow-x-auto mb-4">
            <div className="text-green-400 mb-2">// Dynamic model selection</div>
            <div>function selectModelForPR(pr, files, diff) {`{`}</div>
            <div className="ml-4">// Use configured MODEL_ID or fallback to ANALYSIS_MODEL</div>
            <div className="ml-4">return MODEL_ID || ANALYSIS_MODEL || 'your_default_model';</div>
            <div>{`}`}</div>
            <div></div>
            <div className="text-blue-400 mb-2">// Environment configuration</div>
            <div>MODEL_ID=gpt-4-turbo-preview          # Primary model</div>
            <div>ANALYSIS_MODEL=gpt-4-turbo-preview    # File analysis model</div>
            <div>COMMENT_MODEL=gpt-4-turbo-preview     # Synthesis model</div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-green-400 mb-3">Analysis Model (Agent 1)</h4>
              <ul className="text-gray-300 text-sm space-y-2">
                <li><strong>Purpose:</strong> Individual file analysis</li>
                <li><strong>Temperature:</strong> 0.3 (focused, consistent)</li>
                <li><strong>Max Tokens:</strong> 2000</li>
                <li><strong>Focus:</strong> Security vulnerabilities, hardcoded values</li>
                <li><strong>Style:</strong> Detailed, specific findings</li>
              </ul>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-purple-400 mb-3">Comment Model (Agent 2)</h4>
              <ul className="text-gray-300 text-sm space-y-2">
                <li><strong>Purpose:</strong> Review synthesis and consolidation</li>
                <li><strong>Temperature:</strong> 0.4 (balanced creativity)</li>
                <li><strong>Max Tokens:</strong> 3000</li>
                <li><strong>Focus:</strong> Professional communication, prioritization</li>
                <li><strong>Style:</strong> Comprehensive, actionable reviews</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 mb-6">
          <h3 className="text-lg font-semibold text-green-400 mb-4">Prompt Engineering</h3>

          <div className="space-y-4">
            <div className="bg-gray-900 rounded p-4">
              <h4 className="text-blue-400 mb-2">Security-Focused Prompts</h4>
              <div className="font-mono text-sm text-gray-100">
                You are an expert code analyst specializing in security and code quality.
                Analyze this specific file change from a pull request.

                **CRITICAL FOCUS AREAS:**
                1. 🔴 **HARDCODED VALUES** - Identify hardcoded credentials, API keys, secrets...
                2. 🔴 **SECURITY VULNERABILITIES** - SQL injection, XSS, authentication issues...
                3. 🔴 **CODE SMELLS** - Poor practices, anti-patterns, potential bugs

                Be specific with line numbers and code examples.
                Focus on ACTIONABLE findings.
                Use 🔴 emoji for critical issues.
              </div>
            </div>

            <div className="bg-gray-900 rounded p-4">
              <h4 className="text-purple-400 mb-2">Review Synthesis Prompts</h4>
              <div className="font-mono text-sm text-gray-100">
                You are an expert code reviewer. Based on detailed file-by-file analyses,
                create a comprehensive final review.

                **YOUR TASK:**
                1. Highlight ALL critical issues from individual analyses
                2. Provide clear overall assessment
                3. Tag relevant users appropriately
                4. Use 🔴 emoji to highlight critical issues
                5. Give actionable recommendations

                Be professional and constructive.
                Use specific examples and line numbers.
              </div>
            </div>

            <div className="bg-gray-900 rounded p-4">
              <h4 className="text-yellow-400 mb-2">Context Integration</h4>
              <div className="font-mono text-sm text-gray-100">
                **PR Context:**
                - Title: {'{'}prTitle{'}'}
                - Description: {'{'}prDescription{'}'}
                - Author: @{'{'}prAuthor{'}'}
                - Files Changed ({'{'}files.length{'}'} files)

                **User's Request/Question:**
                "{'{'}userComment{'}'}"

                **IMPORTANT:** Address the user's specific request in your analysis.
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-semibold text-yellow-400 mb-4">Response Processing</h3>

          <div className="bg-gray-900 rounded p-4 font-mono text-sm text-gray-100 overflow-x-auto mb-4">
            <div className="text-green-400 mb-2">// AI response validation and formatting</div>
            <div>function ensureProperStructure(content) {`{`}</div>
            <div className="ml-4">// Check if content has proper structure</div>
            <div className="ml-4">if (content.includes('## ✅ **Recommendation**') &&</div>
            <div className="ml-8">content.includes('## 📋 **Summary**') &&</div>
            <div className="ml-8">content.includes('## 🔍 **Code Analysis**')) {`{`}</div>
            <div className="ml-8">return content;</div>
            <div className="ml-4">{`}`}</div>
            <div className="ml-4"></div>
            <div className="ml-4">// If not, wrap in proper structure</div>
            <div className="ml-4">return `## ✅ **Recommendation**</div>
            <div className="ml-8">**[COMMENT]** - [Reasoning for the recommendation]</div>
            <div className="ml-8"></div>
            <div className="ml-8">## 📋 **Summary**</div>
            <div className="ml-8">**What this PR does:** [Analysis of the changes]</div>
            <div className="ml-8"></div>
            <div className="ml-8">## 🔍 **Code Analysis**</div>
            <div className="ml-8">...</div>
            <div className="ml-8">${`{content}`}`;</div>
            <div>{`}`}</div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-green-400 mb-2">✅ Structure Validation</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Verify required sections present</li>
                <li>• Ensure proper markdown formatting</li>
                <li>• Add missing sections if needed</li>
                <li>• Standardize emoji usage</li>
              </ul>
            </div>
            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-blue-400 mb-2">🛡️ Safety Measures</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Content sanitization</li>
                <li>• Mention limiting (max 2 per user)</li>
                <li>• Length validation</li>
                <li>• Error message filtering</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">📊 Performance & Monitoring</h2>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 mb-6">
          <h3 className="text-lg font-semibold text-blue-400 mb-4">Processing Metrics</h3>

          <div className="bg-gray-900 rounded p-4 font-mono text-sm text-gray-100 overflow-x-auto mb-4">
            <div className="text-green-400 mb-2">// Performance tracking</div>
            <div>const startTime = Date.now();</div>
            <div></div>
            <div className="text-blue-400 mb-2">// File analysis timing</div>
            <div>for (let i = 0; i &lt; files.length; i++) {`{`}</div>
            <div className="ml-4">const fileStartTime = Date.now();</div>
            <div className="ml-4">const analysis = await analyzeFileWithAI(ANALYSIS_MODEL, prTitle, prBody, file, userComment);</div>
            <div className="ml-4">const fileProcessingTime = Date.now() - fileStartTime;</div>
            <div className="ml-4">console.log(`   [${`{i + 1}`}/${`{files.length}`}] ${`{file.filename}`}: ${`{fileProcessingTime}`}ms`);</div>
            <div>{`}`}</div>
            <div></div>
            <div className="text-purple-400 mb-2">// Total processing time</div>
            <div>const totalProcessingTime = Date.now() - startTime;</div>
            <div>console.log(`✅ Review completed in ${`{totalProcessingTime}`}ms`);</div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-green-400 mb-2">⏱️ Response Times</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• File analysis: 10-30 seconds</li>
                <li>• Review synthesis: 15-45 seconds</li>
                <li>• Total review: 30-90 seconds</li>
                <li>• Depends on PR size and complexity</li>
              </ul>
            </div>
            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-blue-400 mb-2">📈 Success Metrics</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• 95%+ review success rate</li>
                <li>• &lt;1% critical errors</li>
                <li>• 99% uptime</li>
                <li>• Sub-second API response</li>
              </ul>
            </div>
            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-purple-400 mb-2">🔍 Monitoring</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Real-time performance tracking</li>
                <li>• Error rate monitoring</li>
                <li>• User analytics</li>
                <li>• Webhook delivery tracking</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-semibold text-green-400 mb-4">Quality Assurance</h3>

          <div className="space-y-4">
            <div className="bg-gray-900 rounded p-4">
              <h4 className="text-blue-400 mb-2">Review Consistency</h4>
              <div className="text-gray-300 text-sm">
                Each review follows a standardized structure ensuring consistency across all PR reviews:
              </div>
              <ul className="text-gray-300 text-sm mt-2 space-y-1">
                <li>• Clear recommendation (APPROVE/REQUEST_CHANGES/COMMENT)</li>
                <li>• Summary of changes and impact</li>
                <li>• Critical issues highlighted with 🔴</li>
                <li>• Security and best practice recommendations</li>
                <li>• Actionable items with checkboxes</li>
                <li>• Professional attribution and branding</li>
              </ul>
            </div>

            <div className="bg-gray-900 rounded p-4">
              <h4 className="text-purple-400 mb-2">Error Recovery</h4>
              <div className="text-gray-300 text-sm">
                Comprehensive error handling ensures reliable operation:
              </div>
              <ul className="text-gray-300 text-sm mt-2 space-y-1">
                <li>• Individual file errors don't break entire review</li>
                <li>• Graceful degradation with fallback content</li>
                <li>• Comprehensive logging for debugging</li>
                <li>• User notification of issues</li>
                <li>• Automatic retry mechanisms</li>
              </ul>
            </div>

            <div className="bg-gray-900 rounded p-4">
              <h4 className="text-yellow-400 mb-2">Context Awareness</h4>
              <div className="text-gray-300 text-sm">
                The AI understands context and provides relevant feedback:
              </div>
              <ul className="text-gray-300 text-sm mt-2 space-y-1">
                <li>• Programming language specifics</li>
                <li>• Framework and library patterns</li>
                <li>• Project structure and conventions</li>
                <li>• User-specific questions and requests</li>
                <li>• Security implications and best practices</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white">
        <h3 className="text-xl font-bold mb-4">🚀 Review Process Best Practices</h3>
        <div className="space-y-3">
          <div><strong>1. Structured Analysis:</strong> Two-stage process ensures thorough coverage and professional output</div>
          <div><strong>2. Security First:</strong> Prioritize security vulnerabilities and hardcoded credentials</div>
          <div><strong>3. Context Integration:</strong> Include PR context, user questions, and repository information</div>
          <div><strong>4. Error Isolation:</strong> Individual file failures don't impact the overall review quality</div>
          <div><strong>5. Performance Monitoring:</strong> Track response times and success rates for optimization</div>
          <div><strong>6. Consistent Output:</strong> Standardized review format ensures professional presentation</div>
        </div>
      </div>
    </div>
  );
};

export default ReviewProcess;
