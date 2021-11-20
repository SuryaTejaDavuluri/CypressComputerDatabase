/// <reference types="cypress" />


before(function () {

    cy.visit('/computers')
    cy.writeFile('ComputerList.txt', '')

})


describe('Computer List', function () {

    it('List all computers in the site', function () {

        cy.get('#main h1').then(function (el) {
            let total = el.text()
            total = total.split(" ")
            total = total[0]
            if (total > 10) {
                for (let i = 0; i < total / 10; i++) {
                    cy.get('td a').each(function ($el, index, $list) {
                        let cname = $el.text()
                        // cy.log(cname1)
                        cy.writeFile('ComputerList.txt', cname + "\n", { flag: 'a+' })
                    })
                    cy.get('.next a').click()
                }
            }
        })
    })
})