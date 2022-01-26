// Required NPM Packages
const cTable = require('console.table');
const inquirer = require('inquirer');
const mysql = require('mysql2');

// Required JS files
const addDep = require('./prompts/addDepartment');
const addEmp = require('./prompts/addEmployee');
const addRole = require('./prompts/addRole');
const updateEmp = require('./prompts/updateEmployee');
const viewDep = require('./prompts/viewDepartments');
const viewEmp = require('./prompts/viewEmployees');
const viewRoles = require('./prompts/viewRoles');

function makeSelection() {
    inquirer
        .prompt([
            {
            name: 'selection', 
            message: 'What would you like to do?',
            type: 'list',
            choices: ['Add a Department', 'Add an Employee', 'Add a Role', 'Update Employee', 'View Departments', 'View Employees', 'View Roles']
            }
        ])
        .then(function(response) {
            switch (response.selection) {
                case 'Add a Department':
                    console.log(`Test ${addDep.getName()}`)
                    break;
                case 'Add an Employee':
                    console.log(`Test ${addEmp.getName()}`)
                    break;
                case 'Add a Role':
                    console.log(`Test ${addRole.getName()}`)
                    break;
                case 'Update Employee':
                    console.log(`Test ${updateEmp.getName()}`)
                    break;
                case 'View Departments':
                    console.log(`Test ${viewDep.getName()}`)
                    break;
                case 'View Employees':
                    console.log(`Test ${viewEmp.getName()}`)
                    break;
                case 'View Roles':
                    console.log(`Test ${viewRoles.getName()}`)
                    break;
            }
            makeSelection();
        })

};


makeSelection();

