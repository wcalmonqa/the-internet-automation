import { type Locator, type Page, expect } from "@playwright/test";
import CommonActions from "../utils/CommonActions";

export default class LoginPage{
    readonly page:Page;
    readonly actions;
    readonly usernameField:string;
    readonly passwordField:string;
    readonly loginButton:string;


    constructor(page : Page){
        this.page = page;
        this.actions = new CommonActions(page);
        this.usernameField = '#username';
        this.passwordField = '#password';
        this.loginButton = 'button[type="submit"]';
    }

    async navigate (){
        await this.actions.navigate('https://the-internet.herokuapp.com/login');
    }

    async login(username:string, password:string){
        await this.actions.fill(this.usernameField, username);
        await this.actions.fill(this.passwordField, password);
        await this.actions.click(this.loginButton);
    }
}