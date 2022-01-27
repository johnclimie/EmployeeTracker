// Required NPM Packages
const cTable = require('console.table');
const inquirer = require('inquirer');

// Required JS files
const addDep = require('./prompts/addDepartment');
const addEmp = require('./prompts/addEmployee');
const addRole = require('./prompts/addRole');
const updateEmp = require('./prompts/updateEmployee');
const viewDep = require('./prompts/viewDepartments');
const viewEmp = require('./prompts/viewEmployees');
const viewRoles = require('./prompts/viewRoles');

// Asks user what they would like to do
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
        // Depending on what is selected, the user is presented with new output
        .then(function(response) {
            switch (response.selection) {
                case 'Add a Department':
                    addDep.addDep();
                    break;
                case 'Add an Employee':
                    addEmp.addEmp();
                    break;
                case 'Add a Role':
                    addRole.addRole();
                    break;
                case 'Update Employee':
                    updateEmp.updateEmp();
                    break;
                case 'View Departments':
                    viewDep.getName();
                    break;
                case 'View Employees':
                    viewEmp.getName();
                    break;
                case 'View Roles':
                    viewRoles.getName();
                    break;
            }
        })
}

makeSelection();

exports.makeSelection = makeSelection;
// exports.connection = connection;