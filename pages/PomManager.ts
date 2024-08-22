import { Page } from "@playwright/test";
import { TemplatePage } from "./TemplatePage";

export default class PomManager{
    readonly page : Page
    readonly templatePage;

    constructor(page){
        this.page = page;
        this.templatePage = new TemplatePage(page);
    }
}