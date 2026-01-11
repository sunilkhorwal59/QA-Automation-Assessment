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

## Test Scenarios Covered
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


# ReqRes - API Automation 
Application URL
https://reqres.in/

Tech Stack
- Postman

## Test Scenarios Covered
- POST Create New User: Validates successful user creation (Status 201)
- GET User Details: Fetches user data using variable chaining (Status 200)
- PUT Update User: Updates user information and validates the response (Status 200)

# How to Run
- Import the JSON file from api-automation/ReqRes_Assignment.json into Postman.
- Open the Collection Runner.
- Click Run ReqRes_Assignment (No environment selection is required as all variables are self-contained within the collection).
