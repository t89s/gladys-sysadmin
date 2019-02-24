var upgrade = require('./upgrade.js');

module.exports = function command(scope) {

	switch(scope.label) {
        case 'upgrade':
			upgrade();
        break;

        default:
        break;
    }
};
