describe("test_name", function () {
  it("what_it_does", function () {
    cy.viewport(1440, 900);

    cy.visit(Cypress.env("url"));

    cy.login(Cypress.env("user"), Cypress.env("password"));

    cy.get(
      ".sc-kFuwaP > div > .input-search-names > .sc-faCEWe > .sc-gtIISA"
    ).type("erika");

    cy.get(
      ".sc-kFuwaP > div > .input-search-names > .sc-faCEWe > .sc-gtIISA"
    ).type("{enter}", { release: false });

    cy.get("table > tbody > tr > .sc-bOSxlg > .sc-fYzRkI").click();

    cy.get("div > .sc-kgKVFY > div > ul > .sc-dKfzgJ:nth-child(2)").click();

    cy.get("div > .sc-gHbYXZ:nth-child(1) > div > div > .sc-kiLEMZ").click();

    cy.wait(1000);

    cy.get(".sc-gHbYXZ > div > div > .sc-kiLEMZ > #specialty").type("oto");

    cy.get(".suggestions-container > ul > li > .item > .sc-cPlDXj").click();

    cy.get(
      "div > .sc-jsMahE > .sc-kFuwaP > .sc-dsInJy > .vds-button:nth-child(1)"
    ).click();

    cy.get(
      ".sc-gUrTyy:nth-child(2) > .sc-jsMahE > .sc-kFuwaP > div > .sc-dQelHR > .sc-bCDidY:nth-child(2)"
    ).click();

    cy.get(
      ".sc-kFuwaP > .sc-dlUsjx > div > .sc-cRZddA:nth-child(2) > .chip-label"
    ).click();

    cy.get(".sc-jsMahE > .sc-kFuwaP > div > .sc-dQelHR > .selected").click();

    cy.get(
      ".sc-gUrTyy > .sc-jsMahE > .sc-kFuwaP > div > .vds-button-primary"
    ).click();

    cy.get("div > div > div > .sc-kiLEMZ > #funder-search").type("map");

    cy.get(
      ".iegzRt > .suggestions-container > ul > li:nth-child(1) > .item"
    ).click();

    cy.get("div > div > div > .sc-kiLEMZ > #prestacion-search").click();

    cy.get(
      ".iegzRt > .suggestions-container > ul > li:nth-child(1) > .item > .sc-cPlDXj"
    ).click();

    cy.get(".sc-eMshUc > div > div > .sc-jOQpHc > .vds-button-primary").click();
  });
});

