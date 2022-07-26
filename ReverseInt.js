//Given an integer, return an integer that is the reverse
/////////////////////////////////////////////////////////////////////

//Solution 1
const reverseInt1 = (num) => {
  let reverseInt = num.toString().split("").reverse().join("");
  return parseInt(reverseInt) * Math.sign(num);
};
console.log(reverseInt1(-21));

/////////////////////////////////////////////////////////////////////
//Solution 2
const reverseInt2 = (num) => {
  let reverseInt = num.toString().split("").reverse().join("");

  if (num < 0) {
    return parseInt2(reverseInt) * -1;
  }
  return reverseInt;
};
