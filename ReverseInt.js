//Given an integer, return an integer that is the reverse
/////////////////////////////////////////////////////////////////////

//Solution 1
// const reverseInt = (num) => {
//   let reverseInt = num.toString().split("").reverse().join("");
//   return parseInt(reverseInt) * Math.sign(num);
// };
// console.log(reverseInt(-21));

/////////////////////////////////////////////////////////////////////
//Solution 2
// const reverseInt = (num) => {
//   let reverseInt = num.toString().split("").reverse().join("");

//   if (num < 0) {
//     return parseInt(reverseInt) * -1;
//   }
//   return reverseInt;
// };

const reverseInt = (num) => {
  let intArr = num.toString().split("");
  let revInt = [];

  for (let i = intArr.length; i >= 0; i--) {
    revInt.push(intArr[i]);
  }

  if (num < 0) {
    return parseInt(revInt.join("")) * -1;
  }

  return parseInt(revInt.join(""));
};

console.log(reverseInt(21));
