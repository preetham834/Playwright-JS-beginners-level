import{test,expect} from '@playwright/test'
test('Tables',async({page})=>{
    await page.goto('https://www.tutorialspoint.com/selenium/practice/webtables.php')
    const data=await page.locator('tr',{hasText:'Kierra'}).first().locator('td').nth(3).textContent()
    console.log(data)
})
test("scenario based",async({page})=>{
    await page.goto('https://practice.expandtesting.com/dynamic-table')
    const headers=await page.locator('th').allTextContents()
    const index=await headers.indexOf('CPU')
    const val=await page.locator('tr',{hasText:'Chrome'}).locator('td').nth(index).textContent()
    const val2=(await page.locator('#chrome-cpu').textContent()).replace(/[^0-9.%]/g,"")
    console.log(val)
    console.log(val2)
    await expect(val).toBe(val2)
})