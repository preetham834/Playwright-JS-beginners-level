import {test,expect} from '@playwright/test';
test('Locators',async({page})=>{
    await page.goto('https://www.demoblaze.com/')
    await page.locator('[id="next2"]').click()
})
/* Id : #
class : .
data attributes;[]
page.getByRole('button',{name :'submit'})*/