jest.dontMock('../Connection.jsx');

var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var Connection = require('../Connection.jsx');

var fixtures = {
	happy: {
		connection_name: 'Localhost',
		hostname: 'localhost',
		port: 5555,
		user: 'root',
		password: '123',
		database: null,
		default_connection: true
	},
	sad: {
		connection_name: 'Localhost',
		hostname: '',
		port: 5555,
		user: 'root',
		password: '123',
		database: null,
		default_connection: false
	}
};

function createConnectionComponent(fixture) {
			var connection = TestUtils.renderIntoDocument(
				<Connection data={fixture} />
			);
			return connection;
}

describe('Connection', function() {
	it('show connection name only when small', function() {
		var connection = createConnectionComponent(fixtures.happy);
		connectionEl = TestUtils.findRenderedDOMComponentWithClass(connection, 'connection');
		expect(connectionEl.getDOMNode().innerHTML).toMatch(/Localhost/)
		expect(connectionEl.getDOMNode().innerHTML).not.toMatch(/localhost/)
		expect(connectionEl.getDOMNode().innerHTML).not.toMatch(/5555/)
		expect(connectionEl.getDOMNode().innerHTML).not.toMatch(/root/)
		expect(connectionEl.getDOMNode().innerHTML).not.toMatch(/123/)
		// Expand connection
		TestUtils.Simulate.click(connectionEl);
		expect(connectionEl.getDOMNode().innerHTML).toMatch(/Localhost/)
		expect(connectionEl.getDOMNode().innerHTML).toMatch(/localhost/)
		expect(connectionEl.getDOMNode().innerHTML).toMatch(/5555/)
		expect(connectionEl.getDOMNode().innerHTML).toMatch(/root/)
		expect(connectionEl.getDOMNode().innerHTML).toMatch(/123/)
	});
	it('show default checkbox as checked when default connection', function() {
		var happyConn = createConnectionComponent(fixtures.happy);
		var sadConn = createConnectionComponent(fixtures.sad);

		happyCheckbox = TestUtils.findRenderedDOMComponentWithClass(happyConn, 'default-checkbox');
		sadCheckbox = TestUtils.findRenderedDOMComponentWithClass(sadConn, 'default-checkbox');

		expect(happyCheckbox.getDOMNode().checked).toBe(true);
		expect(sadCheckbox.getDOMNode().checked).toBe(false);
	});
	it('show error message if not valid', function() {
	});
	it('cannot tick as default if not valid', function() {
	});
});
