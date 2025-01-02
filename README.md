

# Install Playwright & Select Configurations
npm init playwright@latest

Playwright will download the browsers needed as well as create the following files.

- node_modules
- playwright.config.js
- package.json
- package-lock.json
- tests/ example.spec.js
- tests-examples/ demo-todo-app.spec.js

dotenv Package Installation Command
npm install dotenv --save

csv-parse Package Installation Command
npm install csv-parse

faker-js plugin for test data generation
npm install @faker-js/faker --save-dev

luxon plugin for custom dates
npm install --save luxon

# Playwright Important Commands
npx playwright install

Install Browsers manually.
npx playwright test

Runs the end-to-end tests.
npx playwright test --ui

Starts the interactive UI mode.
npx playwright test --project=chromium

Runs the tests only on Desktop Chrome.
npx playwright test example

Runs the tests in a specific file.
npx playwright test --debug

Runs the tests in debug mode.
npx playwright codegen

Auto generate tests with Codegen.

We suggest that you begin by typing:
npx playwright test

And check out the following files:
.\tests\example.spec.js - Example end-to-end test
.\tests-examples\demo-todo-app.spec.js - Demo Todo App end-to-end tests
.\playwright.config.js - Playwright Test configuration
# PlaywrightAPITests_ContactListApp
# PlaywrightAPITests_ContactListApp
