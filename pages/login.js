import { expect } from '@playwright/test';
export class Loginpage
{
    constructor(page)
    {
        this.page=page
        this.username=page.locator('#user-name')
        this.password=page.locator('#password')
        this.button=page.getByRole('button', { name: 'Login' })
    }
    async goto()
    {
        await this.page.goto('https://www.saucedemo.com/')
    }
    async login(user,pass)
    {
        await this.username.fill(user)
        await this.password.fill(pass)
        await this.button.click()
        await expect(this.page).toHaveTitle('Swag Labs')
    }
}