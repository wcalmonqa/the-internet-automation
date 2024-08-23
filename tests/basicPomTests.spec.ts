import {test, expect} from "@playwright/test"
import PomManager from "../pages/PomManager"

let pm;

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
        await expect(pm.securePage.loginSuccessMessage).toContainText('You logged into a secure area!');
    })

    test('Logging in with invalid username', async ({page}) => {
        await pm.loginPage.login('wcalmon', 'SuperSecretPassword!');
        await expect(pm.loginPage.loginErrorMessage).toBeVisible();
        await expect(pm.loginPage.loginErrorMessage).toContainText('Your username is invalid!');
    })

    test('Logging in with invalid password', async ({page}) => {
        await pm.loginPage.login('tomsmith', 'Test123');
        await expect(pm.loginPage.loginErrorMessage).toBeVisible();
        await expect(pm.loginPage.loginErrorMessage).toContainText('Your password is invalid!');
    })
})