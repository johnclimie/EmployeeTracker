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
                message: `Enter the employee's role`,
                type: 'input'
            },
            {
                name: 'manager',
                message: `Enter the employee's manager`,
                type: 'input'
            }
        ])
        .then(function(response) {

            db.query('SELECT * FROM role', function (err, result) {
                if (err) {
                    throw err;
                }

                var roleId;
                for (i = 0; i < result.length; i++) {
                    if (result[i].title === response.role) {
                        roleId = result[i].id;
                    }
                }

                db.query('SELECT * FROM employee WHERE manager_id = 0', function(err, result) {
                    if (err) {
                        console.log(err);
                    }

                    var managerId;


                    if (response.manager === "") {
                        console.log('nothing was entered');
                        managerId = 0;
                    } else {
                        for (i = 0; i < result.length; i++) {
                            if (result[i].last_name === response.manager) {
                                managerId = result[i].id;
                            }
                        }
                    }

                    // for (i = 0; i < result.length; i++) {
                    //     if (result[i].last_name === response.manager) {
                    //         managerId = res[i].id;

                    //     }
                    // }

                    db.execute(
                        'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)',
                        [response.fName, response.lName, roleId, managerId],
                        function(err) {
                            if (err) {
                                console.log(err);
                            } else {
                                console.log('Employee added successfully');
                                index.makeSelection();
                            }
                        }
                    ) 
                })
            })
        })
}

exports.addEmp = addEmp;