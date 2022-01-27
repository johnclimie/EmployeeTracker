const inquirer = require("inquirer")
const index = require('../index');

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
            index.makeSelection();
        });
}

exports.updateEmp = updateEmp;