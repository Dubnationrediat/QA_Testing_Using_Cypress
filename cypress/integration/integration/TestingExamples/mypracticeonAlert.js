/// <reference types="cypress"/>

describe("alert types practice", () => {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
  });
  it("normal alert", () => {
    cy.contains("Click for JS Alert").click();
    cy.on("window:alert", (text) => {
      expect(text).eq("I am a JS Alert");
    });
  });
  it("confirm alert", () => {
    cy.contains("Click for JS Confirm").click();
    cy.on("window:confirm", (text) => {
      expect(text).eq('I am a JS Confirm');
      return false;
    });
  });
  it("prompt alert", () => {
    cy.window()
    .then(($win) => {
     cy.contains("Click for JS Prompt").click();
      cy.stub($win, "prompt").returns("hello this me");
    });
  });
});
