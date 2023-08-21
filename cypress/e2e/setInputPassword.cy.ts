describe("template spec", () => {
  it("passes", () => {
    cy.viewport(1366, 617);

    cy.visit(
      "http://localhost:6006/?path=/story/ui-input--default&args=label:Password;inputType:password"
    );

    cy.visit(
      "http://localhost:6006/?path=/story/ui-input--default&args=label:Password;inputType:password"
    );

    cy.get(
      ".docblock-argstable-body > tr > td > .css-k008qs > #control-helper"
    ).click();

    cy.get(
      ".docblock-argstable-body > tr > td > .css-k008qs > #control-helper"
    ).click();

    cy.get(
      ".docblock-argstable-body > tr > td > .css-k008qs > #control-helper"
    ).click();

    cy.get(
      ".docblock-argstable-body > tr > td > .css-k008qs > #control-placeholder"
    ).click();
  });
});
