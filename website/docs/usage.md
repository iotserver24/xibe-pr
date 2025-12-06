# 📖 Usage Guide

This comprehensive guide covers how to use xibe-pr1 effectively, including triggering reviews, understanding bot responses, optimizing PRs for AI analysis, and best practices for getting the most out of the bot.

## 🚀 Quick Start

### **Basic Usage**
1. **Create or find a pull request** in a repository where the bot is installed
2. **Comment on the PR**: `@xibe-review please review this PR`
3. **Wait for analysis**: The bot will analyze your code (10-60 seconds)
4. **Review the feedback**: Read the comprehensive AI-generated review
5. **Take action**: Address any issues identified by the bot

### **Example Workflow**
```bash
# 1. Create a PR with your changes
git checkout -b feature/new-auth-system
# ... make your changes ...
git commit -m "Add JWT authentication system"
git push origin feature/new-auth-system
# Create PR via GitHub interface

# 2. Request review from the bot
@Xibe-review please review this PR

# 3. Bot responds with comprehensive analysis
# 🤖 AI Code Review
# ✅ **Recommendation**: REQUEST_CHANGES - Security issues found
# 🔴 **CRITICAL ISSUES**: Hardcoded API key detected
# 📝 **Action Items**: Move API_KEY to environment variables
```

## 🎯 Triggering Reviews

### **Manual Review Requests**

#### **Basic Review Request**
```bash
# Simple review request
@Xibe-review please review this PR
```

#### **Specific Questions**
```bash
# Ask specific questions
@Xibe-review please review this PR
Is this authentication approach secure?
Should I use environment variables for the API key?
```

#### **Multiple Formats**
The bot recognizes various mention formats:
```bash
# All of these work:
@Xibe-review please review this PR
@Xibe-review check security
@Xibe-review analyze performance impact
Xibe review this code
Xibe-review please check
```

### **Automatic Reviews**

The bot can also review PRs automatically when certain events occur:

#### **Auto-Review Triggers**
- ✅ **PR Opened**: Reviews new PRs automatically
- ✅ **PR Updated**: Reviews when new commits are pushed
- ✅ **PR Reopened**: Reviews when PRs are reopened

#### **Configure Auto-Review**
Auto-review is enabled by default but can be configured:

```javascript
// In bot configuration
const autoReviewEnabled = true;
const autoReviewEvents = ['opened', 'synchronize', 'reopened'];
```

## 🤖 Understanding Bot Responses

### **Review Structure**

Each review follows a consistent, professional format:

```markdown
## 🤖 AI Code Review

**@username** - Thank you for your contribution!

### ✅ **Recommendation**
APPROVE - Well-structured implementation with proper security measures

### 📋 **Summary**
**What this PR does:** Implements user authentication system
**Impact:** Adds security layer to the application
**Files analyzed:** 3 files

### 🔴 **CRITICAL ISSUES** (if any)
- List of critical problems that must be addressed

### ⚠️ **Security & Best Practices**
- Security vulnerabilities and recommendations
- Best practice violations and improvements

### 💡 **Suggestions for Improvement**
- Code quality improvements
- Performance optimizations
- Maintainability enhancements

### ✅ **What's Good**
- Positive aspects of the implementation

### 📝 **Action Items**
- [ ] Specific tasks for developers

---

🤖 Powered by Xibe AI • 📊 Analysis: 1250 characters across 3 files
```

### **Understanding Recommendations**

#### **📗 APPROVE**
- **Meaning**: PR is ready to merge
- **Criteria**: No critical issues, good code quality, follows best practices
- **Action**: PR can be merged after any optional improvements

#### **📝 COMMENT**
- **Meaning**: Needs more information or minor clarifications
- **Criteria**: Generally good but needs clarification on approach or implementation
- **Action**: Discuss with team, provide additional context, or make minor adjustments

#### **📋 REQUEST_CHANGES**
- **Meaning**: PR has issues that must be addressed before merging
- **Criteria**: Critical security issues, major bugs, or significant code quality problems
- **Action**: Fix identified issues, request re-review if needed

### **Priority Levels**

#### **🔴 CRITICAL ISSUES** (Highest Priority)
- **Security vulnerabilities** (SQL injection, XSS, hardcoded credentials)
- **Breaking bugs** that prevent functionality
- **Major architectural problems**
- **Compliance violations**

#### **⚠️ SECURITY & BEST PRACTICES** (High Priority)
- **Potential security risks** that should be addressed
- **Best practice violations** that impact maintainability
- **Performance concerns** that affect user experience
- **Code quality issues** that make maintenance difficult

#### **💡 SUGGESTIONS** (Medium Priority)
- **Code improvements** for better readability
- **Performance optimizations** for efficiency
- **Alternative approaches** worth considering
- **Documentation improvements**

#### **✅ WHAT'S GOOD** (Informational)
- **Well-implemented patterns** worth noting
- **Good architectural decisions**
- **Clean code examples** to follow
- **Proper use of frameworks and libraries**

## 🎛️ Advanced Usage

### **Contextual Reviews**

#### **Provide Context in PR Description**
```markdown
<!-- Good PR description -->
## Description
Implement JWT-based authentication system with secure token handling

## Changes Made
- Added user authentication middleware
- Implemented password hashing
- Added session management

## Security Considerations
- All credentials moved to environment variables
- Passwords hashed with bcrypt
- Tokens expire after 24 hours

## Testing
- Unit tests for authentication functions
- Integration tests for login flow
- Security testing completed
```

#### **Ask Specific Questions**
```bash
# Instead of generic review, ask specific questions:
@Xibe-review please review this authentication implementation
- Is the JWT token expiration appropriate?
- Should I use HTTP-only cookies instead of localStorage?
- Are there any security vulnerabilities in the password reset flow?
```

### **Multiple File Reviews**

#### **Large PR Handling**
For PRs with many files, the bot:
- Analyzes each file individually for detailed feedback
- Provides consolidated summary with overall assessment
- Prioritizes issues across the entire PR
- Suggests logical grouping of fixes

#### **Cross-File Analysis**
```bash
# The bot understands relationships between files:
@Xibe-review please review this refactoring
- Check if the new service layer follows the same patterns as existing services
- Verify that all API endpoints are updated to use the new service
- Ensure error handling is consistent across all modified files
```

### **Security-Focused Reviews**

#### **Security Audit Requests**
```bash
# Request specific security analysis:
@Xibe-review security audit
@Xibe-review check for hardcoded credentials
@Xibe-review analyze authentication security
@Xibe-review review API security
```

#### **Compliance Reviews**
```bash
# Check compliance with standards:
@Xibe-review check OWASP compliance
@Xibe-review review for GDPR considerations
@Xibe-review audit for security best practices
```

## 📊 Optimizing for AI Analysis

### **Best Practices for PRs**

#### **1. Clear Descriptions**
```markdown
<!-- Good -->
## Description
Add user registration and login functionality

## Changes
- Implement user registration endpoint
- Add password validation and hashing
- Create login authentication middleware
- Add user session management

<!-- Avoid -->
## Description
Stuff
```

#### **2. Logical Commits**
```bash
# Good commit structure
git commit -m "feat: add user registration endpoint"
git commit -m "feat: implement password hashing with bcrypt"
git commit -m "feat: add login authentication middleware"
git commit -m "fix: handle registration validation errors"

# Avoid large commits with mixed changes
git commit -m "add user stuff and fix some bugs"
```

#### **3. Small, Focused PRs**
```bash
# Good: Small, focused changes
PR 1: Add user registration (5 files, 150 lines)
PR 2: Implement authentication middleware (3 files, 80 lines)
PR 3: Add password reset functionality (4 files, 120 lines)

# Avoid: Large, mixed PRs
PR 1: Complete user management system (25 files, 800 lines)
```

### **Code Quality for AI Analysis**

#### **Helpful Patterns**
```javascript
// Good: Clear, well-structured code
const authenticateUser = async (username, password) => {
  try {
    // Validate input
    if (!username || !password) {
      throw new Error('Username and password required');
    }

    // Hash password for comparison
    const hashedPassword = await bcrypt.hash(password, 12);

    // Database lookup
    const user = await User.findOne({ username });

    // Verify credentials
    if (!user || user.password !== hashedPassword) {
      throw new Error('Invalid credentials');
    }

    return user;
  } catch (error) {
    logger.error('Authentication failed:', error);
    throw error;
  }
};
```

#### **Problematic Patterns**
```javascript
// Issues the bot will flag:
const auth = async (u, p) => {
  const user = await db.find(u); // SQL injection risk
  if (user.pwd === p) return user; // Plain text password
  return null;
};

// Hardcoded credentials (CRITICAL)
const API_KEY = "sk-1234567890abcdef";
const DB_PASSWORD = "admin123";
```

## 🎯 Bot Interaction Patterns

### **Smart Mention Detection**

The bot intelligently detects various mention patterns:

#### **Standard Mentions**
```bash
✅ @xibe-review please review this PR
✅ @xibe-review[bot] check security
✅ Xibe review this code
✅ xibe-review analyze performance
```

#### **Contextual Mentions**
```bash
✅ @xibe-review please review - security implications?
✅ @xibe-review check if this follows our patterns
✅ @xibe-review is this the right approach?
```

#### **Ignored Patterns**
```bash
❌ @xibe-review (no additional context)
❌ This is a review by xibe-review (not mentioning the bot)
❌ Thanks @xibe-review for the previous review (past tense)
```

### **Response Timing**

#### **Expected Response Times**
| PR Size | Files | Response Time |
|---------|-------|---------------|
| Small   | 1-3   | 10-20 seconds |
| Medium  | 4-10  | 20-40 seconds |
| Large   | 10+   | 40-90 seconds |

#### **Factors Affecting Speed**
- **AI Model Speed**: GPT-4 is slower but more accurate than GPT-3.5
- **PR Complexity**: More files and complex logic take longer
- **API Load**: OpenAI API response times vary
- **Network Latency**: Distance to servers affects speed

### **Rate Limiting**

#### **Smart Rate Limiting**
The bot implements intelligent rate limiting to prevent spam:

```javascript
// Prevents duplicate reviews
- Same PR won't be reviewed twice within 5 minutes
- Same comment won't trigger multiple reviews

// Mention limiting
- Maximum 2 mentions per user per comment
- Prevents spam and abuse
```

#### **Bypassing Rate Limits**
```bash
# These bypass rate limiting:
@Xibe-review please review (new context)
@Xibe-review security audit (different request type)
@Xibe-review check performance (different focus)
```

## 📈 Analytics and Monitoring

### **Review Analytics**

#### **Access Analytics Dashboard**
```bash
# View bot analytics
open https://your-domain.com/status

# API access to analytics
curl https://your-domain.com/api/analytics
```

#### **Understanding Metrics**
```json
{
  "totalUsers": 150,        // Unique users who requested reviews
  "totalReviews": 1250,     // Total reviews completed
  "successRate": 93,        // Percentage of successful reviews
  "recentActivity": [       // Recent review activity
    {
      "repository": "owner/repo",
      "timestamp": "2024-01-15T10:30:00Z",
      "processingTime": 15000
    }
  ]
}
```

### **Webhook Monitoring**

#### **Webhook Logs**
```bash
# View webhook activity
curl https://your-domain.com/api/webhooks

# Filter by status
curl https://your-domain.com/api/webhooks?status=error
curl https://your-domain.com/api/webhooks?status=completed
```

#### **Common Webhook Issues**
```bash
# Check for common problems:
# 1. Webhook delivery failures
# 2. Authentication errors
# 3. Rate limiting issues
# 4. Bot mention detection problems

# Debug webhook processing
curl https://your-domain.com/api/troubleshoot
```

## 🤝 Best Practices

### **For PR Authors**

#### **1. Clear Communication**
```markdown
<!-- Provide context for better AI analysis -->
## Description
What problem does this solve? What approach was chosen and why?

## Changes Made
- Specific functionality added
- Files modified and why
- Dependencies added/removed

## Testing
- What was tested and how
- Edge cases considered
- Performance implications
```

#### **2. Security Considerations**
```bash
# Be explicit about security:
@Xibe-review please review security implications
@Xibe-review check for hardcoded credentials
@Xibe-review audit authentication flow
```

#### **3. Performance Awareness**
```bash
# Ask about performance:
@Xibe-review analyze performance impact
@Xibe-review check for memory leaks
@Xibe-review review database queries
```

### **For Code Reviewers**

#### **1. Understand AI Limitations**
- The bot provides suggestions, not absolute truth
- Complex business logic may need human review
- Architecture decisions often require team discussion
- Context-specific requirements need human judgment

#### **2. Use AI as a Tool**
```bash
# Good workflow:
1. Bot identifies potential issues
2. Human reviewer validates findings
3. Team discusses architectural implications
4. Developer implements approved changes
5. Bot re-reviews if needed
```

### **For Teams**

#### **1. Establish Guidelines**
```markdown
<!-- Team guidelines for AI reviews -->
## When to Request AI Review
- ✅ Security-sensitive changes
- ✅ Large refactoring
- ✅ New feature implementation
- ✅ Performance-critical code

## When to Skip AI Review
- ⚠️ Simple typo fixes
- ⚠️ Documentation-only changes
- ⚠️ Minor configuration updates
```

#### **2. Review AI Output**
```bash
# Team process for handling AI reviews:
1. Review bot recommendations as a team
2. Discuss any controversial suggestions
3. Validate security findings before action
4. Use as learning opportunity for junior developers
```

## 🐛 Troubleshooting Usage Issues

### **Bot Not Responding**

#### **Check Bot Status**
```bash
# Verify bot is running
curl https://your-domain.com/health

# Check recent activity
curl https://your-domain.com/api/webhooks?limit=5
```

#### **Verify Permissions**
```bash
# Check if bot has access to repository
# Repository Settings → Collaborators & teams
# Ensure bot account or GitHub App is listed

# Check GitHub App installation
# GitHub App Settings → Installations
```

#### **Test Webhook Delivery**
```bash
# Check webhook configuration
# Repository Settings → Webhooks → Recent Deliveries
# Look for successful deliveries (green checkmarks)
```

### **Review Quality Issues**

#### **Inaccurate Analysis**
```bash
# Provide more context in PR description
# Add specific questions in comments
# Break large PRs into smaller chunks
# Use clear commit messages
```

#### **Missing Issues**
```bash
# The bot might miss:
# Complex business logic issues
# Architecture-level problems
# Context-specific requirements
# Subtle performance implications

# Solution: Supplement with human review
```

### **Performance Issues**

#### **Slow Reviews**
```bash
# Possible causes:
# Large PRs with many files
# Complex code requiring deep analysis
# AI API rate limiting or high load
# Network connectivity issues

# Solutions:
# Break PR into smaller chunks
# Request reviews during off-peak hours
# Use simpler AI models for faster response
```

## 📚 Usage Examples

### **Example 1: Security Review**
```bash
# PR: Add authentication system
@Xibe-review please review this authentication implementation
Focus on security best practices and potential vulnerabilities

# Bot Response:
# 🔴 CRITICAL: Hardcoded API key found
# ⚠️ SECURITY: Missing input validation
# 💡 SUGGESTION: Use environment variables
```

### **Example 2: Performance Review**
```bash
# PR: Optimize database queries
@Xibe-review analyze performance impact of these database changes
Check for potential bottlenecks and optimization opportunities

# Bot Response:
# ✅ GOOD: Query optimization implemented
# 💡 SUGGESTION: Consider database indexing
# 📊 PERFORMANCE: Expected 40% speed improvement
```

### **Example 3: Code Quality Review**
```bash
# PR: Refactor legacy code
@Xibe-review review this refactoring
Is this following our team's patterns? Any code smells?

# Bot Response:
# ✅ GOOD: Clean separation of concerns
# ⚠️ QUALITY: Missing error handling in async functions
# 💡 SUGGESTION: Add comprehensive logging
```

## 🎓 Learning from AI Reviews

### **Understanding Feedback**

#### **Security Insights**
```bash
# Learn about security patterns:
# Environment variable usage
# Input validation techniques
# Secure authentication patterns
# Cryptography best practices
```

#### **Code Quality Lessons**
```bash
# Improve coding skills:
# Clean code principles
# Design pattern recognition
# Error handling strategies
# Performance optimization techniques
```

### **Applying Learnings**

#### **Immediate Actions**
```bash
# Based on bot feedback:
1. Fix critical security issues first
2. Address major bugs and errors
3. Improve code quality and readability
4. Consider performance optimizations
5. Update documentation if needed
```

#### **Long-term Improvements**
```bash
# Use AI feedback to:
1. Establish team coding standards
2. Create reusable patterns and templates
3. Improve development workflows
4. Train junior developers
5. Identify areas for team learning
```

## 📞 Getting Help

### **When Things Go Wrong**

#### **Report Issues**
1. **Check Logs**: Review bot logs for error details
2. **Test Locally**: Try reproducing the issue in test environment
3. **Document Steps**: Provide clear reproduction steps
4. **Include Context**: Share PR description, code changes, and bot response

#### **Community Support**
- **GitHub Issues**: [Bug reports and feature requests](https://github.com/iotserver24/xibe-pr1/issues)
- **Discussions**: [General questions and discussions](https://github.com/iotserver24/xibe-pr1/discussions)
- **Documentation**: This comprehensive usage guide

### **Feature Requests**

#### **Suggest Improvements**
```bash
# What would make the bot more useful?
# Additional analysis types
# Better integration with your workflow
# Enhanced reporting capabilities
# Custom rule configuration
```

---

This usage guide provides everything you need to effectively use xibe-pr1 for code review, from basic setup to advanced optimization techniques.
