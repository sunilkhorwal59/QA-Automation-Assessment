# QA-Automation-Assessment
UI automation with Playwright and API automation with Postman for ReqRes

# DemoQA Book Store Application – UI Automation

## Application URL
https://demoqa.com/

## Tech Stack
- Playwright
- JavaScript (Node.js)
- File System (fs)

## Test data 
- Test data stored in json file

## Test Scenarios Automated
- Navigate to Book Store Application
- Login with existing user
- Validate username and logout button
- Search for book **"Learning JavaScript Design Patterns"**
- Validate search result
- Write **Title, Author, Publisher** into a text file
- Logout and validate redirection to `/login`

## How to Run
- Navigate to the UI folder: cd ui-automation
- Install dependencies: npm install
- Execute the test: npx playwright test tests/bookstore.spec.js


# ReqRes - API Automation using Playwright

## API Details
Base URL:  
https://reqres.in

## Tech Stack
- Playwright
- JavaScript (Node.js)

## Test Scenarios Automated
1. Create a user and validate the HTTP status code
2. Get user details and validate user ID
3. Update the user name and validate the updated response

# How to Run
- npx playwright test reqres-api.spec.js

## Notes
- Reqres is a mock API and does not persist created users.
- For dependent requests (GET and PUT), a static user ID is used to ensure consistent results.
- Tests are executed sequentially to maintain request order.

## Viewing Test Results
Playwright generates an HTML report after execution.

## How to view reports
- npx playwright show-report
