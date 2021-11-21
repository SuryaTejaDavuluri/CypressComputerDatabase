class HomePage {

PageHeader() {
    return  cy.get('a[href="/"]')
}

AddNewComputer() {
    return cy.get('#add')
}

SuccessAlert() {
    return cy.get('.alert-message.warning')
}

NewComputerButton() {
    return cy.get('.btn')
}

SearchBox() {
    return cy.get('#searchbox')
}

SubmitSearch() {
    return cy.get('#searchsubmit')
}

NoComputerHeader() {
    return cy.get('#main')
}

NothingDisplayMsg() {
    return cy.get('.well')
}


ComputerResults() {
    return cy.get('.computers.zebra-striped')
}

SelectComputerName() {
    return cy.get('td a')
}

DeleteComputer() {
    return cy.get('.btn.danger')
}

DeletionMessage() {
    return cy.get('.alert-message.warning')
}


}


export default HomePage