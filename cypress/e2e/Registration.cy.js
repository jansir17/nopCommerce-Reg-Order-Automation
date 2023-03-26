describe("TestSuit01", () => {
  it("Test01", () => {
    cy.visit("https://training.nop-station.com/");
    cy.get(".ico-register").click();
    cy.get(".page-title").contains("Register");
    cy.xpath("//input[@id='gender-male']").should("be.visible");
    cy.xpath("//input[@id='gender-female']").should("be.visible");
    cy.xpath("//input[@id='gender-male']").check().should("be.checked");
    cy.xpath("//input[@id='gender-female']").should("be.checked");
    cy.xpath("(//input[@id='FirstName'])[1]").type("Mehrab");
  });
});
