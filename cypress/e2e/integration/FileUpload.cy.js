import 'cypress-file-upload';

describe('Implementation of File Upload', () => {
  beforeEach(() => {
    cy.visit('http://the-internet.herokuapp.com/upload');
  });

  it('FileUpload', () => {
    cy.fixture('Test Plan.docx').then((fileContent) => {
      cy.get('#file-upload').attachFile(
        { fileContent, fileName: 'Test Plan.docx', mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' },
        { uploadType: 'input' }
      );
      cy.get('#file-submit').click()
      cy.get('#uploaded-files').should('have.class', 'panel text-center');
    });
  });
});