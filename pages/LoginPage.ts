import {Page,Locator} from '@playwright/test';
export class LoginPage
{
    //constructor 
    readonly page:Page;
    readonly email:Locator ;
    readonly password:Locator;
    readonly loginButton:Locator;
    readonly loginLink:Locator;
    constructor(page:Page)
    {
        this.page=page;

        //locators
        this.email=page.getByRole('textbox', { name: 'E-Mail Address' });
        this.password=page.getByRole('textbox', { name: 'Password' });
        this.loginButton=page.getByRole('button', { name: 'Login' });
        this.loginLink=page.getByRole('link', { name: 'login' });

    }
    //Actions
    
    async login(username:string,password:string):Promise<void>
    {
        await this.email.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }
    
}






//Actions