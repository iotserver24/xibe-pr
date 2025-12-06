# 🤝 Contributing to xibe-pr

First off, thank you for considering contributing to xibe-pr! It's people like you that make this project such a great tool for the developer community.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Pull Request Process](#pull-request-process)
- [Style Guidelines](#style-guidelines)
- [Community](#community)

## 📜 Code of Conduct

This project and everyone participating in it is governed by the [xibe-pr Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

## 🚀 How Can I Contribute?

### 🐛 Reporting Bugs

Before creating bug reports, please check the [existing issues](https://github.com/iotserver24/xibe-pr/issues) to avoid duplicates.

When creating a bug report, please include:

- **Clear title** describing the issue
- **Steps to reproduce** the behavior
- **Expected behavior** vs what actually happened
- **Screenshots** if applicable
- **Environment details**:
  - Node.js version
  - Operating system
  - Bot version/commit hash

**Bug Report Template:**

```markdown
## Bug Description
A clear description of what the bug is.

## Steps to Reproduce
1. Go to '...'
2. Run command '...'
3. See error

## Expected Behavior
What you expected to happen.

## Actual Behavior
What actually happened.

## Environment
- Node.js: [version]
- OS: [e.g., Ubuntu 22.04]
- Bot Version: [commit hash or release]

## Additional Context
Any other context about the problem.
```

### 💡 Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

- **Use case**: Why is this enhancement needed?
- **Proposed solution**: How should it work?
- **Alternatives considered**: Other options you've thought about
- **Additional context**: Screenshots, mockups, examples

### 🔧 Pull Requests

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🛠️ Development Setup

### Prerequisites

- Node.js v18 or later
- MongoDB (local or Atlas)
- Git

### Local Development

1. **Clone your fork:**

   ```bash
   git clone https://github.com/YOUR_USERNAME/xibe-pr.git
   cd xibe-pr
   ```

2. **Install dependencies:**

   ```bash
   npm install
   cd pr-site && npm install && cd ..
   ```

3. **Set up environment:**

   ```bash
   cp .env.example .env
   # Edit .env with your test credentials
   ```

4. **Start development server:**

   ```bash
   npm run dev
   ```

5. **Run tests:**

   ```bash
   npm test
   ```

### Project Structure

```
PR-REVIEW-XIBE/
├── bot.js              # Main bot application
├── modules/            # Core modules
├── scripts/            # Utility scripts
├── tests/              # Test files
├── pr-site/            # Frontend dashboard
│   ├── src/
│   │   ├── components/ # React components
│   │   ├── lib/        # Utilities
│   │   └── pages/      # Page components
│   └── public/         # Static assets
└── docs/               # Documentation
```

## 📝 Pull Request Process

### Before Submitting

1. **Test your changes** - Ensure all tests pass
2. **Update documentation** - If you're adding features, update the README
3. **Follow style guidelines** - See below
4. **Write meaningful commits** - Use conventional commit messages

### PR Checklist

- [ ] My code follows the project's style guidelines
- [ ] I have performed a self-review of my code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings
- [ ] I have added tests that prove my fix is effective or my feature works
- [ ] New and existing unit tests pass locally with my changes

### Review Process

1. A maintainer will review your PR
2. They may request changes or ask questions
3. Once approved, your PR will be merged
4. Your contribution will be credited in the release notes

## 🎨 Style Guidelines

### JavaScript/TypeScript

- Use ES6+ features
- Use `const` for constants, `let` for variables that change
- Use async/await over raw promises
- Add JSDoc comments for functions
- Use meaningful variable and function names

```javascript
// ✅ Good
const fetchPullRequest = async (owner, repo, prNumber) => {
  const response = await octokit.pulls.get({ owner, repo, pull_number: prNumber });
  return response.data;
};

// ❌ Bad
const get = async (o, r, n) => {
  return (await octokit.pulls.get({ owner: o, repo: r, pull_number: n })).data;
};
```

### Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add support for multiple AI providers
fix: resolve webhook signature validation error
docs: update installation instructions
refactor: simplify PR analysis logic
test: add tests for comment parsing
chore: update dependencies
```

### Code Comments

```javascript
// ✅ Good - explains WHY
// Rate limit to 10 requests/min to avoid GitHub API limits
const rateLimiter = createRateLimiter({ max: 10, windowMs: 60000 });

// ❌ Bad - explains WHAT (obvious from code)
// Create rate limiter
const rateLimiter = createRateLimiter({ max: 10, windowMs: 60000 });
```

## 🔒 Security

If you discover a security vulnerability, please DO NOT open a public issue. Instead, see our [Security Policy](SECURITY.md) for responsible disclosure.

## 🌟 Recognition

Contributors are recognized in:

- Release notes
- README contributors section
- GitHub contributors page

## 💬 Community

- **GitHub Issues**: For bugs and feature requests
- **GitHub Discussions**: For questions and ideas
- **Pull Requests**: For code contributions

## 📄 License

By contributing, you agree that your contributions will be licensed under the same [CC BY-NC-SA 4.0 License](LICENSE) that covers the project.

---

Thank you for contributing to xibe-pr! 🎉
