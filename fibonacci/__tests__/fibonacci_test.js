"use strict;"

import {
  fibonacci
} from "../src/fibonacci";

test("Fibonacci1", () => {
  expect(fibonacci(0, 10)).toStrictEqual(
    [0, 1, 1, 2, 3, 5, 8, 13, 21, 34],
  );
});

test("Fibonacci2", () => {
  expect(fibonacci(10, 10)).toStrictEqual(
    [10, 11, 21, 32, 53, 85, 138, 223, 361, 584],
  );
});
