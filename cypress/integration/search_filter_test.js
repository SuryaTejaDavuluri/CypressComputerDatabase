/// <reference types="cypress" />


before(function () {

    cy.visit('/computers')

})


describe('Search Computer', function () {

    it('Search/Filter Computer from filter box', function () {
        cy.SearchorFilter('Acer Iconia')
    })

    it('Search Computer through out all pages', function () {

        cy.get('#main h1').then(function (el) {
            let total = el.text()
            total = total.split(" ")
            total = total[0]
            if (total > 10) {
                for (let i = 0; i < total / 10; i++) {
                    cy.get('td a').then(function (el1) {

                        let cname = el1.text()
                        cy.log(cname)
                        if (cname.includes('ChipTest')) {
                            cy.log('Computer Found')

                        }
                        else {

                            cy.get('.next a').click()
                        }
                    })

                }
            }
        })
    })


})
