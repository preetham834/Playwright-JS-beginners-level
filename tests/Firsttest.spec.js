import {test ,expect}from '@playwright/test';

test('first test',async({page})=> {
    await page.goto('https://www.demoblaze.com/');
    await expect(page).toHaveTitle('STORE');
    await page.locator('[class="nav-item active"]').click()
    await expect(page).toHaveURL('https://www.demoblaze.com/index.html')
    await page.getByRole('link',{name :'Samsung galaxy s6'}).click()
    await expect(page.locator('[class="btn btn-success btn-lg"]')).toBeVisible()

   /* await page.locator('#login2').click()//await page.click('#login2')
    await page.locator('#loginusername').fill('preetham') or await page.fill('#loginusername','preetham') or await page.typre('#loginusername','preetham')
    await page.locator('#loginpassword').fill('grjo')*/
    await page.locator('[data-target="#exampleModal"]').click()
    await page.locator('#recipient-email').fill('preetham2@gmail.com')
    await page.locator('#recipient-name').fill('preetham')
    await page.locator('#message-text').fill('HI It is nice to contact you')
    await page.on('dialog',async(dialog)=>{
        console.log(dialog.message());
        await dialog.accept()//to dismiss dialog.dismiss() and dialog where we have to write something: dialog.accept('hih')

    })
    await  page.getByRole('button',{name:'Send message'}).click()

})