const Reader = require('./../../lib/utils/Reader');
const ExplorerService = require('./../../lib/services/ExplorerService');

const jsonFile = Reader.readJsonFile('test/data/explorersDemo.json');

describe('Tests for ExplorerService class', () => {
	test('Method to filter by mission', () => {
		const explorersInNode = ExplorerService.filterByMission(
			jsonFile,
			'node'
		);
		expect(explorersInNode).toEqual([
			{
				name: 'Woopa1',
				githubUsername: 'ajolonauta1',
				score: 3,
				mission: 'node',
				stacks: ['javascript', 'reasonML', 'elm'],
			},
			{
				name: 'Woopa3',
				githubUsername: 'ajolonauta3',
				score: 15,
				mission: 'node',
				stacks: ['elixir', 'groovy', 'reasonML'],
			},
		]);
	});

	test('Method to get the amount of explorers by mission', () => {
		const AmountOfExplorersInNode =
			ExplorerService.getAmountOfExplorersByMission(jsonFile, 'node');
		expect(AmountOfExplorersInNode).toBe(
			'There are 2 explorers in node mission'
		);
	});
});
