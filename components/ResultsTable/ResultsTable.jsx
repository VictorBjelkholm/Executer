var React = require('react');

var ResultsTable = React.createClass({
	getInitialState: function() {
		return {
			data: this.props.data
		};
	},
	componentDidMount: function() {
		setTimeout(function() {
			window.ipc.on('execute-query-done', function(results) {
				this.setState({data: results});
			}.bind(this));
		}.bind(this), 1000);
	},
	render: function() {
		var heads;
		var Heads;
		var Rows;
		if(this.state.data !== undefined) {
			var rows = this.state.data.rows;
			if(!Array.isArray(rows)) {
					heads = ["name", "value"];
					Heads = heads.map(function(head) {
						return <th>{head}</th>
					});
				Rows = [];
				for (var row in rows) {
					rowEl = <tr><td>{ row }</td><td>{rows[row] }</td></tr>
					Rows.push(rowEl);
				}
			} else {
				heads = Object.keys(rows[0]);
				Heads = heads.map(function(head) {
					return <th>{head}</th>
				});
				Rows = rows.map(function(row) {
					var values = Object.keys(row).map(function(key) {
						var value = row[key];
					  if(typeof row[key] === 'object') {
							if(row[key] !== null) {
								value = row[key].toString();
							}
					  }
					  if(row[key] === null) {
					  	value = "NULL";
					  }
						return value;
					});
					elements = values.map(function(value) {
						return <td>{value}</td>
					});
					return <tr>{elements}</tr>
				});
			}
		} else {
			Heads = <th></th>
			Rows = <tr><td></td></tr>
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
		return render;
	}
});

module.exports = ResultsTable;
