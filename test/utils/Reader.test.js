const Reader = require("./../../lib/utils/Reader");

describe("Unit tests for Reader class", () => {
    test("Read a JSON file through a path ", () => {
        const jsonFile = Reader.readJsonFile("test/data/explorersDemo.json");
        expect(jsonFile).toEqual([
            {
                name: "Woopa1",
                githubUsername: "ajolonauta1",
                score: 3,
                mission: "node",
                stacks: ["javascript", "reasonML", "elm"],
            },
            {
                name: "Woopa2",
                githubUsername: "ajolonauta2",
                score: 5,
                mission: "java",
                stacks: ["javascript", "groovy", "elm"],
            },
            {
                name: "Woopa3",
                githubUsername: "ajolonauta3",
                score: 15,
                mission: "node",
                stacks: ["elixir", "groovy", "reasonML"],
            },
        ]);
    });
});
