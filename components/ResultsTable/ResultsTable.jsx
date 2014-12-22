var React = require('react');
var TableHeadRow = require('../TableHeadRow/TableHeadRow.jsx');
var TableRow = require('../TableRow/TableRow.jsx');
var TableDataCell = require('../TableDataCell/TableDataCell.jsx');
var yieldsK = require('yields-k')(window);

var ResultsTable = React.createClass({
	incrementActiveRow: function() {
		if(this.state.activeRow + 1 == this.state.rowsCount) {
			return false;
		}
		this.setState({
			activeRow: this.state.activeRow + 1
		});
		return false;
	},
	incrementActiveCell: function() {
		if(this.state.activeCell + 1 == this.state.cellsCount) {
			return false;
		}
		this.setState({
			activeCell: this.state.activeCell + 1
		});
		return false;
	},
	decrementActiveRow: function() {
		if(this.state.activeRow < 1) {
			return false;
		}
		this.setState({
			activeRow: this.state.activeRow - 1
		});
		return false;
	},
	decrementActiveCell: function() {
		if(this.state.activeCell < 1) {
			return false;
		}
		this.setState({
			activeCell: this.state.activeCell - 1
		});
		return false;
	},
	copyCurrentCell: function() {
		var property = Object.keys(this.state.data.rows[0])[this.state.activeCell];
		var value = this.state.data.rows[this.state.activeRow][property];
		window.ipc.send('copy-to-clipboard', value);
	},
	getInitialState: function() {
		return {
			activeRow: 0,
			activeCell: 0,
			data: this.props.data
		};
	},
	componentDidMount: function() {
		setTimeout(function() {
			window.ipc.on('execute-query-done', function(results) {
				this.setState({data: results});
			}.bind(this));
		}.bind(this), 1000);
    var keyMap = [
      {
        key: ['j', 'down'],
        action: 'incrementActiveRow'
      },
      {
        key: ['k', 'up'],
        action: 'decrementActiveRow'
      },
      {
        key: ['h', 'left'],
        action: 'decrementActiveCell'
      },
      {
        key: ['l', 'right'],
        action: 'incrementActiveCell'
      },
      {
        key: 'enter',
        action: 'editCurrentCell'
      },
			{
				key: 'ctrl + c',
				action: 'copyCurrentCell'
			}
    ];
		yieldsK('f', function() {
			console.log('pressed F');
		});
    keyMap.forEach(function(el) {
      if(Array.isArray(el.key)) {
        el.key.forEach(function(keyToMap) {
          yieldsK(keyToMap, this[el.action]);
        }.bind(this));
      } else {
        yieldsK(el.key, this[el.action]);
      }
    }.bind(this));
		if(this.state.data !== undefined && this.state.data.rows[0] !== undefined){
			this.setState({
				rowsCount: this.state.data.rows.length,
				cellsCount: Object.keys(this.state.data.rows[0]).length
			});
		}
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
						return <th key={head}>{head}</th>
					});
				rows = [];
				for (var row in rowsFromState) {
					rowEl = <tr key={row}>
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
				if(activeRow === index) {
					active = true;
				}
				return <TableRow key={index} data={row} active={active} activeCell={activeCell}/>
			});
			}
		}
    return <table id="results-table">
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
