// TODO Create function makeCounter in all possible ways

// 1 function declaration
function makeCounter() {
  return "Hello";
}

// 2 function expression
const makeCounter = function () {
  return "Hello";
};

// 3 Named function expression
const makeCounter = function createCounter() {
  return "Hello";
};

// 4 Arrow function
const makeCounter = () => "Hello";

// 5 IIFE
(function makeCounter() {
  return "Hello";
})();

// 6 IIFE
const makeCounter = (function () {
  return "Hello";
})();
