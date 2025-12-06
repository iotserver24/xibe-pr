# 🧭 Documentation Navigation

This navigation guide helps you find the right documentation for your needs, whether you're a new user, developer, or system administrator.

## 🎯 Choose Your Path

### **I'm New to xibe-pr1**
If you're just getting started with the bot:

1. **[🎯 Overview](overview.md)** - Learn what xibe-pr1 is and how it works
2. **[📖 Usage Guide](usage.md)** - Learn how to trigger reviews and interact with the bot
3. **[🚀 Deployment](deployment.md)** - Get your own instance running
4. **[🔧 Configuration](configuration.md)** - Set up environment variables and authentication

### **I Want to Use the Bot**
For using the bot in your development workflow:

1. **[📖 Usage Guide](usage.md)** - Complete guide to triggering and understanding reviews
2. **[🤖 Review Process](review-process.md)** - Understanding how the AI analysis works
3. **[🎯 Overview](overview.md)** - High-level understanding of capabilities
4. **[🔍 Troubleshooting](troubleshooting.md)** - Solutions for common issues

### **I Need to Deploy or Configure**
For system administrators and developers setting up the bot:

1. **[🔧 Configuration](configuration.md)** - Complete setup and environment guide
2. **[🚀 Deployment](deployment.md)** - Installation and deployment options
3. **[📡 Webhooks](webhooks.md)** - GitHub webhook integration details
4. **[🏗️ Architecture](architecture.md)** - Technical architecture and design

### **I'm a Developer**
For developers working with or extending the bot:

1. **[🏗️ Architecture](architecture.md)** - Technical architecture and system design
2. **[🔌 API Reference](api-reference.md)** - Complete API documentation
3. **[🌐 Frontend](frontend.md)** - Frontend architecture and components
4. **[🧪 Testing](testing.md)** - Testing procedures and test framework

### **I Need Technical Details**
For deep technical understanding:

1. **[🏗️ Architecture](architecture.md)** - System architecture and design
2. **[🤖 Review Process](review-process.md)** - Multi-agent review system details
3. **[📡 Webhooks](webhooks.md)** - Webhook handling and event processing
4. **[🔌 API Reference](api-reference.md)** - Complete API endpoint documentation

## 📚 Documentation by Category

### **Getting Started**
- **[🎯 Overview](overview.md)** - Introduction and capabilities
- **[📖 Usage Guide](usage.md)** - How to use the bot effectively
- **[🚀 Deployment](deployment.md)** - Quick deployment options

### **Technical Documentation**
- **[🏗️ Architecture](architecture.md)** - System architecture and design
- **[🔌 API Reference](api-reference.md)** - API endpoints and integration
- **[📡 Webhooks](webhooks.md)** - GitHub webhook integration
- **[🌐 Frontend](frontend.md)** - Frontend architecture

### **Configuration & Setup**
- **[🔧 Configuration](configuration.md)** - Environment setup and variables
- **[🚀 Deployment](deployment.md)** - Deployment and installation
- **[📡 Webhooks](webhooks.md)** - Webhook configuration

### **Development & Testing**
- **[🧪 Testing](testing.md)** - Testing procedures and framework
- **[🔍 Troubleshooting](troubleshooting.md)** - Common issues and solutions
- **[🌐 Frontend](frontend.md)** - Frontend development

## 🔍 Search Documentation

### **Common Topics**

#### **Authentication**
- **[🔧 Configuration](configuration.md#authentication-modes)** - GitHub App vs Personal Access Token
- **[📡 Webhooks](webhooks.md#webhook-security)** - Webhook signature verification
- **[🔍 Troubleshooting](troubleshooting.md#authentication-problems)** - Auth issues and solutions

#### **AI & Reviews**
- **[🤖 Review Process](review-process.md)** - How the multi-agent system works
- **[📖 Usage Guide](usage.md#understanding-bot-responses)** - Understanding review output
- **[🔧 Configuration](configuration.md#ai-configuration)** - AI model setup

#### **Deployment**
- **[🚀 Deployment](deployment.md)** - Complete deployment guide
- **[🔧 Configuration](configuration.md)** - Environment setup
- **[🔍 Troubleshooting](troubleshooting.md#deployment-issues)** - Deployment problems

#### **Webhooks**
- **[📡 Webhooks](webhooks.md)** - Complete webhook documentation
- **[🔧 Configuration](configuration.md#webhook-configuration)** - Webhook setup
- **[🔍 Troubleshooting](troubleshooting.md#webhook-delivery-issues)** - Webhook problems

### **Quick Reference**

#### **Environment Variables**
```bash
# Required for all modes
AI_API=https://api.openai.com/v1
AI_KEY=sk-your-openai-key

# GitHub App mode (recommended)
GITHUB_APP_ID=your_app_id
GITHUB_PRIVATE_KEY="-----BEGIN..."
GITHUB_WEBHOOK_SECRET=your_secret
BOT_USERNAME=your-bot-name[bot]

# Personal Access Token mode
GITHUB_TOKEN=ghp_your_token
BOT_USERNAME=your-bot-name

# Optional: Redis
UPSTASH_REDIS_REST_URL=your_redis_url
UPSTASH_REDIS_REST_TOKEN=your_token
```

#### **API Endpoints**
```bash
# Health and status
GET /health
GET /api/status
GET /api/status/uptime

# Analytics
GET /api/analytics
GET /api/webhooks
GET /api/troubleshoot

# Webhook endpoint
POST /webhook
```

#### **Bot Commands**
```bash
# Trigger reviews
@Xibe-review please review this PR
@Xibe-review check security
@Xibe-review analyze performance

# Ask specific questions
@Xibe-review is this approach secure?
@Xibe-review should I use environment variables?
```

## 🚨 Common Issues & Solutions

### **Bot Not Responding**
1. **Check Status**: [Health Check](troubleshooting.md#bot-not-responding)
2. **Verify Authentication**: [Auth Issues](troubleshooting.md#authentication-problems)
3. **Test Webhooks**: [Webhook Issues](troubleshooting.md#webhook-delivery-issues)

### **Review Quality Issues**
1. **Provide Context**: [PR Optimization](usage.md#optimizing-for-ai-analysis)
2. **Ask Specific Questions**: [Contextual Reviews](usage.md#contextual-reviews)
3. **Check Configuration**: [AI Configuration](configuration.md#ai-configuration)

### **Performance Issues**
1. **Check Resources**: [Performance Monitoring](troubleshooting.md#performance-monitoring)
2. **Review Configuration**: [Model Selection](configuration.md#multi-agent-model-configuration)
3. **Monitor API Usage**: [Rate Limiting](troubleshooting.md#rate-limiting)

## 📞 Getting Help

### **Quick Solutions**
- **Check Status**: Visit your bot's `/status` endpoint
- **View Logs**: Check `/api/webhooks` for recent activity
- **Test Configuration**: Use `/api/troubleshoot` for diagnostics

### **Community Resources**
- **Issues**: [GitHub Issues](https://github.com/iotserver24/xibe-pr1/issues)
- **Discussions**: [GitHub Discussions](https://github.com/iotserver24/xibe-pr1/discussions)
- **Documentation**: This comprehensive guide

### **Professional Support**
- **Enterprise Support**: Priority support for large deployments
- **Custom Development**: Tailored solutions for specific needs
- **Training**: Team training and onboarding

## 📈 Documentation Updates

This documentation is continuously updated and improved:

- **Version 1.0.0**: Initial comprehensive documentation
- **Regular Updates**: Based on user feedback and new features
- **Community Contributions**: Welcome improvements and corrections

---

**Need help finding something?** Check the [Troubleshooting Guide](troubleshooting.md) or search the documentation using your browser's find function (Ctrl+F).
