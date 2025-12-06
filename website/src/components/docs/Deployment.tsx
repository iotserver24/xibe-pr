import React from 'react';

const Deployment: React.FC = () => {
  return (
    <div className="prose prose-lg max-w-none prose-invert">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">🚀 Deployment</h1>
        <p className="text-xl text-gray-300 leading-relaxed">
          Complete deployment guide for the XIbe Review bot, including multiple deployment options,
          configuration management, and production best practices.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">📋 Deployment Options</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3">🖥️</span>
              <div>
                <h3 className="text-lg font-semibold text-blue-400">VPS Deployment</h3>
                <p className="text-sm text-gray-400">Traditional server deployment</p>
              </div>
            </div>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• Ubuntu/Debian/CentOS servers</li>
              <li>• PM2 process management</li>
              <li>• Nginx reverse proxy</li>
              <li>• Systemd service management</li>
              <li>• Full control over environment</li>
            </ul>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3">🐳</span>
              <div>
                <h3 className="text-lg font-semibold text-green-400">Docker Deployment</h3>
                <p className="text-sm text-gray-400">Containerized deployment</p>
              </div>
            </div>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• Docker and Docker Compose</li>
              <li>• Environment file management</li>
              <li>• Volume persistence</li>
              <li>• Easy scaling and updates</li>
              <li>• Portable across platforms</li>
            </ul>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3">☁️</span>
              <div>
                <h3 className="text-lg font-semibold text-purple-400">Cloud Platforms</h3>
                <p className="text-sm text-gray-400">Managed cloud services</p>
              </div>
            </div>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• Railway (recommended for beginners)</li>
              <li>• Render (production-ready)</li>
              <li>• Vercel (serverless option)</li>
              <li>• Heroku (traditional cloud)</li>
              <li>• AWS/Azure/GCP (enterprise)</li>
            </ul>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3">🧪</span>
              <div>
                <h3 className="text-lg font-semibold text-yellow-400">Development</h3>
                <p className="text-sm text-gray-400">Local development setup</p>
              </div>
            </div>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• Local Node.js development</li>
              <li>• Test mode functionality</li>
              <li>• Mock authentication</li>
              <li>• ngrok for webhook testing</li>
              <li>• Full debugging capabilities</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 mb-6">
          <h3 className="text-lg font-semibold text-blue-400 mb-4">Quick Deployment Comparison</h3>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-600">
                  <th className="text-left p-3 text-gray-300">Platform</th>
                  <th className="text-left p-3 text-gray-300">Setup Time</th>
                  <th className="text-left p-3 text-gray-300">Cost</th>
                  <th className="text-left p-3 text-gray-300">Best For</th>
                  <th className="text-left p-3 text-gray-300">HTTPS</th>
                </tr>
              </thead>
              <tbody className="text-gray-400">
                <tr className="border-b border-gray-700">
                  <td className="p-3">Railway</td>
                  <td className="p-3">5 minutes</td>
                  <td className="p-3">Free tier available</td>
                  <td className="p-3">Beginners, Quick setup</td>
                  <td className="p-3">✅ Automatic</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="p-3">Render</td>
                  <td className="p-3">10 minutes</td>
                  <td className="p-3">Free tier available</td>
                  <td className="p-3">Production, Scaling</td>
                  <td className="p-3">✅ Automatic</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="p-3">VPS (Ubuntu)</td>
                  <td className="p-3">1-2 hours</td>
                  <td className="p-3">$5-20/month</td>
                  <td className="p-3">Full control, Custom</td>
                  <td className="p-3">⚙️ Manual setup</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="p-3">Docker</td>
                  <td className="p-3">30 minutes</td>
                  <td className="p-3">Server cost only</td>
                  <td className="p-3">Teams, DevOps</td>
                  <td className="p-3">⚙️ Manual setup</td>
                </tr>
                <tr>
                  <td className="p-3">Development</td>
                  <td className="p-3">5 minutes</td>
                  <td className="p-3">Free</td>
                  <td className="p-3">Testing, Learning</td>
                  <td className="p-3">❌ Not needed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">🖥️ VPS Deployment Guide</h2>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 mb-6">
          <h3 className="text-lg font-semibold text-blue-400 mb-4">Ubuntu/Debian Server Setup</h3>

          <div className="space-y-6">
            <div className="bg-gray-900 rounded p-4">
              <h4 className="text-green-400 mb-3">Step 1: Server Preparation</h4>
              <div className="font-mono text-sm text-gray-100">
                # Update system packages
                sudo apt update && sudo apt upgrade -y

                # Install Node.js (using NodeSource repository)
                curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
                sudo apt-get install -y nodejs

                # Install PM2 for process management
                sudo npm install -g pm2

                # Install Nginx (optional, for reverse proxy)
                sudo apt install nginx

                # Create dedicated user for the bot
                sudo useradd -m -s /bin/bash xibe-bot
                sudo usermod -aG sudo xibe-bot
              </div>
            </div>

            <div className="bg-gray-900 rounded p-4">
              <h4 className="text-blue-400 mb-3">Step 2: Application Setup</h4>
              <div className="font-mono text-sm text-gray-100">
                # Switch to bot user
                sudo su - xibe-bot

                # Clone repository
                git clone https://github.com/iotserver24/xibe-pr1.git
                cd xibe-pr1

                # Install dependencies
                npm install --production

                # Configure environment
                cp .env.example .env
                nano .env  # Configure your credentials
              </div>
            </div>

            <div className="bg-gray-900 rounded p-4">
              <h4 className="text-purple-400 mb-3">Step 3: PM2 Configuration</h4>
              <div className="font-mono text-sm text-gray-100">
                # Start the bot with PM2
                pm2 start bot.js --name xibe-review-bot

                # Set up PM2 to start on boot
                pm2 startup
                pm2 save

                # Monitor the bot
                pm2 monit

                # View logs
                pm2 logs xibe-review-bot

                # Restart if needed
                pm2 restart xibe-review-bot
              </div>
            </div>

            <div className="bg-gray-900 rounded p-4">
              <h4 className="text-yellow-400 mb-3">Step 4: Nginx Reverse Proxy (Optional)</h4>
              <div className="font-mono text-sm text-gray-100">
                # Create Nginx configuration
                sudo nano /etc/nginx/sites-available/xibe-review

                # Example configuration:
                server {'{'}
                    listen 80;
                    server_name your-domain.com;

                    location / {'{'}
                        proxy_pass http://localhost:3000;
                        proxy_set_header Host $host;
                        proxy_set_header X-Real-IP $remote_addr;
                    {'}'}
                {'}'}

                # Enable site and restart Nginx
                sudo ln -s /etc/nginx/sites-available/xibe-review /etc/nginx/sites-enabled/
                sudo nginx -t
                sudo systemctl restart nginx
              </div>
            </div>

            <div className="bg-gray-900 rounded p-4">
              <h4 className="text-red-400 mb-3">Step 5: SSL Setup (Recommended)</h4>
              <div className="font-mono text-sm text-gray-100">
                # Install Certbot for Let's Encrypt
                sudo apt install certbot python3-certbot-nginx

                # Get SSL certificate
                sudo certbot --nginx -d your-domain.com

                # Auto-renewal is configured automatically
                sudo systemctl status certbot.timer
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 mb-6">
          <h3 className="text-lg font-semibold text-green-400 mb-4">Systemd Service (Alternative to PM2)</h3>

          <div className="bg-gray-900 rounded p-4 font-mono text-sm text-gray-100 overflow-x-auto mb-4">
            <div className="text-blue-400 mb-2"># Create systemd service file</div>
            <div>sudo nano /etc/systemd/system/xibe-review-bot.service</div>
            <div></div>
            <div>[Unit]</div>
            <div>Description=XIbe Review AI PR Review Bot</div>
            <div>After=network.target</div>
            <div>Wants=network.target</div>
            <div></div>
            <div>[Service]</div>
            <div>Type=simple</div>
            <div>User=xibe-bot</div>
            <div>Group=xibe-bot</div>
            <div>WorkingDirectory=/home/xibe-bot/xibe-pr1</div>
            <div>ExecStart=/usr/bin/node bot.js</div>
            <div>Restart=always</div>
            <div>RestartSec=10</div>
            <div>StandardOutput=journal</div>
            <div>StandardError=journal</div>
            <div>SyslogIdentifier=xibe-review-bot</div>
            <div>Environment=NODE_ENV=production</div>
            <div>Environment=PATH=/usr/bin:/home/xibe-bot/.nvm/versions/node/v18/bin</div>
            <div></div>
            <div>[Install]</div>
            <div>WantedBy=multi-user.target</div>
          </div>

          <div className="bg-gray-900 rounded p-4 font-mono text-sm text-gray-100">
            <div className="text-green-400 mb-2"># Manage the service</div>
            <div># Enable and start the service</div>
            <div>sudo systemctl enable xibe-review-bot</div>
            <div>sudo systemctl start xibe-review-bot</div>
            <div></div>
            <div># Check status</div>
            <div>sudo systemctl status xibe-review-bot</div>
            <div></div>
            <div># View logs</div>
            <div>sudo journalctl -u xibe-review-bot -f</div>
            <div></div>
            <div># Restart service</div>
            <div>sudo systemctl restart xibe-review-bot</div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-semibold text-purple-400 mb-4">Monitoring & Maintenance</h3>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-green-400 mb-2">Health Monitoring</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Monitor service status</li>
                <li>• Check resource usage</li>
                <li>• Set up alerting</li>
                <li>• Log rotation</li>
              </ul>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-blue-400 mb-2">Security Hardening</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Firewall configuration</li>
                <li>• SSL/TLS setup</li>
                <li>• Regular updates</li>
                <li>• Access control</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">🐳 Docker Deployment</h2>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 mb-6">
          <h3 className="text-lg font-semibold text-blue-400 mb-4">Docker Setup</h3>

          <div className="space-y-6">
            <div className="bg-gray-900 rounded p-4">
              <h4 className="text-green-400 mb-3">1. Create Dockerfile</h4>
              <div className="font-mono text-sm text-gray-100">
                FROM node:18-alpine

                # Set working directory
                WORKDIR /app

                # Copy package files
                COPY package*.json ./

                # Install dependencies
                RUN npm install --production

                # Copy application code
                COPY . .

                # Expose port
                EXPOSE 3000

                # Use non-root user
                USER node

                # Start the application
                CMD ["node", "bot.js"]
              </div>
            </div>

            <div className="bg-gray-900 rounded p-4">
              <h4 className="text-blue-400 mb-3">2. Docker Compose Configuration</h4>
              <div className="font-mono text-sm text-gray-100">
                version: '3.8'
                services:
                  xibe-review-bot:
                    build: .
                    ports:
                      - "3000:3000"
                    env_file:
                      - .env
                    restart: unless-stopped
                    volumes:
                      - ./logs:/app/logs
                    networks:
                      - xibe-network

                networks:
                  xibe-network:
                    driver: bridge
              </div>
            </div>

            <div className="bg-gray-900 rounded p-4">
              <h4 className="text-purple-400 mb-3">3. Environment Configuration</h4>
              <div className="font-mono text-sm text-gray-100">
                # Create .env file with all required variables
                GITHUB_APP_ID=your_app_id
                GITHUB_PRIVATE_KEY="-----BEGIN RSA PRIVATE KEY-----..."
                GITHUB_WEBHOOK_SECRET=your_webhook_secret
                BOT_USERNAME=your-bot-name[bot]
                AI_API=https://api.openai.com
                AI_KEY=sk-your-openai-api-key
                MODEL_ID=gpt-4-turbo-preview
                PORT=3000
                NODE_ENV=production
              </div>
            </div>

            <div className="bg-gray-900 rounded p-4">
              <h4 className="text-yellow-400 mb-3">4. Build and Deploy</h4>
              <div className="font-mono text-sm text-gray-100">
                # Build the Docker image
                docker-compose build

                # Start the services
                docker-compose up -d

                # View logs
                docker-compose logs -f xibe-review-bot

                # Update deployment
                docker-compose pull
                docker-compose down && docker-compose up -d

                # Scale if needed
                docker-compose up -d --scale xibe-review-bot=3
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 mb-6">
          <h3 className="text-lg font-semibold text-green-400 mb-4">Docker with Redis</h3>

          <div className="bg-gray-900 rounded p-4 font-mono text-sm text-gray-100 overflow-x-auto mb-4">
            <div className="text-blue-400 mb-2"># Enhanced docker-compose.yml with Redis</div>
            <div>version: '3.8'</div>
            <div>services:</div>
            <div className="ml-4">redis:</div>
            <div className="ml-8">image: redis:alpine</div>
            <div className="ml-8">restart: unless-stopped</div>
            <div className="ml-8">volumes:</div>
            <div className="ml-12">- redis_data:/data</div>
            <div className="ml-8">networks:</div>
            <div className="ml-12">- xibe-network</div>
            <div></div>
            <div className="ml-4">xibe-review-bot:</div>
            <div className="ml-8">build: .</div>
            <div className="ml-8">ports:</div>
            <div className="ml-12">- "3000:3000"</div>
            <div className="ml-8">env_file:</div>
            <div className="ml-12">- .env</div>
            <div className="ml-8">depends_on:</div>
            <div className="ml-12">- redis</div>
            <div className="ml-8">restart: unless-stopped</div>
            <div className="ml-8">networks:</div>
            <div className="ml-12">- xibe-network</div>
            <div></div>
            <div>volumes:</div>
            <div className="ml-4">redis_data:</div>
            <div></div>
            <div>networks:</div>
            <div className="ml-4">xibe-network:</div>
            <div className="ml-8">driver: bridge</div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-green-400 mb-2">✅ Benefits</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Persistent data storage</li>
                <li>• Analytics and logging</li>
                <li>• Performance caching</li>
                <li>• Easy scaling</li>
              </ul>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-blue-400 mb-2">⚙️ Configuration</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Redis service included</li>
                <li>• Volume persistence</li>
                <li>• Network isolation</li>
                <li>• Health checks</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-semibold text-purple-400 mb-4">Docker Best Practices</h3>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-green-400 mb-2">Security</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Use non-root user</li>
                <li>• Minimal base image</li>
                <li>• Regular image updates</li>
                <li>• Secret management</li>
              </ul>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-blue-400 mb-2">Performance</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Multi-stage builds</li>
                <li>• Image optimization</li>
                <li>• Resource limits</li>
                <li>• Health checks</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">☁️ Cloud Platform Deployment</h2>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 mb-6">
          <h3 className="text-lg font-semibold text-blue-400 mb-4">Railway (Recommended for Beginners)</h3>

          <div className="space-y-4">
            <div className="bg-gray-900 rounded p-4">
              <h4 className="text-green-400 mb-2">Step 1: Connect Repository</h4>
              <div className="font-mono text-sm text-gray-100">
                1. Go to Railway.app and sign up/login
                2. Click "New Project" → "Deploy from GitHub"
                3. Connect your GitHub account
                4. Select the xibe-pr1 repository
                5. Railway will auto-detect Node.js
              </div>
            </div>

            <div className="bg-gray-900 rounded p-4">
              <h4 className="text-blue-400 mb-2">Step 2: Configure Environment</h4>
              <div className="text-gray-300 text-sm">
                Add these environment variables in Railway dashboard:
              </div>
              <ul className="text-gray-300 text-sm mt-2 space-y-1">
                <li>• <code>AI_API</code> - OpenAI API URL</li>
                <li>• <code>AI_KEY</code> - OpenAI API key</li>
                <li>• <code>BOT_USERNAME</code> - Bot username</li>
                <li>• <code>GITHUB_APP_ID</code> - GitHub App ID</li>
                <li>• <code>GITHUB_PRIVATE_KEY</code> - Base64 encoded private key</li>
                <li>• <code>GITHUB_WEBHOOK_SECRET</code> - Webhook secret</li>
              </ul>
            </div>

            <div className="bg-gray-900 rounded p-4">
              <h4 className="text-purple-400 mb-2">Step 3: Deploy</h4>
              <div className="font-mono text-sm text-gray-100">
                # Railway handles the rest automatically:
                # - HTTPS certificate generation
                # - Container building and deployment
                # - Environment variable injection
                # - Service monitoring and logs
                # - Auto-scaling based on usage
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-green-400 mb-2">✅ Railway Benefits</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Free tier available</li>
                <li>• Automatic HTTPS</li>
                <li>• Built-in monitoring</li>
                <li>• Easy scaling</li>
                <li>• GitHub integration</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 mb-6">
          <h3 className="text-lg font-semibold text-green-400 mb-4">Render Deployment</h3>

          <div className="space-y-4">
            <div className="bg-gray-900 rounded p-4">
              <h4 className="text-blue-400 mb-2">Step 1: Connect Repository</h4>
              <div className="font-mono text-sm text-gray-100">
                1. Go to Render.com and sign up/login
                2. Click "New Web Service" → "Build and deploy from a Git repository"
                3. Connect your GitHub account
                4. Select the xibe-pr1 repository
                5. Choose "Node.js" as runtime
              </div>
            </div>

            <div className="bg-gray-900 rounded p-4">
              <h4 className="text-purple-400 mb-2">Step 2: Configure Service</h4>
              <div className="font-mono text-sm text-gray-100">
                # Service Settings:
                Runtime: Node.js
                Build Command: npm install
                Start Command: npm start
                Auto-Deploy: Yes (for automatic updates)

                # Environment Variables:
                # Add all required environment variables
                # Render will inject them automatically
              </div>
            </div>

            <div className="bg-gray-900 rounded p-4">
              <h4 className="text-yellow-400 mb-2">Step 3: Custom Domains (Optional)</h4>
              <div className="font-mono text-sm text-gray-100">
                # Add custom domain in Render dashboard
                # Render provides free SSL certificate
                # DNS configuration handled automatically
                # Webhook URL will be: https://your-app.onrender.com/webhook
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-green-400 mb-2">✅ Render Benefits</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Production-ready scaling</li>
                <li>• Automatic HTTPS</li>
                <li>• Built-in monitoring</li>
                <li>• Database integrations</li>
                <li>• Team collaboration</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 mb-6">
          <h3 className="text-lg font-semibold text-purple-400 mb-4">Vercel Serverless Deployment</h3>

          <div className="bg-gray-900 rounded p-4 font-mono text-sm text-gray-100 overflow-x-auto mb-4">
            <div className="text-blue-400 mb-2"># vercel.json configuration</div>
            <div>{`{`}</div>
            <div className="ml-4">"version": 2,</div>
            <div className="ml-4">"builds": [</div>
            <div className="ml-8">{`{`}</div>
            <div className="ml-12">"src": "bot.js",</div>
            <div className="ml-12">"use": "@vercel/node"</div>
            <div className="ml-8">{`}`}</div>
            <div className="ml-4">],</div>
            <div className="ml-4">"routes": [</div>
            <div className="ml-8">{`{`}</div>
            <div className="ml-12">"src": "/webhook",</div>
            <div className="ml-12">"dest": "/bot.js"</div>
            <div className="ml-8">{`}`}</div>
            <div className="ml-4">],</div>
            <div className="ml-4">"env": {`{`}</div>
            <div className="ml-8">"AI_API": "@ai-api",</div>
            <div className="ml-8">"AI_KEY": "@ai-key",</div>
            <div className="ml-8">"BOT_USERNAME": "@bot-username"</div>
            <div className="ml-4">{`}`}</div>
            <div>{`}`}</div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-green-400 mb-2">✅ Serverless Benefits</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Auto-scaling</li>
                <li>• Pay-per-request</li>
                <li>• Global CDN</li>
                <li>• Zero maintenance</li>
              </ul>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-red-400 mb-2">⚠️ Limitations</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Cold start delays</li>
                <li>• Execution time limits</li>
                <li>• No persistent storage</li>
                <li>• Webhook challenges</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-semibold text-yellow-400 mb-4">Heroku Deployment</h3>

          <div className="space-y-4">
            <div className="bg-gray-900 rounded p-4">
              <h4 className="text-blue-400 mb-2">Step 1: Create Heroku App</h4>
              <div className="font-mono text-sm text-gray-100">
                # Install Heroku CLI
                npm install -g heroku

                # Login to Heroku
                heroku login

                # Create new app
                heroku create your-app-name

                # Set Node.js version
                heroku buildpacks:set heroku/nodejs
              </div>
            </div>

            <div className="bg-gray-900 rounded p-4">
              <h4 className="text-green-400 mb-2">Step 2: Configure Environment</h4>
              <div className="font-mono text-sm text-gray-100">
                # Set environment variables
                heroku config:set AI_API=https://api.openai.com
                heroku config:set AI_KEY=sk-your-openai-api-key
                heroku config:set BOT_USERNAME=your-bot-name
                heroku config:set GITHUB_APP_ID=your_app_id
                heroku config:set GITHUB_PRIVATE_KEY="-----BEGIN..."
                heroku config:set GITHUB_WEBHOOK_SECRET=your_secret
                heroku config:set NODE_ENV=production
              </div>
            </div>

            <div className="bg-gray-900 rounded p-4">
              <h4 className="text-purple-400 mb-2">Step 3: Deploy</h4>
              <div className="font-mono text-sm text-gray-100">
                # Deploy to Heroku
                git push heroku main

                # View logs
                heroku logs --tail

                # Open app
                heroku open

                # Set webhook URL to: https://your-app-name.herokuapp.com/webhook
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">🧪 Development Setup</h2>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 mb-6">
          <h3 className="text-lg font-semibold text-blue-400 mb-4">Local Development Environment</h3>

          <div className="space-y-6">
            <div className="bg-gray-900 rounded p-4">
              <h4 className="text-green-400 mb-3">1. Basic Setup</h4>
              <div className="font-mono text-sm text-gray-100">
                # Clone repository
                git clone https://github.com/iotserver24/xibe-pr1.git
                cd xibe-pr1

                # Install dependencies
                npm install

                # Copy environment file
                cp .env.example .env

                # Configure for development (test mode)
                # Edit .env file with minimal configuration
              </div>
            </div>

            <div className="bg-gray-900 rounded p-4">
              <h4 className="text-blue-400 mb-3">2. Test Mode Configuration</h4>
              <div className="font-mono text-sm text-gray-100">
                # .env configuration for development
                BOT_USERNAME=xibe-review
                AI_API=https://api.openai.com
                AI_KEY=sk-your-openai-api-key
                MODEL_ID=gpt-4-turbo-preview

                # Leave GitHub authentication empty for test mode
                # GITHUB_APP_ID=
                # GITHUB_TOKEN=

                PORT=3000
                NODE_ENV=development
                LOG_LEVEL=debug
              </div>
            </div>

            <div className="bg-gray-900 rounded p-4">
              <h4 className="text-purple-400 mb-3">3. Start Development Server</h4>
              <div className="font-mono text-sm text-gray-100">
                # Start in development mode
                npm run dev

                # Features:
                # - Auto-restart on file changes
                # - Detailed logging and error reporting
                # - Hot-reload for rapid development
                # - Debug-friendly environment

                # Bot will be available at http://localhost:3000
              </div>
            </div>

            <div className="bg-gray-900 rounded p-4">
              <h4 className="text-yellow-400 mb-3">4. Test Webhook Locally</h4>
              <div className="font-mono text-sm text-gray-100">
                # Install ngrok for webhook testing
                npm install -g ngrok

                # Start ngrok tunnel
                ngrok http 3000

                # Copy ngrok URL (e.g., https://abc123.ngrok.io)
                # Update GitHub webhook URL to ngrok URL
                # Test with PR comments mentioning the bot
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 mb-6">
          <h3 className="text-lg font-semibold text-green-400 mb-4">Testing Tools</h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-blue-400 mb-3">Webhook Testing</h4>
              <ul className="text-gray-300 text-sm space-y-2">
                <li><strong>ngrok:</strong> Tunnel local server to public internet</li>
                <li><strong>Postman:</strong> Send test webhook payloads</li>
                <li><strong>curl:</strong> Command-line webhook testing</li>
                <li><strong>GitHub CLI:</strong> Create test PRs and comments</li>
              </ul>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-purple-400 mb-3">API Testing</h4>
              <ul className="text-gray-300 text-sm space-y-2">
                <li><strong>Health checks:</strong> curl http://localhost:3000/health</li>
                <li><strong>Analytics:</strong> curl http://localhost:3000/api/analytics</li>
                <li><strong>Status:</strong> curl http://localhost:3000/api/status/uptime</li>
                <li><strong>Logs:</strong> curl http://localhost:3000/api/webhooks</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-semibold text-yellow-400 mb-4">Development Workflow</h3>

          <div className="space-y-4">
            <div className="bg-gray-900 rounded p-4">
              <h4 className="text-blue-400 mb-2">1. Code Changes</h4>
              <div className="font-mono text-sm text-gray-100">
                # Make changes to bot.js or other files
                # Test mode allows full functionality without GitHub auth
                # Use mock authentication for testing
              </div>
            </div>

            <div className="bg-gray-900 rounded p-4">
              <h4 className="text-green-400 mb-2">2. Test AI Integration</h4>
              <div className="font-mono text-sm text-gray-100">
                # Test OpenAI API integration
                # Verify model responses
                # Check error handling
                # Validate review generation
              </div>
            </div>

            <div className="bg-gray-900 rounded p-4">
              <h4 className="text-purple-400 mb-2">3. Webhook Testing</h4>
              <div className="font-mono text-sm text-gray-100">
                # Test webhook endpoints with ngrok
                # Send mock webhook payloads
                # Verify bot responses
                # Check error handling
              </div>
            </div>

            <div className="bg-gray-900 rounded p-4">
              <h4 className="text-red-400 mb-2">4. Production Testing</h4>
              <div className="font-mono text-sm text-gray-100">
                # Deploy to staging environment
                # Test with real GitHub repositories
                # Monitor logs and performance
                # Validate all functionality
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">🔒 Production Security Checklist</h2>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 mb-6">
          <h3 className="text-lg font-semibold text-blue-400 mb-4">Essential Security Measures</h3>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-green-400 mb-2">✅ Must Have</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• HTTPS encryption (SSL/TLS)</li>
                <li>• Webhook signature verification</li>
                <li>• Environment variable security</li>
                <li>• Firewall configuration</li>
                <li>• Regular security updates</li>
              </ul>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-blue-400 mb-2">🔒 Recommended</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Rate limiting implementation</li>
                <li>• API key rotation</li>
                <li>• Access logging</li>
                <li>• Security monitoring</li>
                <li>• Backup strategies</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 mb-6">
          <h3 className="text-lg font-semibold text-green-400 mb-4">Domain & SSL Setup</h3>

          <div className="space-y-4">
            <div className="bg-gray-900 rounded p-4">
              <h4 className="text-blue-400 mb-2">Custom Domain (Recommended)</h4>
              <div className="font-mono text-sm text-gray-100">
                # Purchase domain from Namecheap, GoDaddy, etc.
                # Point domain to your server IP
                # Configure DNS records:
                # A record: @ → your-server-ip
                # CNAME record: www → @
              </div>
            </div>

            <div className="bg-gray-900 rounded p-4">
              <h4 className="text-green-400 mb-2">SSL Certificate</h4>
              <div className="font-mono text-sm text-gray-100">
                # Let's Encrypt (Free)
                sudo certbot --nginx -d your-domain.com

                # Or use cloud provider's SSL
                # Railway/Render provide free SSL automatically
                # Ensure all API calls use HTTPS
              </div>
            </div>

            <div className="bg-gray-900 rounded p-4">
              <h4 className="text-purple-400 mb-2">Security Headers</h4>
              <div className="font-mono text-sm text-gray-100">
                # The bot includes security headers by default:
                # Content-Security-Policy
                # X-Content-Type-Options: nosniff
                # X-Frame-Options: DENY
                # X-XSS-Protection
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-semibold text-yellow-400 mb-4">Monitoring & Alerting</h3>

          <div className="space-y-4">
            <div className="bg-gray-900 rounded p-4">
              <h4 className="text-blue-400 mb-2">Application Monitoring</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• <strong>Health checks:</strong> Monitor /health endpoint</li>
                <li>• <strong>Webhook logs:</strong> Track delivery success/failure</li>
                <li>• <strong>Performance:</strong> Monitor response times</li>
                <li>• <strong>Errors:</strong> Alert on high error rates</li>
              </ul>
            </div>

            <div className="bg-gray-900 rounded p-4">
              <h4 className="text-green-400 mb-2">GitHub Integration Monitoring</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• <strong>Webhook deliveries:</strong> Check GitHub webhook settings</li>
                <li>• <strong>API rate limits:</strong> Monitor GitHub API usage</li>
                <li>• <strong>App permissions:</strong> Verify repository access</li>
                <li>• <strong>Installation status:</strong> Check app installations</li>
              </ul>
            </div>

            <div className="bg-gray-900 rounded p-4">
              <h4 className="text-purple-400 mb-2">External Service Monitoring</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• <strong>OpenAI API:</strong> Monitor API availability and rate limits</li>
                <li>• <strong>Redis:</strong> Check connection and performance</li>
                <li>• <strong>DNS:</strong> Verify domain resolution</li>
                <li>• <strong>SSL certificates:</strong> Monitor expiration</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white">
        <h3 className="text-xl font-bold mb-4">🚀 Deployment Best Practices</h3>
        <div className="space-y-3">
          <div><strong>1. Environment Separation:</strong> Use separate environments for development, staging, and production</div>
          <div><strong>2. Configuration Management:</strong> Use environment variables and avoid hardcoded values</div>
          <div><strong>3. Security First:</strong> Implement HTTPS, signature verification, and access controls</div>
          <div><strong>4. Monitoring:</strong> Set up comprehensive monitoring and alerting</div>
          <div><strong>5. Backup Strategy:</strong> Regular backups of configuration and data</div>
          <div><strong>6. Documentation:</strong> Keep deployment documentation current and accessible</div>
        </div>
      </div>
    </div>
  );
};

export default Deployment;
