//Given a string, return the character that is most
//commonly used in the string
//////////////////////////////////////////////////////////////////

//Solution 1
const maxChar1 = (str) => {
  let charMap = {};
  let max = 0;
  let maxChar = "";

  for (let char of str) {
    if (!charMap[char]) {
      charMap[char] = 1;
    } else {
      charMap[char] += 1;
    }
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
};
console.log(maxChar1("hello"));

//////////////////////////////////////////////////////////////////
//Solution 2
const maxChar2 = (str) => {
  let charMap = {};
  let max = 0;
  let maxChar = "";
  for (let i = 0; i < str.length; i++) {
    if (!charMap[str[i]]) {
      charMap[str[i]] = 1;
    } else {
      charMap[str[i]]++;
    }
  }

  for (let j = 0; j < str.length; j++) {
    if (charMap[str[j]] > max) {
      max = charMap[str[j]];
      maxChar = str[j];
    }
  }
  return maxChar;
};
console.log(maxChar2("hello"));

//////////////////////////////////////////////////////////////////
//Solution 3
const maxChar3 = (str) => {
  let strMap = {};
  let strArr = str.split("");
  let max = 0;
  let maxChar = "";

  for (let i = 0; i < strArr.length; i++) {
    if (!strMap[strArr[i]]) {
      strMap[strArr[i]] = 1;
    } else {
      strMap[strArr[i]] += 1;
    }
  }

  for (let i = 0; i < strArr.length; i++) {
    if (max < strMap[strArr[i]]) {
      max = strMap[strArr[i]];
      maxChar = strArr[i];
    }
  }
  return maxChar;
};

console.log(maxChar3("matt"));
