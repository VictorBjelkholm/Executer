var React = require('react');

var ResultsTable = require('../components/ResultsTable/ResultsTable.jsx');
var QueryBuilder = require('../components/QueryBuilder/QueryBuilder.jsx');

module.exports = React.createClass({
	render: function() {
		return <div id="render-query"><QueryBuilder/><ResultsTable/></div>
	}
});
