# 📒 Playwright Notes Testing Framework

A comprehensive **end-to-end testing framework** built with **Playwright** for testing a web-based notes application.  
This project demonstrates **modern web automation practices** including authentication flows, form validation, and cross-browser compatibility.

---

## 🚀 Features

- **User Authentication Testing** → Complete login & registration flow automation  
- **Form Validation Testing** → Comprehensive validation error handling for user inputs  
- **Cross-Browser Support** → Configured for Chrome, Firefox, and Safari  
- **Ad Blocking** → Built-in ad blocking for clean test execution  
- **HTML Test Reports** → Detailed test reports with screenshots & traces  
- **CI/CD Ready** → Optimized for continuous integration pipelines  

---

## 🧪 Test Coverage

- **Login Flow**  
  - Valid credentials authentication  
  - Invalid credentials & error handling  

- **Registration Flow**  
  - New user registration  
  - Duplicate email detection  

- **Form Validation**  
  - Required field validation for all user inputs  

- **Error Handling**  
  - Toast notifications  
  - Validation message testing  

---

## 🛠️ Tech Stack

- [Playwright](https://playwright.dev/) – Modern web automation framework  
- [TypeScript](https://www.typescriptlang.org/) – Type-safe test development  
- [Node.js](https://nodejs.org/) – Runtime environment  
- **Playwright HTML Reporter** – Detailed test reporting  

---

## 📋 Test Scenarios

### 🔑 Login Tests
- Successful user login with valid credentials  
- Form validation for empty fields  
- UI element visibility after authentication  

### 📝 Registration Tests
- New user registration flow  
- Duplicate email address handling  
- Form validation for required fields  

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install

# Run tests
npx playwright test

# Run tests with UI
npx playwright test --ui

# Generate test report
npx playwright show-report
