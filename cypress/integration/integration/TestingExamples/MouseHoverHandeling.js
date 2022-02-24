///<reference types="cypress"/>


describe('mouse hover practice', () => { 

it('mouse hover', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.get('div .mouse-hover-content').invoke('show')
    cy.contains('Top').click()
    cy.url().should('include','top')
    // so to force click on top of the browser which is appearing and not allowing to proceed we use force method
    cy.contains('Top').click({force:true})
    cy.url().should('include','top')
});


})