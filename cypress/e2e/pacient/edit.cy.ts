describe("test_name", function () {
  it("what_it_does", function () {
    cy.viewport(1821, 865);

    cy.visit(Cypress.env('url'));
    cy.login(Cypress.env('user'), Cypress.env('password'));
    
    cy.wait(2000);
    cy.visit('http://localhost:3200/PE/patients/1655822:1471691')

    cy.get('.sc-eeDRCY').click()

    cy.wait(2000);

    cy.get('[data-testid="submit-button"]').click()

  });
});
