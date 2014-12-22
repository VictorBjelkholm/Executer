var Events = require('../services/Mediator.js');
require('mousetrap');
//TODO unify with ResultsTable
var modesMap = require('../constants/keyboard.js');

modesMap.forEach(function(binding) {
	Mousetrap.bind('alt+' + binding.key, function() {
		console.log(binding.action);
		return false;
	});
});
Mousetrap.bind('alt+[', function(e) {
		Events.emit('change-mode', 'query');
		return false;
});

Mousetrap.bind('alt+]', function(e) {
		Events.emit('change-mode', 'results');
		return false;
});

Mousetrap.bind('ctrl+shift+i', function() {
		window.ipc.send('open-devtools');
});
