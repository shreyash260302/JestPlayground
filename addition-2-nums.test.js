// requirements
// 1. both parameter should not be null
// 2. both parameter should be of same type as integer

const { sum } = require('./addition-2-nums');

test('both parameter should not be null', () => {
    expect(sum(2, 3)).toBe(5);
});

test('both parameter should be of same type as integer', () => {
    expect(sum(2, 3)).toBe(5);
});