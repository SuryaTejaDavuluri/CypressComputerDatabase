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
            cy.get('fieldset div').should('have.class', 'clearfix error')
        }
        else {
            if (computerName != '') {
                newComputerPage.SaveNewComputer().click()
                cy.get('.btn').then(function (el) {
                    let txt = el.text()
                    if (txt.includes('Add')) {
                        homePage.SuccessAlert().then(function (el1) {
                            let successMessage = el1.text()
                            successMessage = successMessage.trim()
                            expect(successMessage).to.equal("Done! Computer " + computerName + " has been created")
                        })
                    }
                    else {
                        cy.get('fieldset div').should('have.class', 'clearfix error')
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


// Cypress.Commands.add('CancelComputer', function (computerName, introducedDate, discontinuedDate, company) {
//     homePage.PageHeader().should('include.text', 'Play sample application — Computer database')
//     homePage.AddNewComputer().click()
//     newComputerPage.PageHeader().should('contain.text', 'Add a computer')
//     newComputerPage.ComputerName().type(computerName)
//     newComputerPage.IntroducedDate().type(introducedDate)
//     newComputerPage.DiscontinedDate().type(discontinuedDate)
//     newComputerPage.CompanyName().select(company)
//     newComputerPage.CancelNewComputer().contains('Cancel').click()

// })

Cypress.Commands.add('DeleteComputer', function (computerName) {

    cy.get('#searchbox').type(computerName)
    cy.get('#searchsubmit').click()
    cy.get('.computers.zebra-striped').should('contain.text', computerName)
    cy.get('td a').eq(0).each(function (el, index, $list) {
        let cname = $list.eq(index).text()
        cy.log(cname)
        if (cname.includes(computerName)) {
            cy.wrap(el).click()
        }
    })
    newComputerPage.PageHeader().should('contain.text', 'Edit computer')
    cy.get('.btn.danger').click()
    cy.get('.alert-message.warning').then(function (el) {
        let deleteMessage = el.text()
        deleteMessage = deleteMessage.trim()
        expect(deleteMessage).to.equal("Done! Computer has been deleted")
    })

})


Cypress.Commands.add("validateIfElementExistsInDomAsBoolean", (selector) => {
    return cy.get('body')
        .then($body => {
            return cy.wrap($body.find(selector).length > 0) //Cy wrap is needed so the function is chainable
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

