/**
 * Dependency Vulnerability Scanner Module
 * Scans package.json, requirements.txt, and other dependency files for known vulnerabilities
 */

import { Octokit } from '@octokit/rest';

// Known vulnerability patterns and CVEs
const VULNERABILITY_PATTERNS = {
  // Node.js/npm vulnerabilities
  'npm': {
    'lodash': ['<4.17.21', 'CVE-2021-23337'],
    'axios': ['<0.21.1', 'CVE-2021-3749'],
    'moment': ['<2.29.2', 'CVE-2022-24785'],
    'express': ['<4.17.3', 'CVE-2022-24999'],
    'jsonwebtoken': ['<8.5.1', 'CVE-2022-23529'],
    'ws': ['<8.2.3', 'CVE-2021-32640'],
    'minimist': ['<1.2.6', 'CVE-2021-44906'],
    'node-forge': ['<1.3.0', 'CVE-2022-24772'],
    'semver': ['<7.5.2', 'CVE-2022-25883'],
    'yargs-parser': ['<18.1.2', 'CVE-2020-7608']
  },
  // Python vulnerabilities
  'pip': {
    'django': ['<3.2.12', 'CVE-2022-28346'],
    'flask': ['<2.0.3', 'CVE-2021-23336'],
    'requests': ['<2.28.1', 'CVE-2022-31799'],
    'urllib3': ['<1.26.12', 'CVE-2022-21698'],
    'pillow': ['<9.0.0', 'CVE-2022-22817'],
    'cryptography': ['<3.4.8', 'CVE-2021-2394'],
    'pyyaml': ['<6.0', 'CVE-2020-14343'],
    'jinja2': ['<3.1.0', 'CVE-2022-24771'],
    'werkzeug': ['<2.1.2', 'CVE-2022-29361'],
    'tornado': ['<6.1', 'CVE-2021-29921']
  },
  // Java vulnerabilities
  'maven': {
    'spring-boot': ['<2.6.6', 'CVE-2022-22965'],
    'jackson-databind': ['<2.13.2.2', 'CVE-2022-25647'],
    'log4j-core': ['<2.17.1', 'CVE-2021-44228'],
    'commons-collections': ['<3.2.2', 'CVE-2015-4852'],
    'struts2': ['<2.5.30', 'CVE-2021-31805']
  }
};

// Severity levels
const SEVERITY_LEVELS = {
  'CRITICAL': { emoji: '🔴', priority: 1, color: '#dc2626' },
  'HIGH': { emoji: '🟠', priority: 2, color: '#ea580c' },
  'MEDIUM': { emoji: '🟡', priority: 3, color: '#ca8a04' },
  'LOW': { emoji: '🟢', priority: 4, color: '#16a34a' }
};

/**
 * Parse package.json and extract dependencies
 */
export function parsePackageJson(content) {
  try {
    const pkg = JSON.parse(content);
    const dependencies = {
      ...pkg.dependencies || {},
      ...pkg.devDependencies || {},
      ...pkg.peerDependencies || {}
    };
    return dependencies;
  } catch (error) {
    console.error('Error parsing package.json:', error);
    return {};
  }
}

/**
 * Parse requirements.txt and extract dependencies
 */
export function parseRequirementsTxt(content) {
  const dependencies = {};
  const lines = content.split('\n');
  
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#')) {
      // Handle formats like: package==1.0.0, package>=1.0.0, package~=1.0.0
      const match = trimmed.match(/^([a-zA-Z0-9_-]+)([>=<~!]+)(.+)$/);
      if (match) {
        const [, name, operator, version] = match;
        dependencies[name.toLowerCase()] = { version, operator };
      } else {
        // Just package name without version
        const name = trimmed.split(/[>=<~!]/)[0];
        dependencies[name.toLowerCase()] = { version: 'latest', operator: '==' };
      }
    }
  }
  
  return dependencies;
}

/**
 * Parse pom.xml and extract dependencies (basic XML parsing)
 */
export function parsePomXml(content) {
  const dependencies = {};
  
  // Simple regex-based parsing for Maven dependencies
  const dependencyRegex = /<dependency>[\s\S]*?<groupId>([^<]+)<\/groupId>[\s\S]*?<artifactId>([^<]+)<\/artifactId>[\s\S]*?<version>([^<]+)<\/version>[\s\S]*?<\/dependency>/g;
  let match;
  
  while ((match = dependencyRegex.exec(content)) !== null) {
    const [, groupId, artifactId, version] = match;
    const fullName = `${groupId}:${artifactId}`;
    dependencies[fullName] = { version, operator: '==' };
  }
  
  return dependencies;
}

/**
 * Check if a version is vulnerable based on version constraints
 */
function isVulnerableVersion(currentVersion, vulnerableConstraint) {
  try {
    // Simple version comparison (can be enhanced with semver library)
    const current = currentVersion.split('.').map(Number);
    const constraint = vulnerableConstraint.split('.').map(Number);
    
    // Check if current version is less than constraint
    for (let i = 0; i < Math.max(current.length, constraint.length); i++) {
      const curr = current[i] || 0;
      const cons = constraint[i] || 0;
      
      if (curr < cons) return true;
      if (curr > cons) return false;
    }
    
    return false;
  } catch (error) {
    console.error('Error comparing versions:', error);
    return false;
  }
}

/**
 * Scan dependencies for known vulnerabilities
 */
export function scanDependencies(dependencies, packageManager = 'npm') {
  const vulnerabilities = [];
  const vulnDb = VULNERABILITY_PATTERNS[packageManager] || {};
  
  for (const [packageName, packageInfo] of Object.entries(dependencies)) {
    const version = typeof packageInfo === 'string' ? packageInfo : packageInfo.version;
    
    // Check against known vulnerabilities
    for (const [vulnPackage, vulnInfo] of Object.entries(vulnDb)) {
      if (packageName.toLowerCase().includes(vulnPackage.toLowerCase()) || 
          vulnPackage.toLowerCase().includes(packageName.toLowerCase())) {
        
        const [vulnerableVersion, cve] = vulnInfo;
        
        if (isVulnerableVersion(version, vulnerableVersion)) {
          vulnerabilities.push({
            package: packageName,
            currentVersion: version,
            vulnerableVersion,
            cve,
            severity: getSeverityLevel(cve),
            description: getVulnerabilityDescription(cve),
            fix: getFixSuggestion(packageName, cve)
          });
        }
      }
    }
  }
  
  return vulnerabilities.sort((a, b) => a.severity.priority - b.severity.priority);
}

/**
 * Get severity level based on CVE
 */
function getSeverityLevel(cve) {
  // Critical CVEs
  if (['CVE-2021-44228', 'CVE-2022-22965', 'CVE-2021-23337'].includes(cve)) {
    return SEVERITY_LEVELS.CRITICAL;
  }
  
  // High severity CVEs
  if (['CVE-2021-3749', 'CVE-2022-24785', 'CVE-2022-24999'].includes(cve)) {
    return SEVERITY_LEVELS.HIGH;
  }
  
  // Medium severity CVEs
  if (['CVE-2022-23529', 'CVE-2021-32640', 'CVE-2021-44906'].includes(cve)) {
    return SEVERITY_LEVELS.MEDIUM;
  }
  
  return SEVERITY_LEVELS.LOW;
}

/**
 * Get vulnerability description
 */
function getVulnerabilityDescription(cve) {
  const descriptions = {
    'CVE-2021-44228': 'Log4j Remote Code Execution vulnerability',
    'CVE-2022-22965': 'Spring Framework RCE vulnerability',
    'CVE-2021-23337': 'Lodash prototype pollution vulnerability',
    'CVE-2021-3749': 'Axios SSRF vulnerability',
    'CVE-2022-24785': 'Moment.js prototype pollution',
    'CVE-2022-24999': 'Express.js prototype pollution',
    'CVE-2022-23529': 'jsonwebtoken algorithm confusion',
    'CVE-2021-32640': 'WebSocket prototype pollution',
    'CVE-2021-44906': 'minimist prototype pollution',
    'CVE-2022-24772': 'node-forge prototype pollution'
  };
  
  return descriptions[cve] || 'Security vulnerability detected';
}

/**
 * Get fix suggestion
 */
function getFixSuggestion(packageName, cve) {
  const suggestions = {
    'CVE-2021-44228': 'Update to log4j-core 2.17.1 or later',
    'CVE-2022-22965': 'Update Spring Framework to 5.3.18+ or 5.2.20+',
    'CVE-2021-23337': 'Update lodash to 4.17.21 or later',
    'CVE-2021-3749': 'Update axios to 0.21.1 or later',
    'CVE-2022-24785': 'Update moment.js to 2.29.2 or later',
    'CVE-2022-24999': 'Update express to 4.17.3 or later',
    'CVE-2022-23529': 'Update jsonwebtoken to 8.5.1 or later',
    'CVE-2021-32640': 'Update ws to 8.2.3 or later',
    'CVE-2021-44906': 'Update minimist to 1.2.6 or later',
    'CVE-2022-24772': 'Update node-forge to 1.3.0 or later'
  };
  
  return suggestions[cve] || `Update ${packageName} to the latest version`;
}

/**
 * Generate vulnerability report
 */
export function generateVulnerabilityReport(vulnerabilities) {
  if (vulnerabilities.length === 0) {
    return {
      hasVulnerabilities: false,
      summary: '✅ No known vulnerabilities detected',
      report: ''
    };
  }
  
  const criticalCount = vulnerabilities.filter(v => v.severity === SEVERITY_LEVELS.CRITICAL).length;
  const highCount = vulnerabilities.filter(v => v.severity === SEVERITY_LEVELS.HIGH).length;
  const mediumCount = vulnerabilities.filter(v => v.severity === SEVERITY_LEVELS.MEDIUM).length;
  const lowCount = vulnerabilities.filter(v => v.severity === SEVERITY_LEVELS.LOW).length;
  
  let report = `## 🛡️ **Dependency Security Analysis**\n\n`;
  
  // Summary
  report += `### 📊 **Vulnerability Summary**\n`;
  report += `- 🔴 **Critical:** ${criticalCount}\n`;
  report += `- 🟠 **High:** ${highCount}\n`;
  report += `- 🟡 **Medium:** ${mediumCount}\n`;
  report += `- 🟢 **Low:** ${lowCount}\n`;
  report += `- **Total:** ${vulnerabilities.length} vulnerabilities found\n\n`;
  
  // Detailed vulnerabilities
  report += `### 🔍 **Detailed Findings**\n\n`;
  
  for (const vuln of vulnerabilities) {
    report += `#### ${vuln.severity.emoji} **${vuln.package}** (${vuln.currentVersion})\n`;
    report += `- **CVE:** \`${vuln.cve}\`\n`;
    report += `- **Description:** ${vuln.description}\n`;
    report += `- **Vulnerable Version:** < ${vuln.vulnerableVersion}\n`;
    report += `- **Fix:** ${vuln.fix}\n\n`;
  }
  
  // Recommendations
  report += `### 💡 **Recommendations**\n`;
  report += `1. **Immediate Action:** Update all critical and high severity vulnerabilities\n`;
  report += `2. **Regular Updates:** Implement automated dependency updates\n`;
  report += `3. **Security Scanning:** Add security scanning to CI/CD pipeline\n`;
  report += `4. **Monitoring:** Set up vulnerability monitoring alerts\n\n`;
  
  return {
    hasVulnerabilities: true,
    summary: `Found ${vulnerabilities.length} vulnerabilities (${criticalCount} critical, ${highCount} high)`,
    report
  };
}

/**
 * Scan files for dependency vulnerabilities
 */
export async function scanFilesForVulnerabilities(files) {
  const vulnerabilityResults = [];
  
  for (const file of files) {
    const filename = file.filename.toLowerCase();
    let dependencies = {};
    let packageManager = 'unknown';
    
    // Determine package manager and parse dependencies
    if (filename === 'package.json') {
      dependencies = parsePackageJson(file.patch || '{}');
      packageManager = 'npm';
    } else if (filename === 'requirements.txt') {
      dependencies = parseRequirementsTxt(file.patch || '');
      packageManager = 'pip';
    } else if (filename === 'pom.xml') {
      dependencies = parsePomXml(file.patch || '');
      packageManager = 'maven';
    } else if (filename === 'composer.json') {
      // PHP Composer
      try {
        const composer = JSON.parse(file.patch || '{}');
        dependencies = { ...composer.require || {}, ...composer['require-dev'] || {} };
        packageManager = 'composer';
      } catch (error) {
        console.error('Error parsing composer.json:', error);
      }
    }
    
    // Scan for vulnerabilities if we found dependencies
    if (Object.keys(dependencies).length > 0) {
      const vulnerabilities = scanDependencies(dependencies, packageManager);
      
      if (vulnerabilities.length > 0) {
        vulnerabilityResults.push({
          file: file.filename,
          packageManager,
          dependencies: Object.keys(dependencies).length,
          vulnerabilities,
          report: generateVulnerabilityReport(vulnerabilities)
        });
      }
    }
  }
  
  return vulnerabilityResults;
}
