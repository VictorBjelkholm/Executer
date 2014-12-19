var React = require('react');

var ResultsTable = React.createClass({
	getInitialState: function() {
		return {
			data: this.props.data
		}
	},
	componentDidMount: function() {
		setTimeout(function() {
			console.log('Binding the IPC')
			console.log(window.ipc)
			window.ipc.on('execute-query-done', function(results) {
				this.setState({data: results});
			}.bind(this));
		}.bind(this), 1000);
	},
	render: function() {
		if(this.state.data !== undefined) {
			var rows = this.state.data.rows
			var heads = Object.keys(rows[0])
			var Heads = heads.map(function(head) {
				return <th>{head}</th>
			})
			var Rows = rows.map(function(row) {
				return <tr><td>{row.Database}</td></tr>
			})
		} else {
			var Heads = <th></th>
			var Rows = <tr><td></td></tr>
		}
		return (
			<table>
				<thead>
					{ Heads}
				</thead>
				<tbody>
					{ Rows }
				</tbody>
			</table>
		)
	}
});

module.exports = ResultsTable;
