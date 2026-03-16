import type { Page,Locator} from '@playwright/test';
export class HomePage{
readonly page:Page;
readonly myAccountMenu:Locator;
readonly loginLink:Locator;
readonly laptopsAndNotebooksMenu:Locator;
readonly showAllLaptopsAndNotebooks:Locator;
readonly wishListLink:Locator;
readonly checkoutLink:Locator;
//constructor
constructor(page:Page)
{
this.page =page;
//locators
this.myAccountMenu = page.getByRole('link', { name: ' My Account ' });
this.loginLink=page.getByRole('link', { name: 'Login' });
this.laptopsAndNotebooksMenu = page.getByRole('link', { name: 'Laptops & Notebooks', exact: true });
this.showAllLaptopsAndNotebooks = page.getByRole('link', { name: 'Show All Laptops & Notebooks' });
this.wishListLink=page.getByRole('link', { name: ' Wish List (1)' });
this.checkoutLink=page.getByRole('link', { name: ' Checkout' });
}
//action methods
async goto() {
    await this.page.goto('https://cloudberrystore.services/');
  }
async clickMyAccount()
{
    await this.myAccountMenu.click();
}
async clickLoginLink()
{
    await this.loginLink.click();
}
async viewAllLaptopsAndNotebooks()
{
    await this.laptopsAndNotebooksMenu.click();
    await this.showAllLaptopsAndNotebooks.click();
}
async clickWishList()
{
    await this.wishListLink.click();
   
}
async goToCheckout(){
    await this.checkoutLink.click();
}

}


