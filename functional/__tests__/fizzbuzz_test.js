"use strict;"

import {
  ifVer,
  ifAndTernaryVer,
  ternaryVer
} from "../lib/fizzbuzz";

test("ifVer", () => {
  expect(ifVer(1)).toBe("1");
  expect(ifVer(2)).toBe("2");
  expect(ifVer(3)).toBe("Fizz");
  expect(ifVer(4)).toBe("4");
  expect(ifVer(5)).toBe("Buzz");
  expect(ifVer(6)).toBe("Fizz");
  expect(ifVer(7)).toBe("7");
  expect(ifVer(8)).toBe("8");
  expect(ifVer(9)).toBe("Fizz");
  expect(ifVer(10)).toBe("Buzz");
  expect(ifVer(11)).toBe("11");
  expect(ifVer(12)).toBe("Fizz");
  expect(ifVer(13)).toBe("13");
  expect(ifVer(14)).toBe("14");
  expect(ifVer(15)).toBe("FizzBuzz");
  expect(ifVer(16)).toBe("16");
  expect(ifVer(17)).toBe("17");
  expect(ifVer(18)).toBe("Fizz");
  expect(ifVer(19)).toBe("19");
  expect(ifVer(20)).toBe("Buzz");
  expect(ifVer(21)).toBe("Fizz");
  expect(ifVer(22)).toBe("22");
  expect(ifVer(23)).toBe("23");
  expect(ifVer(24)).toBe("Fizz");
  expect(ifVer(25)).toBe("Buzz");
  expect(ifVer(26)).toBe("26");
  expect(ifVer(27)).toBe("Fizz");
  expect(ifVer(28)).toBe("28");
  expect(ifVer(29)).toBe("29");
  expect(ifVer(30)).toBe("FizzBuzz");
  expect(ifVer(31)).toBe("31");
  expect(ifVer(32)).toBe("32");
  expect(ifVer(33)).toBe("Fizz");
  expect(ifVer(34)).toBe("34");
  expect(ifVer(35)).toBe("Buzz");
  expect(ifVer(36)).toBe("Fizz");
  expect(ifVer(37)).toBe("37");
  expect(ifVer(38)).toBe("38");
  expect(ifVer(39)).toBe("Fizz");
  expect(ifVer(40)).toBe("Buzz");
  expect(ifVer(41)).toBe("41");
  expect(ifVer(42)).toBe("Fizz");
  expect(ifVer(43)).toBe("43");
  expect(ifVer(44)).toBe("44");
  expect(ifVer(45)).toBe("FizzBuzz");
  expect(ifVer(46)).toBe("46");
  expect(ifVer(47)).toBe("47");
  expect(ifVer(48)).toBe("Fizz");
  expect(ifVer(49)).toBe("49");
  expect(ifVer(50)).toBe("Buzz");
  expect(ifVer(51)).toBe("Fizz");
  expect(ifVer(52)).toBe("52");
  expect(ifVer(53)).toBe("53");
  expect(ifVer(54)).toBe("Fizz");
  expect(ifVer(55)).toBe("Buzz");
  expect(ifVer(56)).toBe("56");
  expect(ifVer(57)).toBe("Fizz");
  expect(ifVer(58)).toBe("58");
  expect(ifVer(59)).toBe("59");
  expect(ifVer(60)).toBe("FizzBuzz");
  expect(ifVer(61)).toBe("61");
  expect(ifVer(62)).toBe("62");
  expect(ifVer(63)).toBe("Fizz");
  expect(ifVer(64)).toBe("64");
  expect(ifVer(65)).toBe("Buzz");
  expect(ifVer(66)).toBe("Fizz");
  expect(ifVer(67)).toBe("67");
  expect(ifVer(68)).toBe("68");
  expect(ifVer(69)).toBe("Fizz");
  expect(ifVer(70)).toBe("Buzz");
  expect(ifVer(71)).toBe("71");
  expect(ifVer(72)).toBe("Fizz");
  expect(ifVer(73)).toBe("73");
  expect(ifVer(74)).toBe("74");
  expect(ifVer(75)).toBe("FizzBuzz");
  expect(ifVer(76)).toBe("76");
  expect(ifVer(77)).toBe("77");
  expect(ifVer(78)).toBe("Fizz");
  expect(ifVer(79)).toBe("79");
  expect(ifVer(80)).toBe("Buzz");
  expect(ifVer(81)).toBe("Fizz");
  expect(ifVer(82)).toBe("82");
  expect(ifVer(83)).toBe("83");
  expect(ifVer(84)).toBe("Fizz");
  expect(ifVer(85)).toBe("Buzz");
  expect(ifVer(86)).toBe("86");
  expect(ifVer(87)).toBe("Fizz");
  expect(ifVer(88)).toBe("88");
  expect(ifVer(89)).toBe("89");
  expect(ifVer(90)).toBe("FizzBuzz");
  expect(ifVer(91)).toBe("91");
  expect(ifVer(92)).toBe("92");
  expect(ifVer(93)).toBe("Fizz");
  expect(ifVer(94)).toBe("94");
  expect(ifVer(95)).toBe("Buzz");
  expect(ifVer(96)).toBe("Fizz");
  expect(ifVer(97)).toBe("97");
  expect(ifVer(98)).toBe("98");
  expect(ifVer(99)).toBe("Fizz");
  expect(ifVer(100)).toBe("Buzz");
});

test("ifAndTernaryVer", () => {
  expect(ifAndTernaryVer(1)).toBe("1");
  expect(ifAndTernaryVer(2)).toBe("2");
  expect(ifAndTernaryVer(3)).toBe("Fizz");
  expect(ifAndTernaryVer(4)).toBe("4");
  expect(ifAndTernaryVer(5)).toBe("Buzz");
  expect(ifAndTernaryVer(6)).toBe("Fizz");
  expect(ifAndTernaryVer(7)).toBe("7");
  expect(ifAndTernaryVer(8)).toBe("8");
  expect(ifAndTernaryVer(9)).toBe("Fizz");
  expect(ifAndTernaryVer(10)).toBe("Buzz");
  expect(ifAndTernaryVer(11)).toBe("11");
  expect(ifAndTernaryVer(12)).toBe("Fizz");
  expect(ifAndTernaryVer(13)).toBe("13");
  expect(ifAndTernaryVer(14)).toBe("14");
  expect(ifAndTernaryVer(15)).toBe("FizzBuzz");
  expect(ifAndTernaryVer(16)).toBe("16");
  expect(ifAndTernaryVer(17)).toBe("17");
  expect(ifAndTernaryVer(18)).toBe("Fizz");
  expect(ifAndTernaryVer(19)).toBe("19");
  expect(ifAndTernaryVer(20)).toBe("Buzz");
  expect(ifAndTernaryVer(21)).toBe("Fizz");
  expect(ifAndTernaryVer(22)).toBe("22");
  expect(ifAndTernaryVer(23)).toBe("23");
  expect(ifAndTernaryVer(24)).toBe("Fizz");
  expect(ifAndTernaryVer(25)).toBe("Buzz");
  expect(ifAndTernaryVer(26)).toBe("26");
  expect(ifAndTernaryVer(27)).toBe("Fizz");
  expect(ifAndTernaryVer(28)).toBe("28");
  expect(ifAndTernaryVer(29)).toBe("29");
  expect(ifAndTernaryVer(30)).toBe("FizzBuzz");
  expect(ifAndTernaryVer(31)).toBe("31");
  expect(ifAndTernaryVer(32)).toBe("32");
  expect(ifAndTernaryVer(33)).toBe("Fizz");
  expect(ifAndTernaryVer(34)).toBe("34");
  expect(ifAndTernaryVer(35)).toBe("Buzz");
  expect(ifAndTernaryVer(36)).toBe("Fizz");
  expect(ifAndTernaryVer(37)).toBe("37");
  expect(ifAndTernaryVer(38)).toBe("38");
  expect(ifAndTernaryVer(39)).toBe("Fizz");
  expect(ifAndTernaryVer(40)).toBe("Buzz");
  expect(ifAndTernaryVer(41)).toBe("41");
  expect(ifAndTernaryVer(42)).toBe("Fizz");
  expect(ifAndTernaryVer(43)).toBe("43");
  expect(ifAndTernaryVer(44)).toBe("44");
  expect(ifAndTernaryVer(45)).toBe("FizzBuzz");
  expect(ifAndTernaryVer(46)).toBe("46");
  expect(ifAndTernaryVer(47)).toBe("47");
  expect(ifAndTernaryVer(48)).toBe("Fizz");
  expect(ifAndTernaryVer(49)).toBe("49");
  expect(ifAndTernaryVer(50)).toBe("Buzz");
  expect(ifAndTernaryVer(51)).toBe("Fizz");
  expect(ifAndTernaryVer(52)).toBe("52");
  expect(ifAndTernaryVer(53)).toBe("53");
  expect(ifAndTernaryVer(54)).toBe("Fizz");
  expect(ifAndTernaryVer(55)).toBe("Buzz");
  expect(ifAndTernaryVer(56)).toBe("56");
  expect(ifAndTernaryVer(57)).toBe("Fizz");
  expect(ifAndTernaryVer(58)).toBe("58");
  expect(ifAndTernaryVer(59)).toBe("59");
  expect(ifAndTernaryVer(60)).toBe("FizzBuzz");
  expect(ifAndTernaryVer(61)).toBe("61");
  expect(ifAndTernaryVer(62)).toBe("62");
  expect(ifAndTernaryVer(63)).toBe("Fizz");
  expect(ifAndTernaryVer(64)).toBe("64");
  expect(ifAndTernaryVer(65)).toBe("Buzz");
  expect(ifAndTernaryVer(66)).toBe("Fizz");
  expect(ifAndTernaryVer(67)).toBe("67");
  expect(ifAndTernaryVer(68)).toBe("68");
  expect(ifAndTernaryVer(69)).toBe("Fizz");
  expect(ifAndTernaryVer(70)).toBe("Buzz");
  expect(ifAndTernaryVer(71)).toBe("71");
  expect(ifAndTernaryVer(72)).toBe("Fizz");
  expect(ifAndTernaryVer(73)).toBe("73");
  expect(ifAndTernaryVer(74)).toBe("74");
  expect(ifAndTernaryVer(75)).toBe("FizzBuzz");
  expect(ifAndTernaryVer(76)).toBe("76");
  expect(ifAndTernaryVer(77)).toBe("77");
  expect(ifAndTernaryVer(78)).toBe("Fizz");
  expect(ifAndTernaryVer(79)).toBe("79");
  expect(ifAndTernaryVer(80)).toBe("Buzz");
  expect(ifAndTernaryVer(81)).toBe("Fizz");
  expect(ifAndTernaryVer(82)).toBe("82");
  expect(ifAndTernaryVer(83)).toBe("83");
  expect(ifAndTernaryVer(84)).toBe("Fizz");
  expect(ifAndTernaryVer(85)).toBe("Buzz");
  expect(ifAndTernaryVer(86)).toBe("86");
  expect(ifAndTernaryVer(87)).toBe("Fizz");
  expect(ifAndTernaryVer(88)).toBe("88");
  expect(ifAndTernaryVer(89)).toBe("89");
  expect(ifAndTernaryVer(90)).toBe("FizzBuzz");
  expect(ifAndTernaryVer(91)).toBe("91");
  expect(ifAndTernaryVer(92)).toBe("92");
  expect(ifAndTernaryVer(93)).toBe("Fizz");
  expect(ifAndTernaryVer(94)).toBe("94");
  expect(ifAndTernaryVer(95)).toBe("Buzz");
  expect(ifAndTernaryVer(96)).toBe("Fizz");
  expect(ifAndTernaryVer(97)).toBe("97");
  expect(ifAndTernaryVer(98)).toBe("98");
  expect(ifAndTernaryVer(99)).toBe("Fizz");
  expect(ifAndTernaryVer(100)).toBe("Buzz");
});

test("ternaryVer", () => {
  expect(ternaryVer(1)).toBe("1");
  expect(ternaryVer(2)).toBe("2");
  expect(ternaryVer(3)).toBe("Fizz");
  expect(ternaryVer(4)).toBe("4");
  expect(ternaryVer(5)).toBe("Buzz");
  expect(ternaryVer(6)).toBe("Fizz");
  expect(ternaryVer(7)).toBe("7");
  expect(ternaryVer(8)).toBe("8");
  expect(ternaryVer(9)).toBe("Fizz");
  expect(ternaryVer(10)).toBe("Buzz");
  expect(ternaryVer(11)).toBe("11");
  expect(ternaryVer(12)).toBe("Fizz");
  expect(ternaryVer(13)).toBe("13");
  expect(ternaryVer(14)).toBe("14");
  expect(ternaryVer(15)).toBe("FizzBuzz");
  expect(ternaryVer(16)).toBe("16");
  expect(ternaryVer(17)).toBe("17");
  expect(ternaryVer(18)).toBe("Fizz");
  expect(ternaryVer(19)).toBe("19");
  expect(ternaryVer(20)).toBe("Buzz");
  expect(ternaryVer(21)).toBe("Fizz");
  expect(ternaryVer(22)).toBe("22");
  expect(ternaryVer(23)).toBe("23");
  expect(ternaryVer(24)).toBe("Fizz");
  expect(ternaryVer(25)).toBe("Buzz");
  expect(ternaryVer(26)).toBe("26");
  expect(ternaryVer(27)).toBe("Fizz");
  expect(ternaryVer(28)).toBe("28");
  expect(ternaryVer(29)).toBe("29");
  expect(ternaryVer(30)).toBe("FizzBuzz");
  expect(ternaryVer(31)).toBe("31");
  expect(ternaryVer(32)).toBe("32");
  expect(ternaryVer(33)).toBe("Fizz");
  expect(ternaryVer(34)).toBe("34");
  expect(ternaryVer(35)).toBe("Buzz");
  expect(ternaryVer(36)).toBe("Fizz");
  expect(ternaryVer(37)).toBe("37");
  expect(ternaryVer(38)).toBe("38");
  expect(ternaryVer(39)).toBe("Fizz");
  expect(ternaryVer(40)).toBe("Buzz");
  expect(ternaryVer(41)).toBe("41");
  expect(ternaryVer(42)).toBe("Fizz");
  expect(ternaryVer(43)).toBe("43");
  expect(ternaryVer(44)).toBe("44");
  expect(ternaryVer(45)).toBe("FizzBuzz");
  expect(ternaryVer(46)).toBe("46");
  expect(ternaryVer(47)).toBe("47");
  expect(ternaryVer(48)).toBe("Fizz");
  expect(ternaryVer(49)).toBe("49");
  expect(ternaryVer(50)).toBe("Buzz");
  expect(ternaryVer(51)).toBe("Fizz");
  expect(ternaryVer(52)).toBe("52");
  expect(ternaryVer(53)).toBe("53");
  expect(ternaryVer(54)).toBe("Fizz");
  expect(ternaryVer(55)).toBe("Buzz");
  expect(ternaryVer(56)).toBe("56");
  expect(ternaryVer(57)).toBe("Fizz");
  expect(ternaryVer(58)).toBe("58");
  expect(ternaryVer(59)).toBe("59");
  expect(ternaryVer(60)).toBe("FizzBuzz");
  expect(ternaryVer(61)).toBe("61");
  expect(ternaryVer(62)).toBe("62");
  expect(ternaryVer(63)).toBe("Fizz");
  expect(ternaryVer(64)).toBe("64");
  expect(ternaryVer(65)).toBe("Buzz");
  expect(ternaryVer(66)).toBe("Fizz");
  expect(ternaryVer(67)).toBe("67");
  expect(ternaryVer(68)).toBe("68");
  expect(ternaryVer(69)).toBe("Fizz");
  expect(ternaryVer(70)).toBe("Buzz");
  expect(ternaryVer(71)).toBe("71");
  expect(ternaryVer(72)).toBe("Fizz");
  expect(ternaryVer(73)).toBe("73");
  expect(ternaryVer(74)).toBe("74");
  expect(ternaryVer(75)).toBe("FizzBuzz");
  expect(ternaryVer(76)).toBe("76");
  expect(ternaryVer(77)).toBe("77");
  expect(ternaryVer(78)).toBe("Fizz");
  expect(ternaryVer(79)).toBe("79");
  expect(ternaryVer(80)).toBe("Buzz");
  expect(ternaryVer(81)).toBe("Fizz");
  expect(ternaryVer(82)).toBe("82");
  expect(ternaryVer(83)).toBe("83");
  expect(ternaryVer(84)).toBe("Fizz");
  expect(ternaryVer(85)).toBe("Buzz");
  expect(ternaryVer(86)).toBe("86");
  expect(ternaryVer(87)).toBe("Fizz");
  expect(ternaryVer(88)).toBe("88");
  expect(ternaryVer(89)).toBe("89");
  expect(ternaryVer(90)).toBe("FizzBuzz");
  expect(ternaryVer(91)).toBe("91");
  expect(ternaryVer(92)).toBe("92");
  expect(ternaryVer(93)).toBe("Fizz");
  expect(ternaryVer(94)).toBe("94");
  expect(ternaryVer(95)).toBe("Buzz");
  expect(ternaryVer(96)).toBe("Fizz");
  expect(ternaryVer(97)).toBe("97");
  expect(ternaryVer(98)).toBe("98");
  expect(ternaryVer(99)).toBe("Fizz");
  expect(ternaryVer(100)).toBe("Buzz");
});
