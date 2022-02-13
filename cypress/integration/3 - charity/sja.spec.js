// <reference types="cypress" />

it('Web App', function(){

    cy.visit("https://www.sja.org.uk/")
    cy.get('#onetrust-accept-btn-handler').click()
    cy.get('#aLoginModal').click()
    cy.get('#txtLoginEmail').type('hello@sja.org.uk')
    cy.get('#txtLoginPassword').type('bye')
    console.log('Hello SJA')
})