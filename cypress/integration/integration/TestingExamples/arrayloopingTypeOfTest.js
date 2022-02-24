///<reference types="cypress"/>



describe('test suit', () => { 




beforeEach(()=>{
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
})

  it('nested div adressing', () => {
    cy.get('.search-keyword').type('ca')
    cy.wait(2000)
    cy.get('.search-button').click()
    cy.wait(2000)
    cy.get('.products').find('.product').should('have.length',4)
    cy.wait(2000)
    cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click();
  
  });

  it('looping', () => {
      
   const itemlist=['Cauliflower','Carrot','Capsicum','Cashews']
   cy.get('.products').find('.product').each(($el,index,$list)=>{
       console.log($list);
       cy.wrap($el).find('h4.product-name')
       .should('contain.text',itemlist[index])
       const textvalue =$el.find('h4.product-name').text()
       if (textvalue.includes('Cashews')) {
           $el.find('button').click()
       }
   })

  });
 



 })


