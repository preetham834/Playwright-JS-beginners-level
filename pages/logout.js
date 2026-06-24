import{expect} from '@playwright/test'
export class Logout{
   constructor(page){
    this.page=page
    this.menubutton=page.locator('#react-burger-menu-btn')
    this.logoutbutton=page.locator('#logout_sidebar_link')
   }
   async logout()
   {
    await expect(this.menubutton).toBeVisible()
    await this.menubutton.click()
    await this.logoutbutton.click()
   }
}