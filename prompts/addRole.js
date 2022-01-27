const inquirer = require('inquirer');
const index = require('../index');

const addRole = () => {
    inquirer
        .prompt([
            {
                name: 'name',
                message: `Enter the role's name`,
                type: 'input'
            },
            {
                name: 'salary',
                message: `Enter the roles's salary`,
                type: 'input'
            },
            {
                name: 'department',
                message: `Enter the roles's department`,
                type: 'input'
            }
        ])
        .then(function() {
            console.log('role added');
            index.makeSelection();
        })
}


exports.addRole = addRole;