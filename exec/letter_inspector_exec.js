"use strict;"

import {
  LetterInspector
} from "../lib/letter_inspector";

const str1 = 'hogefoobar';
const str2 = 'abefghooor';
const str3 = 'hoge';
const str4 = 'piyopoopee';
const pattern1 = new LetterInspector(str1, str2);
const pattern2 = new LetterInspector(str1, str3);
const pattern3 = new LetterInspector(str1, str4);

console.log(pattern1.exactly_equal_size_and_include());
console.log(pattern2.exactly_equal_size_and_include());
console.log(pattern3.exactly_equal_size_and_include());
