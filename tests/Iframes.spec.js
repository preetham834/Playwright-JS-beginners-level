import{test,expect} from '@playwright/test'
test("iframes",async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/iframe')
    const closebutton= page.locator('[aria-label="Close"]')
    if(await closebutton.count()>0)
    {
        await closebutton.click()
    }
    const frame=page.frameLocator('#mce_0_ifr')
    await expect(frame.locator('[id="tinymce"]')).toHaveText('Your content goes here.')
})