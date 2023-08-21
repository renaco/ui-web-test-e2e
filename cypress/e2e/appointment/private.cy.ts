describe('test_name', function () {

  it('what_it_does', function () {

    cy.viewport(1821, 865);

    cy.visit('http://localhost:3200/pe/login');

    cy.login(Cypress.env('user'), Cypress.env('password'));

    cy.wait(2000);

    cy.visit('http://localhost:3200/pe/patients/1655896:1471765')

    cy.get('div > .sc-dSIIpw > .sc-dhKdcB > .sc-kpDqfm > .vds-button').click()

    cy.get('.sc-bpUBKd > .vds-select-normal > .vds-select > .vds-select--input > #select').click()

    cy.get('.vds-select > .vds-select-search-datalist > .vds-select-search-datalist-group > .vds-select-search-datalist-item:nth-child(1) > .undefined').click()

    cy.get('.sc-gdyeKB > .sc-dhKdcB > .sc-kpDqfm > .sc-iHmpnF > .vds-button:nth-child(1)').click()

    cy.wait(2000);
    
    cy.get(':nth-child(2) > :nth-child(4) > .sc-kpDqfm > [style="margin-top: 16px;"] > .sc-fXSgeo > :nth-child(1)').click()

    cy.get('.sc-cfxfcM > .sc-dhKdcB > .sc-kpDqfm > div > .vds-button:nth-child(1)').click()

    cy.get('.sc-fvtFIe > .sc-bbSZdi > .sc-fBWQRz > .sc-uVWWZ > #funder-search').click()

    cy.get('.sc-hCPjZK > .suggestions-container > ul > li:nth-child(2) > .item').click()

    cy.get('.sc-fvtFIe > .sc-bbSZdi > .sc-fBWQRz > .sc-uVWWZ > #provision-search').click()

    cy.get('.sc-hCPjZK > .suggestions-container > ul > li:nth-child(4) > .item').click()

    cy.get('div > div > .sc-fvtFIe > .sc-brPLxw > .vds-button-primary').click()

    cy.get('.sc-dhKdcB:nth-child(4) > .sc-kpDqfm > .vds-select-normal > .vds-select > .vds-select--input > #select').click()

    cy.get('.sc-dhKdcB:nth-child(4) > .sc-kpDqfm > .vds-select-normal > .vds-select > .vds-select-search-datalist > .vds-select-search-datalist-group > .vds-select-search-datalist-item:nth-child(1)').click()

    cy.get('.sc-jMakVo > .sc-dhKdcB > .sc-kpDqfm > .sc-brPLxw > .vds-button:nth-child(1)').click()

    cy.get('.vds-modal > .vds-modal-container--custom > .sc-fxwrCY > div > .vds-button').click()

  })

})
