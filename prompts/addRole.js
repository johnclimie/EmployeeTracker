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
                message: `Enter the roles's department`,
                type: 'input'
            }
        ])
        .then(function(response) {

            db.query('SELECT * FROM department', function (err, result) {
                if (err) {
                    throw err;
                }
                
                var depId;
                for (i = 0; i < result.length; i ++) {
                    if (result[i].name === response.department) {
                        depId = result[i].id;
                    }
                }

                db.execute(
                    'INSERT INTO role (title, salary, department_id) VALUES (?,?,?)',
                    [response.name, response.salary, depId],
                    function(err) {
                        if (err) {
                            console.log(err);
                        }
                    }
                )
            });

            console.log('Role added successfully');
            index.makeSelection();
        })
}

exports.addRole = addRole;