import{test,expect} from '@playwright/test'
test('end to end',async({page})=>{
    await page.goto('https://www.saucedemo.com/')
    await page.locator('[id="user-name"]').fill('standard_user')
    await page.locator('[id="password"]').fill('secret_sauce')
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveTitle('Swag Labs')
    await expect(page.getByText('Products')).toBeVisible()
    const back=await page.locator('(//div[@class="inventory_item_price"])[1]').textContent()
    console.log(back)
    const bike=await page.locator('(//div[@class="inventory_item_price"])[2]').textContent()
    console.log(bike)
    await page.locator('[id="add-to-cart-sauce-labs-backpack"]').click()
    await page.locator('[id="add-to-cart-sauce-labs-bike-light"]').click()
    await page.locator('[data-test="shopping-cart-link"]').click()
    await page.locator('[id="checkout"]').click()
    await page.locator('[id="first-name"]').fill('preetham')
    await page.locator('[id="last-name"]').fill('xyz')
    await page.locator('[id="postal-code"]').fill('9999')
    await page.locator('[id="continue"]').click()
    const end1=await page.locator('(//div[@class="inventory_item_price"])[1]').textContent()
    const end2=await page.locator('(//div[@class="inventory_item_price"])[2]').textContent()
    await expect(end1).toBe(back)
    await expect(end2).toBe(bike)
    if(back==end1 && bike==end2)
    {
        console.log('same items are in checkout')
    }
    const price1 = parseFloat(back.replace('$',''));
    const price2 = parseFloat(bike.replace('$',''));
    const subtotal = (await page.locator('[data-test="subtotal-label"]').textContent()).trim();
    const subValue =parseFloat(subtotal.replace(/[^0-9.]/g, ''));
    const expected=price1+price2
    await expect(subValue).toBe(expected)
     if (price1 + price2 === subValue) {
    console.log('total price excluding tax: ' + subValue);
    }
      await page.getByRole('button', { name: 'Finish' }).click();
      await expect(page.getByText('Thank you for your order!')).toBeVisible()
    
    const [tab1]=await Promise.all([
        page.waitForEvent('popup'),
        page.click('[data-test="social-linkedin"]')
        
    ])
    await tab1.waitForLoadState()
    await expect(tab1).toHaveURL('https://www.linkedin.com/company/sauce-labs/')

})