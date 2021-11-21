# CypressComputerDatabase

This repo contains the Automated Test Scripts for a web application with sample computer database.
All scripts are written in **Javascript** using **Cypress framework**(https://www.cypress.io/).

Access the URL with this link('https://computer-database.herokuapp.com/computers')


Manual Test Cases are available in TestCases folder.
Automated scripts are available in cypress/integration folder.

Detailed Explanation for the Automated Test scripts:
      
      1. Add Computer(addComputer_test.js)
          a. Add New Computer with all available fields
              -> Adds a new computer with Computer Name, Introduced Date, Discontinued Date, Company Name.
              -> Validate the Success message.
          b. Add New Computer with only Computer Name
              -> Adds a new computer with only Computer Name.
              -> Validate the Success message.
          c. Add New Computer with empty Computer Name
              -> Validate an error for creating a Computer without Computer Name.
          d. Add New Computer with Computer Name and invalid date formats
              -> Validate the errors for creating a Computer without Invalid date formats.
          e. Add New Computer and Cancel before creation
              -> Validate the Cancel button and check computer doesn't get added.
          f. Verify New Computer creation with JSON data
              -> Validate Computer creation with data pulled from JSON file.
          g. Verify New Computer creation with Excel data
              -> Validate Computer creation with data pulled from Excel file.
              
      2. Display all Computers in a List(computerList_test.js)
          a. List all computers in the site
              -> Pulls all Computer names and push it into a text file.
      3. Delete Computer(deleteComputer_test.js)
          a. Create New Computer and delete the same computer
              -> First a new computer gets created and deletes the same computer.
          b. Delete existing computer
              -> Deletes an existing computer
              -> Validates the deletion message.
      4. Edit Computer(editComputer_test.js)
          a. Edit Computer Name
              -> Edit only computer name and validate success message.
          b. Edit Introduced Date
              -> Edit only Introduced name and validate success message
          c. Edit Discontinued Date
              -> Edit only Discontinued Date and validate success message
          d. Edit Company Name
              -> Edit only Company Name and validate success message.
          e. Edit Computer and Cancel
              -> Edit computer details and validate cancel button.
          f. Edit Computer and Save without any changes
              -> Don't Edit any computer details and Save and validate success message.
          g. Save Computer with empty name
              -> Edit Computer details, clear computer name and validate error message.
          h. Save Computer with invalid date formats
              -> Edit Computer details, change date into invalid format and validate error message
      5. Search filter(search_filter_test.js)
          a. Search/Filter Computer from filter box
              -> Search or Filter a computer through filter box
              -> Search a non existing computer and validate the message
          b. Search Computer through out all pages
              -> Search a computer without using filter box
