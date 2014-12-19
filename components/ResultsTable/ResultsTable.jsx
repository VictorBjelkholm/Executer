var React = require('react');

var ResultsTable = React.createClass({
	getInitialState: function() {
		return {
			data: this.props.data
		}
	},
	componentDidMount: function() {
		setTimeout(function() {
			//console.log('Binding the IPC')
			//console.log(window.ipc)
			window.ipc.on('execute-query-done', function(results) {
				this.setState({data: results});
			}.bind(this));
		}.bind(this), 1000);
	},
	render: function() {
		if(this.state.data !== undefined) {
			var rows = this.state.data.rows
			var isAffectedRows = (rows[0] === undefined);
			if(!isAffectedRows) {
				var heads = Object.keys(rows[0])
				var Heads = heads.map(function(head) {
					return <th>{head}</th>
				});
				var Rows = rows.map(function(row) {
					return <tr><td>{row}</td></tr>
				});
			} else {
				var heads = ["Name", "Value"];
				var Heads = heads.map(function(head) {
					return <th>{head}</th>
				});
				var Rows = [];
				for (var row in rows) {
					rowEl = <tr><td>{ row }</td><td>{rows[row] }</td></tr>
					Rows.push(rowEl)
				}
			}
		} else {
			var Heads = <th></th>
			var Rows = <tr><td></td></tr>
		}
		//console.log(Heads)
		//console.log(Rows)
		var render = (
			<table>
				<thead>
					<tr>
						{ Heads }
					</tr>
				</thead>
				<tbody>
					{ Rows }
				</tbody>
			</table>
		)
		return render
	}
});

module.exports = ResultsTable;
