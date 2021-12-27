"use strict;"

import {
  fizzBuzzInIf,
  fizzBuzzInIfAndTernary,
  fizzBuzzInTernary
} from "./src/fizzbuzz";

const nums = [...Array(100).keys()].map(i => ++i);

for (const num of nums) {
  console.log(fizzBuzzInIf(num));
};

for (const num of nums) {
  console.log(fizzBuzzInIfAndTernary(num));
};

for (const num of nums) {
  console.log(fizzBuzzInTernary(num));
};
