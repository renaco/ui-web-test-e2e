import { randomNumber, randomDigits } from './../utils.ts'

const delayToChoose = 300;

describe("template spec", () => {
  it("login", () => {
    cy.viewport(1821, 865);

    cy.visit(Cypress.env('url'));

    cy.login(Cypress.env('user'), Cypress.env('password'));

    cy.get('[style="display: block;"] > .vds-button').click();

    cy.get('[data-testid="firstSurnameForm"]').type('Melendez');
    cy.get('[data-testid="secondSurnameForm"]').type('Lopez');
    cy.get('[data-testid="nameForm"]').type('Carlos');

    cy.get('[style="display: contents;"] > #birthDateForm').type('20/05/1950');

    cy.get('[data-testid="genderNameForm-select"]').click();
    cy.get('[data-testid="genderNameForm-option-3"]').click();

    cy.get('[data-testid="documentTypeForm-select"]').click();
    cy.get('[data-testid="documentTypeForm-option-3"]').click();
    cy.get('[data-testid="documentNumberForm"]').type(`${randomDigits()}`);

    cy.get('[data-testid="maritalStatusNameForm-select"]').click();
    cy.get('[data-testid="maritalStatusNameForm-option-4"]').click();

    cy.get('[data-testid="classificationNameForm-select"]').click();
    cy.get('[data-testid="classificationNameForm-option-6"]').click();

    cy.get('[data-testid="phoneNumberForm"]').type(`9${randomDigits()}`);
    cy.get('[data-testid="phoneNumber2Form"]').type('996666456');

    cy.get('#departmentNameForm').click();
    cy.wait(delayToChoose);
    cy.get(':nth-child(3) > .item').click();
    
    cy.get('#provinceNameForm').click();
    cy.wait(delayToChoose);
    cy.get(':nth-child(4) > .item').click();
    
    cy.get('#districtNameForm').click();
    cy.wait(delayToChoose);
    cy.get(':nth-child(5) > .item').click();

    cy.get('[data-testid="addressForm"]').type(`Av. los desamparados de la calle ${randomNumber()}`);
    cy.get('[data-testid="emailForm"]').type(`${randomNumber()}.${randomDigits()}@whatever.com`);

    cy.get('.vds-button').click({ force: true });

    cy.get('.vds-modal').should('be.visible');
  })
})

