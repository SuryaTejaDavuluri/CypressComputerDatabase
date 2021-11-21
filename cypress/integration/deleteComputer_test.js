/// <reference types="cypress" />


before(function () {

    cy.visit('/computers')

})


describe('Delete Computer', function () {

    it('Create New Computer and delete the same computer', function () {
        cy.AddComputer('Delete this Computer', '2005-02-02', '2008-07-07', 'Sony', 'Create')
        cy.DeleteComputer('Delete this Computer')
    })

    it('Delete existing computer', function () {
        cy.DeleteComputer('Test c')
    })

})