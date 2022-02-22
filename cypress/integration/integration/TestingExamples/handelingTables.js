///<reference types="cypress"/>

describe("Table handeling", () => {
  beforeEach(() => {
    cy.visit("https://testautomationpractice.blogspot.com/");
  });

  it("check values in table", () => {
    // to check walue in a table
    cy.get("table[name='BookTable']")
      .contains("td", "Learn Selenium")
      .should("be.visible");
    // check specific value in row and colum
    cy.get("table[name=BookTable] > tbody > tr:nth-child(2) > td:nth-child(3)")
      .contains("Selenium")
      .should("be.visible");
    //cheking value presence based on condition by iterating rows
    // eg;- check the book name "Master in Java" whose author is Amod
    cy.get(
      "table[name=BookTable] > tbody > tr:nth-child(2) > td:nth-child(3)"
    ).each(($e, index, $list) => {
      // $e is used for each and every value in the column or our target part and when representing element $ sign is recommanded
      //index is a variable which start from one and for iteration it will increase(here it represent the row)
      //$list is used for catching multiple row single column in this case but generally it represent multiple values
      // from this list it will extract each and store in $e
      const text = $e.text();
      if (text.includes("Amod")) {
        //if true we capture the bookName from the table
        cy.get(
          "table[name=BookTable] > tbody > tr  td:nth-child(1)"  //nchild of one is menaing the first column
        ).eq(index)
        .then((bname)=>{
            const bookname = bname.text();
            expect(bookname).to.equal('Master In Java')
        })
      }
    });
  });
});
