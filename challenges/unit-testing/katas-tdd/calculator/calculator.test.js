const add = require('./calculator')

test("return 0 if input is empty", () => {
    expect(add("")).toEqual(0)
})

test("return number itself if input is a single number", () => {
    expect(add("5")).toEqual(5)
})

test("return sum of 2 numbers from input", () => {
    expect(add("5,1")).toEqual(6)
})

test("return sum of more than 2 numbers from input", () => {
    expect(add("5,1,2,4")).toEqual(12)
})

test("should ignore number bigger than 1000, return sum of input", () => {
    expect(add("5,1,2,4,10001")).toEqual(12)
})

test("should throw error for negative numbers", () => {
    expect(() => add("1,4,-1")).toThrow('negatives not allowed: -1')
})

test("should ignore number bigger than 1000, return 0 if there is no other input", () => {
    expect(add("10001")).toEqual(0)
})