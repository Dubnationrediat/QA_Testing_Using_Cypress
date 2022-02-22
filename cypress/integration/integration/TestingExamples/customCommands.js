/// <reference types="cypress"/>

describe('cusotm commands', () => {


 it('login customer', () => {
  cy.login('admin@yourstore.com','admin')
  cy.title().should('eq','Dashboard / nopCommerce administration')
 });

 it('adding cusotmer', () => {
    cy.login('admin@yourstore.com','admin')
        cy.log('adding customer')
 });

 it('editcusotmer', () => {
    cy.login('admin@yourstore.com','admin')
    cy.log('editing customer')
 });




})