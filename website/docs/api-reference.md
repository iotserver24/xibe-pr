# 🔌 API Reference

This comprehensive API reference documents all endpoints, parameters, responses, and usage examples for the xibe-pr1 bot. The API follows RESTful conventions and provides both public and authenticated endpoints.

## 🌐 Base URL

All API endpoints are relative to your bot's deployment URL:
- **Production**: `https://your-domain.com`
- **Development**: `http://localhost:3000`
- **Live Demo**: `https://review.xibe.app`

## 📋 Authentication

The API uses different authentication methods depending on the endpoint:

### 🔧 GitHub App Authentication
- **Used for**: Webhook processing and GitHub API interactions
- **Method**: JWT tokens generated from GitHub App private key
- **Headers**: Automatic via GitHub webhook signatures

### 🔑 Personal Access Token
- **Used for**: GitHub API calls in PAT mode
- **Method**: Personal Access Token stored in environment
- **Headers**: Authorization header with token

### 🚫 No Authentication Required
- **Used for**: Public status and health endpoints
- **Access**: Open to all requests

## 📚 Endpoint Categories

### 🎯 **Public Endpoints**
General-purpose endpoints that don't require authentication.

### 🔐 **API Endpoints**
Programmatic access to bot functionality and data.

### 📡 **Webhook Endpoints**
GitHub webhook handlers for automated processing.

---

## 🎯 Public Endpoints

### `GET /` - Landing Page
**Description**: Serves the main landing page with bot status and information.

**Response**:
```html
<!DOCTYPE html>
<html>
<head>
    <title>xibe-pr1 - AI-Powered PR Review Bot</title>
</head>
<body>
    <!-- Interactive landing page with bot status -->
</body>
</html>
```

**Usage Example**:
```bash
curl https://review.xibe.app/
```

**Response**: Complete HTML page with bot status, features, and call-to-action buttons.

---

### `GET /health` - Health Check
**Description**: Simple health check endpoint for monitoring and load balancers.

**Response**:
```json
{
  "status": "ok",
  "timestamp": "2024-01-15T10:30:00Z"
}
```

**Usage Example**:
```bash
curl https://review.xibe.app/health
```

**Status Codes**:
- `200` - Bot is healthy and operational
- `500` - Bot is experiencing issues

---

### `GET /status` - Dashboard
**Description**: Serves the main dashboard interface with real-time bot statistics.

**Response**: Complete HTML dashboard with:
- Bot uptime and status
- Recent webhook activity
- Analytics and metrics
- Configuration information

**Usage Example**:
```bash
curl https://review.xibe.app/status
```

---

## 🔐 API Endpoints

### `GET /api/status` - Bot Status
**Description**: Returns comprehensive bot status, configuration, and recent activity.

**Response**:
```json
{
  "bot": {
    "status": "running",
    "uptime": 3600,
    "timestamp": "2024-01-15T10:30:00Z",
    "authMode": "app",
    "githubAppId": "123456",
    "botUsername": "xibe-review",
    "aiApi": "https://api.openai.com",
    "model": "gpt-4"
  },
  "webhooks": {
    "total": 150,
    "recent": [
      {
        "id": "webhook_123",
        "timestamp": "2024-01-15T10:25:00Z",
        "status": "completed",
        "repository": "owner/repo"
      }
    ],
    "stats": {
      "completed": 140,
      "error": 5,
      "ignored": 5,
      "processing": 0
    }
  }
}
```

**Usage Example**:
```bash
curl https://review.xibe.app/api/status
```

---

### `GET /api/status/uptime` - Detailed Uptime Status
**Description**: Returns comprehensive uptime information including memory usage, configuration, and system metrics.

**Response**:
```json
{
  "bot": {
    "status": "running",
    "uptime": {
      "seconds": 3600,
      "formatted": "1h 0m 0s",
      "started": "2024-01-15T09:30:00Z",
      "lastUpdated": "2024-01-15T10:30:00Z"
    },
    "memory": {
      "rss": 75,
      "heapTotal": 45,
      "heapUsed": 25,
      "external": 10
    },
    "configuration": {
      "authMode": "app",
      "githubAppId": "123456",
      "botUsername": "xibe-review",
      "aiApi": "https://api.openai.com",
      "model": "gpt-4",
      "port": 3000
    },
    "lastActivity": "2024-01-15T10:25:00Z",
    "nodeVersion": "v18.17.0",
    "platform": "linux",
    "arch": "x64"
  },
  "webhooks": {
    "total": 150,
    "completed": 140,
    "error": 5,
    "ignored": 5,
    "processing": 0,
    "successRate": 93
  },
  "system": {
    "timestamp": "2024-01-15T10:30:00Z",
    "timezone": "UTC",
    "pid": 1234,
    "cwd": "/app"
  }
}
```

**Usage Example**:
```bash
curl https://review.xibe.app/api/status/uptime
```

---

### `GET /api/webhooks` - Webhook Logs
**Description**: Retrieves webhook processing logs with optional filtering.

**Query Parameters**:
- `limit` (optional): Number of logs to return (default: 50, max: 1000)
- `status` (optional): Filter by status (`completed`, `error`, `ignored`, `processing`)

**Response**:
```json
{
  "logs": [
    {
      "id": "webhook_123",
      "timestamp": "2024-01-15T10:25:00Z",
      "event": "issue_comment",
      "installationId": "12345678",
      "repository": "owner/repo",
      "user": "username",
      "comment": "@xibe-review please review this PR",
      "isPR": true,
      "prNumber": 123,
      "status": "completed",
      "processingTime": 15000,
      "error": null,
      "actions": [
        "Bot mentioned in PR",
        "Starting PR review process",
        "Review completed successfully"
      ]
    }
  ],
  "total": 150,
  "filtered": 25
}
```

**Usage Examples**:
```bash
# Get recent webhooks
curl https://review.xibe.app/api/webhooks

# Get last 10 completed webhooks
curl https://review.xibe.app/api/webhooks?limit=10&status=completed

# Get error logs only
curl https://review.xibe.app/api/webhooks?status=error
```

---

### `GET /api/webhook/:id` - Single Webhook Log
**Description**: Retrieves detailed information about a specific webhook event.

**Path Parameters**:
- `id`: Webhook log ID (e.g., `webhook_123456_abc123`)

**Response**:
```json
{
  "id": "webhook_123456_abc123",
  "timestamp": "2024-01-15T10:25:00Z",
  "event": "issue_comment",
  "installationId": "12345678",
  "repository": "owner/repo",
  "user": "username",
  "comment": "@xibe-review please review this PR",
  "isPR": true,
  "prNumber": 123,
  "status": "completed",
  "processingTime": 15000,
  "error": null,
  "actions": [
    "Comment received",
    "Bot mentioned in PR",
    "Using GitHub App authentication",
    "Starting PR review process",
    "Review completed and posted"
  ]
}
```

**Usage Example**:
```bash
curl https://review.xibe.app/api/webhook/webhook_123456_abc123
```

**Status Codes**:
- `200` - Webhook log found
- `404` - Webhook log not found

---

### `DELETE /api/webhooks` - Clear Webhook Logs
**Description**: Clears all webhook logs from the system (requires admin access).

**Response**:
```json
{
  "message": "Webhook logs cleared"
}
```

**Usage Example**:
```bash
curl -X DELETE https://review.xibe.app/api/webhooks
```

---

### `GET /api/analytics` - Global Analytics
**Description**: Returns global analytics and usage statistics.

**Response**:
```json
{
  "success": true,
  "data": {
    "totalUsers": 150,
    "totalReviews": 1250,
    "recentReviews": 25
  },
  "timestamp": "2024-01-15T10:30:00Z"
}
```

**Usage Example**:
```bash
curl https://review.xibe.app/api/analytics
```

---

### `GET /api/analytics/users` - User Analytics
**Description**: Returns aggregated user statistics and metrics.

**Response**:
```json
{
  "success": true,
  "data": {
    "totalUsers": 150,
    "totalReviews": 1250,
    "averageReviewsPerUser": 8
  },
  "timestamp": "2024-01-15T10:30:00Z"
}
```

**Usage Example**:
```bash
curl https://review.xibe.app/api/analytics/users
```

---

### `GET /api/analytics/reviews` - Review Analytics
**Description**: Returns recent review data and statistics.

**Query Parameters**:
- `limit` (optional): Number of recent reviews to return (default: 10)

**Response**:
```json
{
  "success": true,
  "data": {
    "reviews": [
      {
        "id": "review_123",
        "timestamp": "2024-01-15T10:25:00Z",
        "repository": "owner/repo",
        "pullRequest": 123,
        "user": "username",
        "installationId": "12345678",
        "model": "gpt-4",
        "reviewContent": "## 🤖 AI Code Review\n...",
        "processingTime": 15000,
        "status": "completed"
      }
    ],
    "totalReviews": 1250,
    "recentCount": 10
  },
  "timestamp": "2024-01-15T10:30:00Z"
}
```

**Usage Example**:
```bash
curl https://review.xibe.app/api/analytics/reviews?limit=5
```

---

### `GET /api/analytics/user/:userId` - User Statistics
**Description**: Returns statistics for a specific user.

**Path Parameters**:
- `userId`: GitHub username (e.g., `johnsmith`)

**Response**:
```json
{
  "success": true,
  "data": {
    "userId": "johnsmith",
    "totalReviews": 25,
    "lastActive": "2024-01-15T09:15:00Z",
    "reviews": 25
  },
  "timestamp": "2024-01-15T10:30:00Z"
}
```

**Usage Example**:
```bash
curl https://review.xibe.app/api/analytics/user/johnsmith
```

**Status Codes**:
- `200` - User found
- `404` - User not found

---

### `GET /api/analytics/dashboard` - Dashboard Data
**Description**: Returns comprehensive dashboard data including all analytics and metrics.

**Response**:
```json
{
  "success": true,
  "data": {
    "global": {
      "totalUsers": 150,
      "totalReviews": 1250,
      "recentReviews": 25
    },
    "webhooks": {
      "total": 150,
      "completed": 140,
      "error": 5,
      "ignored": 5,
      "processing": 0,
      "successRate": 93
    },
    "recentActivity": [
      {
        "id": "review_123",
        "timestamp": "2024-01-15T10:25:00Z",
        "repository": "owner/repo",
        "user": "username"
      }
    ],
    "installations": 5,
    "bot": {
      "status": "running",
      "uptime": 3600,
      "models": {
        "default": "gpt-4",
        "analysis": "gpt-4",
        "comment": "gpt-4"
      }
    }
  },
  "timestamp": "2024-01-15T10:30:00Z"
}
```

**Usage Example**:
```bash
curl https://review.xibe.app/api/analytics/dashboard
```

---

### `GET /api/models` - Available Models
**Description**: Returns information about configured AI models and their capabilities.

**Response**:
```json
{
  "models": [
    {
      "name": "gpt-4",
      "description": "Current AI model configured via environment variables",
      "maxInputChars": 8000,
      "temperature": 0.7,
      "reasoning": false,
      "bestFor": ["general-purpose"]
    }
  ],
  "total": 1,
  "defaultModel": "gpt-4"
}
```

**Usage Example**:
```bash
curl https://review.xibe.app/api/models
```

---

### `GET /api/troubleshoot` - System Diagnostics
**Description**: Returns system diagnostics and troubleshooting information.

**Response**:
```json
{
  "status": "healthy",
  "issues": [],
  "recommendations": [],
  "stats": {
    "totalWebhooks": 150,
    "errors": 5,
    "completed": 140,
    "botMentions": 120
  },
  "configuration": {
    "authMode": "app",
    "hasGitHubApp": true,
    "hasGitHubPAT": false,
    "hasAI": true,
    "botUsername": "xibe-review"
  }
}
```

**Usage Example**:
```bash
curl https://review.xibe.app/api/troubleshoot
```

---

### `GET /api/test-redis` - Redis Connection Test
**Description**: Tests Redis connectivity and performs basic operations.

**Response**:
```json
{
  "status": "connected",
  "test": "passed",
  "timestamp": "2024-01-15T10:30:00Z"
}
```

**Usage Example**:
```bash
curl https://review.xibe.app/api/test-redis
```

**Status Codes**:
- `200` - Redis is connected and working
- `500` - Redis connection issues

---

## 📡 Webhook Endpoints

### `POST /webhook` - GitHub Webhook Handler
**Description**: Main webhook endpoint that processes GitHub events and triggers AI reviews.

**Headers**:
```http
X-GitHub-Event: issue_comment
X-GitHub-Delivery: 12345678-1234-1234-1234-123456789abc
X-Hub-Signature-256: sha256=...
User-Agent: GitHub-Hookshot/1234567
Content-Type: application/json
```

**Payload Examples**:

#### Issue Comment Event (Manual Review)
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
    "id": 1234567890,
    "body": "@xibe-review please review this PR",
    "user": {
      "login": "username"
    }
  },
  "repository": {
    "name": "repo",
    "full_name": "owner/repo",
    "owner": {
      "login": "owner"
    }
  },
  "installation": {
    "id": 12345678
  },
  "sender": {
    "login": "username"
  }
}
```

#### Pull Request Event (Auto-Review)
```json
{
  "action": "opened",
  "number": 123,
  "pull_request": {
    "id": 1234567890,
    "title": "Add user authentication",
    "body": "Implements JWT-based authentication system",
    "user": {
      "login": "username"
    }
  },
  "repository": {
    "name": "repo",
    "full_name": "owner/repo",
    "owner": {
      "login": "owner"
    }
  },
  "installation": {
    "id": 12345678
  },
  "sender": {
    "login": "username"
  }
}
```

**Response**:
```json
{
  "message": "Review request received",
  "logId": "webhook_123456_abc123"
}
```

**Usage**:
Configure this endpoint as a webhook URL in your GitHub repository or GitHub App settings.

**Supported Events**:
- `issue_comment` - Manual review requests when bot is mentioned
- `pull_request` - Auto-reviews on PR open, update, or reopen

---

## 📊 Response Codes

### Success Codes
- `200` - Request successful
- `201` - Resource created successfully

### Client Error Codes
- `400` - Bad request (invalid parameters)
- `401` - Unauthorized (authentication required)
- `403` - Forbidden (insufficient permissions)
- `404` - Resource not found
- `429` - Too many requests (rate limited)

### Server Error Codes
- `500` - Internal server error
- `502` - Bad gateway (upstream service error)
- `503` - Service unavailable
- `504` - Gateway timeout

## 🔄 Rate Limiting

The API implements intelligent rate limiting to ensure fair usage:

### Webhook Processing
- **Duplicate Prevention**: Same PR/comment won't be processed twice within 5 minutes
- **Lock-based Processing**: Redis locks prevent concurrent processing of the same PR
- **Mention Limiting**: Maximum 2 mentions per user per comment to prevent spam

### API Endpoints
- **General Endpoints**: 100 requests per minute per IP
- **Analytics Endpoints**: 30 requests per minute per IP
- **Admin Endpoints**: 10 requests per minute per IP

## 📝 Content Types

### Request Content Types
- `application/json` - JSON data for API requests
- `application/x-www-form-urlencoded` - Form data (limited support)

### Response Content Types
- `application/json` - JSON responses for API endpoints
- `text/html` - HTML responses for public pages
- `text/plain` - Plain text for health checks

## 🚨 Error Handling

All API endpoints implement comprehensive error handling:

### Error Response Format
```json
{
  "error": "Error description",
  "code": "ERROR_CODE",
  "details": {
    "field": "Additional error details"
  },
  "timestamp": "2024-01-15T10:30:00Z"
}
```

### Common Error Codes
- `INVALID_REQUEST` - Malformed request or missing required fields
- `AUTHENTICATION_FAILED` - GitHub authentication failed
- `RATE_LIMITED` - Too many requests, please try again later
- `MODEL_ERROR` - AI model error or API unavailable
- `REDIS_ERROR` - Database connectivity issues

## 🧪 Testing the API

### Using cURL
```bash
# Health check
curl https://review.xibe.app/health

# Get bot status
curl https://review.xibe.app/api/status

# Get webhook logs
curl https://review.xibe.app/api/webhooks?limit=5

# Test Redis connection
curl https://review.xibe.app/api/test-redis
```

### Using JavaScript/Node.js
```javascript
const API_BASE = 'https://review.xibe.app';

async function getBotStatus() {
  const response = await fetch(`${API_BASE}/api/status`);
  const data = await response.json();
  console.log('Bot Status:', data);
}

async function getWebhookLogs() {
  const response = await fetch(`${API_BASE}/api/webhooks?limit=10&status=completed`);
  const data = await response.json();
  console.log('Webhook Logs:', data);
}
```

### Using Python
```python
import requests

API_BASE = 'https://review.xibe.app'

def get_health():
    response = requests.get(f'{API_BASE}/health')
    return response.json()

def get_analytics():
    response = requests.get(f'{API_BASE}/api/analytics')
    return response.json()

# Usage
print("Health:", get_health())
print("Analytics:", get_analytics())
```

## 🔐 Security Considerations

### API Security
- **HTTPS Only**: All API communications must use HTTPS
- **Input Validation**: All inputs are validated and sanitized
- **Rate Limiting**: Prevents abuse and ensures fair usage
- **Error Information**: Sensitive information not exposed in error messages

### Webhook Security
- **Signature Verification**: GitHub webhook signatures are always verified
- **Installation Validation**: GitHub App installations are validated
- **Origin Checking**: Requests must come from GitHub's servers

## 📈 Monitoring & Analytics

### Built-in Monitoring
- **Request Tracking**: All API requests are logged
- **Performance Metrics**: Response times and error rates tracked
- **Usage Analytics**: API usage patterns and trends
- **Health Monitoring**: Automated health checks and alerts

### Integration Ready
The API is designed for easy integration with monitoring systems:
- **Structured Logging**: JSON-formatted logs for easy parsing
- **Metrics Endpoints**: Dedicated endpoints for metrics collection
- **Status Endpoints**: Health and status information for monitoring

## 🔄 Webhook Integration

### GitHub Repository Setup
1. Go to Repository Settings → Webhooks
2. Add webhook with URL: `https://your-domain.com/webhook`
3. Select events: `Issue comments` and `Pull requests`
4. Set content type: `application/json`
5. Add webhook secret for security

### GitHub App Setup
1. Configure webhook URL in GitHub App settings
2. Subscribe to `Issue comment` and `Pull request` events
3. Generate and configure webhook secret
4. Install app on target repositories

## 🚀 Performance Tips

### Efficient API Usage
- **Batch Requests**: Use appropriate limits for list endpoints
- **Caching**: Cache frequently accessed data locally
- **Connection Reuse**: Reuse connections for multiple requests
- **Async Processing**: Handle responses asynchronously when possible

### Optimization Strategies
- **Pagination**: Use appropriate limits to avoid large responses
- **Filtering**: Use status filters to get only relevant data
- **Conditional Requests**: Check timestamps for incremental updates

---

For additional help or support, visit the [Troubleshooting Guide](troubleshooting.md) or [GitHub Issues](https://github.com/iotserver24/xibe-pr1/issues).
