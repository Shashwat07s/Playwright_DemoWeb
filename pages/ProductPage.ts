import { Page, expect } from '@playwright/test';
import { ProductLocators } from '../locators/ProductLocators';

export class ProductPage {
  constructor(private page: Page, private locators = new ProductLocators()) {}

  async selectProcessorAndAddToCart() {

    // Wait for processor radio button
    await this.page.waitForSelector(this.locators.slowProcessor, {
      state: 'visible'
    });

    // Select processor
    await this.page.check(this.locators.slowProcessor);

    // Ensure Add to Cart is visible & enabled
    await expect(this.page.locator(this.locators.addToCartButton)).toBeVisible();
    await expect(this.page.locator(this.locators.addToCartButton)).toBeEnabled();

    // Click Add to Cart
    await this.page.click(this.locators.addToCartButton);
  }

  async getSuccessMessage() {
    await this.page.waitForSelector(this.locators.successMessage);
    return await this.page.textContent(this.locators.successMessage);
  }
}
