function sum(a,b) {
    if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
        return 'Invalid input';
      }
      return a + b;
    }

module.exports = { sum };