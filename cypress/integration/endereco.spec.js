/// <reference types="cypress" />

context('Automoção pata testes exploratórios no big', () => {
    
    beforeEach(() => {
        cy.visit('/')
        cy.preencherCep('01034-000')
        cy.get('#truste-consent-button').click()
        cy.digitarCpf('255.114.958-40')
        cy.digitarSenha('bigbig21')
    });

    it('Alterar cadastro de endereço', () => {
        cy.get('.vtex-islogged-toaccount').click()
        cy.get(':nth-child(2) > .vtex-account_menu-link').click()
        cy.get('.justify-end > .vtex-button > .vtex-button__label').click()
        cy.get('.vtex-address-form__postalCode > .vtex-input > .vtex-input-prefix__group > .vtex-address-form-4-x-input').clear().type('06020-010')
        cy.get('.vtex-address-form__number > .vtex-input > .vtex-input-prefix__group > .vtex-address-form-4-x-input').type('105')
        cy.get('.ph7 > .bg-action-primary > .vtex-button__label').click()
    });
});