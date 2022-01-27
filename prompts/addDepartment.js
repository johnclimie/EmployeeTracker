const inquirer = require('inquirer');
const makeSelection = require('../index');

const addDep = () => {
    inquirer
        .prompt([
            {
                name: 'name',
                message: 'Enter the department name',
                type: 'input'
            }
        ])
        .then(function() {
            console.log('department added');
            makeSelection.makeSelection();
        })
}


exports.addDep = addDep;