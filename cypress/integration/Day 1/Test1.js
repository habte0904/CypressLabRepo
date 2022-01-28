/// <reference types="cypress" />

describe('Google Test',() =>{
    it('Test 2',()=>{
        cy.visit('https://www.google.com/'); 
        cy.get('.gLFyf').type('cypress');
       cy.get('.FPdoLc > center > .gNO89b').click()
    })
})
    