# 🚀 Quick Setup Guide

Get your XIbe PR Review Bot running in 5 minutes!

## Prerequisites

- Node.js v18 or later
- MongoDB (local or Atlas)
- A GitHub account

## Step 1: Clone and Install

```bash
git clone https://github.com/iotserver24/xibe-pr.git
cd xibe-pr
npm install
```

## Step 2: Create GitHub App

1. Go to [GitHub Apps Settings](https://github.com/settings/apps)
2. Click **"New GitHub App"**
3. Fill in the details:
   - **App Name**: `your-bot-name` (must be unique)
   - **Homepage URL**: `https://your-domain.com` (or `http://localhost:3000` for dev)
   - **Webhook URL**: `https://your-domain.com/webhook`
   - **Webhook Secret**: Generate a random 32+ character string

4. Set **Permissions**:

   | Permission | Level |
   |------------|-------|
   | Contents | Read-only |
   | Issues | Read & Write |
   | Pull requests | Read & Write |
   | Metadata | Read-only |

5. Subscribe to **Events**:
   - ✅ Issue comments
   - ✅ Pull requests

6. Click **"Create GitHub App"**

## Step 3: Generate and Encode Private Key

1. In your GitHub App settings, scroll to **"Private keys"**
2. Click **"Generate a private key"**
3. Download the `.pem` file
4. Encode it to base64:

```bash
# Run the encoding script
node scripts/encode-private-key.js your-app-name.private-key.pem
```

5. Copy the output - you'll need it for the next step

## Step 4: Configure Environment

1. Copy the example environment file:

```bash
cp .env.example .env
```

2. Edit `.env` with your values:

```env
# GitHub App Configuration
GITHUB_APP_ID=your_app_id_from_github
GITHUB_PRIVATE_KEY_BASE64=your_base64_encoded_key_from_step_3

# Webhook & Bot
WEBHOOK_SECRET=your_32_char_secret_from_step_2
BOT_USERNAME=your-app-name[bot]

# AI Configuration (OpenAI or compatible API)
AI_API=https://api.openai.com/v1
AI_KEY=sk-your-openai-api-key

# MongoDB
MONGODB_URI=mongodb://localhost:27017/xibe-pr1

# Server
PORT=3000
```

## Step 5: Install GitHub App

1. Go back to your GitHub App page
2. Click **"Install App"**
3. Choose your account/organization
4. Select repositories you want the bot to review

## Step 6: Start the Bot

```bash
# Development mode
npm run dev

# Production mode
npm start
```

## Step 7: Test It

1. Create a pull request in one of your installed repositories
2. Comment on the PR: `@your-app-name[bot] please review`
3. Watch the magic happen! 🎉

---

## Troubleshooting

### Bot doesn't respond

1. Check webhook delivery in GitHub App settings
2. Verify your server is accessible at the webhook URL
3. Check terminal logs for errors

### Authentication errors

1. Verify `GITHUB_APP_ID` is correct
2. Re-encode your private key using the script
3. Check the private key hasn't expired

### AI errors (404)

1. Verify `AI_API` URL is correct (should end with `/v1`)
2. Check your `AI_KEY` is valid
3. Ensure the model specified exists

---

## Next Steps

- Read the [full documentation](./README.md)
- Configure [AI models](./pr-site/docs/configuration.md)
- Set up [production deployment](./SECURITY_SETUP.md)
- Customize the bot behavior

## Need Help?

- Open an [issue](https://github.com/iotserver24/xibe-pr1/issues)
- Check the [troubleshooting guide](./pr-site/docs/troubleshooting.md)
