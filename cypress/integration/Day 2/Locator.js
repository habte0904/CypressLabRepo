/// <reference types="cypress" />

//global variables
let username="standard_user";
let password="secret_sauce";

describe('Locators methods', () =>{
    
   beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/');
    })

    //locator type
    it('Get Method',function(){
        //cy.visit('https://www.saucedemo.com/');
        cy.get('#user-name').type(username);
        cy.get('input#password').type(password);
        cy.get('[data-test="login-button"]').click()
    })


    // using eq, First ,last method to select input
    it('EQ|FIRST|LAST Method',function(){
        //cy.visit('https://www.saucedemo.com/');
        cy.get('input').first().type(username);
        cy.get('input').eq(1).type(password);
        cy.get('input').last().click();
    })

    //Filter Method 
    it('Filter Method',function(){
        
        cy.get('input').filter('[type="text"]').type(username);
        cy.get('input').filter('[type="password"]').type(password);
        cy.get('input').filter('[type="submit"]').click();
    })

    //Find Method
    // we use find method to get descendet element
    it('Find Method',()=>{
        cy.get('form').find('input').eq(0).type(username);
        cy.get('form').find('input').eq(1).type(password);
        cy.get('form').find('input').eq(2).click();
    })

    //Parent method...used to check her parent 
    it('Parent Method',()=>{
        cy.get('form').parent().should('not.have.class','login-box');
    })
})