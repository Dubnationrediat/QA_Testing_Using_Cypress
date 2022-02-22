/// <reference types="cypress" />

describe('Hooks Test', () => {

    beforeEach(() => {
         cy.log('this is before each test')
    });

    afterEach(()=>{
        cy.log('this is after Each test')
    })

    after(()=>{
        cy.log('this is after test')
    })

    before(()=>{
        cy.log('this is before all')
    })

    it('searching test', () => {
        cy.log('**************searching test****************')
    });


    it('advance searching test ', () => {
         cy.log('**************this is advance searching********')
    });


    it('product listing test', () => {
        cy.log('*************this is prodcut listing*********')
    });

})
