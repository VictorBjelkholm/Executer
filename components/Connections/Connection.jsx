var React = require('react');

var Connection = React.createClass({
	getInitialState: function() {
		return {
			focus: false
		}
	},
	focus: function() {
		this.setState({focus: true});
	},
	render: function() {
		var el;
		if(this.state.focus) {
			el = <div className="connection">
				<div>
					{this.props.data.connection_name}
				</div>
				<div>
					{this.props.data.hostname}
				</div>
				<div>
					{this.props.data.port}
				</div>
				<div>
					{this.props.data.user}
				</div>
				<div>
					{this.props.data.password}
				</div>
			</div>
		} else {
			el = <div className="connection" onClick={this.focus}>{this.props.data.connection_name}</div>
		}
		return el
	}
});

module.exports = Connection;
