/// <reference types="cypress" />

describe('Handling Each loop, Checkbox and Dropdown', () => {

    beforeEach(function() {
        cy.log("Please check below Test body line by line");
    })

      it("Handling Each loop",()=>{
            cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
            cy.get('.search-keyword').type('ca')
            cy.wait(2000)
            cy.get('.search-button').click()
            cy.wait(2000)
            cy.get('.products').find('.product').should('have.length',4)
            cy.wait(2000)
            cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
            cy.wait(2000)
            const itemlist=["Cauliflower", "Carrot", "Capsicum", "Cashews"];

            //how to use Each function loop
            
            
            cy.get('.products').find('.product').each(($el,index,$list)=>{

                console.log($list); //to display value in list array
               expect($list).to.have.length(4); //to check length of list array
                cy.wrap($el)
                  .find('h4.product-name')
                  .should("contain.text",itemlist[index]); //to check text in list is the same with the itemlist array 
                const textvalue= $el.find('h4.product-name').text() //text() method used to get text from browser
                //includes function is used to take the file which contains that text
                if (textvalue.includes('Cashews')) { 
                $el.find('button')
                   .click()
                }
            })

            cy.wait(2000)
           /*  cy.get('.brand').then(function(logoElement){
                cy.log(logoElement.text())
            }) */

      }) 

     

      it("Handling Checkbox",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
            //====HOW TO CHECK CHECKBOX==========
            cy.get('#checkBoxOption1')
              .check()
              .should('be.checked')
              .and('have.value','option1')

            cy.wait(2000)
            cy.get('#checkBoxOption1')
              .uncheck()
              .should('not.be.checked')
              .and('have.value','option1')

            cy.wait(2000)
            //to check it is checked on box
            cy.get('input[type="checkbox"')  //display how many checkbox
            cy.wait(2000)
            cy.get('input[type="checkbox"').check(['option2','option3'])
            cy.wait(2000) 
        })
    

        it('Handling Dropdown',()=>{
            cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
            //====== How to handle Static Dropdown=====
            cy.get('select').select('option2').should('have.value','option2')
            cy.wait(2000)
            cy.get('#dropdown-class-example').select('option1').should('have.value','option1')
            cy.wait(2000)
            
            //====how to handle Dynamic Dropdown=====
            cy.get('#autocomplete').type('ind')
            cy.wait(2000)

            cy.get('.ui-menu-item div').each(($el,index,$list)=>{
            expect($list).to.have.length(3); 
            if ($el.text()==='Indonesia') { //includes function is used to take the file which contains that text
            $el.click()
            }
            })
            cy.wait(2000)
            //to validate the selected value is equal to india
            cy.get('#autocomplete').should('have.value','Indonesia')
        })
    })

   
    
    