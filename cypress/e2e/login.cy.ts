describe("template spec", () => {
  it("login", () => {
    cy.viewport(1821, 865);

    cy.visit(Cypress.env("url"));

    cy.login(Cypress.env("user"), Cypress.env("password"));

    cy.get(".vds-button").click();
  });
});

