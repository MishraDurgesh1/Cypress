class loginAutomationPage {
  elements = {
    emailAddress: () => cy.get('[data-qa="login-email"]'),
    password: () => cy.get('[data-qa="login-password"]'),
    loginBtn: () => cy.get('[data-qa="login-button"]')
  };

  enterEmail(email) {
    this.elements.emailAddress().type(email);
  }

  enterPassword(password) {
    this.elements.password().type(password);
  }

  clickOnLoginBtn() {
    this.elements.loginBtn().click();
  }
}

module.exports = new loginAutomationPage();
