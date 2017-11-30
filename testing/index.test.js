"use strict";

//TODO: require the `./index.js` module and
const index = require('./index.js');
//write automated tests for the various functions
describe("byNumber", function() {
    test("returns positive when n1 > n2", function() {
        expect(index.byNumber(2,1)).toBeGreaterThan(0);
    });
    test("returns negative when n1 < n2", function() {
        expect(index.byNumber(1,2)).toBeLessThan(0);
    });
    test("returns 0 when n1 === n2", function() {
        expect(index.byNumber(1,1)).toEqual(0);
    });
    test("return positive when n2 is undefined", function() {
        expect(index.byNumber(1,undefined)).toBeGreaterThan(0);
    });
});

describe("max", function() {
    test("returns the correct number given all positives", function() {
        expect(index.max([1,2,3])).toBe(3);
    });
    test("returns the correct number given all negatives", function() {
        expect(index.max([-1,-2,-3])).toBe(-1);
    });
    test("returns undefined when given empty array", function () {
        expect(index.max([])).toBeUndefined();
    });
    test("returns undefined when given undefined", function () {
        expect(index.max()).toBeUndefined();
    });
});
