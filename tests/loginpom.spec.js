import{test,expect} from '@playwright/test'
test('credentials',async({page})=>{
    await page.goto('https://www.saucedemo.com/')
    let det=[]
    const users=await page.locator('[id="login_credentials"]').innerText()
     const passtext=await page.locator('[data-test="login-password"]').innerText()
    const credentials=users.replace('Accepted usernames are:','').trim().split('\n')
    const password=passtext.replace('Password for all users:','').trim()
   // console.log(creadentials)
    //console.log(password)
   /* creadentials.forEach(user=>{
      //console.log(`${user}:${password}`)
      console.log(user+":"+password)
    })*/
   /* const obj={}
    creadentials.forEach(user=>{
      obj[user]=password})
      console.log(obj)
  })*/
  const arr=credentials.map(users=>users+ ":"+ password)
  console.log(arr)
})