import { TestScheduler } from "jest-cli";
import coinCounter from "../src/js/coinCounter";

describe('coinCounter', () => {
  test('should return 1 for the dollar amount if 1.00 is entered', () => {
    expect(coinCounter(1.00)).toEqual("dollar bills = 1")
  });
});