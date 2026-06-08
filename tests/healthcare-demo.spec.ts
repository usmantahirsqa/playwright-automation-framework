import { test, expect } from '@playwright/test';

test('Healthcare Demo Website - Stable Flow', async ({ page }) => {

  // 1. Open site
  await page.goto('https://katalon-demo-cura.herokuapp.com/');
await page.waitForTimeout(3000);
  // 2. Verify title
  await expect(page).toHaveTitle(/CURA Healthcare Service/);
await page.waitForTimeout(3000);
  // 3. Go to login page properly
  await Promise.all([
    page.waitForURL('**/profile.php#login'),
    page.locator('#btn-make-appointment').click()
    
  ]);
  await page.waitForTimeout(3000);

  // 4. Login
  await page.locator('#txt-username').fill('John Doe');
  await page.waitForTimeout(3000);
  await page.locator('#txt-password').fill('ThisIsNotAPassword');
 
 await page.waitForTimeout(3000);
  await page.locator('#btn-login').click();
await page.waitForTimeout(3000);
  // 5. Wait for appointment page
  await page.locator('#txt_visit_date').waitFor({ state: 'visible' });
await page.waitForTimeout(3000);
  // 6. Select date
  await page.locator('#txt_visit_date').click();
  await page.waitForTimeout(3000);
  await page.locator("//td[normalize-space()='25']").click();
await page.waitForTimeout(3000);
  // 7. Fill comment
  await page.locator('#txt_comment')
    .fill('Need an Appointment on this Date.');
await page.waitForTimeout(3000);
  // 8. Book appointment
  const bookBtn = page.locator('#btn-book-appointment');
  await page.waitForTimeout(3000);
  await expect(bookBtn).toBeVisible();
  await bookBtn.click();
await page.waitForTimeout(3000);
  // 9. Verify success page
//  await expect(page.locator('#appointment')).toBeVisible();

  // 10. Open menu
  const menu = page.locator("//i[@class='fa fa-bars']");
  await page.waitForTimeout(3000);
  await expect(menu).toBeVisible();
  await menu.click();
await page.waitForTimeout(3000);
  // 11. Logout
  const logout = page.locator("//a[normalize-space()='Logout']");
  await expect(logout).toBeVisible();
  await page.waitForTimeout(3000);
  await logout.click();
await page.waitForTimeout(3000);
});