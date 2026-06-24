import {test,except} from  '@playwright/test';

test('multiple locators',async({page})=>{
    await page.goto('https://www.demoblaze.com/index.html')
    const multiple=await page.$$('[id="itemc"]')
    for(const e of multiple)
    {
        console.log(await e.textContent())
    }
})
 test('otherway',async({page})=>{
    await page.goto('https://www.demoblaze.com/index.html')
    const items=await page.locator('[id="itemc"]')
    for(let i=0;i<await items.count();i++)
    {
        console.log(await items.nth(i).textContent())
    }
 })
