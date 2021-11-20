/// <reference types="cypress" />
import HomePage from '../support/PageObjects/homePageObjects'
import NewComputerPage from '../support/PageObjects/newcompPageObjects'

const homePage = new HomePage()
const newComputerPage = new NewComputerPage()

let rowsLength

beforeEach(function () {

    cy.task('readXlsx', { file: 'cypress/fixtures/excelData.xlsx', sheet: 'Sheet1' }).then((rows) => {
        rowsLength = rows.length;
        cy.writeFile('cypress/fixtures/xlsxData.json', { rows })
    })

    cy.fixture('example').then(function (data) {
        this.data = data
    })
    cy.clearCookies()
    cy.visit('/computers')

})


describe('Add New Computer', function () {

    it('Add New Computer with all available fields', function () {

        cy.AddComputer('Surya', '2005-02-02', '2008-07-07', 'Sony', 'Create')
    })

    it('Add New Computer with only Computer Name', function () {
        cy.AddComputer('Surya 2', '', '', '', 'Create')
    })

    it('Add New Computer with empty Computer Name', function () {
        cy.AddComputer('', '', '', '', 'Create')
        
    })

    it('Add New Computer with Computer Name and invalid date formats', function () {
        cy.AddComputer('Test Computer Name', '08-08-2001', '09-2006-10', 'RCA', 'Create')
    })

    it('Add New Computer and Cancel before creation', function () {
        cy.AddComputer('TEST3', '', '', '', 'Cancel')
        
    })

    it('Verify New Computer creation with JSON data', function () {
        cy.AddComputer(this.data.Computer[0].Name, this.data.Computer[0].IntroducedDate, this.data.Computer[0].DiscontinuedDate, this.data.Computer[0].Company, this.data.Computer[0].Option)
    })

    it('Verify New Computer creation with Excel data', function () {
        cy.fixture('xlsxData').then(function (xc) {
            for (let i = 0; i < rowsLength; i++) {
                cy.AddComputer(xc.rows[i].ComputerName, xc.rows[i].IntroducedDate, xc.rows[i].DiscontinuedDate, xc.rows[i].Company, xc.rows[i].Option)
            }
        })
    })

})




//cypress run --record --key dfac4085-6709-4abb-90cd-6c41b9dcaae6