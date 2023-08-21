describe("test_name", function () {
  it("what_it_does", function () {
    cy.viewport(1328, 723);

    cy.visit(Cypress.env('url'));

    cy.login(Cypress.env('user'), Cypress.env('password'));

    cy.wait(1000);
    cy.get('#names').type('Erika');
    cy.wait(3000);
    cy.get('#name').click().trigger('keydown', { keyCode: 13 });
    
    cy.wait(3000);
    cy.get('thead > tr > :nth-child(2)').click();
  });
});
