# 🔧 Configuration Guide

This comprehensive guide covers all configuration options for xibe-pr1, including environment variables, authentication methods, AI model setup, and advanced customization options.

## 📋 Configuration Overview

xibe-pr1 uses environment variables for configuration, making it easy to deploy across different environments without code changes. The bot supports multiple authentication modes and AI providers, allowing flexibility in deployment strategies.

## 🚀 Quick Setup

### 1️⃣ **Create Environment File**

```bash
cp .env.example .env
```

### 2️⃣ **Choose Authentication Method**

- **[GitHub App Mode](#github-app-mode)** (Recommended for production)
- **[Personal Access Token Mode](#personal-access-token-mode)** (For individual developers)
- **[Test Mode](#test-mode)** (For development and testing)

### 3️⃣ **Configure AI Provider**

- **[OpenAI](#openai-configuration)** (Default)
- **[Custom AI Provider](#custom-ai-provider)** (Advanced)

### 4️⃣ **Set Up MongoDB** (Required)

- **[MongoDB](#mongodb-configuration)** (Local or Cloud)

---

## 🔐 Authentication Modes

xibe-pr1 supports three authentication modes with different use cases and setup requirements.

### 🔧 GitHub App Mode (Recommended)

**Best for**: Production deployments, public bots, multiple organizations

**Advantages**:

- ✅ Bot appears as separate account with [bot] badge
- ✅ Can be installed on any repository
- ✅ Enhanced security and permissions
- ✅ Scalable for enterprise use

**Required Variables**:

```env
# GitHub App Configuration
GITHUB_APP_ID=your_github_app_id

# Base64 encoded private key (recommended for Docker)
# Encode: node scripts/encode-private-key.js your-key.pem
GITHUB_PRIVATE_KEY_BASE64=your_base64_encoded_key

# Alternative: Raw PEM key (for local development)
# GITHUB_PRIVATE_KEY="-----BEGIN RSA PRIVATE KEY-----\n...\n-----END RSA PRIVATE KEY-----"

WEBHOOK_SECRET=your_32_character_secret
BOT_USERNAME=your-bot-name[bot]

# AI Configuration
AI_API=https://api.openai.com/v1
AI_KEY=sk-your-openai-api-key

# MongoDB (required)
MONGODB_URI=mongodb://localhost:27017/xibe-pr1
```

#### Setting Up GitHub App

1. **Create GitHub App**:
   - Go to [GitHub Apps Settings](https://github.com/settings/apps)
   - Click "New GitHub App"

2. **Configure Basic Information**:

   ```txt
   App Name: xibe-pr1-review-bot
   Homepage URL: https://your-domain.com
   Description: AI-powered PR review bot
   ```

3. **Set Webhook Configuration**:

   ```txt
   Webhook URL: https://your-domain.com/webhook
   Webhook Secret: [generate 32+ character string]
   ```

4. **Configure Permissions**:

   | Permission | Level | Purpose |
   |------------|-------|---------|
   | Contents | Read-only | Access repository files |
   | Issues | Read & write | Comment on PRs |
   | Pull requests | Read & write | Read PRs and post reviews |
   | Metadata | Read-only | Access repository metadata |

5. **Subscribe to Events**:
   - ✅ Issue comments (for manual reviews)
   - ✅ Pull requests (for auto-reviews)

6. **Generate and Encode Private Key**:
   - Download the `.pem` file from GitHub App settings
   - Encode to base64 for Docker compatibility:

   ```bash
   node scripts/encode-private-key.js your-app.private-key.pem
   ```

   - Copy the output to `GITHUB_PRIVATE_KEY_BASE64` in `.env`

7. **Install the App**:
   - Install on your repositories or organizations
   - Note the installation ID for configuration

### 🔑 Personal Access Token Mode

**Best for**: Individual developers, private repositories, quick setup

**Advantages**:

- ✅ Quick and simple setup
- ✅ No GitHub App complexity
- ✅ Perfect for personal use

**Limitations**:

- ⚠️ Comments appear from personal account
- ⚠️ Limited to repositories you have access to
- ⚠️ Less professional appearance

**Required Variables**:

```env
# Personal Access Token
GITHUB_TOKEN=ghp_your_personal_access_token
BOT_USERNAME=pr-review-bot

# AI Configuration
AI_API=https://api.openai.com/v1
AI_KEY=sk-your-openai-api-key

# Optional: Redis for analytics
UPSTASH_REDIS_REST_URL=your_redis_url
UPSTASH_REDIS_REST_TOKEN=your_redis_token
```

#### Setting Up Personal Access Token

1. **Create Token**:
   - Go to [GitHub Personal Access Tokens](https://github.com/settings/tokens)
   - Click "Generate new token (classic)"

2. **Configure Token**:

   ```txt
   Note: xibe-pr1-bot-token
   Expiration: No expiration (or your preferred duration)
   ```

3. **Set Permissions**:
   - ✅ `repo` - Full repository access
   - ✅ `write:discussion` - Comment on issues and PRs
   - ✅ `read:org` - Read organization membership

4. **Copy Token**:
   - Copy the generated token to `GITHUB_TOKEN` in `.env`
   - **Important**: Never commit tokens to version control

### 🧪 Test Mode

**Best for**: Development, testing, demonstrations

**Features**:

- ✅ Full AI review functionality
- ✅ No GitHub API calls required
- ✅ Perfect for testing review quality
- ✅ Mock responses for all GitHub operations

**Required Variables**:

```env
# AI Configuration (only requirement)
AI_API=https://api.openai.com/v1
AI_KEY=sk-your-openai-api-key

# Optional: Redis for testing
UPSTASH_REDIS_REST_URL=your_redis_url
UPSTASH_REDIS_REST_TOKEN=your_redis_token
```

**Note**: GitHub authentication variables are optional in test mode.

---

## 🤖 AI Configuration

xibe-pr1 supports multiple AI providers and models through a unified configuration interface.

### 🧠 OpenAI Configuration (Default)

**Setup**:

```env
AI_API=https://api.openai.com/v1
AI_KEY=sk-your-openai-api-key-here
```

**Available Models**:

- `gpt-4` - Most capable model for complex analysis
- `gpt-4-turbo` - Faster and cost-effective
- `gpt-3.5-turbo` - Budget-friendly option

**Getting API Key**:

1. Visit [OpenAI Platform](https://platform.openai.com/)
2. Navigate to **API Keys** section
3. Click **"Create new secret key"**
4. Copy the generated key (format: `sk-...`)

### 🧠 Custom AI Provider

For using other AI providers (Anthropic, local models, etc.):

```env
# Custom AI Provider
AI_API=https://your-ai-provider.com/v1
AI_KEY=your_ai_provider_api_key

# Model Configuration
MODEL_ID=your-custom-model
ANALYSIS_MODEL=your-analysis-model
COMMENT_MODEL=your-comment-model
```

**Supported API Formats**:

- OpenAI-compatible APIs
- Custom endpoints with OpenAI-style `/v1/chat/completions`
- Local model servers (Ollama, LM Studio, etc.)

### 🎯 Multi-Agent Model Configuration

xibe-pr1 uses a sophisticated two-agent system with specialized models:

#### **Agent 1: File Analyzer** (`ANALYSIS_MODEL`)

- **Purpose**: Individual file analysis, security scanning, hardcoded value detection
- **Best Models**: Deep reasoning models, code-specialized models
- **Recommended**: `gpt-4`, `claude-3-opus`, `deepseek-coder`

#### **Agent 2: Review Synthesizer** (`COMMENT_MODEL`)

- **Purpose**: Comprehensive review creation, synthesis, final recommendations
- **Best Models**: Large context models, instruction-following models
- **Recommended**: `gpt-4`, `claude-3-sonnet`, `gemini-pro`

**Configuration Example**:

```env
# Two-Stage AI System
ANALYSIS_MODEL=gpt-4
COMMENT_MODEL=gpt-4-turbo

# Fallback Models
ANALYSIS_FALLBACK=gpt-3.5-turbo
COMMENT_FALLBACK=gpt-3.5-turbo

# Default Model (used for model selection)
MODEL_ID=gpt-4
```

---

## 🗄️ Database Configuration

### 🍃 MongoDB Configuration (Required)

xibe-pr1 uses MongoDB for analytics, webhook logging, and user tracking.

#### **MongoDB Atlas** (Cloud, Recommended for Production)

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/xibe-pr1?retryWrites=true&w=majority
```

**Setup**:

1. Create account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster (free tier available)
3. Create database user with read/write access
4. Get connection string and add to environment variables

#### **Local MongoDB**

```env
# Local MongoDB (requires MongoDB server)
MONGODB_URI=mongodb://localhost:27017/xibe-pr1
```

**Setup**:

1. Install MongoDB locally
2. Start MongoDB server: `mongod`
3. Use default connection settings

### 📊 Data Storage Structure

**Analytics Data**:

```
analytics:global              # Global statistics
├── totalUsers: 150          # Total unique users
├── totalReviews: 1250       # Total reviews completed
└── lastUpdated: timestamp   # Last update timestamp

user:username:stats          # Per-user statistics
├── reviews: 25             # User's review count
└── lastActive: timestamp   # Last activity

webhook:uuid123             # Individual webhook logs
├── status: completed       # Processing status
├── repository: owner/repo  # Target repository
└── processingTime: 15000   # Processing duration (ms)
```

**Retention**:

- Webhook logs: 7 days
- Review records: 30 days
- User statistics: Persistent
- Processing locks: 10 minutes

---

## ⚙️ Advanced Configuration

### 🔧 Bot Behavior Settings

```env
# Bot Configuration
BOT_USERNAME=xibe-review          # Bot username for mentions
PORT=3000                        # Server port
LOG_LEVEL=info                   # Logging verbosity
NODE_ENV=production              # Environment mode

# Rate Limiting
MAX_MENTIONS_PER_USER=2          # Max mentions per comment
REVIEW_LOCK_TIMEOUT=600          # Lock timeout (seconds)
RECENT_COMMENT_WINDOW=300        # Duplicate prevention window (seconds)
```

### 🤖 AI Model Parameters

```env
# Model Selection
MODEL_ID=gpt-4                   # Default model
ANALYSIS_MODEL=gpt-4            # File analysis model
COMMENT_MODEL=gpt-4-turbo       # Review synthesis model

# Model Parameters
MAX_TOKENS=3000                  # Maximum response tokens
TEMPERATURE=0.3                  # Response randomness (0-1)
MAX_INPUT_CHARS=8000             # Maximum input length

# Fallback Models
ANALYSIS_FALLBACK=gpt-3.5-turbo
COMMENT_FALLBACK=gpt-3.5-turbo
```

### 📊 Analytics & Monitoring

```env
# Redis Configuration
UPSTASH_REDIS_REST_URL=https://your-redis.upstash.io
UPSTASH_REDIS_REST_TOKEN=your_token

# Analytics Settings
ANALYTICS_RETENTION_DAYS=30      # Review data retention
WEBHOOK_LOG_RETENTION_DAYS=7     # Webhook log retention
MAX_WEBHOOK_LOGS=1000            # Maximum stored webhooks
```

### 🔒 Security Settings

```env
# Webhook Security
GITHUB_WEBHOOK_SECRET=your_32_char_secret

# API Security
API_RATE_LIMIT=100               # Requests per minute per IP
ENABLE_CORS=false               # Enable CORS for API endpoints
TRUST_PROXY=false               # Trust proxy headers

# Content Security
MAX_COMMENT_LENGTH=5000         # Maximum comment length
ALLOWED_MENTIONS=2              # Max mentions per user per comment
```

---

## 🌍 Environment-Specific Configuration

### 🏠 Development Environment

```env
# Development Settings
NODE_ENV=development
LOG_LEVEL=debug
PORT=3000

# AI Configuration (test mode)
AI_API=https://api.openai.com/v1
AI_KEY=sk-your-test-key

# Optional: Local Redis
REDIS_URL=redis://localhost:6379
```

### 🚀 Production Environment

```env
# Production Settings
NODE_ENV=production
LOG_LEVEL=info
PORT=3000

# GitHub App (recommended)
GITHUB_APP_ID=your_app_id
GITHUB_PRIVATE_KEY="-----BEGIN RSA PRIVATE KEY-----\n..."
GITHUB_WEBHOOK_SECRET=your_webhook_secret
BOT_USERNAME=your-bot-name[bot]

# AI Configuration
AI_API=https://api.openai.com/v1
AI_KEY=sk-your-production-key

# Redis (recommended)
UPSTASH_REDIS_REST_URL=https://your-redis.upstash.io
UPSTASH_REDIS_REST_TOKEN=your_token
```

### 🧪 Testing Environment

```env
# Test Settings
NODE_ENV=test
LOG_LEVEL=debug
PORT=3000

# AI Configuration (required for testing)
AI_API=https://api.openai.com/v1
AI_KEY=sk-your-test-key

# Test mode (no GitHub auth needed)
# GITHUB_* variables optional
```

---

## 🔍 Configuration Validation

The bot includes built-in configuration validation and helpful error messages.

### ✅ **Validation Checks**

1. **Required Variables**: Ensures all mandatory variables are set
2. **API Key Formats**: Validates API key formats and lengths
3. **URL Validation**: Checks URL formats and connectivity
4. **Token Validation**: Verifies GitHub tokens and permissions

### 🩺 **Health Checks**

Access these endpoints to verify configuration:

```bash
# Basic health check
curl https://your-domain.com/health

# Detailed status
curl https://your-domain.com/api/status

# Configuration diagnostics
curl https://your-domain.com/api/troubleshoot

# Redis connectivity test
curl https://your-domain.com/api/test-redis
```

### 🔧 **Troubleshooting Commands**

```bash
# Check environment variables
node -e "console.log('GitHub App:', process.env.GITHUB_APP_ID ? '✅' : '❌')"
node -e "console.log('AI Key:', process.env.AI_KEY ? '✅' : '❌')"
node -e "console.log('Redis:', process.env.UPSTASH_REDIS_REST_URL ? '✅' : '❌')"

# Test OpenAI API connectivity
curl -H "Authorization: Bearer $AI_KEY" \
     -H "Content-Type: application/json" \
     -d '{"model": "gpt-3.5-turbo", "messages": [{"role": "user", "content": "Hello"}]}' \
     https://api.openai.com/v1/chat/completions

# Test GitHub API connectivity (if using PAT)
curl -H "Authorization: Bearer $GITHUB_TOKEN" \
     https://api.github.com/user
```

---

## 🔄 Configuration Migration

### From Personal Access Token to GitHub App

1. **Create GitHub App** following the [GitHub App setup guide](#github-app-mode)

2. **Update Environment Variables**:

   ```env
   # Remove PAT configuration
   -GITHUB_TOKEN=ghp_...

   # Add GitHub App configuration
   +GITHUB_APP_ID=your_app_id
   +GITHUB_PRIVATE_KEY="-----BEGIN..."
   +GITHUB_WEBHOOK_SECRET=your_secret
   +BOT_USERNAME=your-bot-name[bot]
   ```

3. **Update Webhook URL** in GitHub repository settings

4. **Install GitHub App** on target repositories

5. **Test Configuration**:

   ```bash
   # Restart bot
   pm2 restart xibe-pr1-bot

   # Check status
   curl https://your-domain.com/api/status
   ```

### From OpenAI to Custom AI Provider

1. **Verify API Compatibility**:
   - Ensure provider supports OpenAI-style `/v1/chat/completions` endpoint
   - Test API key and model availability

2. **Update Configuration**:

   ```env
   # Update API endpoint
   AI_API=https://your-provider.com/v1
   AI_KEY=your_provider_api_key

   # Update model names
   MODEL_ID=your-model-name
   ANALYSIS_MODEL=your-analysis-model
   COMMENT_MODEL=your-synthesis-model
   ```

3. **Test New Configuration**:

   ```bash
   # Test API connectivity
   curl -H "Authorization: Bearer $AI_KEY" \
        -H "Content-Type: application/json" \
        -d '{"model": "your-model", "messages": [{"role": "user", "content": "Test"}]}' \
        $AI_API/chat/completions
   ```

---

## 🔐 Security Best Practices

### API Keys

- ✅ Use separate API keys for different environments
- ✅ Rotate keys regularly (every 90 days)
- ✅ Monitor API usage in provider dashboards
- ✅ Never commit API keys to version control
- ✅ Use environment-specific keys (dev/staging/prod)

### Webhook Secrets

- ✅ Use strong, random webhook secrets (32+ characters)
- ✅ Generate unique secrets for each environment
- ✅ Rotate secrets when redeploying
- ✅ Verify secrets match between GitHub and bot configuration

### Network Security

- ✅ Always use HTTPS in production
- ✅ Implement firewall rules to restrict access
- ✅ Use reverse proxies (nginx) for SSL termination
- ✅ Monitor for suspicious webhook activity

### Access Control

- ✅ Use GitHub App for production (more secure than PAT)
- ✅ Limit repository access to necessary repositories only
- ✅ Regularly audit installed repositories and permissions
- ✅ Revoke unused tokens and installations

---

## 📊 Configuration Examples

### **Minimal Configuration** (Test Mode)

```env
AI_API=https://api.openai.com/v1
AI_KEY=sk-your-openai-key
```

### **Development Configuration**

```env
NODE_ENV=development
LOG_LEVEL=debug
PORT=3000

AI_API=https://api.openai.com/v1
AI_KEY=sk-your-dev-key

GITHUB_TOKEN=ghp_your_dev_token
BOT_USERNAME=test-bot
```

### **Production Configuration** (GitHub App)

```env
NODE_ENV=production
LOG_LEVEL=info
PORT=3000

GITHUB_APP_ID=123456
GITHUB_PRIVATE_KEY="-----BEGIN RSA PRIVATE KEY-----\n..."
GITHUB_WEBHOOK_SECRET=your_32_char_secret_here
BOT_USERNAME=xibe-review[bot]

AI_API=https://api.openai.com/v1
AI_KEY=sk-your-production-key

UPSTASH_REDIS_REST_URL=https://your-redis.upstash.io
UPSTASH_REDIS_REST_TOKEN=your_redis_token
```

### **Enterprise Configuration**

```env
NODE_ENV=production
LOG_LEVEL=warn
PORT=3000

GITHUB_APP_ID=789012
GITHUB_PRIVATE_KEY="-----BEGIN RSA PRIVATE KEY-----\n..."
GITHUB_WEBHOOK_SECRET=enterprise_secret_32_chars
BOT_USERNAME=enterprise-review[bot]

AI_API=https://api.openai.com/v1
AI_KEY=sk-your-enterprise-key

UPSTASH_REDIS_REST_URL=https://enterprise-redis.upstash.io
UPSTASH_REDIS_REST_TOKEN=enterprise_redis_token

# Enterprise Security
API_RATE_LIMIT=50
MAX_WEBHOOK_LOGS=5000
ANALYTICS_RETENTION_DAYS=90
```

---

## 🧪 Testing Configuration

### **Configuration Test Script**

```bash
#!/bin/bash
# test-config.sh

echo "🔍 Testing xibe-pr1 configuration..."
echo

# Check environment variables
echo "📋 Environment Variables:"
echo "   NODE_ENV: ${NODE_ENV:-'not set'}"
echo "   GITHUB_APP_ID: ${GITHUB_APP_ID:-'not set'}"
echo "   GITHUB_TOKEN: ${GITHUB_TOKEN:-'not set'}"
echo "   AI_API: ${AI_API:-'not set'}"
echo "   AI_KEY: ${AI_KEY:+'set (hidden)'}"
echo "   BOT_USERNAME: ${BOT_USERNAME:-'not set'}"
echo "   UPSTASH_REDIS_REST_URL: ${UPSTASH_REDIS_REST_URL:+'set (hidden)'}"
echo

# Test OpenAI API
echo "🤖 Testing OpenAI API..."
if curl -s -H "Authorization: Bearer ${AI_KEY}" \
         -H "Content-Type: application/json" \
         -d '{"model": "gpt-3.5-turbo", "messages": [{"role": "user", "content": "Hello"}]}' \
         "${AI_API}/chat/completions" > /dev/null 2>&1; then
    echo "   ✅ OpenAI API: Connected"
else
    echo "   ❌ OpenAI API: Failed"
fi

# Test Redis
echo
echo "🗄️ Testing Redis..."
if curl -s "${UPSTASH_REDIS_REST_URL}/ping" \
         -H "Authorization: Bearer ${UPSTASH_REDIS_REST_TOKEN}" > /dev/null 2>&1; then
    echo "   ✅ Redis: Connected"
else
    echo "   ❌ Redis: Failed (optional)"
fi

echo
echo "✅ Configuration test complete!"
```

### **Running Configuration Tests**

```bash
# Make script executable
chmod +x test-config.sh

# Run tests
./test-config.sh
```

---

## 🔧 Configuration Tools

### **Environment Variable Generator**

```bash
# Generate secure webhook secret
node -e "console.log('WEBHOOK_SECRET=' + require('crypto').randomBytes(32).toString('hex'))"

# Generate secure Redis password
node -e "console.log('REDIS_PASSWORD=' + require('crypto').randomBytes(16).toString('hex'))"
```

### **Configuration Validator**

```javascript
// validate-config.js
import dotenv from 'dotenv';

dotenv.config();

const required = ['AI_API', 'AI_KEY'];
const optional = ['GITHUB_APP_ID', 'GITHUB_TOKEN', 'UPSTASH_REDIS_REST_URL'];

console.log('🔍 Configuration Validation\n');

// Check required variables
required.forEach(key => {
  const value = process.env[key];
  console.log(`${key}: ${value ? '✅' : '❌'} ${value ? '(configured)' : '(missing)'}`);
});

// Check optional variables
optional.forEach(key => {
  const value = process.env[key];
  console.log(`${key}: ${value ? '✅' : '⚠️'} ${value ? '(configured)' : '(optional)'}`);
});
```

---

This configuration system provides maximum flexibility while maintaining security and ease of deployment across different environments and use cases.
