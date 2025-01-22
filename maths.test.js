const { add, subtract } = require('./maths');

describe('Math Functions', () => {
  // Test for addition
  describe('add()', () => {
    test('adds two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('adds two negative numbers', () => {
      expect(add(-2, -3)).toBe(-5);
    });

    test('adds a positive and a negative number', () => {
      expect(add(5, -3)).toBe(2);
    });

    test('adds zero to a number', () => {
      expect(add(0, 5)).toBe(5);
      expect(add(5, 0)).toBe(5);
    });

    test('adds two decimal numbers', () => {
      expect(add(1.5, 2.5)).toBe(4);
    });

    test('adds very large numbers', () => {
      expect(add(1e15, 1e15)).toBe(2e15);
    });

    test('adds very small numbers', () => {
      expect(add(1e-15, 1e-15)).toBe(2e-15);
    });

    test('returns "Invalid input" for non-numeric inputs', () => {
      expect(add('a', 2)).toBe('Invalid input');
      expect(add(2, 'b')).toBe('Invalid input');
      expect(add('a', 'b')).toBe('Invalid input');
      expect(add(null, 2)).toBe('Invalid input');
      expect(add(undefined, 2)).toBe('Invalid input');
      expect(add([], 2)).toBe('Invalid input');
      expect(add({}, 2)).toBe('Invalid input');
    });

    test('returns "Invalid input" when one or both inputs are missing', () => {
      expect(add()).toBe('Invalid input');
      expect(add(5)).toBe('Invalid input');
    });

    test('handles special numeric values', () => {
      expect(add(NaN, 5)).toBe('Invalid input');
      expect(add(Infinity, 5)).toBe(Infinity);
      expect(add(-Infinity, 5)).toBe(-Infinity);
    });
  });

  // Test for subtraction
  describe('subtract()', () => {
    test('subtracts two positive numbers', () => {
      expect(subtract(5, 3)).toBe(2);
    });

    test('subtracts two negative numbers', () => {
      expect(subtract(-5, -3)).toBe(-2);
    });

    test('subtracts a positive and a negative number', () => {
      expect(subtract(5, -3)).toBe(8);
    });

    test('subtracts zero from a number', () => {
      expect(subtract(5, 0)).toBe(5);
    });

    test('subtracts a number from zero', () => {
      expect(subtract(0, 5)).toBe(-5);
    });

    test('subtracts two decimal numbers', () => {
      expect(subtract(5.5, 2.2)).toBe(3.3);
    });

    test('subtracts very large numbers', () => {
      expect(subtract(1e15, 5e14)).toBe(5e14);
    });

    test('subtracts very small numbers', () => {
      expect(subtract(1e-15, 5e-16)).toBe(5e-16);
    });

    test('returns "Invalid input" for non-numeric inputs', () => {
      expect(subtract('a', 2)).toBe('Invalid input');
      expect(subtract(2, 'b')).toBe('Invalid input');
      expect(subtract('a', 'b')).toBe('Invalid input');
      expect(subtract(null, 2)).toBe('Invalid input');
      expect(subtract(undefined, 2)).toBe('Invalid input');
      expect(subtract([], 2)).toBe('Invalid input');
      expect(subtract({}, 2)).toBe('Invalid input');
    });

    test('returns "Invalid input" when one or both inputs are missing', () => {
      expect(subtract()).toBe('Invalid input');
      expect(subtract(5)).toBe('Invalid input');
    });

    test('handles special numeric values', () => {
      expect(subtract(NaN, 5)).toBe('Invalid input');
      expect(subtract(Infinity, 5)).toBe(Infinity);
      expect(subtract(-Infinity, 5)).toBe(-Infinity);
    });
  });
});
