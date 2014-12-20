var ResultsTable = require('./components/ResultsTable/ResultsTable.jsx');
var ModeIndicator = require('./components/ModeIndicator/ModeIndicator.jsx');
var React = require('react');

React.render(<ResultsTable/>, document.getElementById('render-results'));
React.render(<ModeIndicator/>, document.getElementById('render-mode-indicator'));
