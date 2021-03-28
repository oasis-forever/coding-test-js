"use strict;"

const FizzBuzz = class {
  ifVer(num) {
    if (num % 3 === 0 && num % 5 === 0) {
      return "FizzBuzz";
    } else if (num % 3 === 0) {
      return "Fizz";
    } else if (num % 5 === 0) {
      return "Buzz";
    } else {
      return `${num}`;
    }
  }
  ifAndTernaryVer(num) {
    if (num % 3 === 0) {
      return num % 5 === 0 ? "FizzBuzz" : "Fizz";
    } else {
      return num % 5 === 0 ? "Buzz" : `${num}`;
    }
  }
  ternaryVer(num) {
    return num % 3 === 0 ? (num % 5 === 0 ? "FizzBuzz" : "Fizz") : num % 5 === 0 ? "Buzz" : `${num}`;
  }
};

export {
  FizzBuzz
};
