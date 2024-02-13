/// <reference types="cypress" />

describe('Testes para a página de agenda de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    it('Criar novo contato', () => {
        cy.get('[type="text"]').type('Luciana Kamon')
        cy.get('[type="email"]').type('luciana@teste.com')
        cy.get('[type="tel"]').type(43912345678)
        cy.get('.adicionar').click()
    })
    it('Editar contato', () => {
        cy.get('.edit').first().click()
        cy.get('[type="text"]').type(' da Silva')
        cy.get('.alterar').click()
    })
    it('Deletar contato', () => {
        cy.get('.delete').first().click()
    })
})