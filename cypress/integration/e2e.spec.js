/// <reference types="cypress" />

context('Automoção pata testes exploratórios no big', () => {
    
    beforeEach(() => {
        cy.visit('/')
        cy.get('.vtex-cep').type('01034-000')
        cy.get('#button').click()
    });



    it.only('Deve realizar o teste exploratório no banner 1', () => {
        cy.get('#truste-consent-button').click()
        cy.get('[data-testid="paginationDot"]').eq(0).click()
        cy.get('.regional-banners > a > img').click()
        cy.get(':nth-child(1) > .vtex-product-summary-2-x-container > .vtex-product-summary-2-x-clearLink > .vtex-product-summary-2-x-element > .bighiper-big-theme-1-x-buttonAddToCartContainer > .bighiper-big-theme-1-x-buttonAddToCart').click()
        cy.get('.vtex-store-icons-0-x-cartIcon > use').click()
        cy.get('.vtex-flex-layout-0-x-flexColChild > .bighiper-big-theme-1-x-buttonAddToCartContainer > .bighiper-big-theme-1-x-buttonQuantity > .bighiper-big-theme-1-x-buttonInputQuantity').type(5)
        cy.get('.vtex-store-link-0-x-link').click()
        cy.get('#proceed-to-checkout').click()
        cy.get('#client-pre-email').type('testes_qa_big@mailinator.com')
        cy.get('#btn-client-pre-email').click()
        cy.get('#btn-identified-user-button').click()
        cy.get('.edit-address-block-button').click()
        cy.get('#vtexIdUI-custom-oauth').click()
    });

    it('Deve realizar o teste exploratório no banner 2', () => {
        cy.get('#truste-consent-button').click()
        cy.get('[aria-label="Dot 2 of 11"]').click()
        cy.get('[aria-label="2 of 11"]').click()
    });

    it('Deve realizar o teste exploratório no banner 3', () => {
        cy.get('#truste-consent-button').click()
        cy.get('[aria-label="Dot 3 of 11"]').click()
        cy.get('[aria-label="3 of 11"]').click()
        cy.get(':nth-child(1) > .vtex-product-summary-2-x-container > .vtex-product-summary-2-x-clearLink > .vtex-product-summary-2-x-element > .bighiper-big-theme-1-x-buttonAddToCartContainer > .bighiper-big-theme-1-x-buttonAddToCart').click()
        cy.get('.vtex-store-icons-0-x-cartIcon > use').click()
        cy.wait(2000)
        cy.get('.vtex-flex-layout-0-x-flexColChild > .bighiper-big-theme-1-x-buttonAddToCartContainer > .bighiper-big-theme-1-x-buttonQuantity > .bighiper-big-theme-1-x-buttonInputQuantity').type(25)
        cy.get('.vtex-store-link-0-x-link').click()
        cy.get('#proceed-to-checkout').click()
        cy.get('#client-pre-email').type('testes_qa_big@mailinator.com')
        cy.get('#btn-client-pre-email').click()
        cy.get('#btn-identified-user-button').click()
        cy.get('.edit-address-block-button').click()
    });

    it('Deve realizar o teste exploratório no banner 4', () => {
        cy.get('#truste-consent-button').click()
        cy.get('[aria-label="Dot 4 of 11"]').click()
        cy.get('[aria-label="4 of 11"]').click()
        cy.get(':nth-child(1) > .vtex-product-summary-2-x-container > .vtex-product-summary-2-x-clearLink > .vtex-product-summary-2-x-element > .bighiper-big-theme-1-x-buttonAddToCartContainer > .bighiper-big-theme-1-x-buttonAddToCart').click()
        cy.get('.vtex-store-icons-0-x-cartIcon > use').click()
        cy.wait(2000)
        cy.get('.vtex-flex-layout-0-x-flexColChild > .bighiper-big-theme-1-x-buttonAddToCartContainer > .bighiper-big-theme-1-x-buttonQuantity > .bighiper-big-theme-1-x-buttonInputQuantity').type(25)
        cy.get('.vtex-store-link-0-x-link').click()
        cy.get('#proceed-to-checkout').click()
        cy.get('#client-pre-email').type('testes_qa_big@mailinator.com')
        cy.get('#btn-client-pre-email').click()
        cy.get('#btn-identified-user-button').click()
        cy.get('.edit-address-block-button').click()
    });

    it('Deve realizar o teste exploratório no banner 5', () => {
        cy.get('#truste-consent-button').click()
        cy.get('[aria-label="Dot 5 of 11"]').click()
        cy.get('[aria-label="5 of 11"]').click()
        cy.get(':nth-child(1) > .vtex-product-summary-2-x-container > .vtex-product-summary-2-x-clearLink > .vtex-product-summary-2-x-element > .bighiper-big-theme-1-x-buttonAddToCartContainer > .bighiper-big-theme-1-x-buttonAddToCart').click()
        cy.get('.vtex-store-icons-0-x-cartIcon > use').click()
        cy.wait(2000)
        cy.get('.vtex-flex-layout-0-x-flexColChild > .bighiper-big-theme-1-x-buttonAddToCartContainer > .bighiper-big-theme-1-x-buttonQuantity > .bighiper-big-theme-1-x-buttonInputQuantity').type(25)
        cy.get('.vtex-store-link-0-x-link').click()
        cy.get('#proceed-to-checkout').click()
        cy.get('#client-pre-email').type('testes_qa_big@mailinator.com')
        cy.get('#btn-client-pre-email').click()
        cy.get('#btn-identified-user-button').click()
        cy.get('.edit-address-block-button').click()
    });

    it('Deve realizar o teste exploratório no banner 6', () => {
        cy.get('#truste-consent-button').click()
        cy.get('[aria-label="Dot 6 of 11"]').click()
        cy.get('[aria-label="6 of 11"]').click()
        cy.get(':nth-child(1) > .vtex-product-summary-2-x-container > .vtex-product-summary-2-x-clearLink > .vtex-product-summary-2-x-element > .bighiper-big-theme-1-x-buttonAddToCartContainer > .bighiper-big-theme-1-x-buttonAddToCart').click()
        cy.get('.vtex-store-icons-0-x-cartIcon > use').click()
        cy.wait(2000)
        cy.get('.vtex-flex-layout-0-x-flexColChild > .bighiper-big-theme-1-x-buttonAddToCartContainer > .bighiper-big-theme-1-x-buttonQuantity > .bighiper-big-theme-1-x-buttonInputQuantity').type(25)
        cy.get('.vtex-store-link-0-x-link').click()
        cy.get('#proceed-to-checkout').click()
        cy.get('#client-pre-email').type('testes_qa_big@mailinator.com')
        cy.get('#btn-client-pre-email').click()
        cy.get('#btn-identified-user-button').click()
        cy.get('.edit-address-block-button').click()
    });

    it('Deve realizar o teste exploratório no banner 7', () => {
        cy.get('#truste-consent-button').click()
        cy.get('[aria-label="Dot 7 of 11"]').click()
        cy.get('[aria-label="7 of 11"]').click()
        cy.get(':nth-child(1) > .vtex-product-summary-2-x-container > .vtex-product-summary-2-x-clearLink > .vtex-product-summary-2-x-element > .bighiper-big-theme-1-x-buttonAddToCartContainer > .bighiper-big-theme-1-x-buttonAddToCart').click()
        cy.get('.vtex-store-icons-0-x-cartIcon > use').click()
        cy.wait(2000)
        cy.get('.vtex-flex-layout-0-x-flexColChild > .bighiper-big-theme-1-x-buttonAddToCartContainer > .bighiper-big-theme-1-x-buttonQuantity > .bighiper-big-theme-1-x-buttonInputQuantity').type(25)
        cy.get('.vtex-store-link-0-x-link').click()
        cy.get('#proceed-to-checkout').click()
        cy.get('#client-pre-email').type('testes_qa_big@mailinator.com')
        cy.get('#btn-client-pre-email').click()
        cy.get('#btn-identified-user-button').click()
        cy.get('.edit-address-block-button').click()
    });

    it('Deve realizar o teste exploratório no banner 8', () => {
        cy.get('#truste-consent-button').click()
        cy.get('[aria-label="Dot 8 of 11"]').click()
        cy.get('[aria-label="8 of 11"]').click()
        cy.get(':nth-child(1) > .vtex-product-summary-2-x-container > .vtex-product-summary-2-x-clearLink > .vtex-product-summary-2-x-element > .bighiper-big-theme-1-x-buttonAddToCartContainer > .bighiper-big-theme-1-x-buttonAddToCart').click()
        cy.get('.vtex-store-icons-0-x-cartIcon > use').click()
        cy.wait(2000)
        cy.get('.vtex-flex-layout-0-x-flexColChild > .bighiper-big-theme-1-x-buttonAddToCartContainer > .bighiper-big-theme-1-x-buttonQuantity > .bighiper-big-theme-1-x-buttonInputQuantity').type(25)
        cy.get('.vtex-store-link-0-x-link').click()
        cy.get('#proceed-to-checkout').click()
        cy.get('#client-pre-email').type('testes_qa_big@mailinator.com')
        cy.get('#btn-client-pre-email').click()
        cy.get('#btn-identified-user-button').click()
        cy.get('.edit-address-block-button').click()
    });

    it('Deve realizar o teste exploratório no banner 9', () => {
        cy.get('#truste-consent-button').click()
        cy.get('[aria-label="Dot 9 of 11"]').click()
        cy.get('[aria-label="9 of 11"]').click()
        cy.get(':nth-child(1) > .vtex-product-summary-2-x-container > .vtex-product-summary-2-x-clearLink > .vtex-product-summary-2-x-element > .bighiper-big-theme-1-x-buttonAddToCartContainer > .bighiper-big-theme-1-x-buttonAddToCart').click()
        cy.get('.vtex-store-icons-0-x-cartIcon > use').click()
        cy.wait(2000)
        cy.get('.vtex-flex-layout-0-x-flexColChild > .bighiper-big-theme-1-x-buttonAddToCartContainer > .bighiper-big-theme-1-x-buttonQuantity > .bighiper-big-theme-1-x-buttonInputQuantity').type(25)
        cy.get('.vtex-store-link-0-x-link').click()
        cy.get('#proceed-to-checkout').click()
        cy.get('#client-pre-email').type('testes_qa_big@mailinator.com')
        cy.get('#btn-client-pre-email').click()
        cy.get('#btn-identified-user-button').click()
        cy.get('.edit-address-block-button').click()
    });

    it('Deve realizar o teste exploratório no banner 10', () => {
        cy.get('#truste-consent-button').click()
        cy.get('[aria-label="Dot 10 of 11"]').click()
        cy.get('[aria-label="10 of 11"]').click()
        cy.get(':nth-child(1) > .vtex-product-summary-2-x-container > .vtex-product-summary-2-x-clearLink > .vtex-product-summary-2-x-element > .bighiper-big-theme-1-x-buttonAddToCartContainer > .bighiper-big-theme-1-x-buttonAddToCart').click()
        cy.get('.vtex-store-icons-0-x-cartIcon > use').click()
        cy.wait(2000)
        cy.get('.vtex-flex-layout-0-x-flexColChild > .bighiper-big-theme-1-x-buttonAddToCartContainer > .bighiper-big-theme-1-x-buttonQuantity > .bighiper-big-theme-1-x-buttonInputQuantity').type(25)
        cy.get('.vtex-store-link-0-x-link').click()
        cy.get('#proceed-to-checkout').click()
        cy.get('#client-pre-email').type('testes_qa_big@mailinator.com')
        cy.get('#btn-client-pre-email').click()
        cy.get('#btn-identified-user-button').click()
        cy.get('.edit-address-block-button').click()
    });

    it('Deve realizar o teste exploratório no banner 11', () => {
        cy.get('#truste-consent-button').click()
        cy.get('[aria-label="Dot 11 of 11"]').click()
        cy.get('[aria-label="11 of 11"]').click()
        cy.get(':nth-child(1) > .vtex-product-summary-2-x-container > .vtex-product-summary-2-x-clearLink > .vtex-product-summary-2-x-element > .bighiper-big-theme-1-x-buttonAddToCartContainer > .bighiper-big-theme-1-x-buttonAddToCart').click()
        cy.get('.vtex-store-icons-0-x-cartIcon > use').click()
        cy.wait(2000)
        cy.get('.vtex-flex-layout-0-x-flexColChild > .bighiper-big-theme-1-x-buttonAddToCartContainer > .bighiper-big-theme-1-x-buttonQuantity > .bighiper-big-theme-1-x-buttonInputQuantity').type(25)
        cy.get('.vtex-store-link-0-x-link').click()
        cy.get('#proceed-to-checkout').click()
        cy.get('#client-pre-email').type('testes_qa_big@mailinator.com')
        cy.get('#btn-client-pre-email').click()
        cy.get('#btn-identified-user-button').click()
        cy.get('.edit-address-block-button').click()
    });
});