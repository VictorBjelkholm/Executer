Events = require('../services/Mediator.js');
module.exports = [
	{
		key: '1',
		action: function() {
			Events.emit('change-mode', 'query')
		}
	},
	{
		key: '2',
		action: 'relations mode!'
	},
	{
		key: '3',
		action: function() {
			Events.emit('change-mode', 'connections')
		}
	},
	{
		key: '4',
		action: 'settings mode!'
	},
	{
		key: '5',
		action: 'exit mode!'
	}
];
