const Reader = require('./../../lib/utils/Reader');

class ExplorerService {
	static filterByMission(list, mission) {
		const explorersInMission = list.filter(
			(explorer) => explorer.mission === 'node'
		);
		return explorersInMission;
	}
}

module.exports = ExplorerService;
