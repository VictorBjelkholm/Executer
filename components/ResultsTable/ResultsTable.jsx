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
			if(!Array.isArray(rows)) {
					var heads = ["name", "value"];
					var Heads = heads.map(function(head) {
						return <th>{head}</th>
					});
				//console.log('rows if affected', rows)
				//var Rows = rows.map(function(row) {
				//	console.log(row)
				//	//return <tr><td>{row}</td></tr>
				//});
				var Rows = [];
				for (var row in rows) {
					//console.log(row)
					rowEl = <tr><td>{ row }</td><td>{rows[row] }</td></tr>
					Rows.push(rowEl)
				}
			} else {
				var heads = Object.keys(rows[0])
				var Heads = heads.map(function(head) {
					return <th>{head}</th>
				});
				//console.log('rows if not affected', rows)
				var Rows = rows.map(function(row) {
					//console.log(typeof(row))
					return <tr><td>{row}</td></tr>
				});
			}
		} else {
			var Heads = <th></th>
			var Rows = <tr><td></td></tr>
		}
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
