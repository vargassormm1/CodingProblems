// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non - alphanumeric
// characters, it reads the same forward and backward.
// Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Solution 1
const palindrome1 = (str) => {
  let revStr = str.split("").reverse().join("");
  if (revStr === str) {
    return true;
  } else {
    return false;
  }
};
console.log(palindrome("abba"));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Solution 2
const palindrom2 = (str) => {
  let strArr = [];
  for (let i = str.length; i > 0; i--) {
    strArr.push(str[i - 1]);
  }
  let revStr = strArr.join("");

  if (str === revStr) {
    return true;
  } else {
    return false;
  }
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Solution 3
const palindrom3 = (str) => {
  let revStr = str.split("").reverse().join("");
  return str === revStr;
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Solution 4
const palindrom = (str) => {
  return str.split("").every((char, i) => {
    return char === str[str.length - i - 1];
  });
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Solution 5
const palindrome = (str) => {
  let strArr = str.split("");
  let rev = [];
  for (let i = strArr.length; i >= 0; i--) {
    rev.push(strArr[i]);
  }

  if (rev.join("") === str) {
    return true;
  } else {
    return false;
  }
};
console.log(palindrome("matt"));
