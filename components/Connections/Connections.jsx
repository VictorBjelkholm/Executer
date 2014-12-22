var React = require('react');

var ConnService = {
	loadAll: function() {
		return JSON.parse(localStorage.getItem('connections'));
	},
	saveAll: function(connections) {
		return localStorage.setItem('connections', JSON.stringify);
	}
}

var Connections = React.createClass({
	render: function() {
		//var connections = ConnService.loadAll();
		//Connections = connections.map(function(connection) {
		//	return <Connection data={connection}/>
		//})
		return <h1>Im a connection!</h1>
	}
});

module.exports = Connections;
