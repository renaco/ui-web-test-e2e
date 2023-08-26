describe("test_name", function () {
  it("what_it_does", function () {
    cy.viewport(1328, 723);

    cy.visit(Cypress.env("url"));

    cy.login(Cypress.env("user"), Cypress.env("password"));

    cy.wait(1000);
    cy.get(".input-search-names > .sc-kbhJrz").type("Carlos");
    cy.get(".input-search-names > .sc-kbhJrz").type("{enter}");

    cy.get(":nth-child(3) > :nth-child(1) > .sc-uVWWZ > strong").click();

    cy.get(".dJvdkL > .vds-button").click();
    cy.get('[data-testid="select-select"]').click();
    cy.get('[data-testid="select-select-option-2"]').click();
    // cy.get("#name").click().trigger("keydown", { keyCode: 13 });

    // cy.wait(3000);
    // cy.get("thead > tr > :nth-child(2)").click();
  });
});
