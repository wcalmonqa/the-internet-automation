import {type Locator, type Page, expect} from "@playwright/test"
import CommonActions from "../utils/CommonActions";

export class TemplatePage{
    readonly page: Page;
    readonly actions;
    readonly templateVar: Locator;

    constructor(page){
        this.actions = new CommonActions(page);
        this.templateVar = page.locator('#template');
    }

    async templateMethod(){
        await this.templateVar.click();
    }

    async navigate(){
        await this.actions.navigate("https://www.google.com/");
    }
}