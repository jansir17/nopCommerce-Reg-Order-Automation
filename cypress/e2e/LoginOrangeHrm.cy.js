import Login2 from "../PageObjects/LoginPage2";

describe("POM SUIT", () => {
  it("Login OrangeHrm", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.fixture("OrangeHRM").then((data) => {
      const LoginObj = new Login2();
      LoginObj.setUserName(data.username);
      LoginObj.setPassword(data.password);
      LoginObj.clickSubmit();
      LoginObj.verifyLogin();
    });
  });
});
