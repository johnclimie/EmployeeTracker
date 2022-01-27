const cTable = require('console.table');
const db = require('../connection').connection;

const index = require('../index');

const getName = () => {
    db.query(
        'SELECT * FROM role',
        function(err, results) {
            if (err) {
                console.log(err);
            } else {
                console.table(results);
                index.makeSelection();
            }
        }
    )
}

exports.getName = getName;