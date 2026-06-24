import{test,expect} from '@playwright/test'
test('Multitabs',async({page})=>{
    await page.goto('https://demo.automationtesting.in/Windows.html')
    const[pages]=await Promise.all([
         page.waitForEvent('popup'),
         page.click('a[target="_blank"]')
    ])
    await pages.waitForLoadState()
    console.log(await pages.title())
})
test('switching between tabs',async({page})=>{
    await page.goto('https://demo.automationtesting.in/Windows.html')
    const[tab1]=await Promise.all([
        page.waitForEvent('popup'),
        page.click('a[target="_blank"]')
    ])
    await tab1.waitForLoadState()
    await expect(tab1).toHaveTitle('Selenium')
    
    const [tab2]=await Promise.all([
        page.waitForEvent('popup'),
        page.click('a[target="_blank"]')
    ])
    await tab2.waitForLoadState()
const tabs=[tab1,tab2]
//switching 
await tabs[0].bringToFront()
await expect(tabs[0].locator('button.navbar-toggler')).not.toBeVisible()
await tabs[1].bringToFront()
await expect(tabs[1].locator('.alert-heading.text-center.m-2')).toContainText('Open')//partial text

for(const e of tabs)
{
    await e.close()
}

})

