import { Page } from '@playwright/test';
import { HomeLocators } from '../locators/HomeLocators';

export class HomePage {
  constructor(private page: Page, private locators = new HomeLocators()) {}

  async searchAndSelectSimpleComputer() {
    // Search for Computer
    await this.page.fill(this.locators.searchBox, 'Computer');
    await this.page.click(this.locators.searchButton);

    // Store results in list & find Simple Computer
    const results = await this.page.$$(this.locators.searchResults);

    for (const product of results) {
      const text = await product.textContent();
      if (text?.includes('Simple Computer')) {
        await product.click();
        break;
      }
    }
  }
}
