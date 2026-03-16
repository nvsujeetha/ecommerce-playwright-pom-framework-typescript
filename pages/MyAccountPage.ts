import {Page,Locator} from '@playwright/test';
export class MyAccountPage {
 readonly page:Page;
 readonly myAccountText:Locator;
  constructor(page:Page) {
    this.page = page;
    this.myAccountText = page.locator('h1');
  }

  async isMyAccountVisible():Promise<boolean> {
    return await this.myAccountText.isVisible();
  }
}

