import { Page } from '@playwright/test';
import { RegisterLocators } from '../locators/RegisterLocators';

export class RegisterPage {
  constructor(private page: Page, private locators = new RegisterLocators()) {}

  async registerUser() {
    await this.page.click(this.locators.registerLink);
    await this.page.check(this.locators.genderMale);
    await this.page.fill(this.locators.firstName, 'Test');
    await this.page.fill(this.locators.lastName, 'User');

    const email = `user${Date.now()}@mail.com`;
    await this.page.fill(this.locators.email, email);

    await this.page.fill(this.locators.password, 'Test@123');
    await this.page.fill(this.locators.confirmPassword, 'Test@123');
    await this.page.click(this.locators.registerButton);
  }
}
