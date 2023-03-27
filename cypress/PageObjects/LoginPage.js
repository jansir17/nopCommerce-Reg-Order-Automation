class Login {
  setUserName(username) {
    cy.xpath("//input[@placeholder='Username']").type(username);
  }
  setPassword(password) {
    cy.xpath("//input[@placeholder='Password']").type(password);
  }

  clickSubmit() {
    cy.xpath("//button[normalize-space()='Login']").click();
  }

  verifyLogin() {
    cy.xpath("//h6[normalize-space()='Dashboard']").should(
      "have.text",
      "Dashboard"
    );
  }
}

export default Login;
