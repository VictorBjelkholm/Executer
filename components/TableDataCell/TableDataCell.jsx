var React = require('react');

var TableDataCell = React.createClass({
  getInitialState: function() {
    return {
      editing: false
    }
  },
  //componentDidMount: function() {
  //  if(!this.props.active) {
  //    window.removeEventListener("edit-cell");
  //  } else {
  //  window.addEventListener("edit-cell", function(obj) {
  //    if(this.props.active) {
  //    
  //    
  //     this.setState({editing: true});
  //    }
////         console.log('Im getting edited!')
////         console.log(obj)
  //    }.bind(this));
  //  }
  //},
  render: function() {
    var className = "";
    //if(this.props.active) {
    //  className = "activeCell";
    //}
    //var element;
    //if(this.state.editing) {
    //  element = <td><input type="text" value={this.props.data}/></td>
    //} else {
      element = <td tabIndex="-1" className={className}>{this.props.data}</td>
    //}
    return element
  }
});

module.exports = TableDataCell;
