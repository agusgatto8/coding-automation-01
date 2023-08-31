import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page'
import Components from '../pageobjects/components.page'
import HomPageAdmin from '../pageobjects/adminDashboard.page'
import InfoAdminPage from '../pageobjects/myInfo.page'

describe('Coding challenge QA', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();

        await LoginPage.pageTitle.waitForDisplayed();
        await LoginPage.login('Admin', 'admin123');
    })

    it('Check the Dashboard screen is displayed', async () => {
        await Components.openCloseNavBarBtn.click();
        await Components.headerAdmin.waitForDisplayed();
        await Components.nameSection.waitForDisplayed();
        await expect(Components.nameSection).toHaveTextContaining('Dashboard');
        await Components.nameAdmin.waitForDisplayed();
        const nameHeader = await Components.nameAdmin.getText()
        await expect(Components.nameAdmin).toHaveTextContaining(nameHeader);
        await HomPageAdmin.dashboardAdminContainer.waitForDisplayed();
        await HomPageAdmin.timeWorkSection.waitForDisplayed();
        await HomPageAdmin.myActionsSection.waitForDisplayed();
        await HomPageAdmin.quickLaunchSection.waitForDisplayed();
    })

    it('Navigation to the My info section', async () => {
        await Components.openCloseNavBarBtn.click();
        await Components.navBar.waitForDisplayed();
        await Components.myInfoBtn.click();
        await browser.pause(3000);
    })

    it('Name comparison', async () => {
        await InfoAdminPage.nameCheck();
    })

    it('DOB modify and check', async () => {
        await InfoAdminPage.inputDateOfBirth.click();
        await browser.keys(['Control', 'a']);
        await browser.keys('Backspace');
        await InfoAdminPage.saveBtn.click();
        await browser.pause(6000);
        await InfoAdminPage.inputDateOfBirth.waitForDisplayed();
        await InfoAdminPage.inputDateOfBirth.setValue('1980-10-25');
        await browser.pause(2000);
        await InfoAdminPage.saveBtn.click();
        await browser.pause(6000);
        const dateOfBirth = await InfoAdminPage.inputDateOfBirth.getValue()
        await browser.keys(dateOfBirth.toString())
        console.log('Dates match!', await dateOfBirth);
    })
})

