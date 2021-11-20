/// <reference types="cypress" />


before(function () {

    cy.fixture('example').then(function (data) {
        this.data = data
    })
    cy.clearCookies()
    cy.visit('/computers')

})


describe('Delete Computer', function () {

    it('Create New Computer and delete the same computer', function () {
        // cy.AddComputer(this.data.Computer[0].Name,
        //     this.data.Computer[0].IntroducedDate,
        //     this.data.Computer[0].DiscontinuedDate,
        //     this.data.Computer[0].Company)

        cy.DeleteComputer(this.data.Computer[0].Name)

    })


})