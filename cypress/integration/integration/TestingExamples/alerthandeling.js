/// <reference types="cypress" />


// https://www.youtube.com/watch?v=UoYkjId6iVA     <----- this is Youtube channerl for best clarificaiton on alerts

describe('suit name',()=>{
    it('simple Alert with one button',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.on('window:alert',(theTextOnTheAlert)=>{
          expect(theTextOnTheAlert).equal('I am a JS Alert')
        })
        cy.contains('Click for JS Alert').click();
    })

    it('confirm type alert',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.on('window:confirm',(theTextOnTheAlert)=>{
           expect(theTextOnTheAlert).equal('I am a JS Confirm')
            return false // to return the cancel 
        })
        cy.contains('Click for JS Confirm').click();      
    })
     

    it('windows prompt', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.window().then(($win)=>{
            cy.stub($win,'prompt').returns('hellow this is prompt confirmation')
            cy.contains('Click for JS Prompt').click();
           
        })
        
    });
    






})















