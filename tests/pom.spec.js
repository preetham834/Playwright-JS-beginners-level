import {test,expect} from '@playwright/test'
import users from '../pages/details.js';
import { Loginpage } from '../pages/login'
import {Add} from '../pages/addtocart'
import {Checkout} from  '../pages/checkout'
import { Information } from '../pages/info'
import { Logout } from '../pages/logout.js';
test.beforeEach('login',async({page})=>{
    const loginpage=new Loginpage(page)
    await loginpage.goto()
    await loginpage.login(users[0].usernames,users[0].passwords)
    for(let i=0;i<users.length;i++)
    {
    console.log(users[i].usernames+":"+users[i].passwords)
    }
})
test('end to end flow',async({page})=>{
    const adding=new Add(page)
    const checkoutbutton=new Checkout(page)
   const details=new Information(page)
   const out=new Logout(page)
    const prnames=await adding.getproductnames()
    console.log(prnames)
    await adding.getprices()
    await adding.additems(4)
    //await checkoutbutton.removebycount(3)
     const valid=prnames.length
   /* const index=5
    await expect(index).toBeLessThan(valid)
     await adding.additemsbynames(prnames[index]);*/
    const prnames1=await checkoutbutton.getproductnamesincart()
      console.log(prnames1)
    //await adding.additemsbynames("Sauce Labs Backpack")
    //await adding.removebyname(prnames[1])
   // await checkoutbutton.tap()
   await checkoutbutton.removefromcart(prnames1[2])
   await checkoutbutton.checkcartvalueafterremoving()
    await details.filldetails('preetham','sai','500025')
    await out.logout()
    await expect(page).toHaveURL('https://www.saucedemo.com/')
})
