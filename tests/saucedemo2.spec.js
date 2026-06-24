import{test,expect} from '@playwright/test'
test('end to end',async({page})=>{
    await page.goto('https://www.saucedemo.com/')
    await page.locator('[id="user-name"]').fill('standard_user')
    await page.locator('[id="password"]').fill('secret_sauce')
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveTitle('Swag Labs')
    await expect(page.getByText('Products')).toBeVisible()
    const product=['Sauce Labs Backpack','Sauce Labs Bike Light']
    const pricess=[]
    for(let i=0;i<product.length;i++)
    { 
         const price= await page.locator('.inventory_item').filter({ hasText: product[i] }).locator('.inventory_item_price').textContent();
         const a=parseFloat(price.replace('$',''))
         console.log(product[i],a)
         pricess.push(a)
         await page.locator('.inventory_item').filter({ hasText: product[i] }).locator('button').click()
    }
     await page.locator('[data-test="shopping-cart-link"]').click()
    await page.locator('[id="checkout"]').click()
    await page.locator('[id="first-name"]').fill('preetham')
    await page.locator('[id="last-name"]').fill('xyz')
    await page.locator('[id="postal-code"]').fill('9999')
    await page.locator('[id="continue"]').click()
    for(let i=0;i<product.length;i++)
    {
        const inv=await page.locator('[class="cart_item_label"]').filter({hasText:product[i]}).locator('.inventory_item_price')
        .textContent()
        const b=parseFloat(inv.replace('$',''))
        await expect(b).toBe(pricess[i])
        const sum=pricess.reduce((acc,val)=>acc+val,0)
        console.log(sum)
        const pp=await page.locator('[data-test="subtotal-label"]').textContent()
        const cleaneddd=parseFloat(pp.replace(/[^0-9.]/g, ''));
        console.log(cleaneddd)
        await expect(cleaneddd).toBe(sum)
    }
     await page.locator('[id="finish"]').click()
     await expect(page.getByText('Thank you for your order!')).toBeVisible()
})
   