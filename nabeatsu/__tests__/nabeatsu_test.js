"use strict;"

import {
  goCrazyInIf,
  goCrazyInTernary,
} from "../src/nabeatsu";

const nums = [...Array(40).keys()].map(i => ++i);

test("goCrazyInIf", () => {
  for (const num of nums) {
    if (num % 3 === 0 || String(num).includes("3")) {
      expect(goCrazyInIf(num)).toBe(`${num}!`);
    } else {
      expect(goCrazyInIf(num)).toBe(`${num}`);
    }
  };
});

test("goCrazyInTernary", () => {
  for (const num of nums) {
    if (num % 3 === 0 || String(num).includes("3")) {
      expect(goCrazyInTernary(num)).toBe(`${num}!`);
    } else {
      expect(goCrazyInTernary(num)).toBe(`${num}`);
    }
  };
});
