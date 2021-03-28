"use strict;"

const ifVer = (num) => {
  if (num % 3 === 0 && num % 5 === 0) {
    return "FizzBuzz";
  } else if (num % 3 === 0) {
    return "Fizz";
  } else if (num % 5 === 0) {
    return "Buzz";
  } else {
    return `${num}`;
  }
};

const ifAndTernaryVer = (num) => {
  if (num % 3 === 0) {
    return num % 5 === 0 ? "FizzBuzz" : "Fizz";
  } else {
    return num % 5 === 0 ? "Buzz" : `${num}`;
  }
};

const ternaryVer = (num) => {
  return num % 3 === 0 ? (num % 5 === 0 ? "FizzBuzz" : "Fizz") : num % 5 === 0 ? "Buzz" : `${num}`;
};

export {
  ifVer,
  ifAndTernaryVer,
  ternaryVer
};
