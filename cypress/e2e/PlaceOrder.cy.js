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

    cy.xpath("//input[@id='BillingNewAddress_FirstName']").type("Mehrab");
    cy.xpath("//input[@id='BillingNewAddress_LastName']").type("Tester 001");
    cy.xpath("//input[@id='BillingNewAddress_Email']").type(
      "mehrabTester001@gmail.com"
    );
    cy.xpath("//input[@id='BillingNewAddress_Company']").type(
      "mehrabTestCompany001"
    );
    cy.xpath("//select[@id='BillingNewAddress_CountryId']").select(
      "United States of America"
    );
    cy.xpath("//select[@id='BillingNewAddress_StateProvinceId']").select(
      "Alabama"
    );
    cy.xpath("//input[@id='BillingNewAddress_City']").type("Dhaka");
    cy.xpath("//input[@id='BillingNewAddress_Address1']").type("Gulshan 1");
    cy.xpath("//input[@id='BillingNewAddress_ZipPostalCode']").type("0001");
    cy.xpath("//input[@id='BillingNewAddress_PhoneNumber']").type("0160000000");
    cy.xpath("//button[@onclick='Billing.save()']").click();
    cy.xpath("//button[@onclick='Shipping.save()']").click();
    cy.xpath("//input[@id='shippingoption_1']").check().should("be.checked");
    cy.xpath(
      "//button[@class='button-1 shipping-method-next-step-button']"
    ).click();
    cy.xpath("//input[@id='paymentmethod_1']").check();
    cy.xpath(
      "//button[@class='button-1 payment-method-next-step-button']"
    ).click();
    cy.get("#CardholderName").type("Mehrab Tester 001");
    cy.xpath("//input[@id='CardNumber']").type("1111111");
    cy.xpath("//select[@id='ExpireMonth']").select("5");
    cy.xpath("//select[@id='ExpireYear']").select("2023");
    cy.xpath("//input[@id='CardCode']").type("001");
    cy.xpath(
      "//button[@class='button-1 payment-info-next-step-button']"
    ).click();
    cy.xpath("//button[normalize-space()='Confirm']").click();
    cy.xpath(
      "//strong[normalize-space()='Your order has been successfully processed!']"
    ).should("contain", "Your order has been successfully processed!");
  });
});
