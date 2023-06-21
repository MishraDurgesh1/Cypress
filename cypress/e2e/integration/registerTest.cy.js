import registerPage from '../../objectRepo/registerPage.js'

beforeEach(()=>{
cy.visit('https://www.automationexercise.com/');
});

describe('POM Implementation in Register Page',()=>{
it('User sign Up',()=>{
registerPage.clickOnSignUpLink();
registerPage.enterName('durgesh');
registerPage.enterSignUpEmail('durgeshmishra13@gmail.com');
registerPage.clickOnSignUpBtn();
registerPage.fillTheForm('durgesh','Hello123**','Durgesh','Mishra','Ram Traders','Mall road','India','Uttar Pradesh','kanpur','208001','790572920')
});
});
