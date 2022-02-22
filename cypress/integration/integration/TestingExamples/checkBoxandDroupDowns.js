

/// <reference types="cypress" />


describe('Test suit',()=>{
    it('checkboxes',()=>{
     cy.visit('http://demo.automationtesting.in/Register.html');
     cy.get('#checkbox1').check().should('be.checked').and('have.value','Cricket');
     cy.get('#checkbox2').check().should('be.checked').and('have.value','Movies');
     cy.get('#checkbox3').check().should('be.checked').and('have.value','Hockey');
     cy.wait(3000)
     cy.get('#checkbox1').uncheck().should('not.be.checked');
     cy.get('#checkbox2').uncheck().should('not.be.checked');
     cy.get('#checkbox3').uncheck().should('not.be.checked');
    //   shortely we can use this method
    cy.get('input[type=checkbox]').check(['Cricket','Movies','Hockey'])
    })
    //for droup down
    it('droupdowns',()=>{
        cy.visit('http://demo.automationtesting.in/Register.html');
        cy.get('#Skills').select('Adobe InDesign').should('have.value','Adobe InDesign');
    })
// lanugaes multi select 
it('nonselect tag selectores',()=>{
    cy.get('#msdd').click();
    cy.get('.ui-corner-all').contains('English').click();
    cy.get('.ui-corner-all').contains('Japanese').click();

})

it('searchable droupdowns',()=>{
  cy.get('[role="combobox"]').click({force:true});
  cy.get('.select2-search__field').type("au")
  cy.get('.select2-search__field').type("{enter}")

})



})





