#!/bin/bash

# Deployment script for xibe-pr1 frontend
# This script builds and prepares the frontend for deployment

echo "🚀 Building xibe-pr1 frontend for production..."

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Build the application
echo "🔨 Building application..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "📊 Build output:"
    echo "  - HTML: $(ls -lh dist/index.html | awk '{print $5}')"
    echo "  - CSS: $(ls -lh dist/assets/*.css | awk '{print $5}')"
    echo "  - JS: $(ls -lh dist/assets/*.js | awk '{print $5}')"
    echo ""
    echo "🌐 Ready for deployment!"
    echo "📁 Upload the 'dist' folder to your static hosting service"
    echo ""
    echo "💡 Deployment options:"
    echo "  - Vercel: vercel --prod"
    echo "  - Netlify: netlify deploy --prod --dir=dist"
    echo "  - GitHub Pages: gh-pages -d dist"
    echo "  - Manual: Upload dist/ folder to your web server"
else
    echo "❌ Build failed!"
    exit 1
fi
