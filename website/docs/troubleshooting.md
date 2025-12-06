# 🔍 Troubleshooting Guide

This comprehensive troubleshooting guide covers common issues, error scenarios, debugging techniques, and solutions for xibe-pr1 deployment and operation.

## 🚨 Quick Diagnostics

Before diving into specific issues, run these diagnostic commands to identify common problems:

```bash
# Check bot status
curl https://your-domain.com/health

# Check detailed status
curl https://your-domain.com/api/status

# Check configuration
curl https://your-domain.com/api/troubleshoot

# Check recent webhooks
curl https://your-domain.com/api/webhooks?limit=5
```

## 🤖 Bot Not Responding

### **Symptoms**
- Bot doesn't react to PR mentions
- No reviews generated for PR comments
- Webhook events not processed

### **Common Causes & Solutions**

#### **1. Authentication Issues**

**GitHub App Not Installed**
```bash
# Check if GitHub App is properly installed
curl -H "Authorization: Bearer $GITHUB_TOKEN" https://api.github.com/user

# Should return user information, not 401/403 errors
```

**Solution**:
1. Go to [GitHub Apps Settings](https://github.com/settings/apps)
2. Find your GitHub App
3. Click **"Install App"** in sidebar
4. Install on target repositories

**Personal Access Token Issues**
```bash
# Test PAT authentication
curl -H "Authorization: Bearer $GITHUB_TOKEN" https://api.github.com/user

# Should return: "message": "Requires authentication"
# If 403/404, token may be expired or invalid
```

**Solution**:
1. Go to [GitHub Personal Access Tokens](https://github.com/settings/tokens)
2. Generate new token with `repo` and `write:discussion` permissions
3. Update `.env` file with new token

#### **2. Webhook Configuration Issues**

**Webhook URL Not Accessible**
```bash
# Test webhook endpoint accessibility
curl -I https://your-domain.com/webhook

# Should return 200 OK
```

**Solution**:
1. Verify domain is pointing to correct server
2. Check firewall allows port 3000 (or your configured port)
3. Ensure reverse proxy (nginx) is configured correctly
4. Test with `curl -X POST` to verify webhook processing

**Webhook Secret Mismatch**
```bash
# Check webhook secret configuration
node -e "console.log('Secret configured:', process.env.GITHUB_WEBHOOK_SECRET ? 'Yes' : 'No')"

# Compare with GitHub webhook settings
# Repository Settings → Webhooks → Edit → Secret field
```

**Solution**:
1. Update webhook secret in GitHub repository settings
2. Ensure secret matches exactly (case-sensitive, no extra spaces)
3. Restart bot after updating secret

#### **3. Bot Mention Detection**

**Incorrect Bot Username**
```bash
# Check configured bot username
node -e "console.log('Bot username:', process.env.BOT_USERNAME)"

# Test mention detection
node -e "
const text = '@xibe-review please review this PR';
const botName = process.env.BOT_USERNAME || 'xibe-review';
const isMentioned = new RegExp(\`@\${botName}\`, 'i').test(text);
console.log('Mention detected:', isMentioned);
"
```

**Solution**:
1. Update `BOT_USERNAME` in `.env` file
2. Ensure username matches exactly (case-sensitive)
3. Test with simple comment: `@botusername please review`

**Mention Format Issues**
```bash
# The bot detects various mention formats:
# ✅ @xibe-review
# ✅ @xibe-review[bot]
# ✅ xibe review
# ✅ xibe-review
# ❌ @xibe-review-bot (if username is xibe-review)
```

**Solution**:
1. Use exact bot username in mentions
2. Try different formats if one doesn't work
3. Check bot logs for mention detection details

## 🔑 Authentication Problems

### **GitHub App Authentication**

#### **Installation ID Issues**
```bash
# Check if installation ID is being received
curl -X POST https://your-domain.com/webhook \
  -H "X-GitHub-Event: issue_comment" \
  -H "Content-Type: application/json" \
  -d '{
    "action": "created",
    "issue": {"number": 1, "pull_request": {"url": "https://api.github.com/..."}},
    "comment": {"body": "@xibe-review test", "user": {"login": "test"}},
    "repository": {"name": "test", "full_name": "owner/repo", "owner": {"login": "owner"}},
    "installation": {"id": 12345678}
  }'

# Check logs for installation ID processing
pm2 logs xibe-pr1-bot | grep "installation ID"
```

**Common Issues**:
- Installation ID is `null` or missing from webhook payload
- GitHub App not installed on the repository
- Installation ID doesn't match configured app

**Solutions**:
1. **Verify App Installation**: Go to repository → Settings → GitHub Apps → Ensure your app is installed
2. **Check Repository Permissions**: Verify app has necessary permissions (Contents, Issues, Pull requests)
3. **Reinstall App**: Remove and reinstall the app to refresh installation ID

#### **Private Key Issues**
```bash
# Validate private key format
node -e "
const key = process.env.GITHUB_PRIVATE_KEY;
console.log('Key length:', key?.length || 0);
console.log('Has BEGIN marker:', key?.includes('BEGIN') || false);
console.log('Has END marker:', key?.includes('END') || false);
"
```

**Solutions**:
1. **Regenerate Private Key**: In GitHub App settings → Private keys → Generate new private key
2. **Fix Key Format**: Ensure key includes `-----BEGIN RSA PRIVATE KEY-----` and `-----END RSA PRIVATE KEY-----`
3. **Copy Exactly**: Copy entire key including markers and newlines

### **Personal Access Token Issues**

#### **Token Permissions**
```bash
# Test token permissions
curl -H "Authorization: Bearer $GITHUB_TOKEN" \
     -H "Accept: application/vnd.github.v3+json" \
     https://api.github.com/repos/owner/repo

# Should return repository info, not 404
```

**Required Scopes**:
- ✅ `repo` - Full repository access
- ✅ `write:discussion` - Comment on issues and PRs
- ✅ `read:org` - Read organization membership

**Solution**:
1. Generate new token with required scopes
2. Update `.env` file with new token
3. Test token immediately after generation

#### **Token Expiration**
```bash
# Check if token is expired
curl -H "Authorization: Bearer $GITHUB_TOKEN" https://api.github.com/user

# If 401 Unauthorized, token may be expired
```

**Solution**:
1. Generate new personal access token
2. Update all environment files with new token
3. Restart bot and test immediately

## 🧠 AI Integration Issues

### **OpenAI API Problems**

#### **API Key Issues**
```bash
# Test OpenAI API key
curl -H "Authorization: Bearer $AI_KEY" \
     -H "Content-Type: application/json" \
     -d '{"model": "gpt-3.5-turbo", "messages": [{"role": "user", "content": "Hello"}]}' \
     https://api.openai.com/v1/chat/completions

# Should return JSON response, not 401
```

**Common Issues**:
- Invalid API key format (should start with `sk-`)
- API key doesn't have sufficient permissions
- Account has insufficient credits

**Solutions**:
1. **Verify Key Format**: Ensure key starts with `sk-` and is 51 characters long
2. **Check Account Status**: Visit [OpenAI Platform](https://platform.openai.com/) to verify account status
3. **Monitor Usage**: Check usage dashboard for rate limits or billing issues

#### **Model Access Issues**
```bash
# Test specific model access
curl -H "Authorization: Bearer $AI_KEY" \
     -H "Content-Type: application/json" \
     -d '{"model": "gpt-4", "messages": [{"role": "user", "content": "Hello"}]}' \
     https://api.openai.com/v1/chat/completions
```

**Solutions**:
1. **Check Model Availability**: Ensure your account has access to the configured model
2. **GPT-4 Access**: GPT-4 requires separate approval and may not be available on all accounts
3. **Fallback Models**: Configure fallback models in environment variables

#### **Rate Limiting**
```bash
# Check rate limit status
curl -H "Authorization: Bearer $AI_KEY" \
     https://api.openai.com/v1/models

# Look for rate limit headers in response
```

**Rate Limit Headers**:
- `X-RateLimit-Limit`: Maximum requests per minute
- `X-RateLimit-Remaining`: Remaining requests
- `X-RateLimit-Reset`: Time when limit resets

**Solutions**:
1. **Monitor Usage**: Check [OpenAI Usage Dashboard](https://platform.openai.com/usage)
2. **Upgrade Plan**: Consider upgrading to higher usage limits
3. **Implement Retry Logic**: Add exponential backoff for rate-limited requests

### **Custom AI Provider Issues**

#### **API Compatibility**
```bash
# Test custom AI provider
curl -H "Authorization: Bearer $AI_KEY" \
     -H "Content-Type: application/json" \
     -d '{"model": "your-model", "messages": [{"role": "user", "content": "Hello"}]}' \
     $AI_API/chat/completions

# Should return OpenAI-compatible response format
```

**Required Format**:
```json
{
  "choices": [
    {
      "message": {
        "content": "Response text",
        "role": "assistant"
      }
    }
  ],
  "usage": {
    "prompt_tokens": 10,
    "completion_tokens": 20,
    "total_tokens": 30
  }
}
```

**Solutions**:
1. **Verify API Compatibility**: Ensure provider supports OpenAI-style endpoints
2. **Check Model Names**: Use correct model names for your provider
3. **Test Authentication**: Verify API key format and permissions

## 📡 Webhook Delivery Issues

### **GitHub Webhook Delivery**

#### **Check Delivery Status**
```bash
# View webhook delivery in GitHub
# Repository Settings → Webhooks → Recent Deliveries

# Look for failed deliveries (red status)
# Click on failed delivery to see error details
```

**Common Delivery Failures**:
- `404 Not Found` - Webhook URL not accessible
- `403 Forbidden` - Authentication or permission issues
- `500 Internal Server Error` - Bot crashed or error in processing
- `502 Bad Gateway` - Reverse proxy configuration issues

#### **Network Issues**
```bash
# Test network connectivity
curl -v https://your-domain.com/webhook

# Check DNS resolution
nslookup your-domain.com

# Test from GitHub's perspective
# Use webhook.site to test GitHub delivery
```

**Solutions**:
1. **Verify Domain**: Ensure domain points to correct server IP
2. **Check Firewall**: Allow inbound connections on port 3000 (or configured port)
3. **SSL Certificate**: Ensure valid SSL certificate for HTTPS
4. **Reverse Proxy**: Verify nginx/Apache proxy configuration

### **Webhook Signature Verification**

#### **Signature Mismatch**
```bash
# Test signature verification
node -e "
const crypto = require('crypto');
const secret = process.env.GITHUB_WEBHOOK_SECRET;
const payload = JSON.stringify({test: 'data'});
const signature = 'sha256=' + crypto.createHmac('sha256', secret).update(payload).digest('hex');
console.log('Expected signature:', signature);
"
```

**Solutions**:
1. **Check Secret Format**: Ensure secret is exactly 32+ characters, no extra spaces
2. **Update GitHub**: Update webhook secret in GitHub repository settings
3. **Restart Bot**: Restart after updating secret
4. **Test Delivery**: Trigger test webhook delivery from GitHub

## 🗄️ Database Issues

### **Redis Connection Problems**

#### **Upstash Redis Issues**
```bash
# Test Redis connection
curl -H "Authorization: Bearer $UPSTASH_REDIS_REST_TOKEN" \
     $UPSTASH_REDIS_REST_URL/ping

# Should return: PONG
```

**Common Issues**:
- Invalid REST URL format
- Incorrect REST token
- Network connectivity issues
- Account limits or suspension

**Solutions**:
1. **Verify Credentials**: Double-check URL and token in Upstash dashboard
2. **Test Connection**: Use Redis CLI or online tools to test connectivity
3. **Check Account Status**: Verify Upstash account is active and within limits
4. **Network Issues**: Ensure no firewall blocking outbound connections

#### **Local Redis Issues**
```bash
# Check if Redis is running
redis-cli ping

# Should return: PONG

# Check Redis configuration
redis-cli config get port
redis-cli config get bind
```

**Solutions**:
1. **Start Redis Server**: `redis-server` or `sudo systemctl start redis`
2. **Check Port**: Ensure Redis running on correct port (default 6379)
3. **Network Access**: Verify bot can connect to Redis server
4. **Memory Issues**: Check Redis memory usage and limits

### **Data Persistence Issues**

```bash
# Check Redis data
redis-cli keys "webhook:*" | wc -l
redis-cli keys "review:*" | wc -l
redis-cli keys "analytics:*"

# Should show stored data counts
```

**Solutions**:
1. **Check Data Retention**: Webhook logs expire after 7 days, reviews after 30 days
2. **Memory Limits**: Ensure Redis has sufficient memory for operations
3. **Connection Stability**: Verify stable connection between bot and Redis
4. **Data Backup**: Consider regular backups of important data

## 🚀 Deployment Issues

### **Application Startup Problems**

#### **Port Binding Issues**
```bash
# Check if port is in use
netstat -tlnp | grep :3000

# Or use lsof
lsof -i :3000

# Kill conflicting process
sudo kill -9 <process_id>
```

**Solutions**:
1. **Change Port**: Set different port in environment variables
2. **Kill Conflicting Process**: Terminate processes using the port
3. **Check Firewall**: Ensure port is open and accessible
4. **Reverse Proxy**: Configure nginx to proxy to application port

#### **Environment Variable Issues**
```bash
# Check environment variables
node -e "
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('PORT:', process.env.PORT);
console.log('AI_KEY:', process.env.AI_KEY ? 'Set' : 'Missing');
console.log('GITHUB_APP_ID:', process.env.GITHUB_APP_ID);
console.log('BOT_USERNAME:', process.env.BOT_USERNAME);
"
```

**Solutions**:
1. **Check .env File**: Ensure .env file exists and has correct format
2. **Load Environment**: Restart application after changing .env
3. **Variable Format**: Ensure no extra spaces or quotes around values
4. **File Permissions**: Verify .env file is readable by application user

### **Process Management Issues**

#### **PM2 Problems**
```bash
# Check PM2 status
pm2 status

# View PM2 logs
pm2 logs xibe-pr1-bot --lines 50

# Check PM2 configuration
pm2 show xibe-pr1-bot

# Restart application
pm2 restart xibe-pr1-bot
```

**Solutions**:
1. **Check Logs**: `pm2 logs` for detailed error information
2. **Process Status**: `pm2 status` to verify application is running
3. **Resource Usage**: `pm2 monit` to monitor resource consumption
4. **Configuration**: `pm2 show` to check process configuration

#### **Docker Issues**
```bash
# Check Docker containers
docker ps -a

# View Docker logs
docker logs xibe-pr1-bot

# Check Docker resource usage
docker stats

# Restart container
docker restart xibe-pr1-bot
```

**Solutions**:
1. **Container Status**: `docker ps` to check if container is running
2. **Resource Limits**: Check memory and CPU limits in docker-compose.yml
3. **Network Configuration**: Verify port mapping and network connectivity
4. **Environment Variables**: Ensure .env file is properly mounted

## 📊 Monitoring & Debugging

### **Log Analysis**

#### **Application Logs**
```bash
# PM2 logs
pm2 logs xibe-pr1-bot --lines 100

# Docker logs
docker logs -f --tail 100 xibe-pr1-bot

# System logs
sudo journalctl -u xibe-pr1-bot -f
```

#### **Webhook Logs**
```bash
# Recent webhook activity
curl https://your-domain.com/api/webhooks?limit=10

# Failed webhooks
curl https://your-domain.com/api/webhooks?status=error

# Specific webhook details
curl https://your-domain.com/api/webhook/webhook_123456_abc123
```

#### **Redis Logs**
```bash
# Redis slow queries
redis-cli slowlog get

# Redis memory usage
redis-cli info memory

# Redis connected clients
redis-cli info clients
```

### **Performance Monitoring**

#### **Response Time Issues**
```bash
# Test API response times
curl -w "@curl-format.txt" -o /dev/null -s https://your-domain.com/api/status

# curl-format.txt contents:
# time_namelookup:  %{time_namelookup}\n
# time_connect:  %{time_connect}\n
# time_appconnect:  %{time_appconnect}\n
# time_pretransfer:  %{time_pretransfer}\n
# time_redirect:  %{time_redirect}\n
# time_starttransfer:  %{time_starttransfer}\n
# time_total:  %{time_total}\n
```

**Expected Response Times**:
- Health check: < 100ms
- API status: < 500ms
- Webhook processing: 10-60 seconds (includes AI processing)

#### **Resource Usage**
```bash
# System resources (VPS)
htop

# PM2 monitoring
pm2 monit

# Docker resources
docker stats

# Application memory
node -e "console.log('Memory:', Math.round(process.memoryUsage().heapUsed / 1024 / 1024), 'MB')"
```

### **Network Diagnostics**

#### **Connectivity Tests**
```bash
# Test external connectivity
curl -I https://api.openai.com/v1/models

# Test GitHub API
curl -I https://api.github.com/user

# Test Redis connectivity
curl -I $UPSTASH_REDIS_REST_URL/ping
```

#### **DNS Resolution**
```bash
# Check DNS resolution
nslookup your-domain.com
dig your-domain.com

# Check SSL certificate
openssl s_client -connect your-domain.com:443 -servername your-domain.com
```

## 🔧 Advanced Debugging

### **Development Mode Debugging**

#### **Enable Debug Logging**
```env
# Enable detailed logging
NODE_ENV=development
LOG_LEVEL=debug
```

#### **Test with Mock Data**
```bash
# Test webhook processing with mock data
node test-webhook.js

# Test AI review generation
node test-multi-agent.js

# Test all functionality
node test-all.js
```

#### **Interactive Debugging**
```bash
# Start with Node.js inspector
node --inspect bot.js

# Use Chrome DevTools or IDE debugger
# Set breakpoints in bot.js for step-through debugging
```

### **Production Debugging**

#### **Enable Debug Endpoints**
```javascript
// Add temporary debug endpoint
app.get('/debug', (req, res) => {
  res.json({
    environment: process.env,
    memory: process.memoryUsage(),
    uptime: process.uptime(),
    redis: redis ? 'connected' : 'disconnected'
  });
});
```

#### **Log Enhancement**
```javascript
// Enhanced logging for production debugging
console.log('🔍 Debug Info:', {
  timestamp: new Date().toISOString(),
  event: 'webhook_received',
  payload: JSON.stringify(req.body, null, 2),
  headers: req.headers,
  userAgent: req.headers['user-agent']
});
```

### **Memory Leak Detection**

#### **Monitor Memory Usage**
```bash
# Monitor PM2 memory
pm2 monit

# Check for memory leaks
node -e "
setInterval(() => {
  const mem = process.memoryUsage();
  console.log(\`Memory: RSS=\${Math.round(mem.rss/1024/1024)}MB, Heap=\${Math.round(mem.heapUsed/1024/1024)}MB\`);
}, 5000);
"
```

#### **Heap Analysis**
```bash
# Generate heap snapshot
node --expose-gc bot.js &
PID=$!
kill -USR2 $PID  # Generates heap snapshot

# Analyze with Chrome DevTools
# Look for Memory tab → Load heap snapshot
```

## 📞 Getting Help

### **Community Support**

#### **GitHub Issues**
1. **Search Existing Issues**: Check if problem already reported
2. **Create New Issue**: Provide detailed information:
   - Environment details (Node.js version, OS, deployment method)
   - Steps to reproduce the issue
   - Expected vs actual behavior
   - Error logs and stack traces
   - Configuration details (without sensitive data)

#### **GitHub Discussions**
1. **General Questions**: Use discussions for setup questions
2. **Feature Requests**: Propose new features or improvements
3. **Community Help**: Get help from other users

### **Professional Support**

#### **Enterprise Support**
- **Priority Support**: Direct access to development team
- **Custom Development**: Tailored solutions for specific needs
- **SLA Guarantees**: Guaranteed response times and uptime
- **Dedicated Infrastructure**: Custom deployment and hosting

#### **Support Channels**
- **Email**: support@xibe-pr1.com
- **Discord**: Community Discord server
- **Documentation**: This comprehensive troubleshooting guide

## 📋 Emergency Procedures

### **Bot Down Emergency**
```bash
# Immediate actions when bot stops responding

# 1. Check basic connectivity
curl https://your-domain.com/health

# 2. Check process status
pm2 status
docker ps

# 3. Check recent logs
pm2 logs xibe-pr1-bot --lines 20
docker logs xibe-pr1-bot --tail 20

# 4. Restart if needed
pm2 restart xibe-pr1-bot
docker restart xibe-pr1-bot

# 5. Check system resources
htop
df -h
```

### **Security Incident Response**
```bash
# If you suspect a security issue

# 1. Immediately rotate all secrets
# Generate new API keys, webhook secrets, tokens

# 2. Review recent webhook logs
curl https://your-domain.com/api/webhooks?limit=50

# 3. Check for unauthorized access
# Review GitHub App installations and permissions

# 4. Audit configuration changes
# Check when and how configuration was last modified

# 5. Contact support if needed
# Report security incidents immediately
```

### **Performance Emergency**
```bash
# When bot becomes slow or unresponsive

# 1. Check resource usage
pm2 monit
docker stats

# 2. Review recent load
curl https://your-domain.com/api/webhooks?limit=100

# 3. Check AI API usage
# Monitor OpenAI dashboard for rate limits

# 4. Scale resources if needed
# Increase server resources or add instances

# 5. Optimize configuration
# Consider switching to faster AI models
```

## 📊 Diagnostic Commands

### **Complete System Check**
```bash
#!/bin/bash
# comprehensive-diagnostics.sh

echo "🔍 xibe-pr1 Comprehensive Diagnostics"
echo "====================================="

# 1. Basic connectivity
echo -n "🌐 Webhook endpoint: "
curl -s -o /dev/null -w "%{http_code}" https://your-domain.com/health && echo " ✅" || echo " ❌"

# 2. Application status
echo -n "🤖 Bot status: "
curl -s https://your-domain.com/api/status | grep -q "running" && echo " ✅" || echo " ❌"

# 3. Authentication
echo -n "🔐 GitHub auth: "
if [ -n "$GITHUB_APP_ID" ] || [ -n "$GITHUB_TOKEN" ]; then echo " ✅"; else echo " ❌"; fi

# 4. AI configuration
echo -n "🧠 AI config: "
if [ -n "$AI_API" ] && [ -n "$AI_KEY" ]; then echo " ✅"; else echo " ❌"; fi

# 5. Database connectivity
echo -n "🗄️ Redis: "
curl -s $UPSTASH_REDIS_REST_URL/ping -H "Authorization: Bearer $UPSTASH_REDIS_REST_TOKEN" | grep -q "PONG" && echo " ✅" || echo " ❌"

# 6. Recent activity
echo -n "📊 Recent reviews: "
curl -s https://your-domain.com/api/webhooks | jq '.total // 0'

echo
echo "✅ All systems operational" || echo "❌ Issues detected - check logs"
```

### **Quick Health Check**
```bash
# One-liner health check
curl -s https://your-domain.com/health && curl -s https://your-domain.com/api/status | grep -q "running" && echo "Bot is healthy" || echo "Bot needs attention"
```

---

This troubleshooting guide provides comprehensive solutions for common issues, debugging techniques, and maintenance procedures to keep your xibe-pr1 bot running smoothly.
