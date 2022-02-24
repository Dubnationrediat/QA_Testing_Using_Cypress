/// <reference types='cypress'/>
import 'cypress-iframe'

describe('iframe example', () => { 

it('iframe demo', () => {

    // first step is to install iframe module  using npm i cypress-iframe
    // then import it

});
it('using normal scirpt', () => {

    cy.visit('https://the-internet.herokuapp.com/iframe');
    cy.get('#mce_0_ifr').then(($iframe)=>{
        const iframeContent = $iframe.contents().find('body')
        cy.wrap(iframeContent)
        .clear()
        .click()
        .type('hi sintae')
    })
    
});

it.only('another option for iframe targeting', () => {
    cy.visit('https://qavbox.github.io/demo/iframes/');
    cy.get('#Frame2').its('0.contentDocument.body').find('#frameinput').type('sintae')
    
});

 })

