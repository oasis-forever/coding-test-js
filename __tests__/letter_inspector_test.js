"use strict;"

import {
  LetterInspector
} from "../lib/letter_inspector";

test("stringComparer#exactly_equal_size_and_include", () => {
  const str1 = "hogefoobar";
  const str2 = "abefghooor";
  const str3 = "hoge";
  const str4 = "piyopoopee";
  const pattern1 = new LetterInspector(str1, str2);
  const pattern2 = new LetterInspector(str1, str3);
  const pattern3 = new LetterInspector(str1, str4);

  expect(pattern1.exactly_equal_size_and_include()).toBe(true);
  expect(pattern2.exactly_equal_size_and_include()).toBe(false);
  expect(pattern3.exactly_equal_size_and_include()).toBe(false);
});
