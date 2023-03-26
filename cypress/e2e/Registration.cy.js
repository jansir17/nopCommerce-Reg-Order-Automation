describe("TestSuit01", () => {
  it("Test01", () => {
    cy.visit("https://training.nop-station.com/");
    cy.get(".ico-register").click();
    cy.get(".page-title").contains("Register");
    cy.xpath("//input[@id='gender-male']").check().should("be.checked");
    cy.xpath("//input[@id='gender-female']").should("not.be.checked");
    cy.xpath("(//input[@id='Newsletter'])[1]").should("be.visible");
    cy.xpath("(//input[@id='Newsletter'])[1]").check().should("be.checked");
    cy.xpath("(//input[@id='Newsletter'])[1]")
      .uncheck()
      .should("not.be.checked");
    // cy.xpath("(//input[@id='FirstName'])[1]").type("Mehrab");
    // cy.xpath("(//input[@id='LastName'])[1]").type("Tester01");
    cy.xpath("//select[@name='DateOfBirthYear']").type("2023,{enter}");
    cy.xpath("//select[@name='DateOfBirthYear']").should("have.value", "2023");
    cy.xpath("(//input[@id='FirstName'])[1]").type("MehrabTEST{enter}");
  });
});
