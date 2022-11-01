/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

describe('My First Test Suite',function()
{
it('My First Test case',function(){
cy.visit('https://sarathiaapka.com/')
cy.get('.main-menu > :nth-child(7) > a').click()
cy.get('input[name="username"]').type('9998887776')
cy.get('input[name="password"]').type('qwerty123')
cy.get('button[type="submit"]').click()

})

})