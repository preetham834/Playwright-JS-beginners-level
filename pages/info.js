import {expect} from '@playwright/test'
export class Information
{
    constructor(page)
    {
        this.page=page
        this.firstname=page.locator('[id="first-name"]')
        this.lastname=page.locator('[id="last-name"]')
        this.zipcode=page.locator('[id="postal-code"]')
        this.continuebutton=page.getByRole('button',{name:'Continue'})
        this.finishbutton=page.getByRole('button',{name:'Finish'})
    }

    async filldetails(fname,lname,zip)
    {
        await this.firstname.fill(fname)
        await this.lastname.fill(lname)
        await this.zipcode.fill(zip)
        await expect(this.continuebutton).toBeVisible()
        await this.continuebutton.click()
        await expect(this.finishbutton).toBeVisible()
        await this.finishbutton.click()
        await expect(this.page.getByText('Thank you for your order!')).toBeVisible()

    }
}