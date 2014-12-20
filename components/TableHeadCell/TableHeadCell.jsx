var React = require('react');

var TableHeadCell = React.createClass({
  render: function() {
    return <th>{this.props.data}</th>
  }
});

module.exports = TableHeadCell;
