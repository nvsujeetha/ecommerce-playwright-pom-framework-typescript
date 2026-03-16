import {test, expect} from '@playwright/test';
import {HomePage} from '../pages/HomePage';
import {LoginPage} from '../pages/LoginPage';
import {MyAccountPage} from '../pages/MyAccountPage';
import {ProductPage} from '../pages/ProductPage';
test('@regression TC05_AddToWishList',async ({page})=>
{
    const home=new HomePage(page); 
    const login = new LoginPage(page);
    const myAccount=new MyAccountPage(page);
    const product=new ProductPage(page);
    await home.goto();
    await home.clickMyAccount();
    await home.clickLoginLink();
    await login.login('nsujeetha@gmail.com','Happylearning');
    await home.viewAllLaptopsAndNotebooks();
    await product.openProductByName('HP LP3065');
    await product.wishList();
    await expect(product.successAlert).toContainText('Success');
    await home.clickWishList();
    await expect(page.getByRole('heading', { name: 'My Wishlist' })).toContainText('My Wishlist');
    await expect(page.getByText('HP LP3065')).toBeVisible();

});   