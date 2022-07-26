//Write a functions that accepts a string. The function should
//Capitalize the first letter of each word on the string then retrunt the capitalized string
//capitalize('a short sentence') -> "A Short Sentence"
/////////////////////////////////////////////////////////////////////////////////////////////

//Solution 1
const capitalize = (str) => {
  const words = [];

  for (let word of str.split(" ")) {
    words.push(word[0].toUpperCase() + word.slice(1));
    console.log(words);
  }

  return words.join(" ");
};
console.log(capitalize("a lazy fox"));

//Soolution 2
// const capitalize = (str) => {
//   let strArr = str.split("");
//   let newStr = [];

//   for (let i = 0; i < strArr.length; i++) {
//     if (!strArr[i - 1] || strArr[i - 1] === " ") {
//       newStr.push(strArr[i].toUpperCase());
//     } else {
//       newStr.push(strArr[i]);
//     }
//   }
//   return newStr.join("");
// };
// console.log(capitalize("a lazy fox"));
/////////////////////////////////////////////////////////////////////////////////////////////
