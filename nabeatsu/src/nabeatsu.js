"use strict;"

const goCrazyInIf = (num) => {
  if (num % 3 === 0 || String(num).includes("3")) {
    // Express the status of "crazy" with '!'
    return `${num}!`;
  }
  return `${num}`;
}

const goCrazyInTernary = (num) => {
  // Express the status of "crazy" with '!'
  return num % 3 === 0 || String(num).includes("3") ? `${num}!` : `${num}`;
}

export {
  goCrazyInIf,
  goCrazyInTernary,
};
