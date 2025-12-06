# 🤖 xibe-pr

<div align="center">

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://github.com/iotserver24/xibe-pr)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen.svg)](https://nodejs.org/)
[![OpenAI SDK](https://img.shields.io/badge/OpenAI-SDK-blue.svg)](https://openai.com/)
[![OpenAI SDK](https://img.shields.io/badge/provider-XIBE--AI-blue.svg)](https://xibe.app/)
[![GitHub App](https://img.shields.io/badge/GitHub-App-yellow.svg)](https://docs.github.com/en/developers/apps/getting-started-with-apps)
[![Docker](https://img.shields.io/badge/docker-ready-blue.svg)](https://docker.com/)
[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![Website](https://img.shields.io/badge/website-live-brightgreen.svg)](https://review.xibe.app)
[![Enterprise](https://img.shields.io/badge/status-enterprise-blue.svg)](https://xibe.app)
[![AI Powered](https://img.shields.io/badge/powered-Xibe--AI-blue.svg)](https://xibe.app/)

[![Issues](https://img.shields.io/github/issues/iotserver24/xibe-pr.svg)](https://github.com/iotserver24/xibe-pr/issues)
[![Stars](https://img.shields.io/github/stars/iotserver24/xibe-pr.svg?style=social)](https://github.com/iotserver24/xibe-pr/stargazers)
[![Forks](https://img.shields.io/github/forks/iotserver24/xibe-pr.svg?style=social)](https://github.com/iotserver24/xibe-pr/network/members)

**AI-Powered GitHub PR Review Bot** 🚀

An intelligent, automated pull request review system that leverages OpenAI's GPT models to provide comprehensive, context-aware code reviews with security analysis, best practices recommendations, and intelligent feedback.

[📖 Overview](#overview) • [✨ Features](#features) • [🚀 Quick Start](#installation) • [📚 Documentation](#documentation) • [🤝 Contributing](#contributing)

</div>

---

## 🌟 Overview

**xibe-pr** is a sophisticated AI-powered GitHub PR review bot that revolutionizes code review processes by providing intelligent, context-aware analysis of pull requests. Built with Node.js and powered by OpenAI's advanced GPT models, this bot delivers comprehensive feedback including:

✅ **Intelligent Code Analysis** - Deep semantic understanding of code changes
✅ **Security Vulnerability Detection** - Identifies potential security issues and risks
✅ **Best Practices Enforcement** - Ensures adherence to coding standards and conventions
✅ **Performance Optimization Suggestions** - Recommends improvements for better efficiency
✅ **Automated Review Decisions** - Provides clear APPROVE/REQUEST_CHANGES/COMMENT verdicts

### 🎯 How It Works

1. **Triggered by Comments** - Simply mention the bot in PR comments (`@bot-name please review`)
2. **Intelligent Analysis** - Fetches PR details, diffs, and contextual information
3. **AI-Powered Review** - Uses OpenAI GPT to analyze code quality, security, and best practices
4. **Comprehensive Feedback** - Posts detailed review with specific recommendations
5. **Clear Verdict** - Provides actionable decision guidance for maintainers

### 🏗️ Architecture

```mermaid
graph TD
    A[GitHub PR Comments] --> B[PR-REVIEW-XIBE Bot]
    B --> C[Webhook Handler]
    B --> D[Analysis Engine]
    C --> E[Xibe.app API]
    D --> E
    E --> F[OpenAI SDK]
    B --> G[GitHub API Integration]
    D --> H[PR Review Comments]
    
    style A fill:#e3f2fd,stroke:#1976d2,stroke-width:2px,color:#000
    style B fill:#f3e5f5,stroke:#7b1fa2,stroke-width:2px,color:#000
    style C fill:#fff3e0,stroke:#f57c00,stroke-width:2px,color:#000
    style D fill:#fff3e0,stroke:#f57c00,stroke-width:2px,color:#000
    style E fill:#e1f5fe,stroke:#0277bd,stroke-width:2px,color:#000
    style F fill:#e8f5e8,stroke:#388e3c,stroke-width:2px,color:#000
    style G fill:#fce4ec,stroke:#c2185b,stroke-width:2px,color:#000
    style H fill:#f1f8e9,stroke:#689f38,stroke-width:2px,color:#000
```

## ✨ Features

### 🤖 Core Features

- **🔍 Advanced Code Analysis** - Deep semantic understanding using OpenAI GPT-4
- **🛡️ Security Vulnerability Detection** - Identifies potential security risks and vulnerabilities
- **📊 Performance Analysis** - Suggests optimization opportunities and efficiency improvements
- **🏗️ Architecture Review** - Evaluates code structure and design patterns
- **📝 Comprehensive Feedback** - Detailed analysis with specific recommendations

### 🚀 Technical Features

- **⚡ High Performance** - Optimized for fast PR processing and minimal latency
- **🔒 Enterprise Security** - Secure webhook handling with signature verification
- **📈 Scalable Architecture** - Supports multiple repositories and organizations
- **🔄 Real-time Processing** - Instant analysis upon PR comment triggers
- **📋 Structured Reviews** - Consistent, formatted review output

### 🔧 Developer Experience

- **🔔 Smart Notifications** - Reacts to comments with visual feedback (👀)
- **🎯 Precise Triggers** - Only responds when explicitly mentioned
- **📚 Rich Documentation** - Comprehensive setup and usage guides
- **🛠️ Easy Configuration** - Simple environment variable configuration
- **🐳 Docker Support** - Ready-to-deploy containerized solution

## 📋 Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Bot](#running-the-bot)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## 🛠️ Prerequisites

### System Requirements

- **Node.js**: v14.0.0 or higher ([download here](https://nodejs.org/))
- **npm**: Latest stable version ([comes with Node.js](https://nodejs.org/))
- **Git**: For cloning and version control
- **VPS/Server**: For hosting the bot (optional for development)

### API Keys & Authentication

- **OpenAI API Key**: Required for AI-powered code analysis
- **GitHub Authentication**: Choose one of the following:

  **🔧 Option A: GitHub App (Recommended for Public Use)**
  - Allows anyone to install on their repositories
  - Better security with granular permissions
  - Scalable for multiple organizations

  **🔧 Option B: Personal Access Token (For Personal Use)**
  - Simpler setup for individual developers
  - Limited to token owner's repositories

### Development Tools (Optional)

- **Docker**: For containerized deployment
- **PM2**: For process management in production
- **nginx**: For reverse proxy and SSL termination

## 🚀 Installation

### 📥 Quick Start (5 minutes)

```bash
# Clone the repository
git clone https://github.com/iotserver24/xibe-pr.git
cd xibe-pr

# Install dependencies
npm install

# Configure environment variables
cp .env.example .env
# Edit .env with your credentials (see Configuration section below)

# Start the bot
npm start
```

### 📦 Package Contents

After cloning, you'll find:

```
xibe-pr/
├── 📁 assests/           # Static assets and logos
├── 📄 bot.js            # Main bot application entry point
├── 📄 package.json      # Dependencies and scripts
├── 📄 README.md         # This comprehensive guide
├── 📁 docs/             # Additional documentation
│   ├── 📄 DEPLOYMENT.md    # Detailed deployment guides
│   ├── 📄 STRUCTURED_REVIEW_FORMAT.md  # Review format specs
│   └── 📄 WEBHOOK_SETUP.md # Webhook configuration
└── 📄 app-manifest.json # GitHub App manifest template
```

### 🔧 Configuration

#### Step 1: Environment Setup

Create your `.env` file:

```bash
cp .env.example .env
```

#### Step 2: Choose Authentication Method

**🔧 Option A: GitHub App (Recommended for Public Use)**

Perfect for making your bot available to the community:

```env
# GitHub App Configuration
GITHUB_APP_ID=your_github_app_id_here

# For Docker/production: Use base64-encoded key (recommended)
# Encode your key: node scripts/encode-private-key.js your-key.pem
GITHUB_PRIVATE_KEY_BASE64=your_base64_encoded_key_here

# For local development: Raw PEM key (may cause issues in Docker)
# GITHUB_PRIVATE_KEY="-----BEGIN RSA PRIVATE KEY-----\n...\n-----END RSA PRIVATE KEY-----"

WEBHOOK_SECRET=your_32_character_webhook_secret_here
BOT_USERNAME=your-app-name[bot]
AI_API=https://api.openai.com/v1
AI_KEY=sk-your-openai-api-key-here
PORT=3000

# Optional: Logging and Monitoring
NODE_ENV=production
```

**🔧 Option B: Personal Access Token (For Personal Use)**

Ideal for individual developers or private repositories:

```env
# Personal Access Token Configuration
GITHUB_TOKEN=ghp_your_github_personal_access_token_here
BOT_USERNAME=pr-review-bot
OPENAI_API_KEY=sk-your-openai-api-key-here
PORT=3000

# Optional: Logging and Monitoring
LOG_LEVEL=info
NODE_ENV=development
```

#### Step 3: API Key Configuration

**🗝️ OpenAI API Setup**

1. Visit [OpenAI Platform](https://platform.openai.com/)
2. Navigate to **API Keys** section
3. Click **"Create new secret key"**
4. Copy the generated key (format: `sk-...`)
5. Add to your `.env` file as `OPENAI_API_KEY`

**💡 Pro Tips:**

- Use a dedicated API key for this project
- Monitor your usage at [OpenAI Usage Dashboard](https://platform.openai.com/usage)
- Consider setting usage limits in your OpenAI account

### 🔐 Security Best Practices

- ✅ Use strong, unique webhook secrets (32+ characters)
- ✅ Rotate API keys regularly
- ✅ Never commit `.env` files to version control
- ✅ Use HTTPS in production environments
- ✅ Implement rate limiting for API endpoints
- ✅ Enable GitHub's webhook signature verification

## ⚙️ Detailed Configuration

### 🔧 Option A: GitHub App Setup (Recommended for Public Use)

GitHub Apps provide the best security and scalability for public bot deployments, allowing users to install your bot without sharing credentials.

#### 📋 Prerequisites for GitHub App

- A public repository or willingness to make your bot public
- A server with a publicly accessible webhook URL
- Basic understanding of OAuth and API authentication

#### 🚀 Quick Setup Using Manifest (Recommended)

**Step 1: Prepare Manifest**

```bash
# Edit the provided app-manifest.json
nano app-manifest.json
```

Update the webhook URL to your server's domain:

```json
{
  "name": "pr-review-xibe-bot",
  "url": "https://your-domain.com",
  "hook_attributes": {
    "url": "https://your-domain.com/webhook"
  },
  "redirect_url": "https://your-domain.com/callback",
  // ... rest of manifest
}
```

**Step 2: Create GitHub App**

1. Navigate to [GitHub Apps Settings](https://github.com/settings/apps)
2. Click **"New GitHub App from manifest"**
3. Paste your edited `app-manifest.json` content
4. Review and click **"Create GitHub App"**
5. Generate and download your private key

#### ⚙️ Manual Setup (Alternative Method)

**Step 1: Access GitHub App Creation**

1. Go to [GitHub Settings](https://github.com/settings/developers)
2. Click **"GitHub Apps"** → **"New GitHub App"**

**Step 2: Basic Information**

```txt
GitHub App name: pr-review-xibe-bot (must be unique)
Homepage URL: https://your-domain.com
Description: AI-powered PR review bot using OpenAI GPT
```

**Step 3: Webhook Configuration**

```txt
Webhook URL: https://your-domain.com/webhook
Webhook secret: [generate 32+ character random string]
```

**Step 4: Repository Permissions**
Set these permissions for optimal functionality:

| Permission | Level | Purpose |
|------------|-------|---------|
| Contents | Read-only | Access repository files for code analysis |
| Issues | Read & write | Comment on issues and PRs |
| Pull requests | Read & write | Read PRs and post reviews |
| Metadata | Read-only | Access repository metadata |

**Step 5: Subscribe to Events**

- ✅ **Issue comments** - Trigger reviews when bot is mentioned
- ✅ **Pull request reviews** - Optional: participate in review threads

**Step 6: Installation Settings**

- Choose **"Any account"** to make your app public
- Or **"Only on this account"** for private use

#### 🔑 Step 3: Generate and Encode Private Key

1. In your GitHub App settings, scroll to **"Private keys"**
2. Click **"Generate a private key"**
3. Download the `.pem` file securely
4. **Encode to Base64** (required for Docker deployments):

```bash
# Use the included encoding script
node scripts/encode-private-key.js your-app-name.private-key.pem
```

This will output a base64-encoded string to use in your `.env` file.

#### 📦 Step 4: Install the App

1. In your GitHub App page, click **"Install App"**
2. Choose your account/organization
3. Select repositories (or "All repositories")
4. Complete installation

#### 🔧 Step 5: Configure Environment Variables

```env
# Required GitHub App Configuration
GITHUB_APP_ID=123456  # Found in app settings

# Base64 encoded private key (recommended for Docker)
# Generated using: node scripts/encode-private-key.js your-key.pem
GITHUB_PRIVATE_KEY_BASE64=LS0tLS1CRUdJTiBSU0EgUFJJVkFURSBLRVktLS0tLQ...

WEBHOOK_SECRET=your_32_char_webhook_secret_here
BOT_USERNAME=your-app-name[bot]  # Format: app-name[bot]

# Required AI Configuration
AI_API=https://api.openai.com/v1
AI_KEY=sk-your-openai-api-key-here

# Optional Configuration
PORT=3000
NODE_ENV=production
```

### 🔑 Option B: Personal Access Token Setup (For Personal Use)

Perfect for individual developers or private repositories where you don't need public installation capabilities.

#### 📋 Step 1: Create Personal Access Token

1. Go to [GitHub Personal Access Tokens](https://github.com/settings/tokens)
2. Click **"Generate new token (classic)"**
3. Set token name: `pr-review-xibe-bot-token`
4. Set expiration: **"No expiration"** (or your preferred duration)

#### 🔑 Step 2: Configure Token Permissions

Select these scopes for full functionality:

| Scope | Purpose |
|-------|---------|
| `repo` | Full repository access (private repos included) |
| `write:discussion` | Comment on issues and PRs |
| `read:org` | Read organization membership (if needed) |

#### 🔧 Step 3: Configure Environment Variables

```env
# GitHub Personal Access Token
GITHUB_TOKEN=ghp_your_personal_access_token_here
BOT_USERNAME=pr-review-bot

# OpenAI Configuration
OPENAI_API_KEY=sk-your-openai-api-key-here

# Optional Configuration
PORT=3000
LOG_LEVEL=info
NODE_ENV=development
```

### 🌐 Webhook Configuration

#### For GitHub Apps

Webhooks are automatically configured during app creation. Ensure your server is accessible at the specified URL.

#### For Personal Access Token

**Step 1: Repository Webhook Setup**

1. Go to your repository **Settings** → **Webhooks**
2. Click **"Add webhook"**

**Step 2: Webhook Configuration**

```txt
Payload URL: http://your-server-ip:3000/webhook
Content type: application/json
Secret: [leave empty or use your webhook secret]
```

**Step 3: Event Selection**
Select **"Let me select individual events"** and choose:

- ✅ **Issue comments** (required for bot mentions)
- ✅ **Pull requests** (optional: for PR events)

**Step 4: Active Status**

- Ensure **"Active"** is checked
- Click **"Add webhook"**

### 🔗 OpenAI API Configuration

#### 📝 Step 1: Get OpenAI API Key

1. Visit [OpenAI Platform](https://platform.openai.com/)
2. Sign up or log in to your account
3. Navigate to **"API Keys"** section
4. Click **"Create new secret key"**

#### 💡 Step 2: Best Practices for OpenAI API

```bash
# Recommended API key format in .env
OPENAI_API_KEY=sk-proj-your-project-specific-key-here

# Optional: Set usage limits in OpenAI dashboard
# Optional: Monitor usage at https://platform.openai.com/usage
```

#### ⚠️ API Key Security Notes

- 🔒 Use project-specific API keys when possible
- 📊 Monitor usage to avoid unexpected costs
- 🔄 Rotate keys periodically for enhanced security
- 🚫 Never commit API keys to version control

## 🚀 Running the Bot

### 🏃‍♂️ Quick Start

```bash
# Development mode (with auto-restart)
npm run dev

# Production mode
npm start
```

The bot will start on `http://localhost:3000` by default.

### 🔧 Development Mode

```bash
npm run dev
```

**Features:**

- ✅ Auto-restart on file changes
- ✅ Detailed logging and error reporting
- ✅ Hot-reload for rapid development
- ✅ Debug-friendly environment

### 🚢 Production Mode

```bash
NODE_ENV=production npm start
```

**Features:**

- ✅ Optimized performance
- ✅ Reduced logging verbosity
- ✅ Memory and CPU optimizations
- ✅ Production-ready error handling

### 🛠️ Process Management (PM2)

For VPS deployments, use PM2 for reliable process management:

```bash
# Install PM2 globally
npm install -g pm2

# Start the bot
pm2 start bot.js --name pr-review-xibe-bot

# Monitor the bot
pm2 monit

# View logs
pm2 logs pr-review-xibe-bot

# Restart if needed
pm2 restart pr-review-xibe-bot

# Save PM2 configuration (survives reboots)
pm2 save

# Setup auto-start on system boot
pm2 startup
```

### 🐳 Docker Deployment

```bash
# Build the image
docker build -t pr-review-xibe-bot .

# Run with environment variables
docker run -d \
  --name pr-review-xibe-bot \
  -p 3000:3000 \
  --env-file .env \
  pr-review-xibe-bot

# View logs
docker logs -f pr-review-xibe-bot

# Update deployment
docker pull pr-review-xibe-bot
docker stop pr-review-xibe-bot && docker start pr-review-xibe-bot
```

### ☁️ Cloud Deployment Options

- **Railway**: One-click deployment with `railway.json`
- **Render**: Automated deployments with `render.yaml`
- **Vercel**: Serverless deployment with `vercel.json`
- **Heroku**: Traditional cloud deployment

## 📖 Usage Guide

### 🎯 Triggering Reviews

#### For GitHub App Users

1. **Install the App** on your repository
2. **Create a PR** with your code changes
3. **Mention the bot**: `@your-app-name[bot] please review this PR`

#### For Personal Access Token Users

1. **Create a PR** in your repository
2. **Mention the bot**: `@pr-review-bot please review this PR`

### 🔄 Bot Response Process

When triggered, the bot performs these steps:

1. **👀 Acknowledgment** - Reacts with eyes emoji to show it's working
2. **📥 Data Collection** - Fetches PR details, diffs, and context
3. **🤖 AI Analysis** - Uses OpenAI GPT to analyze code quality
4. **📝 Review Generation** - Creates structured review with recommendations
5. **💬 Comment Posting** - Posts comprehensive review as a comment

### 📋 Review Structure

Each review follows a consistent, detailed format:

```markdown
## 🤖 AI Code Review

### 📊 Summary
Brief overview of PR changes and overall assessment

### ⚠️ Issues/Concerns
Specific problems that need attention

### 💡 Suggestions
Recommended improvements and best practices

### 🔒 Security Considerations
Security implications and recommendations

### 🏗️ Architecture Impact
How changes affect overall system design

### 📈 Performance Analysis
Performance implications and optimization suggestions

### ✅ Recommendation
Final verdict: APPROVE / REQUEST_CHANGES / COMMENT
```

### 🎛️ Advanced Usage

#### Multiple File Reviews

The bot can analyze PRs with multiple file changes, providing individual feedback for each file while also considering the overall impact.

#### Context-Aware Analysis

- Understands programming language specifics
- Considers project structure and patterns
- Evaluates against common best practices
- Identifies potential security vulnerabilities

#### Smart Filtering

- Only responds when explicitly mentioned
- Avoids spam by respecting rate limits
- Focuses on meaningful code changes

## 📊 API Reference

### 🌐 Webhook Endpoints

#### `POST /webhook` - GitHub Webhook Handler

Handles incoming GitHub webhook events.

**Headers:**

```
X-GitHub-Event: issue_comment
X-GitHub-Delivery: [unique-id]
X-Hub-Signature-256: [signature]
```

**Payload:**

```json
{
  "action": "created",
  "issue": {
    "number": 123,
    "pull_request": {
      "url": "https://api.github.com/repos/owner/repo/pulls/123"
    }
  },
  "comment": {
    "body": "@bot-name please review this PR",
    "user": { "login": "developer" }
  }
}
```

#### `GET /health` - Health Check

Returns bot status and health information.

**Response:**

```json
{
  "status": "healthy",
  "uptime": "2h 15m 30s",
  "version": "1.0.0",
  "openai_status": "connected"
}
```

### 🔧 Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `GITHUB_APP_ID` | GitHub App ID | For App auth | - |
| `GITHUB_PRIVATE_KEY_BASE64` | Base64-encoded private key (recommended) | For App auth | - |
| `GITHUB_PRIVATE_KEY` | Raw PEM private key (alternative) | For App auth | - |
| `WEBHOOK_SECRET` | Webhook signature secret | Yes | - |
| `GITHUB_TOKEN` | Personal access token | For Token auth | - |
| `BOT_USERNAME` | Bot username for mentions | Yes | Xibe-review |
| `AI_API` | AI API base URL | Yes | - |
| `AI_KEY` | AI API key | Yes | - |
| `ANALYSIS_MODEL` | Model for code analysis (Stage 1) | No | gpt-4 |
| `COMMENT_MODEL` | Model for review synthesis (Stage 2) | No | gpt-4 |
| `MONGODB_URI` | MongoDB connection string | Yes | mongodb://localhost:27017/xibe-pr1 |
| `PORT` | Server port | No | 3000 |
| `NODE_ENV` | Environment mode | No | development |
| `ADMIN_KEY` | Admin key for protected endpoints | No | - |

### 📈 Monitoring & Analytics

#### Health Monitoring

- Regular health checks via `/health` endpoint
- Webhook delivery monitoring in GitHub App settings
- Error logging and alerting capabilities

#### Performance Metrics

- Response time tracking
- API usage monitoring
- Rate limit handling
- Memory usage optimization

## 🌟 Why Choose PR-REVIEW-XIBE?

### 🎯 Advantages Over Other PR Review Bots

| Feature | PR-REVIEW-XIBE | Traditional Bots | Manual Reviews |
|---------|----------|------------------|----------------|
| **AI-Powered Analysis** | ✅ GPT-4 | ❌ Limited | ❌ Human-only |
| **Security Detection** | ✅ Automated | ⚠️ Basic | ⚠️ Variable |
| **Context Awareness** | ✅ Deep semantic | ❌ Surface-level | ✅ But slow |
| **Consistency** | ✅ Always objective | ⚠️ Varies | ⚠️ Subjective |
| **Speed** | ✅ Instant | ✅ Fast | ❌ Time-consuming |
| **Learning** | ✅ Continuous improvement | ❌ Static | ✅ Experience-based |

### 📈 Benefits for Development Teams

#### For Developers

- 🚀 **Faster Feedback** - Get reviews in seconds, not days
- 🎓 **Learning Tool** - Learn from AI-powered suggestions
- 🔍 **Error Prevention** - Catch issues before code review
- 📚 **Best Practices** - Stay updated with current standards

#### For Teams

- ⚖️ **Consistent Standards** - Uniform code quality across projects
- 🔒 **Security First** - Automated vulnerability detection
- 📊 **Quality Metrics** - Track code quality improvements over time
- 🎯 **Focus Areas** - Human reviewers focus on complex logic

#### For Organizations

- 💰 **Cost Effective** - Reduce time spent on routine code reviews
- 📈 **Scalability** - Handle growing codebase without hiring more reviewers
- 🔄 **Standardization** - Consistent review quality across teams
- 📚 **Knowledge Base** - AI learns from your codebase patterns

## 🚢 Deployment Guide

### 🖥️ VPS Deployment Options

#### Option 1: Traditional VPS (Ubuntu/Debian)

**Step 1: Server Setup**

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js (using NodeSource repository)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2 for process management
sudo npm install -g pm2

# Create dedicated user for the bot
sudo useradd -m -s /bin/bash xibe-bot
sudo usermod -aG sudo xibe-bot
```

**Step 2: Application Setup**

```bash
# Switch to bot user
sudo su - xibe-bot

# Clone repository
git clone https://github.com/iotserver24/xibe-pr.git
cd xibe-pr

# Install dependencies
npm install --production

# Configure environment
cp .env.example .env
nano .env  # Configure your credentials
```

**Step 3: Service Configuration**

```bash
# Create systemd service file
sudo nano /etc/systemd/system/pr-review-xibe-bot.service
```

```ini
[Unit]
Description=PR-REVIEW-XIBE AI PR Review Bot
After=network.target
Wants=network.target

[Service]
Type=simple
User=xibe-bot
Group=xibe-bot
WorkingDirectory=/home/xibe-bot/PR-REVIEW-XIBE
ExecStart=/usr/bin/node bot.js
Restart=always
RestartSec=10
StandardOutput=journal
StandardError=journal
SyslogIdentifier=pr-review-xibe-bot
Environment=NODE_ENV=production
Environment=PATH=/usr/bin:/home/xibe-bot/.nvm/versions/node/v18/bin

[Install]
WantedBy=multi-user.target
```

**Step 4: Start Service**

```bash
# Enable and start the service
sudo systemctl enable pr-review-xibe-bot
sudo systemctl start pr-review-xibe-bot

# Check status
sudo systemctl status pr-review-xibe-bot

# View logs
sudo journalctl -u pr-review-xibe-bot -f
```

#### Option 2: Docker Deployment

**Step 1: Build Docker Image**

```dockerfile
# Create Dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install --production

COPY . .
EXPOSE 3000
USER node

CMD ["node", "bot.js"]
```

**Step 2: Run with Docker Compose**

```yaml
# docker-compose.yml
version: '3.8'
services:
  pr-review-xibe-bot:
    build: .
    ports:
      - "3000:3000"
    env_file:
      - .env
    restart: unless-stopped
    volumes:
      - ./logs:/app/logs
```

```bash
# Deploy with Docker Compose
docker-compose up -d

# View logs
docker-compose logs -f pr-review-xibe-bot
```

### ☁️ Cloud Platform Deployment

#### Railway (Recommended for Beginners)

Railway provides a seamless deployment experience with automatic HTTPS and scaling.

1. **Connect Repository** to Railway
2. **Add Environment Variables** in Railway dashboard
3. **Deploy** - Railway handles the rest!

#### Render (For Production Scale)

1. **Connect GitHub Repository** to Render
2. **Configure Service** with these settings:
   - Runtime: `Node.js`
   - Build Command: `npm install`
   - Start Command: `npm start`
3. **Add Environment Variables**
4. **Deploy** automatically on git push

#### Vercel (Serverless Option)

```json
// vercel.json
{
  "version": 2,
  "builds": [{ "src": "bot.js", "use": "@vercel/node" }],
  "routes": [{ "src": "/webhook", "dest": "/bot.js" }]
}
```

### 🔒 Production Security Checklist

- ✅ **HTTPS Only** - Use reverse proxy (nginx) or cloud provider's SSL
- ✅ **Firewall** - Restrict access to webhook endpoint only
- ✅ **Rate Limiting** - Implement API rate limiting
- ✅ **Monitoring** - Set up logging and alerting
- ✅ **Backups** - Regular configuration backups
- ✅ **Updates** - Keep dependencies updated

## 🛠️ Development & Testing

### 🧪 Testing the Bot Locally

```bash
# Start in development mode
npm run dev

# Test webhook locally (using ngrok)
ngrok http 3000

# Update webhook URL in GitHub with ngrok URL
# Create test PR and mention the bot
```

### 🔧 Development Tools

#### Code Quality

```bash
# Run linting
npm run lint

# Run tests
npm test

# Check code coverage
npm run coverage
```

#### Debugging

```bash
# Enable debug logging
DEBUG=* npm run dev

# Use Node.js inspector
node --inspect bot.js

# Profile performance
node --prof bot.js
```

### 🚀 Contributing to PR-REVIEW-XIBE

We welcome contributions! Here's how to get started:

#### 📝 Contribution Process

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Make** your changes
4. **Test** your changes thoroughly
5. **Commit** your changes (`git commit -m 'Add amazing feature'`)
6. **Push** to the branch (`git push origin feature/amazing-feature`)
7. **Open** a Pull Request

#### 🧪 Testing Requirements

- ✅ Add tests for new features
- ✅ Ensure all existing tests pass
- ✅ Test with different Node.js versions
- ✅ Test webhook handling edge cases

#### 📋 Code Style Guidelines

- Use **ESLint** and **Prettier** configurations
- Follow **conventional commit** messages
- Add **JSDoc** comments for functions
- Keep functions **small and focused**

## 🔍 Troubleshooting

### 🚨 Common Issues & Solutions

#### 🤖 Bot Not Responding

**Symptoms:** Bot doesn't react to mentions or post reviews

**Solutions:**

```bash
# 1. Check if bot is running
pm2 status pr-review-xibe-bot
# or
sudo systemctl status pr-review-xibe-bot

# 2. Verify webhook configuration
curl -X POST http://localhost:3000/webhook \
  -H "X-GitHub-Event: issue_comment" \
  -d '{"action": "created", "issue": {"number": 1}}'

# 3. Check logs
pm2 logs pr-review-xibe-bot --lines 50
# or
sudo journalctl -u pr-review-xibe-bot --since today

# 4. Verify environment variables
node -e "console.log(process.env.OPENAI_API_KEY ? 'API Key set' : 'API Key missing')"
```

#### 🔑 Authentication Issues

**Symptoms:** GitHub API errors, webhook signature failures

**Solutions:**

```bash
# 1. Verify GitHub App/Token permissions
# 2. Check webhook secret matches
# 3. Regenerate API keys if needed
# 4. Verify repository access permissions
```

#### 🧠 OpenAI API Problems

**Symptoms:** Review generation fails, timeout errors

**Solutions:**

```bash
# 1. Check API key validity
curl -H "Authorization: Bearer $OPENAI_API_KEY" \
  https://api.openai.com/v1/models

# 2. Monitor rate limits
# 3. Check account billing status
# 4. Verify API key permissions
```

#### 🌐 Network & Connectivity

**Symptoms:** Webhook delivery failures, timeout errors

**Solutions:**

```bash
# 1. Test webhook endpoint accessibility
curl -I http://your-server:3000/health

# 2. Check firewall settings
sudo ufw status

# 3. Verify DNS resolution
nslookup your-domain.com

# 4. Test with different ports
nc -zv your-server.com 3000
```

### 📞 Getting Help

#### Community Support

- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/iotserver24/PR-REVIEW-XIBE/issues)
- 💡 **Feature Requests**: [GitHub Discussions](https://github.com/iotserver24/PR-REVIEW-XIBE/discussions)
- 🤝 **Contributing**: See [Contributing Guide](CONTRIBUTING.md)

#### Professional Support

For enterprise deployments and custom integrations:

- 📧 **Email**: <support@pr-review-xibe.com>
- 💼 **Enterprise License**: Available for large-scale deployments
- 🔧 **Custom Development**: Tailored solutions for specific needs

### 📊 Monitoring & Maintenance

#### Health Checks

```bash
# Automated health monitoring
curl -f http://localhost:3000/health || exit 1

# Webhook delivery monitoring (GitHub Apps)
# Check in GitHub App settings > Advanced > Webhook deliveries
```

#### Performance Monitoring

```bash
# Monitor resource usage
pm2 monit

# Check application metrics
curl http://localhost:3000/health

# Set up alerts for:
# - High response times
# - Failed webhook deliveries
# - API rate limit warnings
```

## 📜 License & Legal

### 📄 License

**ISC License** - A permissive license that allows for commercial use with minimal restrictions.

```
ISC License

Copyright (c) 2024 PR-REVIEW-XIBE

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
```

### ⚖️ Terms of Service

#### Acceptable Use Policy

- ✅ Use for legitimate code review purposes
- ✅ Respect API rate limits and usage guidelines
- ✅ Maintain security and privacy of user data
- ❌ No abuse of OpenAI API for unauthorized purposes
- ❌ No unauthorized access to private repositories

#### Data Privacy

- 🔒 **No Data Storage** - Reviews are generated on-demand
- 🛡️ **Secure Processing** - All API calls use HTTPS encryption
- 📊 **Analytics** - Anonymous usage metrics only
- 🚫 **No Personal Data** - No storage of personal information

### 🔗 Links & Resources

- 🌐 **Homepage**: <https://github.com/iotserver24/PR-REVIEW-XIBE>
- 📚 **Documentation**: See `/docs` folder for detailed guides
- 🐛 **Issues**: <https://github.com/iotserver24/PR-REVIEW-XIBE/issues>
- 💬 **Discussions**: <https://github.com/iotserver24/PR-REVIEW-XIBE/discussions>
- 📖 **Wiki**: <https://github.com/iotserver24/PR-REVIEW-XIBE/wiki>

---

<div align="center">

## 🤝 Contributing

We love your input! We want to make contributing to this project as easy and transparent as possible, whether it's:

- Reporting a bug 🐛
- Discussing the current state of the code 💬
- Submitting a fix 🔧
- Proposing new features ✨
- Becoming a maintainer 👥

### 📝 How to Contribute

1. **Fork** the repository and create your branch from `main`
2. **Clone** your fork locally: `git clone https://github.com/your-username/PR-REVIEW-XIBE.git`
3. **Create** a feature branch: `git checkout -b feature/amazing-feature`
4. **Make** your changes and test them thoroughly
5. **Commit** your changes: `git commit -m 'Add some amazing feature'`
6. **Push** to the branch: `git push origin feature/amazing-feature`
7. **Submit** a pull request with a clear description

### 🧪 Development Process

We use GitHub to host code, to track issues and feature requests, as well as accept pull requests.

1. Fork the project & clone locally
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request with full description

### 📋 Pull Request Requirements

- ✅ **Clear Description** - Explain what and why (not just how)
- ✅ **Tests** - Include tests for new functionality
- ✅ **Documentation** - Update README if needed
- ✅ **Linting** - Code follows project style guidelines
- ✅ **Single Responsibility** - Each PR addresses one concern

### 🚀 Quick Development Setup

```bash
# Fork and clone
git clone https://github.com/your-username/PR-REVIEW-XIBE.git
cd PR-REVIEW-XIBE

# Install dependencies
npm install

# Run tests
npm test

# Start development server
npm run dev

# Make your changes, then...
git add .
git commit -m "feat: add amazing new feature"
git push origin feature/your-feature-name
```

### 🐛 Reporting Bugs

Report bugs using GitHub's [issue tracker](https://github.com/iotserver24/PR-REVIEW-XIBE/issues) with:

- **Clear title** describing the issue
- **Steps to reproduce** the bug
- **Expected behavior** vs **actual behavior**
- **Environment details** (Node.js version, OS, etc.)
- **Error logs** if applicable

**Great Bug Report Example:**

```
Title: Bot doesn't respond to PR mentions in private repositories

Description:
When I mention the bot in a private repository PR, it doesn't respond with a review.

Steps to Reproduce:
1. Create a private repository
2. Set up the bot with personal access token
3. Create a PR with code changes
4. Comment: "@bot-name please review this PR"
5. Bot doesn't respond

Expected: Bot should analyze and review the PR
Actual: No response from bot

Environment:
- Node.js v18.17.0
- Bot version: v1.0.0
- Repository: Private
- Authentication: Personal Access Token

Error Logs:
[Include any relevant error messages]
```

### 💡 Feature Requests

Feature requests are welcome! Please provide:

- **Use case** - What problem does this solve?
- **Proposed solution** - How should it work?
- **Alternatives considered** - Other approaches you've thought about
- **Additional context** - Screenshots, examples, etc.

### 📖 Documentation Contributions

Help improve our documentation:

- Fix typos and grammatical errors
- Clarify confusing sections
- Add missing information
- Improve code examples
- Update outdated instructions

### 🎨 Style Guide

- **Commits**: Follow [Conventional Commits](https://conventionalcommits.org/)
- **Code Style**: Use ESLint and Prettier configurations
- **Tests**: Write comprehensive tests for new features
- **Comments**: Use JSDoc for function documentation

### 🌟 Recognition

Contributors will be recognized in our README and our hearts! 💖

---

## 📄 License

This project is licensed under the **ISC License** - see the [LICENSE](LICENSE) file for details.

```
ISC License

Copyright (c) 2024 PR-REVIEW-XIBE Contributors

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
```

---

<div align="center">

**Built with ❤️ by the PR-REVIEW-XIBE community**

[![GitHub contributors](https://img.shields.io/github/contributors/iotserver24/PR-REVIEW-XIBE.svg)](https://github.com/iotserver24/PR-REVIEW-XIBE/graphs/contributors)
[![GitHub last commit](https://img.shields.io/github/last-commit/iotserver24/PR-REVIEW-XIBE.svg)](https://github.com/iotserver24/PR-REVIEW-XIBE/commits/main)

**[⭐ Star this repo](#) • [🐛 Report Bug](https://github.com/iotserver24/PR-REVIEW-XIBE/issues) • [💬 Start Discussion](https://github.com/iotserver24/PR-REVIEW-XIBE/discussions)**

</div>
