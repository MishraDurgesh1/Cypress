describe("Implementation of Alert", () => {
  beforeEach(() => {
    cy.visit('https://nxtgenaiacademy.com/alertandpopup/');
  });

  it('Pop Up', () => {
    cy.on('window:alert', () => {
    });
    cy.contains('Confirm Alert Box').click();
  });
});
