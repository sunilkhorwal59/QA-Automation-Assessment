# QA-Automation-Assessment
UI automation & API automation with Playwright 

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
- Navigate to the cd ui-automation
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
- Navigate to the API-automation
- Install dependencies: npm install
- Execute the test: npx playwright test tests/reqres-api.spec.js

## Notes
- Reqres is a mock API and does not persist created users.
- The Create User API returns a generated user ID.
- Due to API behavior, the generated ID cannot be used to fetch user details using GET.
- The generated ID is used for the Update User API.
- A static user ID is used for the Get User API to validate the response.

## Viewing Test Results
Playwright generates an HTML report after execution.

## How to view reports
- npx playwright show-report
