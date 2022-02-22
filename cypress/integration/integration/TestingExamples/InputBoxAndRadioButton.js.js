/// <reference types="cypress" />

describe("Test suit", () => {
  it("input buttons", () => {
    cy.visit(
      "http://automationpractice.com/index.php?id_category=3&controller=category"
    );
    cy.url().should("include", "automationpractice");
    cy.get("#search_query_top")
      .should("be.visible")
      .should("be.enabled")
      .type("Faded Short Sleeve T-shirts");

    // lets verify the title
    cy.title().should("eq","Women - My Store");
  });

  it("check box", () => {
    cy.visit("http://automationpractice.com/index.php?id_category=3&controller=category");
    cy.get("#layered_id_attribute_group_8")
      .should("be.visible")
      .should("not.be.checked")
      .click(); // checked it
      // because of the above command the check box is now checked so the next step is to unchck it 
      cy.get("#layered_id_attribute_group_8")
      .should("be.visible").click() // unchecked it
  });

    it('radio buttons', () => {
      cy.visit('http://test.rubywatir.com/radios.php');
      cy.get('#radioId').click();
    });

});
