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
		//TODO write tests that checks the content of the queries
		it('SHOW DATABASES;', function() {
			results_table = createResultsTable(fixtures.showDatabasesQuery);
			headEl = TestUtils.scryRenderedDOMComponentsWithTag(results_table, 'th')
			dataEl = TestUtils.scryRenderedDOMComponentsWithTag(results_table, 'td')
			expect(dataEl[0].getDOMNode().innerHTML).toMatch(/information_schema/)
			expect(dataEl[1].getDOMNode().innerHTML).toMatch(/build_api/)
			expect(headEl.length).toBe(1)
			expect(dataEl.length).toBe(17)
		});
		it('USE', function() {
			results_table = createResultsTable(fixtures.useDatabaseQuery);
			headEl = TestUtils.scryRenderedDOMComponentsWithTag(results_table, 'th')
			dataEl = TestUtils.scryRenderedDOMComponentsWithTag(results_table, 'td')
			expect(dataEl[0].getDOMNode().innerHTML).toMatch(/affectedRows/)
			expect(dataEl[1].getDOMNode().innerHTML).toMatch(/0/)
			expect(headEl.length).toBe(2)
			expect(dataEl.length).toBe(16)
		});
		it('SHOW TABLES;', function() {
			results_table = createResultsTable(fixtures.showTablesQuery);
			headEl = TestUtils.scryRenderedDOMComponentsWithTag(results_table, 'th')
			dataEl = TestUtils.scryRenderedDOMComponentsWithTag(results_table, 'td')
			expect(dataEl[0].getDOMNode().innerHTML).toMatch(/configurations/)
			expect(dataEl[1].getDOMNode().innerHTML).toMatch(/fields/)
			expect(headEl.length).toBe(1)
			expect(dataEl.length).toBe(6)
		});
		it('SELECT * FROM', function() {
			results_table = createResultsTable(fixtures.selectAllFromQuery);
			headEl = TestUtils.scryRenderedDOMComponentsWithTag(results_table, 'th')
			cells = TestUtils.scryRenderedDOMComponentsWithTag(results_table, 'td')
			rows = TestUtils.scryRenderedDOMComponentsWithTag(results_table, 'tr')

			expect(cells[0].getDOMNode().innerHTML).toMatch(/Object/)
			expect(cells[1].getDOMNode().innerHTML).toMatch(/NULL/)
			expect(cells[2].getDOMNode().innerHTML).toMatch(/1/)
			expect(cells[3].getDOMNode().innerHTML).toMatch(/Hello Title/)
			expect(cells[4].getDOMNode().innerHTML).toMatch(/EEILQq8Q/)

			expect(rows[1].getDOMNode().innerHTML).toMatch(/EEILQq8Q/)
			expect(rows[2].getDOMNode().innerHTML).toMatch(/K5xriEzQ/)
			expect(rows[3].getDOMNode().innerHTML).toMatch(/xSgroae2/)

			expect(headEl.length).toBe(6) // number of names
			expect(rows.length).toBe(18 + 1) // rows + header row
			expect(cells.length).toBe(6 * 18) // nr names * rows
		});
	});
});
