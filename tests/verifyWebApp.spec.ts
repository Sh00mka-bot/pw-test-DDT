import { test, expect } from '@playwright/test';
import { PageManager } from '../page-objects/pageManager';
import { LoginPage } from '../page-objects/loginPage';
import * as fs from 'fs'



test.beforeEach(async({page})=>{
    const demoLoginPage = new LoginPage(page)

    await page.goto(process.env.LOGIN_URL)
    await demoLoginPage.loginIntoTheSystem(process.env.USERNAME,process.env.PASSWORD)
})

const tcData = JSON.parse(fs.readFileSync('testCases/testCaseDemo.json','utf-8'));

test.describe('Run test case and Verify JSON data', ()=> {
   //for loop that will eneter json data and verify the output 



})






