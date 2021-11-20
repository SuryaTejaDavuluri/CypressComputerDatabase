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




}


export default HomePage