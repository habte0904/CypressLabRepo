/// <reference types="cypress" />

//global variables
let username="standard_user";
let password="secret_sauce";
describe('How to use Assertion', () =>{
    
   beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/');
    })

    //to assert using visible
    it(' Check element is Visible or not',function(){

        cy.get('#user-name').should('be.visible').type(username);
        cy.get('input#password').should('be.visible').type(password);
        cy.get('[data-test="login-button"]').should('be.visible').click()
    })
    
    //to assert using length
    it('To check Length',()=>{
        cy.get('form').find('input').should('not.have.length', 2);
        cy.get('form').find('input').should('have.length', 3);
    })

    

    // to assert using class
    it('To check by class name',()=>{
        cy.get('form').parent().should('not.have.class', 'completed')
        cy.get('form').parent().should('have.class', 'login-box')
    })

    //to assert by multiple attribute
    it('To check by  multiple attribute',()=>{
        cy.get('form')
          .find('input')
          .eq(0)
          .should('not.have.class', 'completed')
          .and('be.enabled')
          .type(username);

        cy.get('input#password')
          .should('be.visible')
          .type(password);

        cy.get('[data-test="login-button"]')
          .should('be.visible')
          .click();
        
    })
   
})