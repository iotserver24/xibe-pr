# AI Review Formatting Examples

This document shows examples of the updated AI system prompt formatting for PR reviews.

## Overview

The PR review bot now formats reviews with professional, well-structured output similar to Cursor bugbot style.

## Key Features

### 1. File Name Formatting
- **Before**: File names were plain text
- **After**: File names use backticks for GitHub clickability

Example:
```markdown
**File:** `src/auth.js`
```

### 2. Code Block Formatting
- **Before**: Code might not have proper syntax highlighting
- **After**: All code blocks use triple backticks with language specification

Example:
````markdown
```javascript
const API_KEY = 'sk-1234567890abcdef'; // Security issue!
```
````

### 3. Structured Issue Format

Issues now follow a consistent template:

```markdown
## 🔴 Bug: Hardcoded API Credentials

**File:** `src/config.js`

**Description:**
API credentials are hardcoded in the source file instead of using environment variables.

**Code:**
```javascript
const API_KEY = 'sk-1234567890abcdef';
const SECRET = 'my-secret-key';
```

**Why this is a problem:**
- Credentials are exposed in version control
- Cannot be changed without code deployment
- Security risk if repository is compromised

**Fix:**
```javascript
const API_KEY = process.env.API_KEY;
const SECRET = process.env.SECRET;
```
```

### 4. Severity Markers

All issues are categorized with emoji severity markers:
- 🔴 **Critical**: Security vulnerabilities, exposed credentials, major bugs
- 🟡 **Warning**: Code quality issues, potential bugs, best practice violations
- 🔵 **Suggestion**: Minor improvements, style recommendations, optimizations

### 5. Review Summary

Every review now includes a mandatory summary section:

```markdown
## 📊 Review Summary

**Files reviewed:** 5
**Issues found:**
- 🔴 Critical: 2
- 🟡 Warnings: 3
- 🔵 Suggestions: 1

**Recommendation:** ⚠️ Request changes
```

## Incomplete Review Prevention

The AI now follows strict prioritization rules to ensure reviews are always complete:

### Prioritization Order
1. 🔴 Critical security issues FIRST (always shown)
2. 🟡 Warnings second
3. 🔵 Suggestions last (may be skipped if token limit approached)

### Token Efficiency Rules
- Code blocks limited to max 20 lines
- Similar issues across files are grouped together
- Descriptions are concise when many issues exist
- Summary is ALWAYS included (even if other content is truncated)

### Example of Grouped Issues

Instead of:
```markdown
## 🔴 Bug: Hardcoded credentials in auth.js
[full details]

## 🔴 Bug: Hardcoded credentials in config.js
[full details]

## 🔴 Bug: Hardcoded credentials in api.js
[full details]
```

The AI now outputs:
```markdown
## 🔴 Bug: Credentials Leaked (3 files)

**Files:** `auth.js`, `config.js`, `api.js`

All contain hardcoded API keys. Fix:
1. Move to environment variables
2. Add to .gitignore
3. Rotate keys immediately

[Show ONE representative code example]
```

## Complete Review Example

Here's what a full review looks like with the new formatting:

```markdown
## 🔍 Code Review for @johnsmith

**Security Concerns:**
- 🔴 Hardcoded API credentials found in `src/config.js` (line 15)
- 🔴 SQL injection vulnerability in `src/auth.js` (line 42)
- 🟡 Missing error handling in `src/utils.js` (line 28)

**Recommended Changes:**

### 1. Fix Hardcoded Credentials

**File:** `src/config.js`

**Current:**
```javascript
const API_KEY = 'sk-1234567890abcdef';
```

**Fix:**
```javascript
const API_KEY = process.env.API_KEY;
if (!API_KEY) {
  throw new Error('API_KEY environment variable is required');
}
```

### 2. Fix SQL Injection

**File:** `src/auth.js`

**Current:**
```javascript
const query = `SELECT * FROM users WHERE username='${username}'`;
```

**Fix:**
```javascript
const query = 'SELECT * FROM users WHERE username = ?';
db.query(query, [username]);
```

**Comprehensive Analysis:**
- Code structure is well-organized
- Good use of modern JavaScript features
- Documentation could be improved in complex functions

---

## 📊 Review Summary

**Files reviewed:** 5
**Issues found:**
- 🔴 Critical: 2
- 🟡 Warnings: 3
- 🔵 Suggestions: 0

**Recommendation:** ⚠️ Request changes

**Action Items:**
1. Remove hardcoded credentials immediately
2. Rotate exposed API keys
3. Add parameterized queries to prevent SQL injection
4. Add error handling to critical functions
```

## Security Checks

The AI always checks for:
- ✅ `.env` files committed (major security issue!)
- ✅ Hardcoded API keys, passwords, tokens
- ✅ Missing error handling
- ✅ SQL injection vulnerabilities
- ✅ XSS vulnerabilities
- ✅ Authentication/authorization issues

## Benefits

1. **Consistency**: All reviews follow the same professional format
2. **Readability**: Clear structure with proper formatting
3. **Completeness**: Summary always included, preventing incomplete reviews
4. **Prioritization**: Critical issues highlighted first
5. **Actionability**: Clear fixes provided with code examples
6. **GitHub Integration**: Clickable file names and proper code highlighting
