describe("Registration_TestSuit_01", () => {
  it("Test_001_PositiveTesting", () => {
    //Registering
    cy.visit("https://training.nop-station.com/");
    cy.xpath("//a[normalize-space()='Register']").click();
    cy.xpath("//h1[normalize-space()='Register']").should(
      "contain",
      "Register"
    );
    cy.xpath("//strong[normalize-space()='Your Personal Details']").should(
      "contain",
      "Your Personal Details"
    );
    cy.xpath("//input[@id='gender-male']").check().should("be.visible");
    cy.xpath("//input[@id='gender-female']").check().should("be.visible");
    cy.xpath("//input[@id='gender-male']").check().should("be.checked");
    cy.xpath("//input[@id='gender-female']").should("not.be.checked");
    cy.xpath("//input[@id='FirstName']").type("Mehrab");
    cy.xpath("//input[@id='LastName']").type("Tester 001");
    cy.xpath("//select[@name='DateOfBirthDay']").select("17");
    cy.xpath("//select[@name='DateOfBirthMonth']").select("November");
    cy.xpath("//select[@name='DateOfBirthYear']").type("1913");

    cy.xpath("//input[@id='Company']").type("Mehrab Test Company 001");
    cy.xpath("(//input[@id='Newsletter'])[1]").should("be.visible");
    cy.xpath("(//input[@id='Newsletter'])[1]").check().should("be.checked");
    cy.xpath("//input[@id='Password']").type("mehrabTestPass001");
    cy.xpath("//input[@id='ConfirmPassword']").type("mehrabTestPass001");
    cy.xpath("//button[@id='register-button']").click();

    //Now login out
    cy.xpath("//button[@id='register-button']").click();

    //login in with the registered Credentials
    cy.xpath("//a[normalize-space()='Log in']").click();
    cy.xpath("//input[@id='Email']").type("mehrabTest001@abc.com");
    cy.xpath("//input[@id='Password']").type("mehrabTestPass001");
    cy.xpath("//button[normalize-space()='Log in']").click();
    cy.xpath("//h2[normalize-space()='Welcome to our store']").should(
      "contain",
      "Welcome to our store"
    );
  });
});
