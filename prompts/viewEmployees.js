const makeSelection = require('../index');

const getName = () => {
    console.log('view employees');
    makeSelection.makeSelection();
}


exports.getName = getName;