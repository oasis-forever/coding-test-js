"use strict;"

import {
  fizzBuzzIfVer,
  fizzBuzzIfAndTernaryVer,
  fizzBuzzTernaryVer
} from "./src/fizzbuzz";

const nums = [...Array(100).keys()].map(i => ++i);

for (const num of nums) {
  console.log(fizzBuzzIfVer(num));
};

for (const num of nums) {
  console.log(fizzBuzzIfAndTernaryVer(num));
};

for (const num of nums) {
  console.log(fizzBuzzTernaryVer(num));
};
