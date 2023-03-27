class Login2 {
  txtUserName = "//input[@placeholder='Username']";
  txtPassword = "//input[@placeholder='Password']";
  txtSubmitButton = "//button[normalize-space()='Login']";
  labelMessag = "//h6[normalize-space()='Dashboard']";

  setUserName(username) {
    cy.xpath(this.txtUserName).type(username);
  }
  setPassword(password) {
    cy.xpath(this.txtPassword).type(password);
  }

  clickSubmit() {
    cy.xpath(this.txtSubmitButton).click();
  }

  verifyLogin() {
    cy.xpath(this.labelMessag).should("have.text", "Dashboard");
  }
}

export default Login2;
