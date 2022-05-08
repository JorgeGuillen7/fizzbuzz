const Reader = require('./../../lib/utils/Reader');

class ExplorerService {
	static filterByMission(list, mission) {
		const explorersInMission = list.filter(
			(explorer) => explorer.mission === mission
		);
		return explorersInMission;
	}

	static getAmountOfExplorersByMission(list, mission) {
		const explorersInMission = list.filter(
			(explorer) => explorer.mission === mission
		);
		return `There are ${explorersInMission.length} explorers in ${mission} mission`;
	}
}

module.exports = ExplorerService;
