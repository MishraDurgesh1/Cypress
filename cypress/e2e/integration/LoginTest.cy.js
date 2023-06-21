import loginPage from '../../objectRepo/loginPage.js';

describe('POM Implementation',()=>{

beforeEach(()=>{
cy.visit('https://www.automationexercise.com/login');
});

it('Test Login page',()=>{
loginPage.enterEmail('durgesh@gmail.com');
loginPage.enterPassword('11234567');
loginPage.clickOnLoginBtn();
})
});
it('Test Sign Up',()=>{
registerPage.enterName("Durgesh");
registerPage.enterSignUpEmail("durgeshmishra13@gmail.com");
registerPage.clickOnSignUpBtn();
})