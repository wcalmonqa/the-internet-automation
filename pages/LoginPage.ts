import { type Locator, type Page } from "@playwright/test";

export default class LoginPage{
    readonly page:Page;
    readonly usernameField:Locator;
    readonly passwordField:Locator;
    readonly loginButton:Locator;
    readonly logoutSuccessMessage:Locator;

    constructor(page : Page){
        this.page = page;
        this.usernameField = this.page.locator('#username');
        this.passwordField = this.page.locator('#password');
        this.loginButton = this.page.getByRole('button', {name: 'Login'});
        this.logoutSuccessMessage = this.page.locator('.flash.success');
    }

    async navigate (){
        await this.page.goto('https://the-internet.herokuapp.com/login');
    }

    async login(username:string, password:string){
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.loginButton.click();
    }
}