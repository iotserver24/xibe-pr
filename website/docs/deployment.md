# 🚀 Deployment Guide

This comprehensive deployment guide covers all options for deploying xibe-pr1, from development setups to enterprise-scale production deployments. Choose the deployment method that best fits your needs and infrastructure.

## 📋 Deployment Options

| Method | Best For | Difficulty | Cost | Scalability |
|--------|----------|------------|------|-------------|
| **[Railway](#railway-deployment)** | Beginners, Quick setup | ⭐⭐ | 💰 | 📈 High |
| **[Render](#render-deployment)** | Production, Auto-scaling | ⭐⭐⭐ | 💰 | 📈 High |
| **[Docker](#docker-deployment)** | Control, Portability | ⭐⭐⭐⭐ | 💰 | 📈 High |
| **[VPS](#vps-deployment)** | Full control, Custom | ⭐⭐⭐⭐⭐ | 💰 | 📈 High |
| **[Vercel](#vercel-deployment)** | Serverless, Edge | ⭐⭐⭐ | 💰 | 📈 High |

---

## 🚄 Railway Deployment (Recommended for Beginners)

Railway provides the simplest deployment experience with automatic HTTPS, scaling, and database management.

### **Step 1: Connect Repository**
1. Create account at [Railway](https://railway.app/)
2. Click **"New Project"** → **"Deploy from GitHub"**
3. Connect your GitHub repository
4. Railway will automatically detect the configuration

### **Step 2: Configure Environment Variables**
Add these environment variables in Railway dashboard:

```env
# Required
AI_API=https://api.openai.com/v1
AI_KEY=sk-your-openai-api-key

# GitHub App (recommended)
GITHUB_APP_ID=your_github_app_id
GITHUB_PRIVATE_KEY="-----BEGIN RSA PRIVATE KEY-----\n..."
GITHUB_WEBHOOK_SECRET=your_32_character_secret
BOT_USERNAME=your-bot-name[bot]

# Optional: Redis for analytics
UPSTASH_REDIS_REST_URL=https://your-redis.upstash.io
UPSTASH_REDIS_REST_TOKEN=your_redis_token
```

### **Step 3: Deploy**
Railway automatically:
- ✅ Detects Node.js application
- ✅ Installs dependencies
- ✅ Sets up environment
- ✅ Deploys with zero-downtime
- ✅ Provides HTTPS automatically

### **Step 4: Set Up GitHub Integration**
1. Configure webhook URL: `https://your-app.railway.app/webhook`
2. Set up GitHub App or repository webhooks
3. Test with a PR comment: `@your-bot-name please review this PR`

**Railway Benefits**:
- ✅ **Zero Config**: Automatic deployment and scaling
- ✅ **Built-in Database**: Redis available as add-on
- ✅ **HTTPS**: Automatic SSL certificate management
- ✅ **Monitoring**: Built-in logs and metrics
- ✅ **Custom Domains**: Easy domain configuration

---

## 🎨 Render Deployment (Production Scale)

Render is perfect for production applications with managed databases and automatic scaling.

### **Step 1: Create Render Account**
1. Sign up at [Render](https://render.com/)
2. Connect GitHub repository
3. Create new **Web Service**

### **Step 2: Configure Service**
```txt
Name: xibe-pr1-bot
Runtime: Node.js
Build Command: npm install
Start Command: npm start
```

### **Step 3: Environment Variables**
Add environment variables in Render dashboard:

```env
NODE_ENV=production
PORT=3000

# GitHub App Configuration
GITHUB_APP_ID=your_github_app_id
GITHUB_PRIVATE_KEY="-----BEGIN RSA PRIVATE KEY-----\n..."
GITHUB_WEBHOOK_SECRET=your_32_character_secret
BOT_USERNAME=your-bot-name[bot]

# AI Configuration
AI_API=https://api.openai.com/v1
AI_KEY=sk-your-openai-api-key

# Redis Configuration
UPSTASH_REDIS_REST_URL=https://your-redis.upstash.io
UPSTASH_REDIS_REST_TOKEN=your_redis_token
```

### **Step 4: Advanced Settings**
```txt
Auto-Deploy: Yes (automatic deployment on git push)
Branch: main
Root Directory: . (leave empty)
```

### **Step 5: Deploy**
1. Click **"Create Web Service"**
2. Render automatically builds and deploys
3. Use the provided URL for webhook configuration

**Render Benefits**:
- ✅ **Auto-scaling**: Handles traffic spikes automatically
- ✅ **Managed Database**: Redis and PostgreSQL available
- ✅ **Zero-downtime**: Rolling deployments
- ✅ **Global CDN**: Fast response times worldwide
- ✅ **Custom Domains**: Professional domain setup

---

## 🐳 Docker Deployment (Maximum Control)

Docker provides the most control and portability for enterprise deployments.

### **Step 1: Build Docker Image**
```dockerfile
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy source code
COPY . .

# Create non-root user
USER node

# Expose port
EXPOSE 3000

# Start application
CMD ["node", "bot.js"]
```

### **Step 2: Build and Run**
```bash
# Build image
docker build -t xibe-pr1-bot .

# Run with environment variables
docker run -d \
  --name xibe-pr1-bot \
  -p 3000:3000 \
  --env-file .env \
  --restart unless-stopped \
  xibe-pr1-bot
```

### **Step 3: Docker Compose (Recommended)**
```yaml
version: '3.8'
services:
  xibe-pr1-bot:
    build: .
    ports:
      - "3000:3000"
    env_file:
      - .env
    restart: unless-stopped
    environment:
      - NODE_ENV=production
    volumes:
      - ./logs:/app/logs
    logging:
      driver: "json-file"
      options:
        max-size: "10m"
        max-file: "3"
```

### **Step 4: Deploy with Docker Compose**
```bash
# Deploy
docker-compose up -d

# View logs
docker-compose logs -f xibe-pr1-bot

# Update deployment
docker-compose pull && docker-compose up -d
```

### **Step 5: Production Optimizations**
```yaml
# Enhanced docker-compose.yml for production
version: '3.8'
services:
  xibe-pr1-bot:
    build:
      context: .
      dockerfile: Dockerfile.production
    ports:
      - "127.0.0.1:3000:3000"  # Only accessible locally
    env_file:
      - .env.production
    restart: unless-stopped
    environment:
      - NODE_ENV=production
    volumes:
      - redis-data:/data
    depends_on:
      - redis
    logging:
      driver: "json-file"
      options:
        max-size: "10m"
        max-file: "5"

  redis:
    image: redis:7-alpine
    volumes:
      - redis-data:/data
    restart: unless-stopped
    command: redis-server --appendonly yes

volumes:
  redis-data:
```

**Docker Benefits**:
- ✅ **Portability**: Run anywhere Docker is supported
- ✅ **Isolation**: Complete environment isolation
- ✅ **Version Control**: Exact reproduction of deployment
- ✅ **Security**: Reduced attack surface
- ✅ **Scaling**: Easy horizontal scaling with orchestration

---

## 🖥️ VPS Deployment (Full Control)

Traditional VPS deployment for maximum control and customization.

### **Step 1: Server Setup**

#### **Ubuntu/Debian Setup**
```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js (using NodeSource)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2 for process management
sudo npm install -g pm2

# Create dedicated user
sudo useradd -m -s /bin/bash xibe-bot
sudo usermod -aG sudo xibe-bot
```

#### **CentOS/RHEL Setup**
```bash
# Install Node.js
curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
sudo yum install -y nodejs

# Install PM2
sudo npm install -g pm2

# Create user
sudo useradd -m -s /bin/bash xibe-bot
```

### **Step 2: Application Setup**
```bash
# Switch to bot user
sudo su - xibe-bot

# Clone repository
git clone https://github.com/your-username/xibe-pr1.git
cd xibe-pr1

# Install dependencies
npm install --production

# Configure environment
cp .env.example .env
nano .env  # Configure your credentials
```

### **Step 3: PM2 Configuration**
```bash
# Start with PM2
pm2 start bot.js --name xibe-pr1-bot

# Save PM2 configuration
pm2 save

# Set up auto-start on boot
pm2 startup
sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u xibe-bot --hp /home/xibe-bot
pm2 save
```

### **Step 4: Reverse Proxy Setup (nginx)**
```bash
# Install nginx
sudo apt install nginx

# Create site configuration
sudo nano /etc/nginx/sites-available/xibe-pr1-bot
```

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
# Enable site and restart nginx
sudo ln -s /etc/nginx/sites-available/xibe-pr1-bot /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx

# Install SSL (Let's Encrypt)
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

### **Step 5: Security Hardening**
```bash
# Configure firewall
sudo ufw allow ssh
sudo ufw allow 'Nginx Full'
sudo ufw --force enable

# Set up fail2ban
sudo apt install fail2ban
sudo systemctl enable fail2ban

# Configure log rotation
sudo nano /etc/logrotate.d/xibe-pr1-bot
```

```txt
/home/xibe-bot/.pm2/logs/*.log {
    daily
    missingok
    rotate 30
    compress
    notifempty
    create 0644 xibe-bot xibe-bot
    postrotate
        pm2 reloadLogs
    endscript
}
```

**VPS Benefits**:
- ✅ **Full Control**: Complete system access and customization
- ✅ **Cost Effective**: Lower costs for dedicated resources
- ✅ **Security**: Direct control over security measures
- ✅ **Performance**: Dedicated resources with no noisy neighbors
- ✅ **Flexibility**: Install any additional tools or services needed

---

## ☁️ Vercel Deployment (Serverless)

Deploy as serverless functions for edge computing and global distribution.

### **Step 1: Prepare for Vercel**
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login
```

### **Step 2: Configure Vercel**
```json
// vercel.json
{
  "version": 2,
  "builds": [
    {
      "src": "bot.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/webhook",
      "dest": "/bot.js"
    },
    {
      "src": "/api/(.*)",
      "dest": "/bot.js"
    },
    {
      "src": "/(.*)",
      "dest": "/bot.js"
    }
  ],
  "env": {
    "NODE_ENV": "production"
  }
}
```

### **Step 3: Environment Variables**
```bash
# Set environment variables in Vercel
vercel env add AI_API
vercel env add AI_KEY
vercel env add GITHUB_APP_ID
vercel env add GITHUB_PRIVATE_KEY
vercel env add GITHUB_WEBHOOK_SECRET
vercel env add BOT_USERNAME
```

### **Step 4: Deploy**
```bash
# Deploy to Vercel
vercel

# Set production environment
vercel --prod
```

**Vercel Benefits**:
- ✅ **Global Edge**: Deploy to edge locations worldwide
- ✅ **Auto-scaling**: Infinite scaling based on demand
- ✅ **Zero Maintenance**: No server management required
- ✅ **HTTPS**: Automatic SSL and security
- ✅ **CI/CD**: Automatic deployments on git push

---

## 🔧 Development Deployment

### **Local Development Setup**
```bash
# Clone repository
git clone https://github.com/your-username/xibe-pr1.git
cd xibe-pr1

# Install dependencies
npm install

# Set up environment
cp .env.example .env

# Edit .env with test credentials
nano .env

# Start development server
npm run dev
```

**Development Environment**:
```env
NODE_ENV=development
LOG_LEVEL=debug
PORT=3000

# Test mode (no GitHub auth needed)
AI_API=https://api.openai.com/v1
AI_KEY=sk-your-test-key

# Optional: Local Redis
REDIS_URL=redis://localhost:6379
```

### **Testing with ngrok**
```bash
# Install ngrok
# Download from https://ngrok.com/

# Start ngrok tunnel
ngrok http 3000

# Use ngrok URL for webhook configuration
# https://abc123.ngrok.io/webhook
```

### **Docker Development**
```bash
# Development with Docker
docker build -t xibe-pr1-dev .
docker run -p 3000:3000 \
  --env-file .env \
  -v $(pwd):/app \
  xibe-pr1-dev
```

---

## 🔒 Security Checklist

### **Before Deployment**
- [ ] Use HTTPS for all webhook URLs
- [ ] Configure strong webhook secrets (32+ characters)
- [ ] Set up proper firewall rules
- [ ] Use GitHub App authentication (not just PAT)
- [ ] Rotate API keys regularly

### **After Deployment**
- [ ] Verify webhook signature verification works
- [ ] Test with actual PR comments
- [ ] Monitor logs for security issues
- [ ] Set up alerts for webhook failures
- [ ] Regular security updates and patches

### **Production Security**
- [ ] Enable rate limiting
- [ ] Set up monitoring and alerting
- [ ] Use secrets management (not hardcoded)
- [ ] Implement proper backup procedures
- [ ] Regular security audits

---

## 📊 Monitoring & Maintenance

### **Health Monitoring**
```bash
# Check bot health
curl https://your-domain.com/health

# Get detailed status
curl https://your-domain.com/api/status

# Monitor webhook processing
curl https://your-domain.com/api/webhooks?limit=10
```

### **Log Management**
```bash
# PM2 logs (VPS)
pm2 logs xibe-pr1-bot --lines 50

# Docker logs
docker logs -f xibe-pr1-bot

# Railway/Render logs
# Access via platform dashboard
```

### **Performance Monitoring**
```bash
# Check resource usage (VPS)
htop

# Monitor PM2 metrics
pm2 monit

# Check application metrics
curl https://your-domain.com/api/status/uptime
```

### **Backup & Recovery**
```bash
# Database backup (Redis)
redis-cli save

# Configuration backup
cp .env .env.backup.$(date +%Y%m%d)

# Application backup
tar -czf xibe-pr1-backup-$(date +%Y%m%d).tar.gz .
```

---

## 🚨 Troubleshooting Deployment

### **Common Issues**

#### **Webhook Not Working**
```bash
# Test webhook endpoint
curl -X POST https://your-domain.com/webhook \
  -H "X-GitHub-Event: issue_comment" \
  -H "Content-Type: application/json" \
  -d '{"action": "created", "issue": {"number": 1}}'

# Check GitHub webhook delivery
# Repository Settings → Webhooks → Recent Deliveries
```

#### **Authentication Errors**
```bash
# Test GitHub authentication
curl -H "Authorization: Bearer $GITHUB_TOKEN" https://api.github.com/user

# Verify GitHub App installation
# GitHub App Settings → Installations
```

#### **Performance Issues**
```bash
# Check resource usage
pm2 monit

# Monitor memory usage
pm2 logs xibe-pr1-bot --lines 100 | grep -i memory

# Check for memory leaks
node -e "setInterval(() => console.log(process.memoryUsage()), 10000)"
```

### **Debug Commands**

```bash
# Test all functionality
node test-all.js

# Test webhook processing
node test-webhook.js

# Test AI integration
node test-multi-agent.js

# Validate configuration
node -e "
console.log('Environment:', process.env.NODE_ENV);
console.log('GitHub Auth:', process.env.GITHUB_APP_ID ? 'App' : process.env.GITHUB_TOKEN ? 'Token' : 'None');
console.log('AI Config:', process.env.AI_API && process.env.AI_KEY ? '✅' : '❌');
"
```

---

## 📈 Scaling & Performance

### **Horizontal Scaling**
```bash
# PM2 clustering (VPS)
pm2 start bot.js -i max --name xibe-pr1-bot

# Docker scaling
docker-compose up -d --scale xibe-pr1-bot=3

# Railway/Render scaling
# Configure in platform dashboard
```

### **Database Scaling**
```bash
# Redis clustering
# Configure in Upstash dashboard

# Connection pooling
# Handled automatically by Redis client
```

### **Load Balancing**
```nginx
# nginx load balancer configuration
upstream xibe-pr1-backend {
    server 127.0.0.1:3000;
    server 127.0.0.1:3001;
    server 127.0.0.1:3002;
}

server {
    listen 80;
    location / {
        proxy_pass http://xibe-pr1-backend;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

---

## 🔄 CI/CD Pipeline

### **GitHub Actions Deployment**
```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v3

    - name: Deploy to Railway
      run: |
        curl -X POST "https://api.railway.app/deploy" \
          -H "Authorization: Bearer ${{ secrets.RAILWAY_TOKEN }}" \
          -d "projectId=${{ secrets.RAILWAY_PROJECT_ID }}"
```

### **Automated Testing**
```yaml
# Test before deployment
- name: Run Tests
  run: |
    npm test
    npm run test:endpoints
    npm run test:config

- name: Security Scan
  uses: github/super-linter@v4
  env:
    DEFAULT_BRANCH: main
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

---

## 💰 Cost Optimization

### **Railway Pricing**
- **Free Tier**: Perfect for testing and small projects
- **Hobby Plan**: $5/month for small production apps
- **Pro Plan**: $20/month for high-traffic applications

### **Render Pricing**
- **Free Tier**: Limited for testing
- **Starter**: $7/month per service
- **Professional**: $25/month with more resources

### **VPS Cost Examples**
- **DigitalOcean**: $6-12/month for basic VPS
- **Linode**: $5-10/month for basic instance
- **AWS Lightsail**: $3.50-10/month

### **Redis Costs**
- **Upstash**: Free tier (10,000 requests/day), then $0.20 per 100,000 requests
- **Redis Labs**: Free tier, then pay-as-you-go
- **AWS ElastiCache**: $0.02-0.10 per hour depending on size

### **AI API Costs**
- **OpenAI GPT-4**: $0.03/1K input tokens, $0.06/1K output tokens
- **GPT-3.5 Turbo**: $0.002/1K tokens (much cheaper)
- **Average per review**: $0.05-0.15 depending on PR size and model

---

This deployment guide provides complete instructions for deploying xibe-pr1 in any environment, from development testing to enterprise-scale production deployments.
