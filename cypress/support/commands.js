// ***********************************************
/// <reference types="cypress" />
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add("Login",()=>

{   
    
cy.visit(Cypress.env('url1'))
cy.get('.main-menu > :nth-child(7) > a').click()
cy.get('input[name="username"]').type('9998887776')
cy.get('input[name="password"]').type('qwerty123')
cy.get('button[type="submit"]').click()

})
