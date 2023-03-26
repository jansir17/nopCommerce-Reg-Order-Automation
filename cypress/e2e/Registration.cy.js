describe("TestSuit01", () => {
  it("Test01", () => {
    cy.visit("https://training.nop-station.com/register?returnUrl=%2F");
    cy.xpath("//strong[normalize-space()='Your Personal Details']").contains(
      "Your Personal Details"
    );
    // cy.get(".ico-register").click();
    // cy.get(".page-title").contains("Register");
  });

  it("Test02", () => {
    cy.get("#FirstName").type("mehrab");
  });
});
