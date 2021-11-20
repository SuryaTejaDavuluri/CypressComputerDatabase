/// <reference types="cypress" />

beforeEach(function () {
    cy.clearCookies()
    cy.visit('/computers')

})


describe('Edit Computer', function () {

    it('Edit Computer Name', function () {

        cy.EditComputer('Test now', 'Test b', '', '', '', 'Edit')
    })

    it('Edit Introduced Date', function () {
        cy.EditComputer('Test b', '', '2016-02-02', '', '', 'Edit')
    })

    it('Edit Discontinued Date', function () {
        cy.EditComputer('Test b', '', '', '2018-08-08', '', 'Edit')
        
    })

    it('Edit Company Name', function () {
        cy.EditComputer('Test b', '', '', '', 'ASUS', 'Edit')
    })

    it('Edit Computer and Cancel', function () {
        cy.EditComputer('Test b', '', '', '2018-08-08', '', 'Cancel')
        
    })

    it('Edit Computer and Save without any changes', function () {
        cy.EditComputer('Test b', '', '', '', '', 'Edit')
        
    })

    it('Save Computer with empty name', function () {
        cy.EditComputer('Test b', null, '', '', '', 'Edit')
        
    })

    it('Save Computer with invalid date formats', function () {
        cy.EditComputer('Test b', '', '02-2009-08', '', '', 'Edit')
        
    })

})




//cypress run --record --key dfac4085-6709-4abb-90cd-6c41b9dcaae6