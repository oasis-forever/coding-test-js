"use strict;"

const fizzBuzzInIf = (num) => {
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

const fizzBuzzInIfAndTernary = (num) => {
  if (num % 3 === 0) {
    return num % 5 === 0 ? "FizzBuzz" : "Fizz";
  }
  return num % 5 === 0 ? "Buzz" : `${num}`;
}

const fizzBuzzInTernary = (num) => {
  return num % 3 === 0 ? (num % 5 === 0 ? "FizzBuzz" : "Fizz") : num % 5 === 0 ? "Buzz" : `${num}`;
}

export {
  fizzBuzzInIf,
  fizzBuzzInIfAndTernary,
  fizzBuzzInTernary
};
