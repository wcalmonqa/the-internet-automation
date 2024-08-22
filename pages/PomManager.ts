import { Page } from "@playwright/test";
import LoginPage from "./LoginPage";
import SecurePage from "./SecurePage";
//import { TemplatePage } from "./TemplatePage";

export default class PomManager{
    readonly page : Page
    readonly securePage;
    readonly loginPage;

    constructor(page){
        this.page = page;
        this.securePage = new SecurePage(page);
        this.loginPage = new LoginPage(page);
    }
}