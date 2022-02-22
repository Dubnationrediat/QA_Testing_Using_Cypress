/// <reference types="cypress" />


describe('Test suit',()=>{
    it('Test case one verifying the title of the page',()=>{

     cy.visit('https://demo.nopcommerce.com/')
     cy.title().should('eq','nopCommerce demo store')
    
     
    })
})










