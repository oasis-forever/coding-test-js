"use strict;"

import {
  Nabeatsu
} from "../lib/nabeatsu";

test("Nabeatsu#goCrazyIfVer", () => {
  const nabeatsu = new Nabeatsu();
  expect(nabeatsu.goCrazyIfVer(1)).toBe("1");
  expect(nabeatsu.goCrazyIfVer(2)).toBe("2");
  expect(nabeatsu.goCrazyIfVer(3)).toBe("3!");
  expect(nabeatsu.goCrazyIfVer(4)).toBe("4");
  expect(nabeatsu.goCrazyIfVer(5)).toBe("5");
  expect(nabeatsu.goCrazyIfVer(6)).toBe("6!");
  expect(nabeatsu.goCrazyIfVer(7)).toBe("7");
  expect(nabeatsu.goCrazyIfVer(8)).toBe("8");
  expect(nabeatsu.goCrazyIfVer(9)).toBe("9!");
  expect(nabeatsu.goCrazyIfVer(10)).toBe("10");
  expect(nabeatsu.goCrazyIfVer(11)).toBe("11");
  expect(nabeatsu.goCrazyIfVer(12)).toBe("12!");
  expect(nabeatsu.goCrazyIfVer(13)).toBe("13!");
  expect(nabeatsu.goCrazyIfVer(14)).toBe("14");
  expect(nabeatsu.goCrazyIfVer(15)).toBe("15!");
  expect(nabeatsu.goCrazyIfVer(16)).toBe("16");
  expect(nabeatsu.goCrazyIfVer(17)).toBe("17");
  expect(nabeatsu.goCrazyIfVer(18)).toBe("18!");
  expect(nabeatsu.goCrazyIfVer(19)).toBe("19");
  expect(nabeatsu.goCrazyIfVer(20)).toBe("20");
  expect(nabeatsu.goCrazyIfVer(21)).toBe("21!");
  expect(nabeatsu.goCrazyIfVer(22)).toBe("22");
  expect(nabeatsu.goCrazyIfVer(23)).toBe("23!");
  expect(nabeatsu.goCrazyIfVer(24)).toBe("24!");
  expect(nabeatsu.goCrazyIfVer(25)).toBe("25");
  expect(nabeatsu.goCrazyIfVer(26)).toBe("26");
  expect(nabeatsu.goCrazyIfVer(27)).toBe("27!");
  expect(nabeatsu.goCrazyIfVer(28)).toBe("28");
  expect(nabeatsu.goCrazyIfVer(29)).toBe("29");
  expect(nabeatsu.goCrazyIfVer(30)).toBe("30!");
  expect(nabeatsu.goCrazyIfVer(31)).toBe("31!");
  expect(nabeatsu.goCrazyIfVer(32)).toBe("32!");
  expect(nabeatsu.goCrazyIfVer(33)).toBe("33!");
  expect(nabeatsu.goCrazyIfVer(34)).toBe("34!");
  expect(nabeatsu.goCrazyIfVer(35)).toBe("35!");
  expect(nabeatsu.goCrazyIfVer(36)).toBe("36!");
  expect(nabeatsu.goCrazyIfVer(37)).toBe("37!");
  expect(nabeatsu.goCrazyIfVer(38)).toBe("38!");
  expect(nabeatsu.goCrazyIfVer(39)).toBe("39!");
  expect(nabeatsu.goCrazyIfVer(40)).toBe("40");
});

test("Nabeatsu#goCrazyTernaryVer", () => {
  const nabeatsu = new Nabeatsu();
  expect(nabeatsu.goCrazyTernaryVer(1)).toBe("1");
  expect(nabeatsu.goCrazyTernaryVer(2)).toBe("2");
  expect(nabeatsu.goCrazyTernaryVer(3)).toBe("3!");
  expect(nabeatsu.goCrazyTernaryVer(4)).toBe("4");
  expect(nabeatsu.goCrazyTernaryVer(5)).toBe("5");
  expect(nabeatsu.goCrazyTernaryVer(6)).toBe("6!");
  expect(nabeatsu.goCrazyTernaryVer(7)).toBe("7");
  expect(nabeatsu.goCrazyTernaryVer(8)).toBe("8");
  expect(nabeatsu.goCrazyTernaryVer(9)).toBe("9!");
  expect(nabeatsu.goCrazyTernaryVer(10)).toBe("10");
  expect(nabeatsu.goCrazyTernaryVer(11)).toBe("11");
  expect(nabeatsu.goCrazyTernaryVer(12)).toBe("12!");
  expect(nabeatsu.goCrazyTernaryVer(13)).toBe("13!");
  expect(nabeatsu.goCrazyTernaryVer(14)).toBe("14");
  expect(nabeatsu.goCrazyTernaryVer(15)).toBe("15!");
  expect(nabeatsu.goCrazyTernaryVer(16)).toBe("16");
  expect(nabeatsu.goCrazyTernaryVer(17)).toBe("17");
  expect(nabeatsu.goCrazyTernaryVer(18)).toBe("18!");
  expect(nabeatsu.goCrazyTernaryVer(19)).toBe("19");
  expect(nabeatsu.goCrazyTernaryVer(20)).toBe("20");
  expect(nabeatsu.goCrazyTernaryVer(21)).toBe("21!");
  expect(nabeatsu.goCrazyTernaryVer(22)).toBe("22");
  expect(nabeatsu.goCrazyTernaryVer(23)).toBe("23!");
  expect(nabeatsu.goCrazyTernaryVer(24)).toBe("24!");
  expect(nabeatsu.goCrazyTernaryVer(25)).toBe("25");
  expect(nabeatsu.goCrazyTernaryVer(26)).toBe("26");
  expect(nabeatsu.goCrazyTernaryVer(27)).toBe("27!");
  expect(nabeatsu.goCrazyTernaryVer(28)).toBe("28");
  expect(nabeatsu.goCrazyTernaryVer(29)).toBe("29");
  expect(nabeatsu.goCrazyTernaryVer(30)).toBe("30!");
  expect(nabeatsu.goCrazyTernaryVer(31)).toBe("31!");
  expect(nabeatsu.goCrazyTernaryVer(32)).toBe("32!");
  expect(nabeatsu.goCrazyTernaryVer(33)).toBe("33!");
  expect(nabeatsu.goCrazyTernaryVer(34)).toBe("34!");
  expect(nabeatsu.goCrazyTernaryVer(35)).toBe("35!");
  expect(nabeatsu.goCrazyTernaryVer(36)).toBe("36!");
  expect(nabeatsu.goCrazyTernaryVer(37)).toBe("37!");
  expect(nabeatsu.goCrazyTernaryVer(38)).toBe("38!");
  expect(nabeatsu.goCrazyTernaryVer(39)).toBe("39!");
  expect(nabeatsu.goCrazyTernaryVer(40)).toBe("40");
});