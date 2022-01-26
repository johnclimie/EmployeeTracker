const inquirer = require('inquirer');

const addEmp = () => {
    inquirer
        .prompt([
            {
                name: 'fName',
                message: `Enter the employee's first name`,
                type: 'input'
            },
            {
                name: 'lName',
                message: `Enter the employee's last name`,
                type: 'input'
            },
            {
                name: 'role',
                message: `Enter the employee's role`,
                type: 'input'
            },
            {
                name: 'manager',
                message: `Enter the employee's manager`,
                type: 'input'
            }
        ])
        .then(function() {
            console.log('employee added');
        })
}


exports.addEmp = addEmp;