const inquirer = require('inquirer');
const index = require('../index');



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
            index.makeSelection();
        })
}


exports.addDep = addDep;