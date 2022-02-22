/// <reference types="cypress" />

describe('fixture demo', () => { 
    
            it('fixture demo test', () => {    
            cy.fixture('example').then((userFixture) => { 
                cy.visit('https://admin-demo.nopcommerce.com/login');
                cy.get('.email').clear().type(userFixture.email);
                cy.get('.password').clear().type(userFixture.password);
                cy.get('.button-1').click();
              })
            });
 })


