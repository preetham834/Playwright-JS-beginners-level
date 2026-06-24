import{expect} from '@playwright/test'
export class Add{
    constructor(page)
    {
        this.page=page
        this.productitems= page.locator('.inventory_item')
        this.addtocart=page.getByRole('button',{name:'Add to cart'})
        this.price=page.locator('[class="inventory_item_price"]')
        this.removebutton=page.getByRole('button',{hasText:'Remove'})
    }
    async count(){
        console.log('No of items on page:' +await this.productitems.count())
    }
    async getprices()
    {
        console.log("prices of all items:")
        for(let i=0;i<await this.price.count();i++){
        const prices=await this.price.nth(i).textContent()
        console.log(prices)
        }
    }
    async additems(count)
    {
        console.log('prices of additmes:')
        const inventorycount=await this.productitems.count()
        await expect(count).toBeGreaterThan(0)
        await expect(count).toBeLessThanOrEqual(inventorycount)
        for(let i=count-1;i>=0;i--)
        {
         await this.addtocart.nth(i).click()
         const p=await this.price.nth(i).textContent()
         const c=parseFloat(p.replace('$',''))
         console.log(c)
        }
        
    }
   async getproductnames()
    {
         let pnames=[]
        for(let i=0;i<await this.productitems.count();i++)
        {
        const users=await this.productitems.locator('.inventory_item_name').nth(i).textContent()
        pnames.push(users.trim())
        }
        return pnames
    }
   /*async additemsbynames(productname)
    {
        let pnames=[]
        for(let i=0;i<await this.productitems.count();i++)
        {
        const users=await this.productitems.locator('.inventory_item_name').nth(i).textContent()
        pnames.push(users.trim())
        }
        console.log(pnames)

        await this.productitems.filter({hasText:productname}).locator('.btn.btn_primary.btn_small.btn_inventory').click()
    }*/
    async additemsbynames(productNames) {
            await this.productitems.filter({hasText:productNames}).locator('.btn.btn_primary.btn_small.btn_inventory').click()
    }
    //removing from inventory page
   async removebyname(productname){
          await this.productitems.filter({hasText:productname}).locator('[class="btn btn_secondary btn_small btn_inventory "]').click()
        }
}