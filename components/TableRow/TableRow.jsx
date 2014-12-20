var React = require('react');
var TableDataCell = require('../TableDataCell/TableDataCell.jsx');

var TableRow = React.createClass({
  componentDidUpdate: function() {
    if(this.props.active) {
      this.getDOMNode().scrollIntoView(false);
    }
  },
  render: function() {
    var className = "";
    if(this.props.active) {
      className = "activeRow";
    }
    var cells = Object.keys(this.props.data).map(function(cell, index) {
      var active = false;
      if(index === this.props.activeCell && this.props.active) {
        
        active = true;
      }
      var val = this.props.data[cell];
      if(val === undefined || val === null) {
        val = "NULL";
      }
      return <TableDataCell data={val} active={active}/>
    }.bind(this))
    return <tr className={className}>{cells}</tr>
  }
});

module.exports = TableRow;
