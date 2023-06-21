// ***********************************************
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
//Common function for Login
 Cypress.Commands.add('login', (email, password) => {
 cy.visit("https://www.facebook.com/")
 cy.get('[data-testid="royal_email"]').type(email)
 cy.get('[data-testid="royal_pass"]').type(password)
cy.get('[data-testid="royal_login_button"]').click()
 })
 //Common function for Search
 Cypress.Commands.add('Search',(word)=>{
 cy.get('#APjFqb').click() //click on search bar
 cy.get('#APjFqb').type(word) //enter word in search bar
 })
//Common function for Assert title of page
Cypress.Commands.add('titleAssert',(ActualTitle)=>{
cy.title().should("include",ActualTitle)
})

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
