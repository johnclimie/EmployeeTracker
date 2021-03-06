const inquirer = require("inquirer")

const db = require('../connection').connection;
const index = require('../index');

const updateEmp = () => {
    db.query(
        `SELECT last_name
         FROM employee;`, function(err, results) {
            if (err) {
                console.log(err);
            } else {
                let arrLast = [];
                results.forEach(person => arrLast.push(`${person.last_name}`));
                db.query(
                    `SELECT first_name
                     FROM employee;`, function(err, results) {
                         if (err) {
                             console.log(err);
                         } else {
                             let arrFirst = [];
                             results.forEach(person => arrFirst.push(`${person.first_name}`))

                             inquirer
                             .prompt([
                                 {
                                     name: 'lName',
                                     message: 'What is the last name of the employee you would like to update?',
                                     type: 'list',
                                     choices: arrLast
                                 },
                                 {
                                     name: 'fName',
                                     message: 'What is the first name of the employee you would like to update?',
                                     type: 'list',
                                     choices: arrFirst
                                 },
                                 {
                                     name: 'newRole',
                                     message: `Enter a new role for this employee`,
                                     type: 'input'
                                 }
                             ])
                             .then(function(response) {
                                db.query('SELECT * FROM role', function(err, result) {
                                    var newRole;

                                    for (var i = 0; i < result.length; i++) {
                                        if (result[i].title === response.newRole) {
                                            newRole = result[i].id;
                                        }
                                    }

                                    
                                    db.query(
                                        `UPDATE employee
                                         SET role_id = ${newRole}
                                         WHERE first_name = '${response.fName}' AND last_name = '${response.lName}'`,
                                       function(err) {
                                           if (err) {
                                               console.log(err);
                                           } else {
                                            console.log("Update was successful \n")
                                            index.makeSelection()
                                           }
                                       }
                                    )
                                })
                             })
                         }
                     }
                )
            }
         }
    )
}

exports.updateEmp = updateEmp;