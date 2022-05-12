class FizzbuzzService {
    static applyValidationInExplorer(explorer) {
        if (explorer.score % 3 === 0 && explorer.score % 5 === 0) {
            explorer.trick = "FIZZBUZZ";
            return explorer;
        } else if (explorer.score % 5 === 0) {
            explorer.trick = "BUZZ";
            return explorer;
        } else if (explorer.score % 3 === 0) {
            explorer.trick = "FIZZ";
            return explorer;
        } else {
            explorer.trick = explorer.score;
            return explorer;
        }
    }

    static applyValidationInNumber(number) {
        if (number % 3 === 0 && number % 5 === 0) {
            const explorer = { score: number, trick: "Fizzbuzz" };
            return explorer;
        } else if (number % 5 === 0) {
            const explorer = { score: number, trick: "Buzz" };
            return explorer;
        } else if (number % 3 === 0) {
            const explorer = { score: number, trick: "Fizz" };
            return explorer;
        } else {
            const explorer = { score: number, trick: number };
            return explorer;
        }
    }
}

module.exports = FizzbuzzService;
