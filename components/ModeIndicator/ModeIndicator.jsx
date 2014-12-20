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
		console.log('component did mount!')
		var interval = setInterval(function() {
			try {
				console.log('Trying to set event listener')
			window.ipc.on('changed-mode', function(mode) {
				console.log('Changed mode!', mode)
				this.setState({mode: mode});
			}.bind(this));
			clearInterval(interval);
			} catch(e) {
				console.log('window.ipc is not defined yet')
			}
		}.bind(this), 10)
	},
	render: function() {
		var modeClass = "render-mode-" + this.state.mode;
		console.log('modeClass!', modeClass)
		return <div className={modeClass}>{capitalize(this.state.mode)}</div>
	}
});

module.exports = ModeIndicator;
