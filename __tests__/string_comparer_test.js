"use strict;"

import {
  StringComparer
} from "../lib/string_comparer";

test("stringComparer#exactly_equal_size_and_include", () => {
  const str1 = "hogefoobar";
  const str2 = "abefghooor";
  const str3 = "hoge";
  const str4 = "piyopoopee";
  const strComparer = new StringComparer();
  expect(
    strComparer.exactly_equal_size_and_include(
      strComparer.sort_string(str1),
      strComparer.sort_string(str2)
    )
  ).toBe(true);
  expect(
    strComparer.exactly_equal_size_and_include(
      strComparer.sort_string(str1),
      strComparer.sort_string(str3)
    )
  ).toBe(false);
  expect(
    strComparer.exactly_equal_size_and_include(
      strComparer.sort_string(str1),
      strComparer.sort_string(str4)
    )
  ).toBe(false);
});
