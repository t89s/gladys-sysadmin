var command = require('./lib/sysadmin.command.js');
var install = require('./lib/install.js');
var uninstall = require('./lib/uninstall.js');
var upgrade = require('./lib/upgrade.js');
module.exports = function(sails) {

	return {
		upgrade: upgrade,
		command: command,
		install: install,
		uninstall: uninstall
	};
};
