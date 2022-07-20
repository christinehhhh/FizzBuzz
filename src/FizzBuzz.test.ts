import { FizzBuzz } from "./FizzBuzz";

describe("FizzBuzz", () => {
  // Arrange: new creates an instance of a class
  const fizzBuzz = new FizzBuzz();

  //Test Unit 1:
  describe("Multiples of 3", () => {
    it("Fizz", () => {
      expect(fizzBuzz.resultOfNumber(3)).toEqual("Fizz");
      expect(fizzBuzz.resultOfNumber(9)).toEqual("Fizz");
      expect(fizzBuzz.resultOfNumber(21)).toEqual("Fizz");
      expect(fizzBuzz.resultOfNumber(27)).toEqual("Fizz");
    });
  });

  //Test Unit 2:
  describe("Multiples of 5", () => {
    it("Buzz", () => {
      expect(fizzBuzz.resultOfNumber(5)).toEqual("Buzz");
      expect(fizzBuzz.resultOfNumber(10)).toEqual("Buzz");
      expect(fizzBuzz.resultOfNumber(25)).toEqual("Buzz");
      expect(fizzBuzz.resultOfNumber(50)).toEqual("Buzz");
    });
  });

  //Test Unit 3:
  describe("Multiples of 3 and 5", () => {
    it("FizzBuzz", () => {
      expect(fizzBuzz.resultOfNumber(15)).toEqual("FizzBuzz");
      expect(fizzBuzz.resultOfNumber(30)).toEqual("FizzBuzz");
      expect(fizzBuzz.resultOfNumber(360)).toEqual("FizzBuzz");
    });
  });

  //Test Unit 4:
  describe("Not multiples of 3 and 5", () => {
    it("Not FizzBuzz", () => {
      expect(fizzBuzz.resultOfNumber(1)).toEqual("");
      expect(fizzBuzz.resultOfNumber(7)).toEqual("");
      expect(fizzBuzz.resultOfNumber(23)).toEqual("");
      expect(fizzBuzz.resultOfNumber(73)).toEqual("");
    });
  });
});
