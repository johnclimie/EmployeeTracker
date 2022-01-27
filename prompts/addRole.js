const inquirer = require('inquirer');

const db = require('../connection').connection;
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
                message: `Enter the roles's department id`,
                type: 'input'
            }
        ])
        .then(function(response) {
            db.execute(
                'INSERT INTO role (title, salary, department_id) VALUES (?,?,?)',
                [response.name, response.salary, response.department],
                function(err) {
                    if (err) {
                        console.log(err);
                    }
                }
            )
            console.log('Role added successfully');
            index.makeSelection();
        })
}

exports.addRole = addRole;