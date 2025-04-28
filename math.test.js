const readline = require('readline');

const math= require('./math');

test('add 2 + 3 = 5', () => {
    expect(math.sum(2, 3)).toBe(5);
  });
  
  test('subtract 5 - 2 = 3', () => {
    expect(math.diff(5, 2)).toBe(3);
  });
  
  test('multiply 4 * 3 = 12', () => {
    expect(math.multiply(4, 3)).toBe(12);
  });
  
  test('divide 10 / 2 = 5', () => {
    expect(math.divide(10, 2)).toBe(5);
  });
  
  test('division by zero throws error', () => {
    expect(() => math.divide(5, 0)).toThrow('Division by zero is not allowed.');
  });

  test('power 2 ^ 3 = 8', () => {
    expect(math.pow(2, 3)).toBe(7);
  });
  
