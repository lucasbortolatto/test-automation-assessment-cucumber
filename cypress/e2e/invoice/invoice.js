import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('Login page is loaded', () => {
    cy.visit('#')
})

When('User log into the application with username {string} and password {string}', (username, password) => {
    cy.login(username,password)
})

Then('User is able to see invoice list page', () => {
    cy.url().should('eq',Cypress.config().baseUrl + 'account')
    cy.validateInvoiceListTitleIsDisplayed()
})

Given('Invoice list is loaded in the screen', () => {
    cy.validateInvoiceListTitleIsDisplayed()
})

When('User clicks on invoice details of item {int} present on the table', (invoice) => {
    cy.openInvoiceDetails(invoice)
})

Then('User is able to see invoice details page', () => {
    cy.get('header').as('header').contains('Invoice Details')
})

Then('User should see hotel name displayed as {string}', (hotelName) => {
    cy.get('@header').siblings().as('headerSibling')
    .first().as('hotelName').should('have.text', hotelName)
})

Then('User should see invoice date {string} and duo date {string}', (invoiceDate, duoDate) => {
    cy.get('@headerSibling').find('li')
      .first().should('have.text', `Invoice Date: ${invoiceDate}`)
      .next().should('have.text', `Due Date: ${duoDate}`)
})

Then('User is able to see invoice number {string}', (invoiceNumber) => {
    cy.get('@hotelName').next().should('have.text', `Invoice ${invoiceNumber} details`)
})

Then('User is able to see booking code {string}', (bookingCode) => {
    cy.get('@header').siblings('.table').first().as('bookingStayDetailsTable')
    cy.get('@bookingStayDetailsTable').find('tr').eq(0).within(() => {
        cy.get('td').eq(1).should('have.text', bookingCode)
      })
})

Then('User is able to see customer details {string}', (customerDetails) => {
    cy.get('@bookingStayDetailsTable').siblings('h5').eq(1).as('customDetailsHeader')
    cy.get('@customDetailsHeader').siblings('div').should('have.text', customerDetails)
})

Then('User should see room {string} type', (room) => {
    cy.get('@bookingStayDetailsTable').find('tr').eq(1).within(() => {
        cy.get('td').eq(1).should('have.text', room)
      })
})

Then('User should see checkin {string} and checkout {string} dates', (checkIn, checkOut) => {
    cy.get('@bookingStayDetailsTable').find('tr').eq(4).within(() => {
        cy.get('td').eq(1).should('have.text', checkIn)
      })
    cy.get('@bookingStayDetailsTable').find('tr').eq(5).within(() => {
        cy.get('td').eq(1).should('have.text', checkOut)
      })
})

Then('User should see total stay count {int} and total stay amount {string}', (totalStayCount, totalStayAmount) => {
    cy.get('@bookingStayDetailsTable').find('tr').eq(2).within(() => {
        cy.get('td').eq(1).should('have.text', totalStayCount)
      })
  
      cy.get('@bookingStayDetailsTable').find('tr').eq(3).within(() => {
        cy.get('td').eq(1).should('have.text', totalStayAmount)
      })
})

Then('User is able to see billing details like deposit now {string}, tax&VAT {string} and total amount {string}', (depositNow, taxAndVat, totalAmount) => {
    cy.get('@bookingStayDetailsTable').siblings('.table').as('billingDetaisTable').prev().should('have.text', 'Billing Details')
    cy.get('@billingDetaisTable').find('tbody').within(() => {
        cy.get('td').eq(0).should('have.text', depositNow)
        cy.get('td').eq(1).should('have.text', taxAndVat)
        cy.get('td').eq(2).should('have.text', totalAmount)
      })
})