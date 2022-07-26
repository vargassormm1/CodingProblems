//Given a string, return a new string with the reversed order of characters
///////////////////////////////////////////////////////////////////////////

// Solution 1
const stringReverse1 = (str) => {
  const strArr = str.split("");
  strArr.reverse();
  return strArr.join("");
};
console.log(stringReverse1("apple"));

///////////////////////////////////////////////////////////////////////////
//Solution 2
const stringReverse2 = (str) => {
  let strArr = [];
  for (let i = str.length; i > 0; i--) {
    strArr.push(str[i - 1]);
  }
  return strArr.join("");
};
console.log(stringReverse2("apple"));

///////////////////////////////////////////////////////////////////////////
//Solution 3
const stringReverse3 = (str) => {
  let reversed = "";
  for (let character of str) {
    reversed = character + reversed;
  }
  return reversed;
};
console.log(stringReverse3("apple"));

///////////////////////////////////////////////////////////////////////////
// Solution 4
const stringReverse4 = (str) => {
  return str.split("").reduce((rev, char) => {
    return char + rev;
  }, "");
};
console.log(stringReverse4("Matt"));
