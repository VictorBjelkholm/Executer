// Libs
var React = require('react');
//Start app

//Initialize global keyboard
require('./services/Keyboard.js');

var QueryScreen = require('./screens/query.jsx');
React.render(<div id="app"><QueryScreen/></div>, document.getElementById('render-app'));
