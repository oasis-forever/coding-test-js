"use strict;"

import {
  fizzBuzzInIf,
  fizzBuzzInIfAndTernary,
  fizzBuzzInTernary
} from "../src/fizzbuzz";

const nums = [...Array(100).keys()].map(i => ++i);

test("fizzBuzzInIf", () => {
  for (const num of nums) {
    if (num % 3 === 0 && num % 5 === 0) {
      expect(fizzBuzzInIf(num)).toBe("FizzBuzz");
    } else if (num % 3 === 0) {
      expect(fizzBuzzInIf(num)).toBe("Fizz");
    } else if (num % 5 === 0) {
      expect(fizzBuzzInIf(num)).toBe("Buzz");
    } else {
      expect(fizzBuzzInIf(num)).toBe(`${num}`);
    }
  };
});

test("fizzBuzzInIfAndTernary", () => {
  for (const num of nums) {
    if (num % 3 === 0 && num % 5 === 0) {
      expect(fizzBuzzInIfAndTernary(num)).toBe("FizzBuzz");
    } else if (num % 3 === 0) {
      expect(fizzBuzzInIfAndTernary(num)).toBe("Fizz");
    } else if (num % 5 === 0) {
      expect(fizzBuzzInIfAndTernary(num)).toBe("Buzz");
    } else {
      expect(fizzBuzzInIfAndTernary(num)).toBe(`${num}`);
    }
  };
});

test("fizzBuzzInTernary", () => {
  for (const num of nums) {
    if (num % 3 === 0 && num % 5 === 0) {
      expect(fizzBuzzInTernary(num)).toBe("FizzBuzz");
    } else if (num % 3 === 0) {
      expect(fizzBuzzInTernary(num)).toBe("Fizz");
    } else if (num % 5 === 0) {
      expect(fizzBuzzInTernary(num)).toBe("Buzz");
    } else {
      expect(fizzBuzzInTernary(num)).toBe(`${num}`);
    }
  };
});
