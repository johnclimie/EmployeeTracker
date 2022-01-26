const inquirer = require('inquirer');

const addDep = () => {
    inquirer
        .prompt([
            {
                name: 'name',
                message: 'Enter the department name',
                type: 'input'
            }
        ])
        .then(function(response) {
            console.log('department added');
        })
}


exports.addDep = addDep;