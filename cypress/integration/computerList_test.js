/// <reference types="cypress" />


before(function () {

    cy.clearCookies()
    cy.visit('/computers')

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
                        cy.writeFile('ComputerList', cname+ "\n", {flag:'a+'})
                        
                    })
                    cy.get('.next a').click()
                    
                    // cy.get('tr td:nth-child(2)').each(function ($el, index, $list) {
                    //     let cname2 = $el.text()
                    //     cy.log(cname2)
                    //     this.cname2 = cname2
                        
                    // })
                    // cy.get('tr td:nth-child(3)').each(function ($el, index, $list) {
                    //     let cname3 = $el.text()
                    //     // cy.log(cname3)
                    //     this.cname3 = cname3
                        
                    // })
                    // cy.get('tr td:nth-child(4)').each(function ($el, index, $list) {
                    //     let cname4 = $el.text()
                    //     // cy.log(cname4)
                    //     this.cname4 = cname4
                        
                    // })
                    
                   
                    

                    
                }
            }



        })






    })




})