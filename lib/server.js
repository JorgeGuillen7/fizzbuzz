const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (req, res) => {
    res.json({ message: "Fizzbuzz Api welcome!" });
});

app.get("/v1/explorers/:mission", (req, res) => {
    const mission = req.params.mission;
    const explorersInMission = ExplorerController.getExplorerByMission(mission);
    res.json(explorersInMission);
});

app.get("/v1/explorers/amount/:mission", (req, res) => {
    const mission = req.params.mission;
    const explorersAmountInMission =
        ExplorerController.getExplorersAmountByMission(mission);
    res.json({
        mission: req.params.mission,
        quantify: explorersAmountInMission,
    });
});

app.get("/v1/explorers/usernames/:mission", (req, res) => {
    const mission = req.params.mission;
    const explorersUsernames =
        ExplorerController.getExplorersUsernamesByMission(mission);
    res.json({ mission: req.params.mission, explorers: explorersUsernames });
});

app.get("/v1/explorers/score/:number", (req, res) => {
    const score = req.params.number;
    const validationNumber = ExplorerController.applyFizzbuzzValidation(score);
    res.json(validationNumber);
});

app.listen(port, () => {
    console.log(`Fizzbuzz API in localhost: ${port}`);
});
