//write a program that console logs the numbers from 1 to n
//For multiples of 3 print 'fizz' instead of number
//For multiples of 5 print 'buzz'
//For numbers which are multiples of both 5 and 3 print 'fizzbuzz'
//////////////////////////////////////////////////////////////////////////

//Solution 1
const fizzBuzz = () => {
  for (var i = 1; i < 101; i++) {
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
  }
};
fizzBuzz();

// const fizzBuzz = (n) => {
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("fizzbuzz");
//     } else if (i % 3 === 0) {
//       console.log("fizz");
//     } else if (i % 5 === 0) {
//       console.log("buzz");
//     } else {
//       console.log(i);
//     }
//   }
// };
// fizzBuzz(100);
