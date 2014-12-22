//Guy is supposed to be responseble for events and shit.

var events = require('events');
var EventEmitter = new events.EventEmitter();

EventEmitter.on('mode-change', function() {
	console.log('Mode changed from mediator!')
});


module.exports = EventEmitter;
