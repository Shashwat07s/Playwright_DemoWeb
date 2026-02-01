import { test, expect } from '@playwright/test';
import { RegisterPage } from '../pages/RegisterPage';
import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';
import { captureScreenshot } from '../utils/screenshot';

test('Demo Web Shop – End to End (Search Based)', async ({ page }) => {

  await page.goto('/');

  // 1️⃣ Register
  await new RegisterPage(page).registerUser();
  await captureScreenshot(page, '01_registration');

  // 2️⃣ Search Computer → Select Simple Computer
  await new HomePage(page).searchAndSelectSimpleComputer();

  // 3️⃣ Select Processor & Add to Cart
  const product = new ProductPage(page);
  await product.selectProcessorAndAddToCart();

  const msg = await product.getSuccessMessage();
  expect(msg).toContain('The product has been added');
  await captureScreenshot(page, '02_product_added');

  // 4️⃣ Cart → India → Terms → Checkout
  await new CartPage(page).checkout();
  await captureScreenshot(page, '03_checkout');
});
