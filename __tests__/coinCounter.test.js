import { TestScheduler } from "jest-cli";
import coinCounter from "../src/js/coinCounter";

describe('coinCounter', () => {
  // test('should return 1 for the dollar amount if 1.00 is entered', () => {
  //   expect(coinCounter(1.00)).toEqual("dollar bills = 1")
  // });
  // test('should return any number for the dollar amount if any number of dollars is entered', () => {
  //   expect(coinCounter(4.00)).toEqual("dollar bills = 4")
  //   expect(coinCounter(22.00)).toEqual("dollar bills = 22")
  // });
  test('should return 0 if amount entered is zero', () => {
    expect(coinCounter(0)).toEqual(0)
  })
});
