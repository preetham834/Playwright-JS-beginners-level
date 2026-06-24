import {test,expect} from '@playwright/test'
test('checkboxes',async({page})=>{
    await page.goto('https://demo.automationtesting.in/Register.html')
    await page.locator('#checkbox1').check()
    await expect(page.locator('#checkbox1')).toBeChecked() 
    await expect(page.locator('#checkbox2')).not.toBeChecked()
    await expect(page.locator('#checkbox3')).not.toBeChecked()   

})
test('multiple checkboxes at a time',async({page})=>{
    await page.goto('https://demo.automationtesting.in/Register.html')
    const checkboxes=await page.locator('[type="checkbox"]')
    const count=await checkboxes.count()
    for(let i=0;i<count;i++)
    {
        await checkboxes.nth(i).check()
        await expect(checkboxes.nth(i)).toBeChecked()
    }
})
//To select first or last await page.locator('#checkbox').first().check() ot last().check()