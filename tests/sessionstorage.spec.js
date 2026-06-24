import{test,expect} from '@playwright/test'
test('setting',async({page})=>{
    await page.addInitScript(()=>{
        sessionStorage.setItem('theirValue','1234')
    })
     await page.goto('https://pathduck.github.io/test/session-storage/')
     const value=await page.evaluate(()=>sessionStorage.getItem('theirValue'))
     console.log(value)
     })
/*test('Getting',async({page})=>{
         await page.goto('https://testautomationcentral.com/demo/session_storage.html')
         await page.evaluate(()=>{
            sessionStorage.getItem(token)
         })
})*/