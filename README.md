A comprehensive end-to-end testing framework built with Playwright for testing a web-based notes application. This project demonstrates modern web automation practices including user authentication flows, form validation testing, and cross-browser compatibility.

**🚀 Features**
User Authentication Testing: Complete login and registration flow automation
Form Validation Testing: Comprehensive validation error handling for user inputs
Cross-Browser Support: Configured for Chrome, Firefox, and Safari testing
Ad Blocking: Built-in ad blocking to ensure clean test execution
HTML Test Reports: Detailed test reports with screenshots and traces
CI/CD Ready: Optimized for continuous integration environments

**🧪 Test Coverage**
Login Flow: Valid credentials authentication and error handling
Registration Flow: New user registration with duplicate email detection
Form Validation: Required field validation for all user inputs
Error Handling: Toast notifications and validation message testing

**🛠️ Tech Stack**
Playwright - Modern web automation framework
TypeScript - Type-safe test development
Node.js - Runtime environment
HTML Reporter - Detailed test reporting

**📋 Test Scenarios**
Login Tests
Successful user login with valid credentials
Form validation for empty fields
UI element visibility after authentication
Registration Tests
New user registration flow
Duplicate email address handling
Form validation for all required fields

**🚀 Getting Started**
# Install dependencies
npm install

# Run tests
npx playwright test

# Run tests with UI
npx playwright test --ui

# Generate test report
npx playwright show-report
