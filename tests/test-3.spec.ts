import { test, expect } from '@playwright/test';

test('Не работает смена языка ', async ({ page }) => {
  await page.goto('https://polis812.github.io/vacuu/#');
  await page.getByRole('combobox').selectOption('fin');
  await expect(page.locator('html')).toHaveAttribute('lang', 'fin');
});

test('Не работает смена языка 2', async ({ page }) => {
  await page.goto('https://polis812.github.io/vacuu/#');
  await page.getByRole('combobox').selectOption('en');
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
});

test('Некорректная передресация в main content на логотипе vakuu.com ', async ({ page }) => {
  await page.goto('https://polis812.github.io/vacuu/');
  await page.locator('.main__header__logo').click();
  await page.waitForURL('https://polis812.github.io/vacuu/');
});

test('Не работает ссылка в blog', async ({ page }) => {
  await page.goto('https://polis812.github.io/vacuu/');
  const BlogElement = page.locator('//a[@class="main__header__item" and normalize-space(text())="Blog"]');
  await BlogElement.click();
  await page.waitForURL('https://polis812.github.io/blog');
}); 

test('Не работает кнопка Get started', async ({ page }) => {
  await page.goto('https://polis812.github.io/vacuu/');
  await page.getByRole('button', { name: 'Get started' }).click();
  await page.waitForURL('https://polis812.github.io/profile');
});

test('Некорректное указание ссылки Calculate the price в блоке insurances ', async ({ page }) => {
  await page.goto('https://polis812.github.io/vacuu/');
    const Element = page.locator('//a[@href="/car" and normalize-space(text())="Calculate the price"]');
    await Element.click();
    await page.waitForURL('https://polis812.github.io/car');
}); 

test('Отсутствие валидайции на отправку пустого поля ввода почты в блоке footer', async ({ page }) => {
  await page.goto('https://polis812.github.io/vacuu/');
  await page.locator('#app div').filter({ hasText: 'Product Car insurance Home insurance Travel insurance Pet insurance Resources' }).locator('img').click();
  await expect(page.getByText('Error×')).toBeVisible();
});

test('Некорректная указание ссылки в travel isurance в блоке footer__content', async ({ page }) => {
  await page.goto('https://polis812.github.io/vacuu/');
  const BlogElement = page.locator('//a[@class="footer__col__item" and normalize-space(text())="Travel insurance"]');
  await BlogElement.click();
  await page.waitForURL('https://polis812.github.io/travel');
}); 

test('Некорректная передресация в footer__bottom на логотипе vakuu.com ', async ({ page }) => {
  await page.goto('https://polis812.github.io/vacuu/');
  await page.getByRole('contentinfo').getByRole('link').filter({ hasText: /^$/ }).first().click();
  await page.waitForURL('https://polis812.github.io/vacuu/');
});

test('Зашлушка в footer__bottom на ссылке terms ', async ({ page }) => {
  await page.goto('https://polis812.github.io/vacuu/');
  await page.getByRole('link', { name: 'Terms' }).click();
  await page.waitForURL('https://polis812.github.io/terms');
});