import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page'
import Components from '../pageobjects/components.page'

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
        await expect(Components.nameSection).toHaveTextContaining('Dashboard')
    })
})

