/// <reference types="cypress" />

context('Automoção pata testes exploratórios no big', () => {
    
    beforeEach(() => {
        cy.visit('/')
        cy.preencherCep('01034-000')
        cy.get('#truste-consent-button').click()
    });



    it('Deve realizar o teste exploratório no banner 1', () => {
        cy.selecionarBanner(0)
        cy.adicionarProdutos(5)
        cy.entrarEmail('testes_qa_big@mailinator.com')
        cy.get('.edit-address-block-button').click()

    });

    it('Deve realizar o teste exploratório no banner 2', () => {
        cy.selecionarBanner(1)
        cy.adicionarProdutos(25)
        cy.entrarEmail('testes_qa_big@mailinator.com')
        cy.get('.edit-address-block-button').click()
    });

    it('Deve realizar o teste exploratório no banner 3', () => {
        cy.selecionarBanner(2)
        cy.adicionarProdutos(25)
        cy.entrarEmail('testes_qa_big@mailinator.com')
        cy.get('.edit-address-block-button').click()
    });

    it('Deve realizar o teste exploratório no banner 4', () => {
        cy.selecionarBanner(3)
        cy.adicionarProdutos(25)
        cy.entrarEmail('testes_qa_big@mailinator.com')
        cy.get('.edit-address-block-button').click()
    });

    it('Deve realizar o teste exploratório no banner 5', () => {
        cy.selecionarBanner(4)
        cy.adicionarProdutos(25)
        cy.entrarEmail('testes_qa_big@mailinator.com')
        cy.get('.edit-address-block-button').click()
    });

    it('Deve realizar o teste exploratório no banner 6', () => {
        cy.selecionarBanner(5)
        cy.adicionarProdutos(25)
        cy.entrarEmail('testes_qa_big@mailinator.com')
        cy.get('.edit-address-block-button').click()
    });

    it('Deve realizar o teste exploratório no banner 7', () => {
        cy.selecionarBanner(6)
        cy.adicionarProdutos(25)
        cy.entrarEmail('testes_qa_big@mailinator.com')
        cy.get('.edit-address-block-button').click()
    });

    it('Deve realizar o teste exploratório no banner 8', () => {
        cy.selecionarBanner(7)
        cy.adicionarProdutos(25)
        cy.entrarEmail('testes_qa_big@mailinator.com')
        cy.get('.edit-address-block-button').click()
    });

    it('Deve realizar o teste exploratório no banner 9', () => {
        cy.selecionarBanner(8)
        cy.adicionarProdutos(25)
        cy.entrarEmail('testes_qa_big@mailinator.com')
        cy.get('.edit-address-block-button').click()
    });

    it('Deve realizar o teste exploratório no banner 10', () => {
        cy.selecionarBanner(9)
        cy.adicionarProdutos(25)
        cy.entrarEmail('testes_qa_big@mailinator.com')
        cy.get('.edit-address-block-button').click()
    });

    it('Deve realizar o teste exploratório no banner 11', () => {
        cy.selecionarBanner(10)
        cy.adicionarProdutos(25)
        cy.entrarEmail('testes_qa_big@mailinator.com')
        cy.get('.edit-address-block-button').click()
    });

    it('Deve realizar o teste exploratório no banner 12', () => {
        cy.selecionarBanner(11)
        cy.adicionarProdutos(25)
        cy.entrarEmail('testes_qa_big@mailinator.com')
        cy.get('.edit-address-block-button').click()
    });

    it('Deve realizar o teste exploratório no banner 13', () => {
        cy.selecionarBanner(12)
        cy.adicionarProdutos(25)
        cy.entrarEmail('testes_qa_big@mailinator.com')
        cy.get('.edit-address-block-button').click()
    });

    it('Deve realizar o teste exploratório no banner 14', () => {
        cy.selecionarBanner(13)
        cy.adicionarProdutos(25)
        cy.entrarEmail('testes_qa_big@mailinator.com')
        cy.get('.edit-address-block-button').click()
    });
});