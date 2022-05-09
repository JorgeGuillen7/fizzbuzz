class ExplorerService {
    static filterByMission(list, mission) {
        const explorersInMission = list.filter(
            (explorer) => explorer.mission === mission
        );
        return explorersInMission;
    }

    static getAmountOfExplorersByMission(list, mission) {
        const explorersInMission = this.filterByMission(list, mission);
        return `There are ${explorersInMission.length} explorers in ${mission} mission`;
    }

    static getExplorersUsernamesByMission(list, mission) {
        const explorersInMission = this.filterByMission(list, mission);
        const usernamesInMission = explorersInMission.map(
            ({ githubUsername }) => githubUsername
        );
        return usernamesInMission;
    }
}

module.exports = ExplorerService;
