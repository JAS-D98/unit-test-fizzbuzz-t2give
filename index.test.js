const { FizzBuzz } = require("./index");

describe("FizzBuzz", () => {
    it("Return '3 - Fizz' if 3 is a multiple of 3 only", () => {
        expect(FizzBuzz(3)).toBe("3 - Fizz");
    });

    it("Return '5 - Buzz' if 5 is a multiple of 5 only", () => {
        expect(FizzBuzz(5)).toBe("5 - Buzz");
    });

    it("Return '15 - FizzBuzz' if 15 is a multiple of both 3 and 5", () => {
        expect(FizzBuzz(15)).toBe("15 - FizzBuzz");
    });

    it("Return '7' if 7 is not a multiple of 3 or 5", () => {
        expect(FizzBuzz(7)).toBe("7");
    });
});
