"use strict;"

import {
  Application
} from "../src/application";

const str_1     = "hogefoobar";
const str_2     = "abefghooor";
const str_3     = "hoge";
const str_4     = "piyopoopee";
const pattern_1 = new Application(str_1, str_2);
const pattern_2 = new Application(str_1, str_3);
const pattern_3 = new Application(str_1, str_4);

test("Application#exactly_equal_size_and_included_1", () => {
  expect(pattern_1.exactly_equal_size_and_included()).toBe(true);
});

test("Application#exactly_equal_size_and_included_2", () => {
  expect(pattern_2.exactly_equal_size_and_included()).toBe(false);
});

test("Application#exactly_equal_size_and_included_3", () => {
  expect(pattern_3.exactly_equal_size_and_included()).toBe(false);
});
