import{test,expect} from '@playwright/test'
test('Radiobuttons',async({page})=>{
    await page.goto('https://demo.automationtesting.in/Register.html')
    const radios=page.locator('[type="radio"]')
    await radios.nth(0).check()
    await expect(radios.nth(0)).toBeChecked()
    await expect(radios.nth(1)).not.toBeChecked()
})
test('otherway',async({page})=>{
    await page.goto('https://demo.automationtesting.in/Register.html')
    const male=page.locator('[value="Male"]')
    const female=page.locator('[value="FeMale"]')
    await female.check()
    await expect(female).toBeChecked()
    await expect(male).not.toBeChecked()
    await male.check()
    await expect(female).not.toBeChecked()
    await expect(male).toBeChecked()

})
