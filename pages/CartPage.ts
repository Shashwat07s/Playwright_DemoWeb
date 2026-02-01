import { Page } from '@playwright/test';
import { CartLocators } from '../locators/CartLocators';

export class CartPage {
  constructor(private page: Page, private locators = new CartLocators()) {}

  async checkout() {
    await this.page.click(this.locators.cartLink);
    await this.page.selectOption(this.locators.countryDropdown, 'India');
    await this.page.check(this.locators.termsCheckbox);
    await this.page.click(this.locators.checkoutButton);
  }
}
