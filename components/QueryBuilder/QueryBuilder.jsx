var React = require('react');
var Events = require('../../services/Mediator.js');

var ace = require('brace');
require('brace/mode/sql');
require('brace/theme/idle_fingers');
require('brace/theme/monokai');
// TODO Waiting for VIM integration
//require('brace/keyboard/vim');


var QueryBuilder = React.createClass({
	componentDidMount: function() {
		this.editor = ace.edit('query-editor');
		this.editor.getSession().setMode('ace/mode/sql');
		// TODO https://github.com/thlorenz/brace/issues/21
		//this.editor.setKeyboardHandler('ace/keyboard/vim');
		this.editor.setTheme('ace/theme/monokai');
		if(!localStorage.getItem('queryEditorContent')) {
			this.editor.setValue('SHOW DATABASES;\nUSE build_api;\nSHOW TABLES;\nSELECT * FROM forms;');
		} else {
			this.editor.setValue(localStorage.getItem('queryEditorContent')); // or session.setValue
		}

		this.editor.getSession().on('change', function(e) {
			var content = this.editor.getValue(); // or session.getValue
			localStorage.setItem('queryEditorContent', content);
		}.bind(this));

		Events.on('change-mode', function(arg) {
			console.log('editor got the change-mode message', arg)
			if(arg === 'query') {
				this.editor.focus();
			} else {
				this.editor.blur();
			}
		}.bind(this));

		this.editor.commands.addCommand({
			name: 'ExecuteSelectedSQL',
			bindKey: {win: 'Alt-w',  mac: 'Alt-w'},
			exec: function(editor) {
			  var ret = editor.session.getTextRange(editor.getSelectionRange());
			  if(ret.trim() === "") {
			  	var currline = editor.getSelectionRange().start.row;
			  	ret = editor.session.getLine(currline);
			  }
				window.ipc.send('execute-query', ret);
			},
			readOnly: true // false if this command should not apply in readOnly mode
		});
		this.editor.commands.addCommand({
			name: 'FocusDataTable',
			bindKey: {win: 'Alt-]'},
			exec: function(editor) {
				window.ipc.send('change-mode', 'results');
				editor.blur();
			},
			readOnly: true // false if this command should not apply in readOnly mode
		});
	},
	render: function() {
		return <div id="query-editor"></div>
	}
});

module.exports = QueryBuilder;
