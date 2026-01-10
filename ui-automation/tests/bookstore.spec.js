const { test, expect } = require('@playwright/test');
const testData = JSON.parse(JSON.stringify(require('../test-data/login_credential.json')));
const fs = require('fs');
const path = require('path');

test('DemoQA Book Store UI Automation', async ({ page }) => {

  
  await page.goto('https://demoqa.com/');

  const bookStoreApplication = page.locator("//h5[contains(text(),'Book ')]")
  await bookStoreApplication.click();

  const loginButton = page.locator('#login')
  await loginButton.click();

  const usernameInput = page.locator('#userName');
  const passwordInput = page.locator('#password');

  await usernameInput.fill(testData.Users.Username);
  await passwordInput.fill(testData.Users.Password);

  await loginButton.click();
  
  const userNameDisplay = page.locator('#userName-value');
  await expect(userNameDisplay).toHaveText(testData.Users.Username);

  const logoutButton = page.locator('#submit');
  await expect(logoutButton).toHaveText('Log out');

  const bookStoreButton = page.locator("//span[text()='Book Store']");
  await bookStoreButton.click();
  
  const bookName = 'Learning JavaScript Design Patterns';
  await page.fill('#searchBox', bookName);

  const bookPresent = page.locator(':text("Learning JavaScript Design Patterns")');
  await expect(bookPresent).toContainText(bookName);

  const title = await page.locator('a:has-text("Learning JavaScript Design Patterns")').textContent();
  const author = await page.locator(':text-is("Addy Osmani")').textContent();
  const publisher = await page.locator("//div[contains(text(),'Media')]").textContent();

const outputPath = path.join(__dirname, '../output/bookDetails.txt');
const content = `
Title: ${title}
Author: ${author}
Publisher: ${publisher}
`;

fs.writeFileSync(outputPath, content.trim());

console.log('Book details written to file successfully');
 
  await logoutButton.click();

  await expect(page).toHaveURL(/\/login/);

});