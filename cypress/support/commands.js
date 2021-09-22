// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('preencherCep', (cep) => {
    cy.get('.vtex-cep').type(cep)
    cy.get('#button').click()
})

Cypress.Commands.add('selecionarBanner', (num) => {
    cy.get('[data-testid="paginationDot"]').eq(num).should('exist')
    cy.get('[data-testid="paginationDot"]').eq(num).click()
    cy.get('[aria-roledescription="slide"]').eq(num).click()
})

Cypress.Commands.add('adicionarProdutos', (quantidade) => {
    cy.get(':nth-child(1) > .vtex-product-summary-2-x-container > .vtex-product-summary-2-x-clearLink > .vtex-product-summary-2-x-element > .bighiper-big-theme-1-x-buttonAddToCartContainer > .bighiper-big-theme-1-x-buttonAddToCart').click()
    cy.get('.vtex-store-icons-0-x-cartIcon > use').click()
    cy.get('.vtex-flex-layout-0-x-flexColChild > .bighiper-big-theme-1-x-buttonAddToCartContainer > .bighiper-big-theme-1-x-buttonQuantity > .bighiper-big-theme-1-x-buttonInputQuantity').should('exist')
    cy.get('.vtex-flex-layout-0-x-flexColChild > .bighiper-big-theme-1-x-buttonAddToCartContainer > .bighiper-big-theme-1-x-buttonQuantity > .bighiper-big-theme-1-x-buttonInputQuantity').type(quantidade)
    cy.get('.vtex-store-link-0-x-link').click()
    cy.get('#proceed-to-checkout').click()
})