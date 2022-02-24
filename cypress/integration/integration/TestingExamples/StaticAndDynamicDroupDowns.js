///<reference types="cypress"/>
describe('droupdowns', () => { 

beforeEach(()=>{
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
});

 it('static droup downs', () => {
     // static droup downs always have a static tag and options under it
 cy.get('select').select('option2').should('have.value','option2');
 cy.wait(2000)
 cy.get('#dropdown-class-example').select('option1').should('have.value','option1');
 cy.wait(2000)
 });

 it('dynamic droup downs', () => {
   cy.get('#autocomplete').type('eth')  
   cy.wait(2000)
   cy.get('.ui-menu-item div').each(($el,index,$list)=>{
       if($el.text()==="Ethiopia"){
           $el.click()
       }
   })

 });

})