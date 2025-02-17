## Overview
This repository contains a Playwright-driven test suite designed to showcase data-driven testing (DDT) techniques in JavaScript/TypeScript. The suite dynamically adapts test cases from a JSON data structure to ensure scalability and maintainability.

## Features
- **Data-Driven Testing (DDT):** Reduces code duplication by driving test scenarios from structured test data.
- **Playwright Automation:** Uses Playwright for UI testing.
- **Scalability & Maintainability:** Easily extendable with new test cases without modifying the core test logic.

## Test Scenarios
The test suite automates login and verification of tasks in a demo app:

1. **Login Automation**

2. **Task Verification**
   - Verifies tasks across different categories and priorities in both Web and Mobile applications.
   - Uses structured data to validate task titles, statuses, and tags.

## How to Run
### Setup
Ensure you have Playwright installed:
```sh
npm install
```

### Execute Tests
Run the Playwright test suite:
```sh
npx playwright test
```


---
### Contact
For any questions or feedback, feel free to reach out!

