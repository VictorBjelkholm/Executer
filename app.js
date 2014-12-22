// Libs
var React = require('react');
var Events = require('./services/Mediator.js');
//Start app

//Initialize global keyboard
require('./services/Keyboard.js');

Events.on('change-mode', function(mode) {
	// query
	// connections
	// Unmount current screen
	var didUnmount = React.unmountComponentAtNode(document.getElementById('render-app'));
	console.log('Did we unmount something?', didUnmount);

	console.log('Got change-mode event', mode)
	switch (mode) {
		case 'query':
			var QueryScreen = require('./screens/query.jsx');
			React.render(<div id="app" className={'mode ' + mode}><QueryScreen/></div>, document.getElementById('render-app'));
			return false;
			break;
		case 'connections':
			var ConnectionsScreen = require('./screens/connections.jsx');
			React.render(<div id="app" className={'mode ' + mode}><ConnectionsScreen/></div>, document.getElementById('render-app'));
			return false;
		default:
			//Statements executed when none of the values match the value of the expression
	}
});

//Starting mode
Events.emit('change-mode', 'query')
