import { type Locator, type Page } from "@playwright/test";

export default class SecurePage{
    readonly page:Page;
    readonly loginSuccessMessage:Locator;
    readonly logoutButton:Locator;

    constructor(page){
        this.page = page;
        this.loginSuccessMessage = this.page.locator('.flash.success');
        this.logoutButton = this.page.getByRole('link', {name: 'Logout'});
    }

    async navigate(){
        await this.page.goto('https://the-internet.herokuapp.com/secure');
    }

    async logout(){
        await this.logoutButton.click();
    }
}