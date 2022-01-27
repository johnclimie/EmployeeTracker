const db = require('../connection').connection;
const index = require('../index');

const getName = () => {
    console.log('view roles');
    index.makeSelection();
}


exports.getName = getName;