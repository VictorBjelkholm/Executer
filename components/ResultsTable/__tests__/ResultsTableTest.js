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
	var results_table;
	describe('SHOW query', function() {
		beforeEach(function() {
			results_table = createResultsTable(fixtures.showDatabasesQuery);
		});
		it('renders the correct headers', function() {
			heads = TestUtils.scryRenderedDOMComponentsWithTag(results_table, 'th')
			rows = TestUtils.scryRenderedDOMComponentsWithTag(results_table, 'tr')
			expect(heads.length).toBe(1)
			expect(rows.length).toBe(17)
		});
	})
});
