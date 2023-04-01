describe("Registration_TestSuit", () => {
  
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
    cy.xpath("//input[@id='Email']").type("mehrabTest001@abc.com");
    cy.xpath("//input[@id='Company']").type("Mehrab Test Company 001");
    cy.xpath("//input[@id='Newsletter']").should("be.visible");
    cy.xpath("//input[@id='Newsletter']").check().should("be.checked");
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

  it("Test_002_PositiveTesting", () => {
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
    cy.xpath("//input[@id='gender-male']").should("not.be.checked");
    cy.xpath("//input[@id='gender-female']").check().should("be.checked");
    cy.xpath("//input[@id='FirstName']").type("Mehrab");
    cy.xpath("//input[@id='LastName']").type("Tester 002");

    cy.xpath("//select[@name='DateOfBirthDay']").select("18");
    cy.xpath("//select[@name='DateOfBirthMonth']").select("December");
    cy.xpath("//select[@name='DateOfBirthYear']").type("1914");

    cy.xpath("//input[@id='Email']").type("mehrabTest002@abc.com");
    cy.xpath("//input[@id='Company']").type("Mehrab Test Company 002");
    cy.xpath("(//input[@id='Newsletter'])[1]").should("be.visible");
    cy.xpath("(//input[@id='Newsletter'])[1]")
      .uncheck()
      .should("not.be.checked");
    cy.xpath("//input[@id='Password']").type("mehrabTestPass002");
    cy.xpath("//input[@id='ConfirmPassword']").type("mehrabTestPass002");
    cy.xpath("//button[@id='register-button']").click();

    //Now login out
    cy.xpath("//button[@id='register-button']").click();

    //login in with the registered Credentials
    cy.xpath("//a[normalize-space()='Log in']").click();
    cy.xpath("//input[@id='Email']").type("mehrabTest002@abc.com");
    cy.xpath("//input[@id='Password']").type("mehrabTestPass002");
    cy.xpath("//button[normalize-space()='Log in']").click();
    cy.xpath("//h2[normalize-space()='Welcome to our store']").should(
      "contain",
      "Welcome to our store"
    );
  });

  it("Test_003_NegativeTesting", () => {
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
    cy.xpath("//input[@id='gender-male']").should("not.be.checked");
    cy.xpath("//input[@id='gender-female']").should("not.be.checked");
    cy.xpath("//input[@id='FirstName']").type("Mehrab");
    cy.xpath("//input[@id='LastName']").type("Tester 003");

    cy.xpath("//select[@name='DateOfBirthDay']").select("19");
    cy.xpath("//select[@name='DateOfBirthMonth']").select("January");
    cy.xpath("//select[@name='DateOfBirthYear']").type("1915");

    cy.xpath("//input[@id='Email']").type("mehrabTest003@abc.com");
    cy.xpath("//input[@id='Company']").type("Mehrab Test Company 003");
    cy.xpath("(//input[@id='Newsletter'])[1]").should("be.visible");
    cy.xpath("(//input[@id='Newsletter'])[1]")
      .uncheck()
      .should("not.be.checked");
    cy.xpath("//input[@id='Password']").type("mehrabTestPass003");
    cy.xpath("//input[@id='ConfirmPassword']").type("mehrabTestPass003");
    cy.xpath("//button[@id='register-button']").click();

    //Now login out
    cy.xpath("//button[@id='register-button']").click();

    //login in with the registered Credentials
    cy.xpath("//a[normalize-space()='Log in']").click();
    cy.xpath("//input[@id='Email']").type("mehrabTest003@abc.com");
    cy.xpath("//input[@id='Password']").type("mehrabTestPass003");
    cy.xpath("//button[normalize-space()='Log in']").click();
    cy.xpath("//h2[normalize-space()='Welcome to our store']").should(
      "contain",
      "Welcome to our store"
    );
  });

  it("Test_004_NegativeTesting", () => {
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
    cy.xpath("//input[@id='gender-male']").should("not.be.checked");
    cy.xpath("//input[@id='gender-female']").check().should("be.checked");
    cy.xpath("//input[@id='FirstName']").type("Mehrab");
    cy.xpath("//input[@id='LastName']").type("Tester 004");

    cy.xpath("//select[@name='DateOfBirthDay']").select("19");
    cy.xpath("//select[@name='DateOfBirthMonth']").select("February");
    cy.xpath("//select[@name='DateOfBirthYear']").type("1916");

    cy.xpath("//input[@id='Email']").type("mehrabTest004@abc.com");
    cy.xpath("//input[@id='Company']").type("Mehrab Test Company 004");
    cy.xpath("(//input[@id='Newsletter'])[1]").should("be.visible");
    cy.xpath("(//input[@id='Newsletter'])[1]")
      .uncheck()
      .should("not.be.checked");
    cy.xpath("//input[@id='Password']").type("mehrabTestPass004");
    cy.xpath("//input[@id='ConfirmPassword']").type("mehrabTestPass004");
    cy.xpath("//button[@id='register-button']").click();

    //Now login out
    cy.xpath("//button[@id='register-button']").click();

    //login in with the registered Credentials
    cy.xpath("//a[normalize-space()='Log in']").click();
    cy.xpath("//input[@id='Email']").type("mehrabTest004@abc.com");
    cy.xpath("//input[@id='Password']").type("mehrabTestPass004");
    cy.xpath("//button[normalize-space()='Log in']").click();
    cy.xpath("//h2[normalize-space()='Welcome to our store']").should(
      "contain",
      "Welcome to our store"
    );
  });

  it("Test_005_NegativeTesting", () => {
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
    cy.xpath("//input[@id='gender-male']").should("not.be.checked");
    cy.xpath("//input[@id='gender-female']").check().should("be.checked");
    cy.xpath("//input[@id='FirstName']").type("Mehrab");
    cy.xpath("//input[@id='LastName']").type("Tester 005");

    cy.xpath("//select[@name='DateOfBirthDay']").select("21");
    cy.xpath("//select[@name='DateOfBirthMonth']").select("March");
    cy.xpath("//select[@name='DateOfBirthYear']").type("1918");

    cy.xpath("//input[@id='Email']").type("mehrabTest005@abc.com");
    cy.xpath("//input[@id='Company']").type("Mehrab Test Company 005");
    cy.xpath("(//input[@id='Newsletter'])[1]").should("be.visible");
    cy.xpath("(//input[@id='Newsletter'])[1]")
      .uncheck()
      .should("not.be.checked");
    cy.xpath("//input[@id='Password']").type("mehrabTestPass005");
    cy.xpath("//input[@id='ConfirmPassword']").type("mehrabTestPass005");
    cy.xpath("//button[@id='register-button']").click();

    //Now login out
    cy.xpath("//button[@id='register-button']").click();

    //login in with the registered Credentials
    cy.xpath("//a[normalize-space()='Log in']").click();
    cy.xpath("//input[@id='Email']").type("mehrabTest005@abc.com");
    cy.xpath("//input[@id='Password']").type("mehrabTestPass005");
    cy.xpath("//button[normalize-space()='Log in']").click();
    cy.xpath("//h2[normalize-space()='Welcome to our store']").should(
      "contain",
      "Welcome to our store"
    );
  });

  it("Test_006_NegativeTesting", () => {
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
    cy.xpath("//input[@id='gender-male']").should("not.be.checked");
    cy.xpath("//input[@id='gender-female']").check().should("be.checked");
    cy.xpath("//input[@id='FirstName']").type("Mehrab");
    cy.xpath("//input[@id='LastName']").type("Tester 006");

    cy.xpath("//select[@name='DateOfBirthDay']").select("23");
    cy.xpath("//select[@name='DateOfBirthMonth']").select("April");
    cy.xpath("//select[@name='DateOfBirthYear']").type("1917");

    cy.xpath("//input[@id='Email']").type("mehrabTest006@abc.com");
    cy.xpath("//input[@id='Company']").type("Mehrab Test Company 006");
    cy.xpath("(//input[@id='Newsletter'])[1]").should("be.visible");
    cy.xpath("(//input[@id='Newsletter'])[1]")
      .uncheck()
      .should("not.be.checked");
    cy.xpath("//input[@id='Password']").type("mehrabTestPass006");
    cy.xpath("//input[@id='ConfirmPassword']").type("mehrabTestPass006");
    cy.xpath("//button[@id='register-button']").click();

    //Now login out
    cy.xpath("//button[@id='register-button']").click();

    //login in with the registered Credentials
    cy.xpath("//a[normalize-space()='Log in']").click();
    cy.xpath("//input[@id='Email']").type("mehrabTest006@abc.com");
    cy.xpath("//input[@id='Password']").type("mehrabTestPass006");
    cy.xpath("//button[normalize-space()='Log in']").click();
    cy.xpath("//h2[normalize-space()='Welcome to our store']").should(
      "contain",
      "Welcome to our store"
    );
  });

  it("Test_007_NegativeTesting_Name", () => {
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
    cy.xpath("//input[@id='gender-male']").should("not.be.checked");
    cy.xpath("//input[@id='gender-female']").check().should("be.checked");
    cy.xpath("//input[@id='FirstName']").type("123"); //BUG
    cy.xpath("//input[@id='LastName']").type("456"); //BUG

    cy.xpath("//select[@name='DateOfBirthDay']").select("31");
    cy.xpath("//select[@name='DateOfBirthMonth']").select("February"); //Bug in February date
    cy.xpath("//select[@name='DateOfBirthYear']").type("2023"); // Bug in Boundary

    cy.xpath("//input[@id='Email']").type("mehrabTest007@abc.com"); //Full BUG
    cy.xpath("//input[@id='Company']").type("Mehrab Test Company 007");
    cy.xpath("(//input[@id='Newsletter'])[1]").should("be.visible");
    cy.xpath("(//input[@id='Newsletter'])[1]")
      .uncheck()
      .should("not.be.checked");
    cy.xpath("//input[@id='Password']").type("mehrabTestPass007"); //boundary of 6
    cy.xpath("//input[@id='ConfirmPassword']").type("mehrabTestPass007");
    cy.xpath("//button[@id='register-button']").click();

    //Now login out
    cy.xpath("//button[@id='register-button']").click();

    //login in with the registered Credentials
    cy.xpath("//a[normalize-space()='Log in']").click();
    cy.xpath("//input[@id='Email']").type("mehrabTest007@abc.com");
    cy.xpath("//input[@id='Password']").type("mehrabTestPass007");
    cy.xpath("//button[normalize-space()='Log in']").click();
    cy.xpath("//h2[normalize-space()='Welcome to our store']").should(
      "contain",
      "Welcome to our store"
    );
  });

  it("Test_008_NegativeTesting_Date", () => {
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
    cy.xpath("//input[@id='gender-male']").should("not.be.checked");
    cy.xpath("//input[@id='gender-female']").check().should("be.checked");
    cy.xpath("//input[@id='FirstName']").type("Mehrab");
    cy.xpath("//input[@id='LastName']").type("Tester 08");

    cy.xpath("//select[@name='DateOfBirthDay']").select("32");
    cy.xpath("//select[@name='DateOfBirthMonth']").select("February"); //Bug in February date
    cy.xpath("//select[@name='DateOfBirthYear']").type("2023"); // Bug in Boundary

    cy.xpath("//input[@id='Email']").type("mehrabTest007@abc.com"); //Full BUG
    cy.xpath("//input[@id='Company']").type("Mehrab Test Company 007");
    cy.xpath("(//input[@id='Newsletter'])[1]").should("be.visible");
    cy.xpath("(//input[@id='Newsletter'])[1]")
      .uncheck()
      .should("not.be.checked");
    cy.xpath("//input[@id='Password']").type("mehrabTestPass007"); //boundary of 6
    cy.xpath("//input[@id='ConfirmPassword']").type("mehrabTestPass007");
    cy.xpath("//button[@id='register-button']").click();

    //Now login out
    cy.xpath("//button[@id='register-button']").click();

    //login in with the registered Credentials
    cy.xpath("//a[normalize-space()='Log in']").click();
    cy.xpath("//input[@id='Email']").type("mehrabTest007@abc.com");
    cy.xpath("//input[@id='Password']").type("mehrabTestPass007");
    cy.xpath("//button[normalize-space()='Log in']").click();
    cy.xpath("//h2[normalize-space()='Welcome to our store']").should(
      "contain",
      "Welcome to our store"
    );
  });

  it("Test_009_NegativeTesting_Month", () => {
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
    cy.xpath("//input[@id='gender-male']").should("not.be.checked");
    cy.xpath("//input[@id='gender-female']").check().should("be.checked");
    cy.xpath("//input[@id='FirstName']").type("Mehrab");
    cy.xpath("//input[@id='LastName']").type("Tester 08");

    cy.xpath("//select[@name='DateOfBirthDay']").select("31");
    cy.xpath("//select[@name='DateOfBirthMonth']").select("March");
    cy.xpath("//select[@name='DateOfBirthYear']").type("XYZ"); // Bug in Boundary

    cy.xpath("//input[@id='Email']").type("mehrabTest007@abc.com"); //Full BUG
    cy.xpath("//input[@id='Company']").type("Mehrab Test Company 007");
    cy.xpath("(//input[@id='Newsletter'])[1]").should("be.visible");
    cy.xpath("(//input[@id='Newsletter'])[1]")
      .uncheck()
      .should("not.be.checked");
    cy.xpath("//input[@id='Password']").type("mehrabTestPass007"); //boundary of 6
    cy.xpath("//input[@id='ConfirmPassword']").type("mehrabTestPass007");
    cy.xpath("//button[@id='register-button']").click();

    //Now login out
    cy.xpath("//button[@id='register-button']").click();

    //login in with the registered Credentials
    cy.xpath("//a[normalize-space()='Log in']").click();
    cy.xpath("//input[@id='Email']").type("mehrabTest007@abc.com");
    cy.xpath("//input[@id='Password']").type("mehrabTestPass007");
    cy.xpath("//button[normalize-space()='Log in']").click();
    cy.xpath("//h2[normalize-space()='Welcome to our store']").should(
      "contain",
      "Welcome to our store"
    );
  });

  it("Test_010_NegativeTesting_Year", () => {
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
    cy.xpath("//input[@id='gender-male']").should("not.be.checked");
    cy.xpath("//input[@id='gender-female']").check().should("be.checked");
    cy.xpath("//input[@id='FirstName']").type("Mehrab");
    cy.xpath("//input[@id='LastName']").type("Tester 08");

    cy.xpath("//select[@name='DateOfBirthDay']").select("31");
    cy.xpath("//select[@name='DateOfBirthMonth']").select("March");
    cy.xpath("//select[@name='DateOfBirthYear']").type("ABC"); // Bug in Boundary

    cy.xpath("//input[@id='Email']").type("mehrabTest007@abc.com"); //Full BUG
    cy.xpath("//input[@id='Company']").type("Mehrab Test Company 007");
    cy.xpath("(//input[@id='Newsletter'])[1]").should("be.visible");
    cy.xpath("(//input[@id='Newsletter'])[1]")
      .uncheck()
      .should("not.be.checked");
    cy.xpath("//input[@id='Password']").type("mehrabTestPass007"); //boundary of 6
    cy.xpath("//input[@id='ConfirmPassword']").type("mehrabTestPass007");
    cy.xpath("//button[@id='register-button']").click();

    //Now login out
    cy.xpath("//button[@id='register-button']").click();

    //login in with the registered Credentials
    cy.xpath("//a[normalize-space()='Log in']").click();
    cy.xpath("//input[@id='Email']").type("mehrabTest007@abc.com");
    cy.xpath("//input[@id='Password']").type("mehrabTestPass007");
    cy.xpath("//button[normalize-space()='Log in']").click();
    cy.xpath("//h2[normalize-space()='Welcome to our store']").should(
      "contain",
      "Welcome to our store"
    );
  });

  it("Test_011_NegativeTesting_MailId", () => {
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
    cy.xpath("//input[@id='gender-male']").should("not.be.checked");
    cy.xpath("//input[@id='gender-female']").check().should("be.checked");
    cy.xpath("//input[@id='FirstName']").type("Mehrab");
    cy.xpath("//input[@id='LastName']").type("Tester 11");

    cy.xpath("//select[@name='DateOfBirthDay']").select("31");
    cy.xpath("//select[@name='DateOfBirthMonth']").select("March");
    cy.xpath("//select[@name='DateOfBirthYear']").type("1995");

    cy.xpath("//input[@id='Email']").type("mehrabTest007@test01.com"); //Full BUG
    cy.xpath("//input[@id='Company']").type("Mehrab Test Company 011");
    cy.xpath("(//input[@id='Newsletter'])[1]").should("be.visible");
    cy.xpath("(//input[@id='Newsletter'])[1]")
      .uncheck()
      .should("not.be.checked");
    cy.xpath("//input[@id='Password']").type("mehrabTestPass011"); //boundary of 6
    cy.xpath("//input[@id='ConfirmPassword']").type("mehrabTestPass011");
    cy.xpath("//button[@id='register-button']").click();

    //Now login out
    cy.xpath("//button[@id='register-button']").click();

    //login in with the registered Credentials
    cy.xpath("//a[normalize-space()='Log in']").click();
    cy.xpath("//input[@id='Email']").type("mehrabTest007@test01.com");
    cy.xpath("//input[@id='Password']").type("mehrabTestPass011");
    cy.xpath("//button[normalize-space()='Log in']").click();
    cy.xpath("//h2[normalize-space()='Welcome to our store']").should(
      "contain",
      "Welcome to our store"
    );
  });

  it("Test_012_NegativeTesting_MailId", () => {
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
    cy.xpath("//input[@id='gender-male']").should("not.be.checked");
    cy.xpath("//input[@id='gender-female']").check().should("be.checked");
    cy.xpath("//input[@id='FirstName']").type("Mehrab");
    cy.xpath("//input[@id='LastName']").type("Tester 08");

    cy.xpath("//select[@name='DateOfBirthDay']").select("31");
    cy.xpath("//select[@name='DateOfBirthMonth']").select("March");
    cy.xpath("//select[@name='DateOfBirthYear']").type("ABC"); // Bug in Boundary

    cy.xpath("//input[@id='Email']").type("mehrabTest007gmail"); //Full BUG
    cy.xpath("//input[@id='Company']").type("Mehrab Test Company 007");
    cy.xpath("(//input[@id='Newsletter'])[1]").should("be.visible");
    cy.xpath("(//input[@id='Newsletter'])[1]")
      .uncheck()
      .should("not.be.checked");
    cy.xpath("//input[@id='Password']").type("mehrabTestPass007"); //boundary of 6
    cy.xpath("//input[@id='ConfirmPassword']").type("mehrabTestPass007");
    cy.xpath("//button[@id='register-button']").click();

    //Now login out
    cy.xpath("//button[@id='register-button']").click();

    //login in with the registered Credentials
    cy.xpath("//a[normalize-space()='Log in']").click();
    cy.xpath("//input[@id='Email']").type("mehrabTest007gmail");
    cy.xpath("//input[@id='Password']").type("mehrabTestPass007");
    cy.xpath("//button[normalize-space()='Log in']").click();
    cy.xpath("//h2[normalize-space()='Welcome to our store']").should(
      "contain",
      "Welcome to our store"
    );
  });

  it("Test_013_NegativeTesting_MailId", () => {
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
    cy.xpath("//input[@id='gender-male']").should("not.be.checked");
    cy.xpath("//input[@id='gender-female']").check().should("be.checked");
    cy.xpath("//input[@id='FirstName']").type("Mehrab");
    cy.xpath("//input[@id='LastName']").type("Tester 13");

    cy.xpath("//select[@name='DateOfBirthDay']").select("31");
    cy.xpath("//select[@name='DateOfBirthMonth']").select("March");
    cy.xpath("//select[@name='DateOfBirthYear']").type("2015");

    cy.xpath("//input[@id='Email']").type("mehrabTest007gmail"); //Full BUG
    cy.xpath("//input[@id='Company']").type("Mehrab Test Company 007");
    cy.xpath("(//input[@id='Newsletter'])[1]").should("be.visible");
    cy.xpath("(//input[@id='Newsletter'])[1]")
      .uncheck()
      .should("not.be.checked");
    cy.xpath("//input[@id='Password']").type("mehrabTestPass007"); //boundary of 6
    cy.xpath("//input[@id='ConfirmPassword']").type("mehrabTestPass007");
    cy.xpath("//button[@id='register-button']").click();

    //Now login out
    cy.xpath("//button[@id='register-button']").click();

    //login in with the registered Credentials
    cy.xpath("//a[normalize-space()='Log in']").click();
    cy.xpath("//input[@id='Email']").type("mehrabTest007gmail");
    cy.xpath("//input[@id='Password']").type("mehrabTestPass007");
    cy.xpath("//button[normalize-space()='Log in']").click();
    cy.xpath("//h2[normalize-space()='Welcome to our store']").should(
      "contain",
      "Welcome to our store"
    );
  });

  it("Test_014_NegativeTesting_MailId", () => {
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
    cy.xpath("//input[@id='gender-male']").should("not.be.checked");
    cy.xpath("//input[@id='gender-female']").check().should("be.checked");
    cy.xpath("//input[@id='FirstName']").type("Mehrab");
    cy.xpath("//input[@id='LastName']").type("Tester 14");

    cy.xpath("//select[@name='DateOfBirthDay']").select("31");
    cy.xpath("//select[@name='DateOfBirthMonth']").select("March");
    cy.xpath("//select[@name='DateOfBirthYear']").type("2015");

    cy.xpath("//input[@id='Email']").type("mehrabTest007gmail.com.com"); //Full BUG
    cy.xpath("//input[@id='Company']").type("Mehrab Test Company 007");
    cy.xpath("(//input[@id='Newsletter'])[1]").should("be.visible");
    cy.xpath("(//input[@id='Newsletter'])[1]")
      .uncheck()
      .should("not.be.checked");
    cy.xpath("//input[@id='Password']").type("mehrabTestPass007"); //boundary of 6
    cy.xpath("//input[@id='ConfirmPassword']").type("mehrabTestPass007");
    cy.xpath("//button[@id='register-button']").click();

    //Now login out
    cy.xpath("//button[@id='register-button']").click();

    //login in with the registered Credentials
    cy.xpath("//a[normalize-space()='Log in']").click();
    cy.xpath("//input[@id='Email']").type("mehrabTest007gmail.com.com"); //bug
    cy.xpath("//input[@id='Password']").type("mehrabTestPass007");
    cy.xpath("//button[normalize-space()='Log in']").click();
    cy.xpath("//h2[normalize-space()='Welcome to our store']").should(
      "contain",
      "Welcome to our store"
    );
  });

  it("Test_015_BoundaryTesting_Name", () => {
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
    cy.xpath("//input[@id='gender-male']").should("not.be.checked");
    cy.xpath("//input[@id='gender-female']").check().should("be.checked");
    cy.xpath("//input[@id='FirstName']").type(
      "MehrabMehrabMehrabMehrabMehrabMehrabMehrabMehrabMehrabMehrabMehrabMehrab"
    );
    cy.xpath("//input[@id='LastName']").type(
      "TMehrabMehrabMehrabMehrabMehrabMehrabMehrabMehrabMehrabMehrabMehrab"
    );

    cy.xpath("//select[@name='DateOfBirthDay']").select("31");
    cy.xpath("//select[@name='DateOfBirthMonth']").select("March");
    cy.xpath("//select[@name='DateOfBirthYear']").type("2015");

    cy.xpath("//input[@id='Email']").type("mehrabTest007@gmail.com.com"); //Full BUG
    cy.xpath("//input[@id='Company']").type("Mehrab Test Company 007");
    cy.xpath("(//input[@id='Newsletter'])[1]").should("be.visible");
    cy.xpath("(//input[@id='Newsletter'])[1]")
      .uncheck()
      .should("not.be.checked");
    cy.xpath("//input[@id='Password']").type("mehrabTestPass007"); //boundary of 6
    cy.xpath("//input[@id='ConfirmPassword']").type("mehrabTestPass007");
    cy.xpath("//button[@id='register-button']").click();

    //Now login out
    cy.xpath("//button[@id='register-button']").click();

    //login in with the registered Credentials
    cy.xpath("//a[normalize-space()='Log in']").click();
    cy.xpath("//input[@id='Email']").type("mehrabTest007gmail.com.com"); //bug
    cy.xpath("//input[@id='Password']").type("mehrabTestPass007");
    cy.xpath("//button[normalize-space()='Log in']").click();
    cy.xpath("//h2[normalize-space()='Welcome to our store']").should(
      "contain",
      "Welcome to our store"
    );
  });

  it("Test_016_BoundaryTesting_Date", () => {
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
    cy.xpath("//input[@id='gender-male']").should("not.be.checked");
    cy.xpath("//input[@id='gender-female']").check().should("be.checked");
    cy.xpath("//input[@id='FirstName']").type("Mehrab");
    cy.xpath("//input[@id='LastName']").type("Tester 16");

    cy.xpath("//select[@name='DateOfBirthDay']").select("31");
    cy.xpath("//select[@name='DateOfBirthMonth']").select("February");
    cy.xpath("//select[@name='DateOfBirthYear']").type("2015");

    cy.xpath("//input[@id='Email']").type("mehrabTest007@gmail.com.com"); //Full BUG
    cy.xpath("//input[@id='Company']").type("Mehrab Test Company 007");
    cy.xpath("(//input[@id='Newsletter'])[1]").should("be.visible");
    cy.xpath("(//input[@id='Newsletter'])[1]")
      .uncheck()
      .should("not.be.checked");
    cy.xpath("//input[@id='Password']").type("mehrabTestPass007"); //boundary of 6
    cy.xpath("//input[@id='ConfirmPassword']").type("mehrabTestPass007");
    cy.xpath("//button[@id='register-button']").click();

    //Now login out
    cy.xpath("//button[@id='register-button']").click();

    //login in with the registered Credentials
    cy.xpath("//a[normalize-space()='Log in']").click();
    cy.xpath("//input[@id='Email']").type("mehrabTest007gmail.com.com"); //bug
    cy.xpath("//input[@id='Password']").type("mehrabTestPass007");
    cy.xpath("//button[normalize-space()='Log in']").click();
    cy.xpath("//h2[normalize-space()='Welcome to our store']").should(
      "contain",
      "Welcome to our store"
    );
  });

  it("Test_017_BoundaryTesting_Month", () => {
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
    cy.xpath("//input[@id='gender-male']").should("not.be.checked");
    cy.xpath("//input[@id='gender-female']").check().should("be.checked");
    cy.xpath("//input[@id='FirstName']").type("Mehrab");
    cy.xpath("//input[@id='LastName']").type("Tester 17");

    cy.xpath("//select[@name='DateOfBirthDay']").select("31");
    cy.xpath("//select[@name='DateOfBirthMonth']").select("February");
    cy.xpath("//select[@name='DateOfBirthYear']").type("2015");

    cy.xpath("//input[@id='Email']").type("mehrabTest007@gmail.com.com"); //Full BUG
    cy.xpath("//input[@id='Company']").type("Mehrab Test Company 007");
    cy.xpath("(//input[@id='Newsletter'])[1]").should("be.visible");
    cy.xpath("(//input[@id='Newsletter'])[1]")
      .uncheck()
      .should("not.be.checked");
    cy.xpath("//input[@id='Password']").type("mehrabTestPass007"); //boundary of 6
    cy.xpath("//input[@id='ConfirmPassword']").type("mehrabTestPass007");
    cy.xpath("//button[@id='register-button']").click();

    //Now login out
    cy.xpath("//button[@id='register-button']").click();

    //login in with the registered Credentials
    cy.xpath("//a[normalize-space()='Log in']").click();
    cy.xpath("//input[@id='Email']").type("mehrabTest007gmail.com.com"); //bug
    cy.xpath("//input[@id='Password']").type("mehrabTestPass007");
    cy.xpath("//button[normalize-space()='Log in']").click();
    cy.xpath("//h2[normalize-space()='Welcome to our store']").should(
      "contain",
      "Welcome to our store"
    );
  });

  it("Test_018_BoundaryTesting_YEAR", () => {
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
    cy.xpath("//input[@id='gender-male']").should("not.be.checked");
    cy.xpath("//input[@id='gender-female']").check().should("be.checked");
    cy.xpath("//input[@id='FirstName']").type("Mehrab");
    cy.xpath("//input[@id='LastName']").type("Tester 17");

    cy.xpath("//select[@name='DateOfBirthDay']").select("15");
    cy.xpath("//select[@name='DateOfBirthMonth']").select("April");
    cy.xpath("//select[@name='DateOfBirthYear']").type("2023");

    cy.xpath("//input[@id='Email']").type("mehrabTest007@gmail.com.com"); //Full BUG
    cy.xpath("//input[@id='Company']").type("Mehrab Test Company 007");
    cy.xpath("(//input[@id='Newsletter'])[1]").should("be.visible");
    cy.xpath("(//input[@id='Newsletter'])[1]")
      .uncheck()
      .should("not.be.checked");
    cy.xpath("//input[@id='Password']").type("mehrabTestPass007"); //boundary of 6
    cy.xpath("//input[@id='ConfirmPassword']").type("mehrabTestPass007");
    cy.xpath("//button[@id='register-button']").click();

    //Now login out
    cy.xpath("//button[@id='register-button']").click();

    //login in with the registered Credentials
    cy.xpath("//a[normalize-space()='Log in']").click();
    cy.xpath("//input[@id='Email']").type("mehrabTest007gmail.com.com"); //bug
    cy.xpath("//input[@id='Password']").type("mehrabTestPass007");
    cy.xpath("//button[normalize-space()='Log in']").click();
    cy.xpath("//h2[normalize-space()='Welcome to our store']").should(
      "contain",
      "Welcome to our store"
    );
  });

  it("Test_019_BoundaryTesting_Password", () => {
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
    cy.xpath("//input[@id='gender-male']").should("not.be.checked");
    cy.xpath("//input[@id='gender-female']").check().should("be.checked");
    cy.xpath("//input[@id='FirstName']").type("Mehrab");
    cy.xpath("//input[@id='LastName']").type("Tester 17");

    cy.xpath("//select[@name='DateOfBirthDay']").select("15");
    cy.xpath("//select[@name='DateOfBirthMonth']").select("April");
    cy.xpath("//select[@name='DateOfBirthYear']").type("2023");

    cy.xpath("//input[@id='Email']").type("mehrabTest007@gmail.com"); //Full BUG
    cy.xpath("//input[@id='Company']").type("Mehrab Test Company 007");
    cy.xpath("(//input[@id='Newsletter'])[1]").should("be.visible");
    cy.xpath("(//input[@id='Newsletter'])[1]")
      .uncheck()
      .should("not.be.checked");
    cy.xpath("//input[@id='Password']").type("12345"); //boundary of 6
    cy.xpath("//input[@id='ConfirmPassword']").type("12345");
    cy.xpath("//button[@id='register-button']").click();

    //Now login out
    cy.xpath("//button[@id='register-button']").click();

    //login in with the registered Credentials
    cy.xpath("//a[normalize-space()='Log in']").click();
    cy.xpath("//input[@id='Email']").type("mehrabTest007gmail.com.com"); //bug
    cy.xpath("//input[@id='Password']").type("mehrabTestPass007");
    cy.xpath("//button[normalize-space()='Log in']").click();
    cy.xpath("//h2[normalize-space()='Welcome to our store']").should(
      "contain",
      "Welcome to our store"
    );
  });

  it("Test_020_BoundaryTesting_CompanyName", () => {
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
    cy.xpath("//input[@id='gender-male']").should("not.be.checked");
    cy.xpath("//input[@id='gender-female']").check().should("be.checked");
    cy.xpath("//input[@id='FirstName']").type("Mehrab");
    cy.xpath("//input[@id='LastName']").type("Tester 17");

    cy.xpath("//select[@name='DateOfBirthDay']").select("15");
    cy.xpath("//select[@name='DateOfBirthMonth']").select("April");
    cy.xpath("//select[@name='DateOfBirthYear']").type("2023");

    cy.xpath("//input[@id='Email']").type("mehrabTest007@gmail.com.com");
    cy.xpath("//input[@id='Company']").type(
      "Mehrab Test Company 007 Mehrab Test Company 007Mehrab Test Company 007Mehrab Test Company 007Mehrab Test Company 007Mehrab Test Company 007Mehrab Test Company 007"
    ); // No limit of Characters
    cy.xpath("(//input[@id='Newsletter'])[1]").should("be.visible");
    cy.xpath("(//input[@id='Newsletter'])[1]")
      .uncheck()
      .should("not.be.checked");
    cy.xpath("//input[@id='Password']").type("mehrabTestPass007"); //boundary of 6
    cy.xpath("//input[@id='ConfirmPassword']").type("mehrabTestPass007");
    cy.xpath("//button[@id='register-button']").click();

    //Now login out
    cy.xpath("//button[@id='register-button']").click();

    //login in with the registered Credentials
    cy.xpath("//a[normalize-space()='Log in']").click();
    cy.xpath("//input[@id='Email']").type("mehrabTest007gmail.com.com"); //bug
    cy.xpath("//input[@id='Password']").type("mehrabTestPass007");
    cy.xpath("//button[normalize-space()='Log in']").click();
    cy.xpath("//h2[normalize-space()='Welcome to our store']").should(
      "contain",
      "Welcome to our store"
    );
  });
});
