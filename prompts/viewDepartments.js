const makeSelection = require('../index');

const getName = () => {
    console.log("view departmetns");
    makeSelection.makeSelection();
}


exports.getName = getName;