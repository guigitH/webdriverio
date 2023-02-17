const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!')
        await expect(browser).toHaveUrl('https://the-internet.herokuapp.com/secure')
    })
})


describe('My dynamic control application', () => {
    it('should wait for the input fild to be enabled', async () => {
        await browser.url('https://the-internet.herokuapp.com/dynamic_controls')

        await LoginPage.enableButton.waitForDisplayed()
        await LoginPage.enableButton.click()
        await LoginPage.inputEnabledField.waitForDisplayed({timeout: 4000})
        await expect(LoginPage.inputEnabledField).toBeEnabled()
    })
})
