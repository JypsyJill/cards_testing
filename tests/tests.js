const selectors = require("../test-assets/selectors")
module.exports = {
    beforeEach: browser => {
        browser.url("https://cards-beta.devclock.com/")
    },
    after: browser => {
        browser.end()
    },

    'Smoke Test': browser => {
        browser
            .waitForElementVisible(selectors.email, 5000)
            .setValue(selectors.email, "jillyn_oc_ca2@yahoo.com")
            .setValue(selectors.password, "Junker001!")
            .click(selectors.clickLogin)
            .pause(1000)
            .clickByText('body > div.main > div.content > div > div > div:nth-child(2) > div.col-12-12 > label', "Subscription")
            .pause(1000)
            .clickByText('body > div.main > div.content > div > div:nth-child(4) > div', "Upgrade To Pro")
            .pause(1000)
            .click(selectors.backButton)
            .pause(1000)
            .clickByText('body > div.main > div.content > div > div > div:nth-child(1) > div.col-12-12', "Decks")
            .pause(1500)
            .click(selectors.backButton)
            .pause(1500)
            .clickByText('body > div.main > div.content > div > div > div:nth-child(4) > div.col-12-12', "Settings")
            .pause(1500)
            .click(selectors.backButton)
            .pause(1500)
            .clickByText('body > div.main > div.content > div > div > div:nth-child(5) > div.col-12-12', "Logout")
            .waitForElementVisible(selectors.email,5000)




    },
}


