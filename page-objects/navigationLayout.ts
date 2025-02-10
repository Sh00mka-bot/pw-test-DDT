import {Page} from '@playwright/test'
import { HelperBase } from './helperBase'

export class NavigationLayout extends HelperBase {

    constructor(page:Page){
        super(page)
    }

    async navigateToThe(application: string) {
        const validApplications = ['Web Application', 'Mobile Application'];
    
        if (validApplications.includes(application)) {
            await this.selectPageByText(application);
        } else {
            throw new Error(`Invalid application name: ${application}`);
        }
    }


    private async selectPageByText(navigateTo:string){
        const navLayout = this.page.locator('nav button h2', {hasText:navigateTo})
        await navLayout.click()
    }

    
}