"use strict;"

// Express the status of "crazy" with '!'

const Nabeatsu = class {
  goCrazyIfVer(num) {
    if (num % 3 === 0 || String(num).includes("3")) {
      return `${num}!`;
    }
    return `${num}`;
  }
  goCrazyTernaryVer(num) {
    return num % 3 === 0 || String(num).includes("3") ? `${num}!` : `${num}`;
  }
};

export {
  Nabeatsu
};
