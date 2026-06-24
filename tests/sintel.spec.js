import{test,expect} from '@playwright/test'
test('dc',async({page})=>{
    await page.goto('https://teso-angular.dev.sintel.com.br/SmartTokenFront/ngapp/en/login')
    await page.locator('[type="email"]').fill('user-1@sintel.com.br')
    await page.locator('[type="password"]').fill('Sintel@123')
    await page.getByRole('button',{name:'Sign In'}).click()
    await page.goto('https://teso-angular.dev.sintel.com.br/SmartFront/ngapp/en/sintel/dc/documentcorrelationsearchcv/v1')
   // await expect(page.getByRole(button, { name: 'Clear Filters' })).toBeVisible()
})