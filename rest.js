module.exports = (...args) => {
  var sum = args.reduce((a, b) => a + b, 0);
  return sum/args.length;
};  
