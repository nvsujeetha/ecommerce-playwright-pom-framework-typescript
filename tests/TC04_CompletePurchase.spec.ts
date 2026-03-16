import {test, expect} from '@playwright/test';
import {HomePage} from '../pages/HomePage';
import {LoginPage} from '../pages/LoginPage';
import {MyAccountPage} from '../pages/MyAccountPage';
import {ProductPage} from '../pages/ProductPage';       
import {CheckoutPage} from '../pages/CheckoutPage';

test('@sanity @regression TC04_CompletePurchase',async ({page})=>
{
    const home=new HomePage(page);
    const login = new LoginPage(page);
    const product=new ProductPage(page);
    const checkout=new CheckoutPage(page);
    await home.goto();
    await home.viewAllLaptopsAndNotebooks();
    await product.openProductByName('HP LP3065');
    const deliveryDate=ProductPage.setDeliveryDate(5);
    await product.finalDeliveryDate(deliveryDate);
   /*  await product.wishList();
    await product.expectSuccessContains("Success"); */
    await expect(page.getByRole('button', { name: 'Add to Cart' })).toBeVisible();
    await product.addToCart();
    await expect(product.successAlert).toContainText('Success');
    await product.checkout();

    await checkout.loginPageLink();
    await login.login('nsujeetha@gmail.com','Happylearning');
    await checkout.selectRadioButton();
    await checkout.selectAddress();
    await checkout.selectShippingAddress();
    await checkout.selectPaymentMethod();
    await checkout.confirmOrder();
    await checkout.orderPlacedMessage();

});
