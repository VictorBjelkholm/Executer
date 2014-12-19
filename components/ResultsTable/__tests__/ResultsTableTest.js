jest.dontMock('../ResultsTable.jsx');
jest.dontMock('./fixtures.js');

var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var ResultsTable = require('../ResultsTable.jsx');
var fixtures = require('./fixtures.js');

function createResultsTable(fixture) {
			var results_table = TestUtils.renderIntoDocument(
				<ResultsTable data={fixture} />
			);
			return results_table;
}

describe('ResultsTable', function() {
	describe('renders the correct tags', function() {
		var results_table;
		it('SHOW DATABASES;', function() {
			results_table = createResultsTable(fixtures.showDatabasesQuery);
			headEl = TestUtils.scryRenderedDOMComponentsWithTag(results_table, 'th')
			dataEl = TestUtils.scryRenderedDOMComponentsWithTag(results_table, 'td')
			expect(headEl.length).toBe(1)
			expect(dataEl.length).toBe(17)
		});
		it('USE', function() {
			results_table = createResultsTable(fixtures.useDatabaseQuery);
			headEl = TestUtils.scryRenderedDOMComponentsWithTag(results_table, 'th')
			dataEl = TestUtils.scryRenderedDOMComponentsWithTag(results_table, 'td')
			expect(headEl.length).toBe(2)
			expect(dataEl.length).toBe(16)
		});
		it('SHOW TABLES;', function() {
			results_table = createResultsTable(fixtures.showTablesQuery);
			headEl = TestUtils.scryRenderedDOMComponentsWithTag(results_table, 'th')
			dataEl = TestUtils.scryRenderedDOMComponentsWithTag(results_table, 'td')
			expect(headEl.length).toBe(1)
			expect(dataEl.length).toBe(6)
		});
	});
});
