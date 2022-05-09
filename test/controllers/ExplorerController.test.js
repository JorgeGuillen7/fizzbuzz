const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Tests for ExplorerController class", () => {
    test("Get explorers by mission", () => {
        const explorersInNode = ExplorerController.getExplorerByMission("node");
        expect(explorersInNode).toHaveLength(10);
    });
});
