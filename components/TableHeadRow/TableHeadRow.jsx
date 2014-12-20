var React = require('react');
var TableHeadCell = require('../TableHeadCell/TableHeadCell.jsx');

var TableHeadRow = React.createClass({
  render: function() {
    var cells = Object.keys(this.props.data).map(function(key) {
      return <TableHeadCell data={key}/>
    }.bind(this));
    return <tr>{cells}</tr>
  }
});

module.exports = TableHeadRow;
