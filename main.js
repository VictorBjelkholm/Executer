var app = require('app');  // Module to control application life.
var BrowserWindow = require('browser-window');  // Module to create native browser window.

// Report crashes to our server.
require('crash-reporter').start();

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the javascript object is GCed.
var mainWindow = null;

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  if (process.platform != 'darwin')
    app.quit();
});

// This method will be called when atom-shell has done everything
// initialization and ready for creating browser windows.
app.on('ready', function() {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 800, height: 600});

  // and load the index.html of the app.
  mainWindow.loadUrl('file://' + __dirname + '/index.html');


	var mysql      = require('mysql');
	var connection = mysql.createConnection({
		host     : 'localhost',
		user     : 'root',
		password : '123',
		dateStrings: true
	});
	connection.connect();

	var ipc = require('ipc');
	ipc.on('execute-query', function(event, arg) {
		connection.query(arg, function(err, rows, fields) {
			if (err) throw err;
			event.sender.send('execute-query-done', {
				rows: rows,
				fields: fields
			});
		});
	});
	//ipc.on('change-mode', function(event, mode) {
	//	event.sender.send('changed-mode', mode);
	//});
	ipc.on('open-devtools', function() {
		mainWindow.openDevTools();
	});
	var clipboard = require('clipboard');
	ipc.on('copy-to-clipboard', function(event, value) {
		clipboard.writeText(value);
	});

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
		connection.end();
  });
});
