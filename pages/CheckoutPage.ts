import { Page,Locator,expect } from '@playwright/test';
 export class CheckoutPage
{
    //constructor
    readonly page:Page;
    readonly loginPage:Locator;
    readonly shippingMethodTitle:Locator;
    readonly radioButton:Locator;
    readonly chooseAddress:Locator;
    readonly chooseShippingMethod:Locator;
    readonly selectContinue:Locator;
    readonly choosePaymentMethod:Locator;
    readonly confirmOrderButton:Locator;
    readonly orderConfirmedText:Locator;    
    constructor(page:Page)
    {
        this.page=page;

        //locators
        this.loginPage=page.getByRole('link', { name: 'login page' });
        this.radioButton=page.getByRole('radio', { name: 'I want to use an existing' });
        
this.chooseAddress = page.locator('#input-shipping-address');

        //this.chooseAddress=page.selectOption('#input-shipping-address', { index: 1 });
       this.shippingMethodTitle=page.getByText('Shipping Method');
        this.chooseShippingMethod=page.locator('#button-shipping-methods');
        this.selectContinue=page.getByRole('button', { name: 'Continue' });
        this.choosePaymentMethod=page.locator('#button-payment-methods');
        this.confirmOrderButton=page.getByRole('button', { name: 'Confirm Order' });
        this.orderConfirmedText=page.getByRole('heading', { name: 'Your order has been placed!' });
    }
    //methods
   async loginPageLink():Promise<void>
   {
    await this.loginPage.click();
  }
   async selectRadioButton():Promise<void>
   {
    await this.radioButton.click();
   }
   async selectAddress():Promise<void>
   {
    await this.chooseAddress.selectOption({ index: 1 });
   }
   async selectShippingAddress():Promise<void>
   {
    await this.shippingMethodTitle.isVisible();
    await this.chooseShippingMethod.click();
    await this.selectContinue.click();
   }
   async selectPaymentMethod():Promise<void>
   {
    await this.choosePaymentMethod.click();
    await expect(this.selectContinue).toBeVisible();
    await this.selectContinue.click();
   }
   async confirmOrder():Promise<void>
   {
    await this.confirmOrderButton.click();
   }
   async orderPlacedMessage():Promise<boolean> 
      {
    return await this.orderConfirmedText.isVisible();
   }
} 