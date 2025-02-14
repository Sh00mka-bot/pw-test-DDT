import { Page } from "@playwright/test";
import { HelperBase } from "./helperBase";

export class LoginPage extends HelperBase {

    constructor(page:Page){
        super(page)
    }

    async loginIntoTheSystem(username:string, password:string){

        const loginBox = this.page.locator('.space-y-6')


        await loginBox.getByRole('textbox', {name:'Username'}).fill(username)
        await loginBox.getByRole('textbox', {name:'Password'}).fill(password)
        await loginBox.getByRole('button',{name:'Sign in'}).click()
    }

}