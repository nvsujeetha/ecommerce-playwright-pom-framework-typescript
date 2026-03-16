import {test,expect} from '@playwright/test';
import {HomePage} from '../pages/HomePage';
import {LoginPage} from '../pages/LoginPage';
import {MyAccountPage} from '../pages/MyAccountPage';
import testData from '../Utils/CloudBerryStoreTestData.json';
type UserRow={username:string,password:string};
const users=(testData.Sheet1 ?? []) as UserRow[];//type assertion to specify the type of users array. If the test data is empty use a blank array else put it into the UserRow.
for (const data of users)//object is created for users
{
test(`@sanity @datadriven @regression TC02_Login-${data.username}`,async ({page})=>  //Standard way to write without using function fixture
{
const home=new HomePage(page);
const login=new LoginPage(page);
const myAccount = new MyAccountPage(page);
await home.goto();
await home.clickMyAccount();
await home.clickLoginLink();
await login.login(data.username,data.password);
expect(myAccount.isMyAccountVisible());

});
}