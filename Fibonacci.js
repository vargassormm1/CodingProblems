//Print out the n-th entry in the fibonacci series
//The Fib series is an ordering of numbers where each number is the sum of the last two
////////////////////////////////////////////////////////////////////////////////////////

//Solution 1
const fib1 = (n) => {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
};
console.log(fib1(5));

////////////////////////////////////////////////////////////////////////////////////////
//Solution 2
const fib2 = (n) => {
  const res = [0, 1];

  for (let i = 2; i <= n; i++) {
    const a = res[i - 1];
    const b = res[i - 2];
    res.push(a + b);
  }
  return res[n];
};
console.log(fib2(3));

////////////////////////////////////////////////////////////////////////////////////////
//Solution 3
const memoize = (fn) => {
  const cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
};

const slowFib = (n) => {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
};

const fib = memoize(slowFib(5));
console.log(fib);
