import {Page,Locator} from '@playwright/test';
export class ProductPage
{
  readonly page:Page;
 // readonly product:Locator;
  readonly enterDeliveryDate:Locator;
  readonly addToWishList:Locator;
  readonly successAlert:Locator;
  readonly addToCartButton:Locator;
  readonly checkoutButton:Locator;
  readonly checkOutTitle:Locator;
    //constructor 
    constructor(page:Page)
    {
        this.page=page;
        //locators
        this.enterDeliveryDate=page.getByRole('textbox', { name: '* Delivery Date' });
        this.addToWishList=page.locator("//button//i[@class='fa-solid fa-heart']");
        this.successAlert=page.locator('#alert').getByText('Success: You have added HP');
        this.addToCartButton=page.getByRole('button', { name: 'Add to Cart' });
        this.checkoutButton=page.getByRole('link', { name: ' Checkout' });
        this.checkOutTitle=page.getByRole('heading', { name: 'Checkout' });
    }

    //methods
   /*  async addProduct()
    {
        await this.product.click();
    } */

    static setDeliveryDate(days:number):string
    {
        const deliveryDate=new Date();
        //console.log(deliveryDate);
        deliveryDate.setDate(deliveryDate.getDate()+days);//Setting it to 5 days later from current date
        const mm=String(deliveryDate.getMonth()+1).padStart(2,'0');
        const dd=String(deliveryDate.getDate()).padStart(2,'0');
        const yyyy=String(deliveryDate.getFullYear());
        return `${yyyy}-${mm}-${dd}`;
    }
    async finalDeliveryDate(expectedDate:string):Promise<void>
    {
        await this.enterDeliveryDate.fill(expectedDate);
    }

    /*  async expectSuccessContains(text) {
    await expect(this.successAlert).toBeVisible();
    await expect(this.successAlert).toContainText(text);
  } */
  async addToCart():Promise<void>
  {
    
    await this.addToCartButton.click();
  }
  async openProductByName(productName:string):Promise<void> {
    await this.page.getByText(productName, { exact: true }).click();
  }
  async wishList():Promise<void>
  {
    await this.addToWishList.click();
  }

  async checkout():Promise<void>
  {
    await this.checkoutButton.click();
    //await expect(this.checkOutTitle).toContainText();
  }
}