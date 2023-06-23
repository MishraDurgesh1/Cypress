describe("Implementation of Shadow Elements",()=>{
beforeEach(()=>{
cy.visit('https://selectorshub.com/iframe-in-shadow-dom/');
});

it('Shadow Practice',()=>{
cy.get('#userName').shadow().find('#kils').type('Durgesh');
cy.get('#userName').shadow().find('#app2').shadow().find('#pizza').type('Mishraji');
});
});