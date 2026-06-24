import {test,expect} from '@playwright/test'
test('Dropdown with select',async({page})=>{
    await page.goto('https://demo.automationtesting.in/Register.html')
    await page.selectOption('#Skills','Analytics')//by value or await page.locator('#Skills).selectOption('Anal
    expect(await page.locator('#Skills').inputValue()).toBe('Analytics')
    await page.selectOption('#Skills',{label:'C'})//by label
    expect(await page.locator('#Skills').inputValue()).toBe('C')
    await page.selectOption('#Skills',{index:5})//by index
    expect(await page.locator('#Skills').inputValue()).toBe('APIs')
    await page.locator('[id="yearbox"]',{hastext:'1933'}).click()
})
/*
<div id="dropdown">
  <div class="option">USA</div>
  <div class="option">UK</div>
  <div class="option">India</div>
</div>
// Click the dropdown to open
await page.locator('#dropdown').click();
// Click the option
await page.locator('#dropdown .option', { hasText: 'India' }).click();
// OR select the third option
await page.locator('#dropdown .option').nth(2).click()

--------------autosuggestion--------------
await page.fill('#search', 'Ind'); // type partial value
await page.locator('.suggestion-item', { hasText: 'India' }).click();

-----------multisuggested--------------
await page.selectOption('#countries', ['us', 'in']);*/
