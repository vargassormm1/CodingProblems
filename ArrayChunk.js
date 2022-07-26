//Given an Array and chunk size, divide array into many subarrays
//Where each subarray is of length size
//chunk([1,2,3,4], 2) -> [[1,2],[3,4]]
//////////////////////////////////////////////////////////////////////

//Solution 1
// const arrayChunk = (array, size) => {
//   const chunked = [];
//   for (let el of array) {
//     const last = chunked[chunked.length - 1];

//     if (!last || last.length === size) {
//       chunked.push([el]);
//     } else {
//       last.push(el);
//     }
//   }
//   return chunked;
// };
// console.log(arrayChunk([1, 2, 3, 4, 5, 6, 7, 8], 3));
//////////////////////////////////////////////////////////////////////

//Solution 2
// const arrayChunk = (array, size) => {
//   const chunked = [];

//   for (let i = 0; i < array.length; i++) {
//     const last = chunked[chunked.length - 1];

//     if (!last || last.length === size) {
//       chunked.push([array[i]]);
//     } else {
//       last.push(array[i]);
//     }
//   }
//   return chunked;
// };
// console.log(arrayChunk([1, 2, 3, 4, 5, 6, 7, 8], 2));
//////////////////////////////////////////////////////////////////////

//Solution 3
// const arrayChunk = (array, size) => {
//   let chunk = [];
//   let index = 0;

//   while (index < array.length) {
//     let temp = array.slice(index, index + size);
//     chunk.push(temp);
//     index = index + size;
//   }
//   return chunk;
// };
// console.log(arrayChunk([1, 2, 3, 4, 5, 6, 7, 8], 3));

const arrayChunk = (array, num) => {
  let chunk = [];

  for (let i = 0; i < array.length; i++) {
    let last = chunk[chunk.length - 1];

    if (!last || last.length === num) {
      chunk.push([array[i]]);
    } else {
      last.push(array[i]);
    }
  }
  return chunk;
};
console.log(arrayChunk([1, 2, 3, 4, 5, 6, 7, 8], 3));
