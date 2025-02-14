import { Page } from "@playwright/test";
import { NavigationLayout } from "./navigationLayout";
import {BoardPage} from "./boardPage"


export class PageManager {

    private readonly page:Page
    private readonly navigationLayout:NavigationLayout
    private readonly onBoardPage: BoardPage

    constructor(page:Page){
        this.page = page
        this.navigationLayout = new NavigationLayout(this.page)
        this.onBoardPage = new BoardPage(this.page)
    }

    navigateTo(){
        return this.navigationLayout
    }

    onTheBoardPage(){
        return this.onBoardPage
    }

}