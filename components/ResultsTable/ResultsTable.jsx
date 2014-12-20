var React = require('react');
var TableHeadRow = require('../TableHeadRow/TableHeadRow.jsx');
var TableRow = require('../TableRow/TableRow.jsx');
var TableDataCell = require('../TableDataCell/TableDataCell.jsx');

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
		var head;
		var rows;
		var activeRow = this.state.activeRow;
		var activeCell = this.state.activeCell;
		if(this.state.data !== undefined) {
			var rowsFromState = this.state.data.rows;
			if(!Array.isArray(rowsFromState)) {
					heads = ["name", "value"];
					head = heads.map(function(head) {
						return <th>{head}</th>
					});
				rows = [];
				for (var row in rowsFromState) {
					rowEl = <tr>
						<TableDataCell data={row}/>
						<TableDataCell data={rowsFromState[row]}/>
					</tr>
					rows.push(rowEl);
				}
			} else {
				//New code
			var head = <TableHeadRow data={this.state.data.rows[0]}/>
			var rows = this.state.data.rows.map(function(row, index) {
				var active = false;
				//if(activeRow === index) {
				//	active = true;
				//}
				//return <TableRow data={row} active={active} activeCell={activeCell}/>
				return <TableRow data={row} active={active}/>
			});
			}
		} else {
			head = <th></th>
			rows = <tr></tr>
		}
    return <table>
      <thead>
        {head}
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
		return render;
	}
});

module.exports = ResultsTable;
