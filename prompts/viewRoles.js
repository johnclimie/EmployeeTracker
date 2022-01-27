const makeSelection = require('../index');

const getName = () => {
    console.log('view roles');
    makeSelection.makeSelection();
}


exports.getName = getName;