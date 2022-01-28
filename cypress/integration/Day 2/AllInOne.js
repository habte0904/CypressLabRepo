/// <reference types="cypress" />
    describe('Day2 cypress session',()=>{
       
        it('',()=>{
            cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")

                    cy.get('.search-keyword').type('ca')
                    cy.get('.search-button').click()
            
                    //assertion
                    cy.url().should('include', 'seleniumPractise')
                    
                    //tdd assertion
                    cy.get('.product').should('have.length',5)
            
                    //how to handle invisible items or elements check with visible and without visible
                    cy.get('.product:visible').should('have.length',5)
            
                    //parent child chaining and use of find function
                    cy.get('.products').find('.product').should('have.length',4)
                    cy.get(':nth-child(1) > .product-action > button').click()
                    cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
            
        })
    })
    