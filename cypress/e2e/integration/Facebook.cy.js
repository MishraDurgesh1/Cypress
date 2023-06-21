describe('Login facebook',()=>{
it('user login facebook with valid credentials',()=>{
cy.visit("https://www.facebook.com/")
cy.login("durgesh@gmail.com","Durgeshsonam130")
})
})

describe('Google search',()=>{
it('Search java',()=>{
cy.visit("https://www.google.com/")
cy.Search('java{enter}')
cy.titleAssert('java - Google Search')
})
})