import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('Login Page is loaded', () => {
    cy.visit('#')
})

When('User enters username as {string} and password as {string}', (username, password) => {
    cy.typeUserandPassword(username,password)
})

When('User clicks on login button', () => {
    cy.clickOnLoginButton()
})

Then('User is able to see invoice list page', () => {
    cy.url().should('eq',Cypress.config().baseUrl + 'account')
    cy.validateInvoiceListTitleIsDisplayed()
})

Then('User is not able to log into application and error message is displayed', () => {
    cy.url().should('eq', Cypress.config().baseUrl)
    cy.validateLoginErrorMessage();
})
