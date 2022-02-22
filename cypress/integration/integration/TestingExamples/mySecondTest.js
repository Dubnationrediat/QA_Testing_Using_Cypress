/// <reference types="cypress" />


describe('Test suit for commercial website',()=>{
    it('test one',()=>{
     cy.visit('https://demo.nopcommerce.com/');
     cy.get('#small-searchterms').type('Apple MacBook Pro 13-inch');
     cy.get("[type='submit']").click();
     cy.get('.product-box-add-to-cart-button[type=button]').click();
     cy.get('#product_enteredQuantity_4').clear().type('5');
     cy.get('#add-to-cart-button-4').click();
     cy.wait(3000);
     cy.get('.cart-label').click();
     cy.wait(5000);
     cy.get('.product-unit-price').contains('$1,800.00');
    });
});



















