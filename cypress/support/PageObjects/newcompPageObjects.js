class NewComputerPage {

    PageHeader() {
        return cy.get('#main')
    }

    ComputerName() {
        return cy.get('#name')
    }

    IntroducedDate() {
        return cy.get('#introduced')
    }

    DiscontinedDate() {
        return cy.get('#discontinued')
    }

    CompanyName() {
        return cy.get('select')
    }

    SaveNewComputer() {
        return cy.get('input[type="submit"]')
    }

    SaveEditedComputer() {
        return cy.get('input[type="submit"]').eq(0)
    }

    CancelNewComputer() {
        return cy.get('.btn')
    }

    DeleteComputer() {
        return cy.get('.btn.danger')
    }

    GetErrorCode() {
        return cy.get('fieldset div')
    }


}

export default NewComputerPage