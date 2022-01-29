// Required inquirer package
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
                choices: ['Add a department', 'Add an employee', 'Add a role', 'Update an employee', 'View all departments', 'View all employees', 'View all roles']
            }
        ])
        // Depending on what is selected, the user is presented with new output
        .then(function(response) {
            switch (response.selection) {
                case 'Add a department':
                    addDep.addDep();
                    break;
                case 'Add an employee':
                    addEmp.addEmp();
                    break;
                case 'Add a role':
                    addRole.addRole();
                    break;
                case 'Update an employee':
                    updateEmp.updateEmp();
                    break;
                case 'View all departments':
                    viewDep.getName();
                    break;
                case 'View all employees':
                    viewEmp.getName();
                    break;
                case 'View all roles':
                    viewRoles.getName();
                    break;
            }
        })
}

makeSelection();

exports.makeSelection = makeSelection;