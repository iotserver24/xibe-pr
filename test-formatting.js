#!/usr/bin/env node
/**
 * Test script to verify the updated AI system prompt formatting
 * This validates that the system prompts contain the required formatting guidelines
 */

import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('🧪 AI System Prompt Formatting Test\n');
console.log('='.repeat(60));

// Helper function to handle test failures
function exitWithError(testName) {
  console.log(`   ❌ ${testName} NOT found`);
  process.exit(1);
}

// Read bot.js content
const botJsPath = join(__dirname, 'bot.js');
const botJsContent = readFileSync(botJsPath, 'utf-8');

// Test 1: Check for backtick formatting instructions
console.log('\n1️⃣  Testing backtick formatting instructions...');
const hasBacktickInstructions = botJsContent.includes('Use backticks for file names to make them clickable');
if (hasBacktickInstructions) {
  console.log('   ✅ Backtick formatting instructions found');
} else {
  exitWithError('Backtick formatting instructions');
}

// Test 2: Check for code block formatting instructions
console.log('\n2️⃣  Testing code block formatting instructions...');
const hasCodeBlockInstructions = botJsContent.includes('Use triple backticks for code blocks with language');
if (hasCodeBlockInstructions) {
  console.log('   ✅ Code block formatting instructions found');
} else {
  exitWithError('Code block formatting instructions');
}

// Test 3: Check for structured issue format
console.log('\n3️⃣  Testing structured issue format...');
const hasStructuredFormat = botJsContent.includes('## 🔴 Bug: [Clear Title]');
if (hasStructuredFormat) {
  console.log('   ✅ Structured issue format found');
} else {
  exitWithError('Structured issue format');
}

// Test 4: Check for emoji severity markers
console.log('\n4️⃣  Testing emoji severity markers...');
const hasEmojiMarkers = botJsContent.includes('🔴 Critical') && 
                        botJsContent.includes('🟡 Warnings') && 
                        botJsContent.includes('🔵 Suggestions');
if (hasEmojiMarkers) {
  console.log('   ✅ Emoji severity markers found');
} else {
  exitWithError('Emoji severity markers');
}

// Test 5: Check for review summary format
console.log('\n5️⃣  Testing review summary format...');
const hasSummaryFormat = botJsContent.includes('## 📊 Review Summary') &&
                         botJsContent.includes('**Files reviewed:**') &&
                         botJsContent.includes('**Issues found:**') &&
                         botJsContent.includes('**Recommendation:**');
if (hasSummaryFormat) {
  console.log('   ✅ Review summary format found');
} else {
  exitWithError('Review summary format');
}

// Test 6: Check for prioritization rules
console.log('\n6️⃣  Testing prioritization rules...');
const hasPrioritization = botJsContent.includes('Critical security issues FIRST') &&
                          botJsContent.includes('Keep code blocks under 20 lines') &&
                          botJsContent.includes('Group similar issues');
if (hasPrioritization) {
  console.log('   ✅ Prioritization rules found');
} else {
  exitWithError('Prioritization rules');
}

// Test 7: Check for incomplete review prevention
console.log('\n7️⃣  Testing incomplete review prevention...');
const hasIncompleteReviewPrevention = botJsContent.includes('CRITICAL: Prevent Incomplete Reviews') &&
                                       botJsContent.includes('ALWAYS include summary at end');
if (hasIncompleteReviewPrevention) {
  console.log('   ✅ Incomplete review prevention rules found');
} else {
  exitWithError('Incomplete review prevention rules');
}

// Test 8: Check for security checks
console.log('\n8️⃣  Testing security check instructions...');
const hasSecurityChecks = botJsContent.includes('.env files committed') &&
                          botJsContent.includes('Hardcoded API keys, passwords, tokens');
if (hasSecurityChecks) {
  console.log('   ✅ Security check instructions found');
} else {
  exitWithError('Security check instructions');
}

// Test 9: Verify both system prompts are updated
console.log('\n9️⃣  Testing that both AI functions have updated prompts...');
// Check for presence of formatting rules in both functions
const hasAnalyzeFileFormatting = botJsContent.includes('analyzeFileWithAI') && 
                                  botJsContent.substring(botJsContent.indexOf('analyzeFileWithAI')).includes('Output Format Rules');
const hasSynthesizeFormatting = botJsContent.includes('synthesizeReviewFromAnalyses') && 
                                 botJsContent.substring(botJsContent.indexOf('synthesizeReviewFromAnalyses')).includes('Output Format Rules');

if (hasAnalyzeFileFormatting && hasSynthesizeFormatting) {
  console.log('   ✅ Both AI functions have updated prompts');
  console.log(`      - analyzeFileWithAI: ✓`);
  console.log(`      - synthesizeReviewFromAnalyses: ✓`);
} else {
  console.log(`      - analyzeFileWithAI: ${hasAnalyzeFileFormatting ? '✓' : '✗'}`);
  console.log(`      - synthesizeReviewFromAnalyses: ${hasSynthesizeFormatting ? '✓' : '✗'}`);
  exitWithError('Not all AI functions have updated prompts');
}

console.log('\n' + '='.repeat(60));
console.log('✅ All formatting tests passed!');
console.log('\nThe AI system prompts have been successfully updated with:');
console.log('  • Professional formatting guidelines');
console.log('  • Structured issue templates');
console.log('  • Emoji severity markers (🔴 🟡 🔵)');
console.log('  • Review summary requirements');
console.log('  • Prioritization rules to prevent incomplete reviews');
console.log('  • Security-focused checks');
console.log('\n🎉 The bot is ready to provide professional, complete reviews!');
