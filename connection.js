// Creates SQL connection
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'empTracker_db'
});

exports.connection = connection;