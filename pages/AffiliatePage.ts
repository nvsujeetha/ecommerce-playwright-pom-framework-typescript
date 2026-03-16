import{Page,Locator} from '@playwright/test';
export class AffiliatePage
{
    readonly page:Page;
    readonly affiliateLink:Locator;
    readonly affiliateTitle:Locator;
    readonly company:Locator;
    readonly webSite:Locator;
    readonly taxID:Locator;
    readonly cheque:Locator;
    readonly continue:Locator;
    readonly paymentMethod:Locator;
    readonly agreeToggle:Locator;
    constructor(page:Page)
    {
        this.page=page

        //locators
        this.affiliateLink=page.getByRole('link', { name: 'Affiliate' });
        this.affiliateTitle=page.getByRole('heading', { name: 'Your Affiliate Information' });
        this.company=page.getByRole('textbox', { name: 'Company' });
        this.webSite=page.getByRole('textbox', { name: 'Web Site' });
        this.taxID=page.getByRole('textbox', { name: 'Tax ID' });
        this.cheque=page.getByRole('textbox', { name: '* Cheque Payee Name' });
        this.continue=page.getByRole('button', { name: 'Continue' });
        this.paymentMethod=page.getByRole('radio', { name: 'Cheque' });
        this.agreeToggle=page.locator('#input-agree');
 }

    //Actions
    async clickAffiliateLink():Promise<void>
    {
        await this.affiliateLink.click();
    }
    async fillAffiliateForm():Promise<void>
    {
        //await this.affiliateTitle.tocontainText('Your Affiliate Information');
        await this.company.fill('Cloudberry');
        await this.webSite.fill('https://www.linkedin.com/');
        await this.taxID.fill('123456');
        //await choosePlan('Cheque');
        await this.paymentMethod.check();
        await this.cheque.fill('Cloudberry');
        //await this.agreeToggle.check();
        await this.continue.click();
        
    }
    async choosePlan(plan:string):Promise<void> {
    await this.page.getByRole('radio', { name: plan }).check();
   }
    
}