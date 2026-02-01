import { Page } from '@playwright/test';
import { CheckoutLocators } from '../locators/CheckoutLocators';

export class CheckoutPage {
  constructor(private page: Page) {}

  async getPageTitle() {
    return await this.page.title();
  }
}
