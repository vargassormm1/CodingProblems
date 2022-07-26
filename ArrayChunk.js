//Given an Array and chunk size, divide array into many subarrays
//Where each subarray is of length size
//chunk([1,2,3,4], 2) -> [[1,2],[3,4]]
//////////////////////////////////////////////////////////////////////

//Solution 1
const arrayChunk1 = (array, size) => {
  const chunked = [];
  for (let el of array) {
    const last = chunked[chunked.length - 1];

    if (!last || last.length === size) {
      chunked.push([el]);
    } else {
      last.push(el);
    }
  }
  return chunked;
};
console.log(arrayChunk1([1, 2, 3, 4, 5, 6, 7, 8], 3));

//////////////////////////////////////////////////////////////////////
//Solution 2
const arrayChunk2 = (array, size) => {
  const chunked = [];

  for (let i = 0; i < array.length; i++) {
    const last = chunked[chunked.length - 1];

    if (!last || last.length === size) {
      chunked.push([array[i]]);
    } else {
      last.push(array[i]);
    }
  }
  return chunked;
};
console.log(arrayChunk2([1, 2, 3, 4, 5, 6, 7, 8], 2));

//////////////////////////////////////////////////////////////////////
//Solution 3
const arrayChunk3 = (array, size) => {
  let chunk = [];
  let index = 0;

  while (index < array.length) {
    let temp = array.slice(index, index + size);
    chunk.push(temp);
    index = index + size;
  }
  return chunk;
};
console.log(arrayChunk3([1, 2, 3, 4, 5, 6, 7, 8], 3));
