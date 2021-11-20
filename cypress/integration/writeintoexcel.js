/// <reference types="cypress" />



// describe('Write Excel', function () {

//     it('xcel', function () {

        //         cy.writeFile('samplefile.json','{"Computer": [{"Name" : "Test Computer","IntroducedDate" : "2010-06-05","DiscontinuedDate" : "2015-08-08","Company" : "RCA"}]}')
        //     })

        // import xlsx from 'node-xlsx';
        var xlsx = require('node-xlsx').default;

        const data = [[1, 2, 3], [true, false, null, 'sheetjs'], ['foo', 'bar', new Date('2014-02-19T14:30Z'), '0.3'], ['baz', null, 'qux']];
        var buffer = xlsx.build([{ name: "mySheetName.xlsx", data: data }]); // Returns a buffer





    // })

// })
