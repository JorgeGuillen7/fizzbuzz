const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Tests for ExplorerController class", () => {
    test("Get explorers by mission", () => {
        const explorersInNode = ExplorerController.getExplorerByMission("node");
        expect(explorersInNode).toHaveLength(10);
    });

    test("Get explorers usernames by mission", () => {
        const explorersUsernames =
            ExplorerController.getExplorersUsernamesByMission("node");
        expect(explorersUsernames).toEqual([
            "ajolonauta1",
            "ajolonauta2",
            "ajolonauta3",
            "ajolonauta4",
            "ajolonauta5",
            "ajolonauta11",
            "ajolonauta12",
            "ajolonauta13",
            "ajolonauta14",
            "ajolonauta15",
        ]);
    });
});
