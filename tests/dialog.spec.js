import{test,expect} from '@playwright/test'
test('dialogs',async({page})=>{
    await page.goto('https://demo.automationtesting.in/Alerts.html')
    page.on('dialog',async(dialog)=>{
        dialog.accept()
    })
    await page.click('.btn.btn-danger')
})
test('dialogs with ok and cancel',async({page})=>{
    await page.goto('https://demo.automationtesting.in/Alerts.html')
    await page.getByText('Alert with OK & Cancel ').click()
    page.on('dialog',async(dialog)=>{
        dialog.dismiss()
    })
    page.click('[onclick="confirmbox()"]')
    await expect(page.locator('#demo')).toHaveText('You Pressed Cancel')
})
test('dialogs with prompt',async({page})=>{
    await page.goto('https://demo.automationtesting.in/Alerts.html')
    await page.getByText('Alert with Textbox ').click()
    page.on('dialog',async(dialog)=>{
        await dialog.accept('hi im preetham')
    })
    page.click('[onclick="promptbox()"]')
    await expect(page.locator('[id="demo1"]')).toContainText('hi im preetham How are you today')
})
