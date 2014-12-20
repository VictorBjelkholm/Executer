var React = require('react');

function capitalize(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

var ModeIndicator = React.createClass({
	getInitialState: function() {
		return {
			mode: 'query'
		}
	},
	componentDidMount: function() {
		var interval = setInterval(function() {
			try {
			window.ipc.on('changed-mode', function(mode) {
				this.setState({mode: mode});
			}.bind(this));
			clearInterval(interval);
			} catch(e) {
			}
		}.bind(this), 10)
	},
	render: function() {
		var modeClass = "render-mode-" + this.state.mode;
		return <div className={modeClass}>{capitalize(this.state.mode)}</div>
	}
});

module.exports = ModeIndicator;
