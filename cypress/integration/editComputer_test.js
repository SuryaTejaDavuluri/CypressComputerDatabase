/// <reference types="cypress" />

beforeEach(function () {
    cy.clearCookies()
    cy.visit('/computers')

})


describe('Edit Computer', function () {

    it.skip('Edit Computer Name', function () {

        cy.EditComputer('Test now', 'Test now 2', '', '', '', 'Edit')
    })

    it.skip('Edit Introduced Date', function () {
        cy.EditComputer('Test now 2', 'Test now 2', '2016-02-02', '', '', 'Edit')
    })

    it('Edit Discontinued Date', function () {
        cy.EditComputer('Test now 2', 'Test now 2', '', '2020-02-02', '', 'Edit')
        
    })

    // it('Edit Company Name', function () {
    //     cy.EditComputer('Test Computer Del', '', '', 'ASUS', 'Edit')
    // })

    // it('Edit Computer and Cancel', function () {
    //     cy.EditComputer('Test Computer Del', '', '', '', 'Cancel')
        
    // })

    // it('Edit Computer and Save without any changes', function () {
    //     cy.EditComputer('Test Computer Del', '', '', '', '', 'Edit')
        
    // })

    // it('Edit Computer with empty name', function () {
    //     cy.EditComputer('Test Computer Del', '', '', '', '', 'Edit')
        
    // })

    // it('Edit Computer with invalid date formats', function () {
    //     cy.EditComputer('Test Computer Del', '', '02-2009-08', '', '', 'Edit')
        
    // })

})




//cypress run --record --key dfac4085-6709-4abb-90cd-6c41b9dcaae6