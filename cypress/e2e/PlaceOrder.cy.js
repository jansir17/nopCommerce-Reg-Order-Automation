import CardHolderData from "../PageObjectsModel/UserCredentialsLocators";

describe("PlaceOrder_TestSuit", () => {
  it("Test_001_positive_PlaceOrder", () => {
    cy.visit("https://training.nop-station.com/cell-phones");
    cy.xpath(
      "//h2[@class='product-title']//a[contains(text(),'Nokia Lumia 1020')]"
    ).click();
    cy.xpath("//input[@id='product_enteredQuantity_20']").clear();
    cy.xpath("//input[@id='product_enteredQuantity_20']").type("2");
    cy.xpath("//button[@id='add-to-cart-button-20']").click();
    cy.xpath("//span[@class='cart-label']").click();
    cy.xpath("//input[@id='termsofservice']").should("be.visible");
    cy.xpath("//input[@id='termsofservice']").check().should("be.checked");
    cy.xpath("//button[@id='checkout']").click();
    cy.xpath("//button[normalize-space()='Checkout as Guest']").click();
    cy.xpath("//input[@id='ShipToSameAddress']")
      .uncheck()
      .should("not.be.checked");

    //Implementing Page Object Model
    const UserObj = new CardHolderData(); //Initiating Object of the Class

    UserObj.setUserFirstName("Mehrab");
    UserObj.setUserLastName("Tester 001");
    UserObj.setUserEmailId("mehrabTester001@gmail.com");
    UserObj.setUserCompanyName("mehrabTestCompany001");
    UserObj.setUserCountryId("United States of America");
    UserObj.setUserStateId("Alabama");
    UserObj.setUserCity("Dhaka");
    UserObj.setUserAddress("Gulshan 1");
    UserObj.setUserZipCode("0001");
    UserObj.setUserPhoneNumber("0160000000");
    UserObj.setUserBillingSubmit();

    cy.xpath("//input[@id='PickupInStore']").uncheck().should("not.be.checked");
    cy.get("#shipping-buttons-container > .button-1").click();
    cy.xpath(
      "//button[@class='button-1 shipping-method-next-step-button']"
    ).click();
    cy.xpath("//input[@id='paymentmethod_1']").check();
    cy.xpath("//input[@id='paymentmethod_1']").should("be.visible");
    cy.xpath("//input[@id='paymentmethod_1']").check();
    cy.xpath(
      "//button[@class='button-1 payment-method-next-step-button']"
    ).click();

    UserObj.setUserCardHolderName("Mehrab Tester 001");
    UserObj.setUserCardNumber("1111111");
    UserObj.setUserCardExpireMonth("5");
    UserObj.setUserCardExpireYear("2023");
    UserObj.setUserCardCode("777");

    cy.xpath("(//button[@class='button-1 payment-info-next-step-button'])[1]", {
      timeout: 10000,
    }).click();
    cy.xpath("//button[normalize-space()='Confirm']").click();
    cy.xpath(
      "//strong[normalize-space()='Your order has been successfully processed!']"
    ).should("contain", "Your order has been successfully processed!"); //working fine
  });
});
