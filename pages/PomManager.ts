import { Page } from "@playwright/test";
import LoginPage from "./LoginPage";
//import { TemplatePage } from "./TemplatePage";

export default class PomManager{
    readonly page : Page
    readonly templatePage;
    readonly loginPage;

    constructor(page){
        this.page = page;
        //this.templatePage = new TemplatePage(page);
        this.loginPage = new LoginPage(page);
    }
}