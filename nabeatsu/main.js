"use strict;"

import {
  goCrazyInIf,
  goCrazyInTernary,
} from "./src/nabeatsu";

const nums = [...Array(40).keys()].map(i => ++i);

for (const num of nums) {
  console.log(goCrazyInIf(num));
};

for (const num of nums) {
  console.log(goCrazyInTernary(num));
};
