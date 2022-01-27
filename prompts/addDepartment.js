const inquirer = require('inquirer');

const db = require('../connection').connection;
const index = require('../index');

const addDep = () => {
    inquirer
        .prompt([
            {
                name: 'name',
                message: 'Enter the department name',
                type: 'input'
            }
        ])
        .then(function(response) {
            db.execute(
                'INSERT INTO department (name) VALUES (?)',
                [response.name],
                function(err) {
                    if (err) {
                        console.log(err);
                    }
                }
            )
            console.log('Department added successfully');
            index.makeSelection();
        })
}

exports.addDep = addDep;