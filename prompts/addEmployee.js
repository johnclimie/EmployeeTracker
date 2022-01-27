const inquirer = require('inquirer');

const db = require('../connection').connection;
const index = require('../index');

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
                message: `Enter the employee's role id`,
                type: 'input'
            },
            {
                name: 'manager',
                message: `Enter the employee's manager id`,
                type: 'input'
            }
        ])
        .then(function(response) {
            db.execute(
                'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)',
                [response.fName, response.lName, response.role, response.manager],
                function(err) {
                    if (err) {
                        console.log(err);
                    }
                }
            )
            console.log('Employee added successfully');
            index.makeSelection();
        })
}

exports.addEmp = addEmp;