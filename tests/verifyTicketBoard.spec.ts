import { test, expect } from '@playwright/test';
import { PageManager } from '../page-objects/pageManager';
import { LoginPage } from '../page-objects/loginPage';
import * as fs from 'fs'

const testCaseData = JSON.parse(fs.readFileSync('testCases/testCaseDemo.json','utf-8'));


test.describe('Data-Driven Test', async ()=> {
  testCaseData.forEach(({app,ticket, column, tags}) => {

    test( `Run test cases using JSON data and verify tags '${tags}', are in the '${column}' 
      column, located in '${app}', ticket named '${ticket}'`,async ({page})=>{
      
      const demoLoginPage = new LoginPage(page)
      await page.goto(process.env.LOGIN_URL)
      await demoLoginPage.loginIntoTheSystem(process.env.USERNAME,process.env.PASSWORD)

      const pm = new PageManager(page)
      await pm.navigateTo().sideFormLayout(app)
      const locatedColumn = pm.onTheBoardPage().returnLocatorColumnBy(column)
      const locatedTicket = pm.onTheBoardPage().returnLocatorTicketBy(await locatedColumn, ticket)
      await pm.onTheBoardPage().verifyTag(await locatedTicket,tags)
  })
    
  });
})


