import { test, expect } from '@playwright/test';
import { PageManager } from '../page-objects/pageManager';
import { LoginPage } from '../page-objects/loginPage';


test.beforeEach(async({page})=>{
    const lp = new LoginPage(page)

    await page.goto(process.env.LOGIN_URL)
    await lp.loginIntoTheSystem(process.env.USERNAME,process.env.PASSWORD)
})


