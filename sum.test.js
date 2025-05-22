const sum = require('./sum');

test('sum 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('sum -1 + 5 to equal 4', () => {
  expect(sum(-1, 5)).toBe(4);
});