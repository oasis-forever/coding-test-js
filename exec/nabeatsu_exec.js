"use strict;"

import {
  goCrazyIfVer,
  goCrazyTernaryVer,
} from "../lib/nabeatsu";

const nums = [...Array(40).keys()].map(i => ++i);

for (const num of nums) {
  console.log(goCrazyIfVer(num));
};

for (const num of nums) {
  console.log(goCrazyTernaryVer(num));
};
