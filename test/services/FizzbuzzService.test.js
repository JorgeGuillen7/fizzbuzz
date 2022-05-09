const FizzbuzzService = require("./../../lib/services/FizzbuzzService");

describe("Tests for FizzbuzzService class", () => {
    test("Validation if the score is divisible by 3 and 5", () => {
        const explorer = { name: "Explorer", score: 15 };
        const explorerValidation =
			FizzbuzzService.applyValidationInExplorer(explorer);
        expect(explorerValidation).toEqual({
            name: "Explorer",
            score: 15,
            trick: "FIZZBUZZ",
        });
    });

    test("Validation if the score is divisible by 5", () => {
        const explorer = { name: "Explorer", score: 5 };
        const explorerValidation =
			FizzbuzzService.applyValidationInExplorer(explorer);
        expect(explorerValidation).toEqual({
            name: "Explorer",
            score: 5,
            trick: "BUZZ",
        });
    });

    test("Validation if the score is divisible by 3", () => {
        const explorer = { name: "Explorer", score: 3 };
        const explorerValidation =
			FizzbuzzService.applyValidationInExplorer(explorer);
        expect(explorerValidation).toEqual({
            name: "Explorer",
            score: 3,
            trick: "FIZZ",
        });
    });

    test("Validation if the score is not divisible by 3 and 5", () => {
        const explorer = { name: "Explorer", score: 1 };
        const explorerValidation =
			FizzbuzzService.applyValidationInExplorer(explorer);
        expect(explorerValidation).toEqual({
            name: "Explorer",
            score: 1,
            trick: 1,
        });
    });
});
