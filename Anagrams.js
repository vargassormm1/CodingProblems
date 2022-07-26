//Check to see if two provided strings are anagrams of each other
//One string is anagram of the other if it uses the same characters in the same quantity
//Only consider characters, not spaces or punctuation
//Consider capital letter to be the same as lowercase
////////////////////////////////////////////////////////////////////////////////////////

//Solution 1
const buildcharMap1 = (str) => {
  const charMap = {};
  let newStr = str.replace(/[^\w]/g, "").toLowerCase();

  for (let char of newStr) {
    charMap[char] = charMap[charMap] + 1 || 1;
  }

  return charMap;
};

const anagram1 = (str1, str2) => {
  const charMapA = buildcharMap1(str1);
  const charMapB = buildcharMap1(str2);

  if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
    return false;
  }

  for (let char in charMapA) {
    if (charMapA[char] !== charMapB[char]) {
      return false;
    }
  }
  return true;
};
console.log(anagram1("rail safety", "fairy tales"));

////////////////////////////////////////////////////////////////////////////////////////
//Solution 2
const buildcharMap2 = (str) => {
  let charMap = {};
  let newStr = str.replace(/[^\w]/g, "").toLowerCase();

  for (let i = 0; i < newStr.length; i++) {
    charMap[newStr[i]] = charMap[newStr[i]] + 1 || 1;
  }

  return charMap;
};

const anagram2 = (strA, strB) => {
  let charMapA = buildcharMap(strA);
  let charMapB = buildcharMap(strB);
  let strArr = strA.replace(/[^\w]/g, "").toLowerCase();

  if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
    return false;
  }

  for (let i = 0; i < strArr.length; i++) {
    if (charMapA[strArr[i]] !== charMapB[strArr[i]]) {
      return false;
    }
  }
  return true;
};
console.log(anagram2("rail safety", "fairy taless"));
