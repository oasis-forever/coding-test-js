"use strict;"

// Express the status of "crazy" with '!'

const goCrazyIfVer = (num) => {
  if (num % 3 === 0 || String(num).includes("3")) {
    return `${num}!`;
  } else {
    return `${num}`;
  }
};

const goCrazyTernaryVer = (num) => {
  return num % 3 === 0 || String(num).includes("3") ? `${num}!` : `${num}`;
};

export {
  goCrazyIfVer,
  goCrazyTernaryVer
};
