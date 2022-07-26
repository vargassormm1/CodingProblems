//Given a string, return a new string with the reversed order of characters
///////////////////////////////////////////////////////////////////////////

// Solution 1
const stringReverse = (str) => {
  const strArr = str.split("");
  strArr.reverse();
  return strArr.join("");
};
// console.log(stringReverse("apple"));

///////////////////////////////////////////////////////////////////////////
//Solution 2
// const stringReverse = (str) => {
// let strArr = [];
// for (let i = str.length; i > 0; i--) {
//   strArr.push(str[i - 1]);
// }
// return strArr.join("");
// };
// console.log(stringReverse("apple"));

///////////////////////////////////////////////////////////////////////////
//Solution 3
// const stringReverse = (str) => {
//   let reversed = "";
//   for (let character of str) {
//     reversed = character + reversed;
//   }
//   return reversed;
// };
// console.log(stringReverse("apple"));

///////////////////////////////////////////////////////////////////////////
// Solution 3
// const stringReverse = (str) => {
//   return str.split("").reduce((rev, char) => {
//     return char + rev;
//   }, "");
// };
// console.log(stringReverse("Matt"));

const stringRev = (str) => {
  let strArr = str.split("");
  let revStr = [];

  for (let i = strArr.length; i >= 0; i--) {
    revStr.push(strArr[i]);
  }

  return revStr.join("");
};

console.log(stringReverse("matt"));
