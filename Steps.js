//Write a function that accepts a positive number N.
//The function should console.log a step shape
//with N levels using the # character
//make sure the steps has space on the right hand side

// Solution 1
// const stair = (n) => {
//   for (let row = 0; row < n; row++) {
//     let stair = "";

//     for (let col = 0; col < n; col++) {
//       if (col <= row) {
//         stair += "#";
//       } else {
//         stair += " ";
//       }
//     }
//     console.log(stair);
//   }
// };
// stair(4);

const steps = (n) => {
  for (let row = 0; row < n; row++) {
    let string = "";

    for (let col = 0; col < n; col++) {
      if (col <= row) {
        string += "#";
      } else {
        string += " ";
      }
    }
    console.log(string);
  }
};
steps(4);
