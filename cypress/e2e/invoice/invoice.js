import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('Login Page is loaded', () => {
    cy.visit('#')
})

When('User log into the application with username {string} and password {string}', (username, password) => {
    cy.login(username,password)
})

Then('User is able should see invoice list page', () => {
    cy.url().should('eq',Cypress.config().baseUrl+'account')
    cy.get('header').find('h2').should('have.text', 'Invoice List');
})

Given('Invoice list is loaded in the screen', () => {
    cy.get('header').find('h2').should('have.text', 'Invoice List')
})

When('User clicks on invoice details of first item present on the table', () => {
    cy.openInvoiceDetails(1)
})

Then('User is able to see the information present on screen', () => {
    // TODO
})



    


