/// <reference types="cypress" />

context('Processo de Login para fluxo dos testes', () => {

    beforeEach(() => {
        cy.visit('login-partner')
    });
    
    it('Processo de Login para fluxo dos testes', () => {

        cy.get('.bighiper-login-0-x-inputContainer > .vtex-input > .vtex-input-prefix__group > .vtex-styleguide-9-x-input').type('255.114.958-40')
        cy.get('.bighiper-login-0-x-buttonContainer > .vtex-button').click()
        cy.get(':nth-child(3) > .MuiButtonBase-root > .MuiIconButton-label > .jss8').click()
        cy.get('.bighiper-login-0-x-buttonContainer > .vtex-button').click()
        cy.get('.bighiper-login-0-x-inputContainer > .vtex-input > .vtex-input-prefix__group > .vtex-styleguide-9-x-input').type('bigbig21')
        cy.get('.bighiper-login-0-x-buttonContainer > .vtex-button').click()
    
    });
});