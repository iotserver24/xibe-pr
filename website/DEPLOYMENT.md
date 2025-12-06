# Frontend Deployment Guide

This guide covers how to deploy the xibe-pr1 frontend to various hosting platforms.

> **Note**: The project is currently closed source but will be made open source soon. The frontend is designed to work with the live bot at [review.xibe.app](https://review.xibe.app).

## 🚀 Quick Deploy

### Option 1: Static Hosting (Recommended)

The frontend is a static React application that can be deployed to any static hosting service.

#### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Vercel will automatically detect it's a React app and deploy it
4. Set environment variable: `VITE_API_BASE=https://your-bot-domain.com`

#### Netlify
1. Push your code to GitHub
2. Connect your repository to [Netlify](https://netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Add environment variable: `VITE_API_BASE=https://your-bot-domain.com`

#### GitHub Pages
```bash
# Install gh-pages package
npm install -D gh-pages

# Add to package.json scripts
"deploy": "gh-pages -d dist"

# Deploy
npm run build
npm run deploy
```

### Option 2: Docker Deployment

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

### Option 3: Manual Deployment

1. Build the application: `npm run build`
2. Upload the `dist` folder to your web server
3. Configure your web server to serve static files from the `dist` directory
4. Set up environment variables or update the API base URL in the code

## 🔧 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_BASE=http://localhost:3000
VITE_APP_TITLE=xibe-pr1 Frontend
```

## 📁 Production Files

The built application consists of:
- `index.html` - Main HTML template
- `assets/` - CSS and JavaScript files (with content hashes)
- All files are optimized and minified for production

## 🌐 Domain Configuration

When deploying, update the API base URL to point to your bot backend:

```javascript
// In src/lib/api.ts
const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:3000';
```

## 🔍 SEO and Performance

The frontend includes:
- Proper meta tags for SEO
- Open Graph and Twitter Card support
- Optimized images and fonts
- Lazy loading where applicable
- Responsive design for all devices

## 🚨 Troubleshooting

### Build Errors
- Ensure Node.js 18+ is installed
- Check that all dependencies are installed: `npm install`
- Verify TypeScript configuration

### Runtime Errors
- Check browser console for errors
- Verify API endpoints are accessible
- Ensure environment variables are set correctly

### Performance Issues
- Check network tab for large assets
- Verify caching headers are set correctly
- Consider enabling gzip compression

## 📊 Analytics

Consider adding analytics to track usage:

```html
<!-- Add to index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🔒 Security

- The frontend is a static application with no server-side code
- All API calls are made to the backend with proper CORS configuration
- No sensitive data is stored in the frontend
- Environment variables are only used during build time

## 📞 Support

For deployment issues:
1. Check the browser console for errors
2. Verify the backend API is running and accessible
3. Ensure environment variables are correctly set
4. Review the build logs for any warnings or errors

## 📈 Monitoring

Monitor your frontend deployment:
- Set up uptime monitoring (e.g., Pingdom, UptimeRobot)
- Monitor Core Web Vitals using Google Analytics or similar
- Set up error tracking (e.g., Sentry, LogRocket)
- Monitor API response times and error rates
