class registerAutomationPage{

//Web Elements:-
elements={
signUpLink:()=>cy.contains(' Signup / Login'),
name:()=>cy.get('[data-qa="signup-name"]'),
signupEmail:()=>cy.get('[data-qa="signup-email"]'),
signUpBtn:()=>cy.get('[data-qa="signup-button"]'),
titleOfName:()=>cy.contains('Mr.'),
fillName:()=>cy.get('[data-qa="name"]'),
fillPassword:()=>cy.get('[data-qa="password"]'),
selectDate: () => cy.get('#days'),
selectMonth:()=>cy.get('#months'),
selectYear:()=>cy.get('#years'),
clickRadioNewsSelter:()=>cy.get('#newsletter'),
clickRadioOffer:()=>cy.get('#optin'),
firstName:()=>cy.get('[data-qa="first_name"]'),
lastName:()=>cy.get('[data-qa="last_name"]'),
companyName:()=>cy.get('[data-qa="company"]'),
address:()=>cy.get('[data-qa="address"]'),
selectCountry:()=>cy.get('#country'),
fillState:()=>cy.get('[data-qa="state"]'),
fillCity:()=>cy.get('[data-qa="city"]'),
fillZip:()=>cy.get('[data-qa="zipcode"]'),
fillMobile:()=>cy.get('[data-qa="mobile_number"]'),
createAccount:()=>cy.get('[data-qa="create-account"]'),
continueBtn:()=>cy.get('[data-qa="continue-button"]')
}
//Common methods:-
fillTheForm(fill_name,fill_password,first_name,last_name,company_name,address,country,state,city,zip_code,mobile_no){
this.elements.titleOfName().click();
this.elements.fillName().type(fill_name);
this.elements.fillPassword().type(fill_password);
this.selectDOB();
this.elements.clickRadioNewsSelter().click();
this.elements.clickRadioOffer().click();
this.elements.firstName().type(first_name);
this.elements.lastName().type(last_name);
this.elements.companyName().type(company_name);
this.elements.address().type(address);
this.selectCOUNTRY(country);
this.elements.fillState().type(state);
this.elements.fillCity().type(city);
this.elements.fillZip().type(zip_code);
this.elements.fillMobile().type(mobile_no);
this.elements.createAccount().click();
this.clickOnContinue();
}
enterName(name){
this.elements.name().type(name);
}
enterSignUpEmail(email){
this.elements.signupEmail().type(email);
}
clickOnSignUpLink(){
this.elements.signUpLink().click();
}
clickOnSignUpBtn(){
this.elements.signUpBtn().click();
}

selectDOB(){
this.elements.selectDate().select('13').should('have.value','13');
this.elements.selectMonth().select('June').should('have.value','6');
this.elements.selectYear().select('1988').should('have.value','1988');
}
selectCOUNTRY(country){
this.elements.selectCountry().select(country).should('have.value',country);
}
clickOnContinue(){
this.continueBtn().click();
}
}
module.exports=new registerAutomationPage();