# xibe-pr1 Frontend

A modern, responsive React frontend for the xibe-pr1 AI-powered GitHub PR review bot. Built with React, TypeScript, Tailwind CSS, and Vite.

> **Note**: Currently closed source but will be made open source soon. The bot is actively running at [review.xibe.app](https://review.xibe.app).

## ✨ Features

- **Modern React Architecture**: Built with React 18 and TypeScript for type safety
- **Responsive Design**: Mobile-first design that works on all devices
- **Real-time Dashboard**: Live bot status and webhook analytics
- **Interactive Demos**: See the bot in action with code examples
- **Setup Guide**: Step-by-step instructions for deployment
- **Xibe AI Integration**: Showcases integration with Xibe AI platform
- **📚 Comprehensive Documentation**: Complete docs in `/docs` covering all aspects

## 🚀 Quick Start

### Live Demo

The bot is currently running at [review.xibe.app](https://review.xibe.app). You can:

1. **Try the bot**: Mention `@Xibe-review` in any PR comment on GitHub
2. **View Dashboard**: Check real-time stats at [review.xibe.app/dashboard](https://review.xibe.app/dashboard)
3. **API Integration**: The frontend connects to the live bot automatically

### Prerequisites

- Node.js 18+ and npm (for development)
- The frontend will automatically connect to the live bot at review.xibe.app

### Installation

```bash
# Navigate to the frontend directory
cd pr-site

# Install dependencies
npm install

# Start development server
npm run dev
```

The frontend will be available at `http://localhost:3001` and will automatically connect to the live bot at `review.xibe.app`.

### For Development with Local Bot

If you want to connect to a local bot instance, create a `.env` file:

```env
VITE_API_BASE=http://localhost:3000
```

### Build for Production

```bash
# Build the application
npm run build

# Preview the production build
npm run preview
```

## 📁 Project Structure

```
pr-site/
├── src/
│   ├── components/          # React components
│   │   ├── Navbar.tsx       # Navigation bar
│   │   ├── Hero.tsx         # Landing page hero section
│   │   ├── Features.tsx     # Features showcase
│   │   ├── Dashboard.tsx    # Real-time dashboard
│   │   ├── SetupGuide.tsx   # Setup instructions
│   │   ├── DemoSection.tsx  # Interactive demos
│   │   ├── XibeIntegration.tsx # Xibe AI integration
│   │   └── Footer.tsx       # Site footer
│   ├── hooks/               # Custom React hooks
│   │   └── useBotStatus.ts  # Bot status hook
│   ├── lib/                 # Utilities and API
│   │   ├── api.ts           # API client
│   │   └── constants.ts     # App constants
│   ├── types/               # TypeScript types
│   │   └── index.ts         # Type definitions
│   └── utils/               # Helper functions
│       └── format.ts        # Formatting utilities
├── index.html               # Main HTML template
├── vite.config.ts           # Vite configuration
├── tailwind.config.js       # Tailwind CSS config
└── package.json             # Dependencies and scripts
```

## 🎨 Design System

### Colors

- **Primary**: Blue gradient (`#3b82f6` to `#2563eb`)
- **Xibe**: Cyan gradient (`#0ea5e9` to `#0284c7`)
- **Accent**: Complementary colors for highlights

### Typography

- **Font Family**: System fonts for optimal performance
- **Responsive Text**: Scales appropriately across devices
- **Line Height**: Optimized for readability

### Components

- **Cards**: Consistent styling with hover effects
- **Buttons**: Multiple variants (primary, secondary, ghost)
- **Navigation**: Responsive navbar with mobile menu

## 🔧 API Integration

The frontend communicates with the xibe-pr1 backend API:

- `GET /api/status` - Bot status and configuration
- `GET /api/webhooks` - Webhook logs and statistics
- `GET /health` - Health check endpoint

**Production API**: The frontend is configured to connect to the live bot at `https://review.xibe.app` by default.

For development with a local bot:

```bash
# Create .env file
echo "VITE_API_BASE=http://localhost:3000" > .env
```

## 📱 Responsive Design

The site is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

Key responsive features:
- Mobile-first CSS approach
- Flexible grid layouts
- Scalable typography
- Touch-friendly interactions

## 🌟 Key Sections

### Hero Section
- Dynamic bot status indicator
- Call-to-action buttons
- Feature highlights
- Responsive layout

### Features Section
- Grid layout showcasing bot capabilities
- Comparison with traditional methods
- Interactive elements

### Dashboard
- Real-time metrics display
- Webhook activity logs
- Configuration information
- Auto-refresh functionality

### Demo Section
- Interactive code examples
- Before/after comparisons
- Tabbed interface
- Copy-to-clipboard functionality

### Setup Guide
- Step-by-step instructions
- Code examples with copy buttons
- Deployment options
- Troubleshooting links

## 🛠 Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Environment Variables

Create a `.env` file for configuration:

```env
VITE_API_BASE=http://localhost:3000
VITE_APP_TITLE=xibe-pr1 Frontend
```

## 🚀 Deployment

### Static Hosting

The built application can be deployed to any static hosting service:

```bash
# Build the app
npm run build

# Deploy the dist/ folder to your hosting service
```

### Docker Deployment

```dockerfile
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

ISC License - see [LICENSE](../../LICENSE) for details.

## 📚 Documentation

Complete documentation is available in the `/docs` directory:

- **[🎯 Overview](docs/overview.md)** - What xibe-pr1 is and how it works
- **[📖 Usage Guide](docs/usage.md)** - How to use the bot effectively
- **[🏗️ Architecture](docs/architecture.md)** - Technical architecture and design
- **[🔧 Configuration](docs/configuration.md)** - Setup and environment variables
- **[📡 Webhooks](docs/webhooks.md)** - GitHub webhook integration
- **[🤖 Review Process](docs/review-process.md)** - Multi-agent review system
- **[🔌 API Reference](docs/api-reference.md)** - Complete API documentation
- **[🚀 Deployment](docs/deployment.md)** - Installation and deployment options
- **[🌐 Frontend](docs/frontend.md)** - Frontend architecture
- **[🧪 Testing](docs/testing.md)** - Testing procedures and tools
- **[🔍 Troubleshooting](docs/troubleshooting.md)** - Common issues and solutions

## 🔗 Links

- [Backend Repository](https://github.com/iotserver24/xibe-pr1)
- [Xibe AI Platform](https://xibe.app)
- [📚 Documentation](docs/README.md) - Complete documentation index
