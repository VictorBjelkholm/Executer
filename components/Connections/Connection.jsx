var React = require('react');

var Connection = React.createClass({
	getInitialState: function() {
		return {
			focus: false,
			isValid: this.isValid(),
			isChecked: false
		}
	},
	isValid: function() {
		var ret = true;
		if(this.props.data.connection_name.trim() === "") {
			ret = false;
		}
		if(this.props.data.hostname.trim() === "") {
			ret = false;
		}
		if(this.props.data.user.trim() === "") {
			ret = false;
		}
		return ret;
	},
	focus: function() {
		this.setState({focus: true});
	},
	handleOnChange: function() {
		this.setState({isChecked: !this.state.isChecked});
	},
	render: function() {
		var notValidWarning;
		var el;
		var Checked = <input className="default-checkbox" type="checkbox" checked={this.props.data.default_connection} onChange={this.handleOnChange}/>
		if(!this.state.isValid) {
			notValidWarning = <h1>Connection is not valid</h1>
		}
		if(this.state.focus) {
			el = <div className="connection">
				{notValidWarning}
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
				{ Checked }
			</div>
		} else {
			el = <div className="connection" onClick={this.focus}>
				{notValidWarning}
				{this.props.data.connection_name}
				{ Checked }
			</div>
		}
		return el
	}
});

module.exports = Connection;
