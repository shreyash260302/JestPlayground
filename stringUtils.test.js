// stringUtils.test.js
const { capitalize, reverseString } = require('./stringUtils');

describe('String Utility Functions', () => {
  test('capitalize() capitalizes the first letter of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('world')).toBe('World');
    expect(capitalize('')).toBe(''); // Edge case: empty string
    expect(capitalize(null)).toBe(''); // Edge case: null
  });

  test('reverseString() reverses a string', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('world')).toBe('dlrow');
    expect(reverseString('')).toBe(''); // Edge case: empty string
    expect(reverseString(null)).toBe(''); // Edge case: null
  });
});
