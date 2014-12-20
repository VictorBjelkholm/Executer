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


//var ResultsTable = React.createClass({
//  incrementActiveRow: function() {
//    if(this.state.activeRow + 1 == this.state.rowsCount) {
//      return false;
//    }
//    this.setState({
//      activeRow: this.state.activeRow + 1
//    });
//    return false;
//  },
//  incrementActiveCell: function() {
//    if(this.state.activeCell + 1 == this.state.cellsCount) {
//      return false;
//    }
//    this.setState({
//      activeCell: this.state.activeCell + 1
//    });
//    return false;
//  },
//  decrementActiveRow: function() {
//    if(this.state.activeRow < 1) {
//      return false;
//    }
//    this.setState({
//      activeRow: this.state.activeRow - 1
//    });
//    return false;
//  },
//  decrementActiveCell: function() {
//    if(this.state.activeCell < 1) {
//      return false;
//    }
//    this.setState({
//      activeCell: this.state.activeCell - 1
//    });
//    return false;
//  },
//  editCurrentCell: function() {
//    var event = new CustomEvent('edit-cell', {
//      detail: {
//        row: this.state.activeRow,
//        cell: this.state.activeCell,
//      }
//    });
//    window.dispatchEvent(event);
//  },
//  componentDidMount: function() {
//    var keyMap = [
//      {
//        key: ['j', 'down'],
//        action: 'incrementActiveRow'
//      },
//      {
//        key: ['k', 'up'],
//        action: 'decrementActiveRow'
//      },
//      {
//        key: ['h', 'left'],
//        action: 'decrementActiveCell'
//      },
//      {
//        key: ['l', 'right'],
//        action: 'incrementActiveCell'
//      },
//      {
//        key: 'enter',
//        action: 'editCurrentCell'
//      }
//    ];
//    keyMap.forEach(function(el) {
//      if(Array.isArray(el.key)) {
//        el.key.forEach(function(keyToMap) {
//          key(keyToMap, this[el.action]);
//        }.bind(this));
//      } else {
//        key(el.key, this[el.action]);
//      }
//    }.bind(this));
//    this.setState({
//      rowsCount: this.props.data.rows.length,
//      cellsCount: Object.keys(this.props.data.rows[0]).length
//    });
//  },
//  componentWillUnmount: function() {
//    key.unbind('j');
//    key.unbind('k');
//    key.unbind('h');
//    key.unbind('l');
//  },
//  getInitialState: function() {
//    return {
//      activeRow: 0,
//      activeCell: 0,
//      rowsCount: 0,
//      cellsCount: 0
//    }
//  },
//  render: function() {
//    var head = <TableHeadRow data={this.props.data.rows[0]}/>
//    var activeRow = this.state.activeRow;
//    var activeCell = this.state.activeCell;
//    var rows = this.props.data.rows.map(function(row, index) {
//      var active = false;
//      if(activeRow === index) {
//        active = true;
//      }
//      return <TableRow data={row} active={active} activeCell={activeCell}/>
//    });
//    return <table>
//      <thead>
//        {head}
//      </thead>
//      <tbody>
//        {rows}
//      </tbody>
//    </table>
//  }
//});

