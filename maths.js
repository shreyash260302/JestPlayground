function add(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
      return 'Invalid input';
    }
    return a + b;
  }
  
  function subtract(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
      return 'Invalid input';
    }
    return a - b;
  }
  
  module.exports = { add, subtract };
  