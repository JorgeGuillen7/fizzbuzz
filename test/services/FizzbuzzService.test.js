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

    test("Fizzbuzz validation receiving a number", () => {
        const explorerScore1 = FizzbuzzService.applyValidationInNumber(1);
        const explorerScore3 = FizzbuzzService.applyValidationInNumber(3);
        const explorerScore5 = FizzbuzzService.applyValidationInNumber(5);
        const explorerScore15 = FizzbuzzService.applyValidationInNumber(15);

        expect(explorerScore1).toEqual({ score: 1, trick: 1 });
        expect(explorerScore3).toEqual({ score: 3, trick: "Fizz" });
        expect(explorerScore5).toEqual({ score: 5, trick: "Buzz" });
        expect(explorerScore15).toEqual({ score: 15, trick: "Fizzbuzz" });
    });
});
