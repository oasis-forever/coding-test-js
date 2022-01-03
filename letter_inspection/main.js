"use strict;"

import {
  LetterInspector
} from "./src/letter_inspector";

const str_1     = 'hogefoobar';
const str_2     = 'abefghooor';
const str_3     = 'hoge';
const str_4     = 'piyopoopee';
const pattern_1 = new LetterInspector(str_1, str_2);
const pattern_2 = new LetterInspector(str_1, str_3);
const pattern_3 = new LetterInspector(str_1, str_4);

console.log(pattern_1.exactly_equal_size_and_included());
console.log(pattern_2.exactly_equal_size_and_included());
console.log(pattern_3.exactly_equal_size_and_included());
