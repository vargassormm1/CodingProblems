//Write a function that accepts a positive number N.
//The function should console.log a pyramid shape
//with N levels using the # character
//make sure the steps has space on the left and right hand side

const pyramid = (n) => {
  const midpoint = Math.floor((2 * n - 1) / 2);
  for (let row = 0; row < n; row++) {
    let level = "";

    for (let col = 0; col < 2 * n - 1; col++) {
      if (midpoint - row <= col && midpoint + row >= col) {
        level += "#";
      } else {
        level += " ";
      }
    }
    console.log(level);
  }
};

pyramid(3);
