import {Given, When, Then } from "@cucumber/cucumber";
import{ chromium, Page, Browser, expect} from "@playwright/test";

var {setDefaultTimeout} = require('@cucumber/cucumber');
setDefaultTimeout(60 * 1000);

let browser: Browser;
let page: Page;

//Scenario 1
         Given('User Lands on Home page', async function () {
          browser =  await chromium.launch({headless: false });
          page = await browser.newPage();
          await page.goto("http://eaapp.somee.com");
         })

         Given('User click on the login link', async function () {
          await page.locator("#loginLink").click();
        });

        Given('User enter the username as {string}', async function (username) {
          await page.locator("#UserName").fill(username); 
        });

        Given('User enter the password as {string}', async function (password) {
          await page.locator("#Password").fill(password);
        });

        When('User click on the login button', async function () {
          await page.locator("//input[@value='Log in']").click();
        });



        Then('Login should be success', async function () {
          const text = await page.locator("//a[normalize-space()='Hello admin!']").textContent();
          console.log("Logged In :" + text);
          await browser.close();
        });


//Scenario 2


         When('Login should fail', async function () {
          const failureMessage = page.locator("//li[normalize-space()='Invalid login attempt.']");
          await expect(failureMessage).toBeVisible();
          await browser.close();
        });