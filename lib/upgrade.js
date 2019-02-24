const Promise = require('bluebird');
var exec = require('child_process').exec;

module.exports = function upgrade(){

		return gladys.param.getValue('UPGRADE_CMD')
        .then((cmd) => {
			sails.log.debug('exec parameter :' + cmd);
			if((typeof cmd != 'undefined') && cmd != null)
				exec(cmd);
			}).catch(function(err){sails.log.debug('Error UPGRADE_CMD : ' + UPGRADE_CMD + ' parameter')});
	}
