import{test,expect} from '@playwright/test'
test('filehandle',async({page})=>{
    await page.goto('https://practice.expandtesting.com/upload')
    await page.setInputFiles('[data-testid="file-input"]','Task-6_Preetham.docx')
    await page.click('[data-testid="file-submit"]')
    await expect(page.locator('h1')).toContainText('Uploaded')
})
test('Multiple file upload',async({page})=>{
    await page.goto('https://testkru.com/Elements/Files')
    await page.setInputFiles('#multiFileUpload',['Task-6_Preetham.docx','Task-7_Preetham.docx'])
})
test('downloading',async({page})=>{
    await page.goto('https://testkru.com/Elements/Files')
    const[download]=await Promise.all([
        page.waitForEvent('download'),
        page.click('.btn.btn-success')
    ])
    const path=await download.path()
    console.log("this is my path:",path)
})
test('filechooser',async({page})=>{
    await page.goto('https://testkru.com/Elements/Files')
    const[file]=await Promise.all([
         page.waitForEvent('filechooser'), 
         page.click('#singleFileUpload')

    ])
    await file.setFiles('Task-7_Preetham.docx')
})