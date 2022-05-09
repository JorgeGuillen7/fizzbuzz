const Reader = require("./../../lib/utils/Reader");
const ExplorerService = require("./../../lib/services/ExplorerService");
const FizzbuzzService = require("./../../lib/services/FizzbuzzService");

class ExplorerController {
    static getExplorerByMission(mission) {
        const jsonFile = Reader.readJsonFile("explorers.json");
        return ExplorerService.filterByMission(jsonFile, mission);
    }
}

module.exports = ExplorerController;
