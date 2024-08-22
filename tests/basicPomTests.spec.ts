import {test, expect} from "@playwright/test"
import PomManager from "../pages/PomManager"

let pm;

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