const index = require('../index');

const getName = () => {
    console.log('view employees');
    index.makeSelection();
}


exports.getName = getName;