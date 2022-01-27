const inquirer = require("inquirer")
const makeSelection = require('../index');

const updateEmp = () => {
    inquirer
        .prompt([
            {
                name: 'empName',
                message: 'Which employee would you like to update?',
                type: 'input'
            },
            {
                name: 'newRole',
                message: `Enter a new role for this employee`,
                type: 'input'
            }
        ])
        .then(function () {
            console.log('employee updated');
            makeSelection.makeSelection();
        });
}

exports.updateEmp = updateEmp;