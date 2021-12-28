"use strict;"

import {
  CalculationQuery
} from "../../src/queries/calculation_query";

const calulation_query = new CalculationQuery("foo");

test("test_f_with_zero", () => {
  expect(calulation_query.f(0)).toBe(1);
});

test("test_f_with_two", () => {
  expect(calulation_query.f(2)).toBe(2);
});

test("test_f_with_four", () => {
  expect(calulation_query.f(4)).toBe(348);
});
