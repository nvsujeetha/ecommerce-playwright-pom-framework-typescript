import {test,expect} from '@playwright/test';//import the required libraries
import {HomePage} from '../pages/HomePage';


test('@sanity @regression TC01_LaunchApplication',async ({page})=>
{
const home =new HomePage(page);
await home.goto();
await expect(page).toHaveTitle("Your store of fun");
//await expect(page.getByRole('link', { name: 'Your Store' })).toContainText("opencart");
});