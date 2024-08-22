import {test, expect} from "@playwright/test"
import PomManager from "../pages/PomManager"

let pm;

/*
test.describe('POM Template', () =>{
    test.beforeEach(async ({page}) => {
        pm = new PomManager(page);
    })

    test.afterEach(async ({page}) => {
        await page.close();
    })
    test('Going to Google', async ({page}) => {
        await pm.templatePage.navigate();
    })
})
    */

test.describe('Login Tests', () => {
    test.beforeEach(async ({page}) => {
        pm = new PomManager(page);
        await pm.loginPage.navigate();
    })
    test.afterEach(async ({page}) => {
        await page.close();
    })
    test('Logging in with valid credentials', async ({page}) => {
        await pm.loginPage.login('tomsmith', 'SuperSecretPassword!');
        await expect(pm.securePage.loginSuccessMessage).toBeVisible();
        await expect(pm.securePage.loginSuccessMessage).toContainText(' You logged into a secure area! ');
    })
})