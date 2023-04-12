const shuffle = require('../src/shuffle');

const argument = ["Caleb", "Alex", "Jordan"];

describe('shuffle should...', () => {
  it("return an array", () => {
    const result = shuffle()
    expect(result.length).toBe(0);
  });

  it("return an array of the same length as the argument sent in", () => {
    const result = shuffle(argument);
    expect(argument.length).toBe(result.length);
  });

  it("check that all the same items are in the array", () => {
    const result = shuffle(argument);
    const isSame = argument.sort().join(',') === result.sort().join(',')
    expect(isSame).toBe(true)
  })
});