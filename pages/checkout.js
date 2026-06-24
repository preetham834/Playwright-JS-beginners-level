import {expect} from '@playwright/test'
export class Checkout{
    constructor(page)
    {
        this.page=page
        this.cartbutton=page.locator('[data-test="shopping-cart-link"]')
        this.products=page.locator('[class="cart_item"]')
        this.cartbadge=page.locator('.shopping_cart_badge')
        this.cartitems=page.locator('[class="cart_item_label"]')
        this.checkoutbutton=page.getByRole('button',{name:'checkout'})
        this.priceinv=page.locator('[class="inventory_item_price"]')
    }
    
    async tap(){
        await expect(this.cartbutton).toBeVisible()
        await this.cartbutton.click()
        const noofitems=await this.cartitems.count()
        console.log("no of items in cart:" +await this.cartitems.count())
        const cartbadgevalue=parseFloat(await this.cartbadge.textContent())
        console.log(cartbadgevalue)
        await expect(noofitems).toBe(cartbadgevalue)
        /*for(let j=0;j<2;j++){
        const p1=await this.priceinv.nth(j).textContent()
        const c1=parseFloat(p1.replace('$',''))
        console.log(c1)
        }*/
        await expect(this.checkoutbutton).toBeVisible()
        await this.checkoutbutton.click()
    }
    async getproductnamesincart()
    {
        await expect(this.cartbutton).toBeVisible()
        await this.cartbutton.click()
        let arr=[]
        for(let i=0;i<await this.products.count();i++)
        { 
            const cartitemnames=await this.products.locator('.inventory_item_name').nth(i).textContent()
            arr.push(cartitemnames.trim())
        }
        return arr
    }
    async removebycount(c)
    {
        await expect(this.cartbutton).toBeVisible()
        await this.cartbutton.click()
        const cartcount= await this.products.count()
        await expect(c).toBeGreaterThan(0)
        await expect(c).toBeLessThanOrEqual(cartcount)
        for(let i=c;i>0;i--)
        {
            await this.products.locator('[class="btn btn_secondary btn_small cart_button"]').nth(i).click()
        }
    }

    async removefromcart(productname)
    {
        await expect(this.cartbutton).toBeVisible()
        await this.cartbutton.click()
        const removeditemprice=await this.products.filter({hasText:productname}).locator('.inventory_item_price').textContent()
        await this.products.filter({hasText:productname}).locator('[class="btn btn_secondary btn_small cart_button"]').click()
        console.log('Removed product:'+productname+':'+removeditemprice)
    }
    async checkcartvalueafterremoving()
    {
        const noofitems=await this.products.count()
        console.log("no of items in cart:" +noofitems)
        const cartbadgevalue=parseFloat(await this.cartbadge.textContent())
        console.log(cartbadgevalue)
        await expect(noofitems).toBe(cartbadgevalue)
        await expect(this.checkoutbutton).toBeVisible()
        await this.checkoutbutton.click()
    }
}