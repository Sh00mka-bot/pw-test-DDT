import {Page, Locator, expect} from '@playwright/test'
import { HelperBase } from './helperBase';

export class BoardPage extends HelperBase{

    constructor(page:Page){
        super(page)
    }

  
    async returnLocatorColumnBy(columnName:string) : Promise<Locator> {
        const columnList = this.page
        .locator('.flex.flex-col.w-80.bg-gray-50.rounded-lg.p-4', 
            {hasText: columnName});
        return columnList;
    }


    async returnLocatorTicketBy(columnLocator:Locator, ticketName:string): Promise<Locator> {

        const ticketBox = columnLocator.locator('.bg-white.p-4.rounded-lg.shadow-sm.border');
        const matchedTicket = ticketBox.filter({ hasText: ticketName })
        return matchedTicket;
    }


    /**
     * This functions takes:
     * @param singleTicketLocator from the 'returnLocatorTicketBy' function
     * Extract and collects 'tags
     * verifies and compare them 
     * to the provided @param tagNameList 
     */
    async verifyTag(singleTicketLocator: Locator, tagNameList: Array<string>) {
 
        const tagContainer = singleTicketLocator.locator('.flex.flex-wrap.gap-2.mb-3');
        const tagElements = await tagContainer.locator('span').all();
        
        if (tagElements.length === 0) {
          throw new Error('No tags found in ticket!');
        }
        const tagTexts = await Promise.all(tagElements.map(async (tag) => await tag.textContent()));
        console.log(`DEBUG: Found tags: ${JSON.stringify(tagTexts)}`);

        expect(tagTexts.sort()).toEqual(tagNameList.sort());
      }




}

