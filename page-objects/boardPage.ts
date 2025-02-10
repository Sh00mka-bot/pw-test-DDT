import {Page, Locator} from '@playwright/test'
import { HelperBase } from './helperBase';

export class BoardPage extends HelperBase{

    constructor(page:Page){
        super(page)
    }


    async verifyTicketNameInColumn(ticket:string, columnName:string) : Promise<Locator> {
        const columnList = this.page.locator('.inline-flex gap-6 p-6 h-full').
        locator('.flex flex-col w-80 bg-gray-50 rounded-lg p-4', {hasText:columnName})

        return columnList.locator('.bg-white p-4 rounded-lg', {hasText:ticket})
    }

    async verifyTag( ticketLocator:Locator, tagName:string,): Promise<Locator> {

       return ticketLocator.locator('flex flex-wrap gap-2 mb-3', {hasText: tagName})

    }



}

