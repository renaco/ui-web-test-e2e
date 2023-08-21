describe("test_name", function () {
  it("passes", () => {
    cy.viewport(1821, 865);

    cy.visit("http://localhost:3200/");

    cy.visit(
      "http://localhost:3200/edit-patient?clinicHistoryNumber=1305590&id=1469855"
    );

    cy.get(
      ".sc-kpDqfm > .vds-select-normal > .vds-select > .vds-select--input > #maritalStatus"
    ).click();

  });
});
