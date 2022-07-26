//Given a string, return the character that is most
//commonly used in the string
//////////////////////////////////////////////////////////////////

//Solution 1
// const maxChar = (str) => {
//   let charMap = {};
//   let max = 0;
//   let maxChar = "";

//   for (let char of str) {
//     if (!charMap[char]) {
//       charMap[char] = 1;
//     } else {
//       charMap[char] += 1;
//     }
//   }

//   for (let char in charMap) {
//     if (charMap[char] > max) {
//       max = charMap[char];
//       maxChar = char;
//     }
//   }
//   return maxChar;
// };
// console.log(maxChar("hello"));

//////////////////////////////////////////////////////////////////
//Solution 2
// const maxChar = (str) => {
//   let charMap = {};
//   let max = 0;
//   let maxChar = "";
//   for (let i = 0; i < str.length; i++) {
//     if (!charMap[str[i]]) {
//       charMap[str[i]] = 1;
//     } else {
//       charMap[str[i]]++;
//     }
//   }

//   for (let j = 0; j < str.length; j++) {
//     if (charMap[str[j]] > max) {
//       max = charMap[str[j]];
//       maxChar = str[j];
//     }
//   }
//   return maxChar;
// };
// console.log(maxChar("hello"));

// const maxChar = (str) => {
//   let strMap = {};
//   let strArr = str.split("");
//   let max = 0;
//   let maxChar = "";

//   for (let i = 0; i < strArr.length; i++) {
//     if (!strMap[strArr[i]]) {
//       strMap[strArr[i]] = 1;
//     } else {
//       strMap[strArr[i]] += 1;
//     }
//   }

//   for (let i = 0; i < strArr.length; i++) {
//     if (max < strMap[strArr[i]]) {
//       max = strMap[strArr[i]];
//       maxChar = strArr[i];
//     }
//   }
//   return maxChar;
// };

// console.log(maxChar("matt"));

const maxChar = (str) => {
  let charmap = {};
  let max = 0;
  let maxChar = "";

  for (let i = 0; i < str.length; i++) {
    if (!charmap[str[i]]) {
      charmap[str[i]] = 1;
    } else {
      charmap[str[i]] += 1;
    }
  }

  for (let i = 0; i < str.length; i++) {
    if (max < charmap[str[i]]) {
      max = charmap[str[i]];
      maxChar = str[i];
    }
  }
  return maxChar;
};

console.log(maxChar("harry"));
