// Required NPM Packages
const cTable = require('console.table');
const inquirer = require('inquirer');
const mysql = require('mysql2');

// Required JS files
const addDep = require('./prompts/addDepartment.js');
const addEmp = require('./prompts/addEmployee.js');
const addRole = require('./prompts/addRole.js');
const updateEmp = require('./prompts/updateEmployee.js');
const viewDep = require('./prompts/viewDepartments.js');
const viewEmp = require('./prompts/viewEmployees.js');
const viewRoles = require('./prompts/viewRoles.js');