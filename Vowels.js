//Write a function that takes a string that returns the number of vowels
//Used in the string
////////////////////////////////////////////////////////////////////////

//Solution 1
const vowel1 = (str) => {
  let count = 0;
  let vowel = ["a", "e", "i", "o", "u"];
  let newStr = str.replace(/[^\w]/g, "").toLowerCase();

  for (let i = 0; i < newStr.length; i++) {
    for (let j = 0; j < vowel.length; j++) {
      if (newStr[i] === vowel[j]) {
        count += 1;
      }
    }
  }
  return count;
};
console.log(vowel1("Why?"));

////////////////////////////////////////////////////////////////////////
//Solution 2
const vowel2 = (str) => {
  let count = 0;
  let vowels = "aeiou";
  let newStr = str.replace(/[^\w]/g, "").toLowerCase();

  for (let i = 0; i < newStr.length; i++) {
    if (vowels.includes(newStr[i])) {
      count++;
    }
  }
  return count;
};
console.log(vowel("Why did you ask?"));

////////////////////////////////////////////////////////////////////////
//Solution 3
const vowel = (str) => {
  let count = 0;
  let vowels = "aeiou";
  let newStr = str.replace(/[^\w]/g, "").toLowerCase();

  for (let i = 0; i < newStr.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (newStr[i] === vowels[j]) {
        count++;
      }
    }
  }
  return count;
};
console.log(vowel("Why did you ask?"));
