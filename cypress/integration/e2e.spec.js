/// <reference types="cypress" />

context('Automoção pata testes exploratórios no big', () => {
    
    beforeEach(() => {
        cy.visit('/')
        cy.preencherCep('01034-000')
        cy.get('#truste-consent-button').click()
        cy.digitarCpf('255.114.958-40')
        cy.digitarSenha('bigbig21')
    });



    it('Deve realizar o teste exploratório no banner 1', () => {
        cy.selecionarBanner(0)
        cy.adicionarProdutos(3)
        cy.get('.edit-address-block-button').click()
        cy.get('#scheduled-delivery-choose-Normal').click()
        cy.get('[class="react-datepicker__day--selected"]').click()
    });

    it('Deve realizar o teste exploratório no banner 2', () => {
        cy.selecionarBanner(1)
        cy.adicionarProdutos(25)
        cy.get('.edit-address-block-button').click()
    });

    it('Deve realizar o teste exploratório no banner 3', () => {
        cy.selecionarBanner(2)
        cy.adicionarProdutos(25)
        cy.get('.edit-address-block-button').click()
        cy.get('#ship-postalCode').clear().type('06020-010')
        cy.get('#ship-number').type('5040', { force: true })
        cy.get('#ship-complement').type('Apartamento', { force: true })
        cy.get('#scheduled-delivery-choose-Normal').click({ force: true })
        cy.get('.react-datepicker__day--keyboard-selected').click()
    });

    it('Deve realizar o teste exploratório no banner 3 e validando calendário', () => {
        cy.selecionarBanner(2)
        cy.adicionarProdutos(25)
        cy.get('.edit-address-block-button').click()
        cy.get('#scheduled-delivery-choose-Normal').click({ force: true })
        cy.get('.react-datepicker__day--keyboard-selected').click()
        cy.get('#scheduled-delivery-Normal')
        .should('contain', 'Das 16:00 às 18:00')
    });

    it('Deve realizar o teste exploratório no banner 4', () => {
        cy.selecionarBanner(3)
        cy.adicionarProdutos(25)
        cy.get('.edit-address-block-button').click()
    });

    it('Deve realizar o teste exploratório no banner 5', () => {
        cy.selecionarBanner(4)
        cy.adicionarProdutos(25)
        cy.get('.edit-address-block-button').click()
    });

    it('Deve realizar o teste exploratório no banner 6', () => {
        cy.selecionarBanner(5)
        cy.adicionarProdutos(25)
        cy.get('.edit-address-block-button').click()
    });

    it('Deve realizar o teste exploratório no banner 7', () => {
        cy.selecionarBanner(6)
        cy.adicionarProdutos(25)
        cy.get('.edit-address-block-button').click()
    });

    it('Deve realizar o teste exploratório no banner 8', () => {
        cy.selecionarBanner(7)
        cy.adicionarProdutos(25)
        cy.get('.edit-address-block-button').click()
    });

    it('Deve realizar o teste exploratório no banner 9', () => {
        cy.selecionarBanner(8)
        cy.adicionarProdutos(25)
        cy.get('.edit-address-block-button').click()
    });

    it('Deve realizar o teste exploratório no banner 10', () => {
        cy.selecionarBanner(9)
        cy.adicionarProdutos(25)
        cy.get('.edit-address-block-button').click()
    });

    it('Deve realizar o teste exploratório no banner 11', () => {
        cy.selecionarBanner(10)
        cy.adicionarProdutos(25)
        cy.get('.edit-address-block-button').click()
    });

    it('Deve realizar o teste exploratório no banner 12', () => {
        cy.selecionarBanner(11)
        cy.adicionarProdutos(25)
        cy.get('.edit-address-block-button').click()
    });

    it('Deve realizar o teste exploratório no banner 13', () => {
        cy.selecionarBanner(12)
        cy.adicionarProdutos(25)
        cy.get('.edit-address-block-button').click()
    });

    it('Deve realizar o teste exploratório no banner 14', () => {
        cy.selecionarBanner(13)
        cy.adicionarProdutos(25)
        cy.get('.edit-address-block-button').click()
    });
});