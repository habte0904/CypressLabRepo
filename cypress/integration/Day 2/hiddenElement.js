/// <reference types="cypress" />

describe('Hidden Element access', function () {
    
   // test case
    it('Invoke Method', function (){
       cy.visit("https://www.amazon.com/"); 
            
       cy.get('#nav-flyout-ya-signin').invoke('show');  // show hidden element with invoke
       cy.contains('Sign').click();  //click hidden element
    });

 });