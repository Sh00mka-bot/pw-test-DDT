import { Page } from "@playwright/test";
import { NavigationLayout } from "./navigationLayout";
import {BoardPage} from "./boardPage"


export class PageManager {

    private readonly page:Page
    private readonly navigationLayout:NavigationLayout
    private readonly board: BoardPage

    constructor(page:Page){
        this.page = page
        this.navigationLayout = new NavigationLayout(this.page)
        this.board = new BoardPage(this.page)
    }

    navigateTo(){
        return this.navigationLayout
    }

    chooseColumn(){
        return this.board
    }

}