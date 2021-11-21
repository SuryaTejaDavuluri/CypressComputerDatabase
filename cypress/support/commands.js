import HomePage from '../support/PageObjects/homePageObjects'
import NewComputerPage from '../support/PageObjects/newcompPageObjects'

const homePage = new HomePage()
const newComputerPage = new NewComputerPage()

Cypress.Commands.add('AddComputer', function (computerName, introducedDate, discontinuedDate, company, option) {
    homePage.PageHeader().should('include.text', 'Play sample application — Computer database')
    homePage.AddNewComputer().click()
    newComputerPage.PageHeader().should('contain.text', 'Add a computer')
    newComputerPage.ComputerName().invoke('val', computerName)
    newComputerPage.IntroducedDate().invoke('val', introducedDate)
    newComputerPage.DiscontinedDate().invoke('val', discontinuedDate)
    newComputerPage.CompanyName().select(company)
    if (option == 'Create') {
        if (computerName == '') {
            newComputerPage.SaveNewComputer().click()
            newComputerPage.GetErrorCode().should('have.class', 'clearfix error')
        }
        else {
            if (computerName != '') {
                newComputerPage.SaveNewComputer().click()
                homePage.NewComputerButton().then(function (el) {
                    let txt = el.text()
                    if (txt.includes('Add')) {
                        homePage.SuccessAlert().then(function (el1) {
                            let successMessage = el1.text()
                            successMessage = successMessage.trim()
                            expect(successMessage).to.equal("Done! Computer " + computerName + " has been created")
                        })
                    }
                    else {
                        newComputerPage.GetErrorCode().should('have.class', 'clearfix error')
                    }
                })

            }

        }
    }
    else {
        newComputerPage.CancelNewComputer().contains('Cancel').click()
        cy.contains('Filter by name')
    }
})

Cypress.Commands.add('DeleteComputer', function (computerName) {

    homePage.SearchBox().type(computerName)
    homePage.SubmitSearch().click()

    homePage.NoComputerHeader().then(function (ele) {
        let res = ele.text()
        if (res.includes('No computers found')) {
            homePage.NothingDisplayMsg().then(function (el) {
                let msg = el.text()
                msg = msg.trim()
                expect(msg).to.equal('Nothing to display')
            })
        }
        else {
            homePage.ComputerResults().should('contain.text', computerName)
            homePage.SelectComputerName().eq(0).each(function (el1, index, $list) {
                let cname = $list.eq(index).text()
                cy.log(cname)
                if (cname.includes(computerName)) {
                    cy.wrap(el1).click()
                }
            })
            newComputerPage.PageHeader().should('contain.text', 'Edit computer')
            homePage.DeleteComputer().click()
            homePage.DeletionMessage().then(function (el2) {
                let deleteMessage = el2.text()
                deleteMessage = deleteMessage.trim()
                expect(deleteMessage).to.equal("Done! Computer has been deleted")
            })
        }
    })

})

Cypress.Commands.add('EditComputer', function (Computer, Name, introducedDate, discontinuedDate, company, option) {
    homePage.SearchBox().type(Computer)
    homePage.SubmitSearch().click()
    homePage.NoComputerHeader().then(function (ele) {
        let res = ele.text()
        if (res.includes('No computers found')) {
            homePage.NothingDisplayMsg().then(function (el) {
                let msg = el.text()
                msg = msg.trim()
                expect(msg).to.equal('Nothing to display')
            })
        }
        else {
            homePage.ComputerResults().should('contain.text', Computer)
            homePage.SelectComputerName().eq(0).each(function (el1, index, $list) {
                let cname = $list.eq(index).text()
                cy.log(cname)
                if (cname.includes(Computer)) {
                    cy.wrap(el1).click()
                }
            })
            newComputerPage.PageHeader().should('contain.text', 'Edit computer')
            if (Name == '') {
                //
            }
            else {
                newComputerPage.ComputerName().invoke('val', Name)
            }

            if (introducedDate == '') {
                // 
            }
            else {
                newComputerPage.IntroducedDate().invoke('val', introducedDate)
            }
            if (discontinuedDate == '') {
                //
            }
            else {
                newComputerPage.DiscontinedDate().invoke('val', discontinuedDate)
            }
            if (company == '') {
                //
            }
            else {
                newComputerPage.CompanyName().select(company)
            }

            if (option == 'Edit') {
                if (Name == '') {
                    newComputerPage.SaveEditedComputer().click()
                    // cy.get('fieldset div').should('have.class', 'clearfix error')
                }
                else {
                    if (Name != '') {
                        newComputerPage.SaveEditedComputer().click()
                        homePage.NewComputerButton().then(function (el) {
                            let txt = el.text()
                            if (txt.includes('Add')) {
                                homePage.SuccessAlert().then(function (el1) {
                                    let successMessage = el1.text()
                                    successMessage = successMessage.trim()
                                    expect(successMessage).to.equal("Done! Computer " + Name + " has been updated")
                                })
                            }
                            else {
                                newComputerPage.GetErrorCode().should('have.class', 'clearfix error')
                            }
                        })

                    }

                }
            }
            else {
                newComputerPage.CancelNewComputer().contains('Cancel').click()
                cy.contains('Filter by name')
            }


        }



    })

})

Cypress.Commands.add('SearchorFilter', function (ComputerName) {
    homePage.SearchBox().type(ComputerName)
    homePage.SubmitSearch().click()
    homePage.NoComputerHeader().then(function (ele) {
        let res = ele.text()
        if (res.includes('No computers found')) {
            homePage.NothingDisplayMsg().then(function (el) {
                let msg = el.text()
                msg = msg.trim()
                expect(msg).to.equal('Nothing to display')
            })
        }
        else {
            homePage.ComputerResults().should('contain.text', ComputerName)
            homePage.SelectComputerName().eq(0).each(function (el1, index, $list) {
                let cname = $list.eq(index).text()
                cy.log(cname)
            })

        }
    })
})


Cypress.Commands.add("parseXlsx", (inputFile) => {
    return cy.task('parseXlsx', { filePath: inputFile })
});







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

