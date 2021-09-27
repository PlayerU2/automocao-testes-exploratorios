/// <reference types="cypress" />

context('Processo de Login para fluxo dos testes', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.preencherCep('01034-000')
        cy.get('#truste-consent-button').click()
    });
    
    it('Processo de Login para fluxo dos testes', () => {
        cy.digitarCpf('255.114.958-40')
        cy.digitarSenha('bigbig21')
    });
});