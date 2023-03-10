function dataReverse(data) {
  let size = 8;
  let subarray = [];
  for (let i = 0; i < Math.ceil(data.length / size); i++) {
    subarray[i] = data.slice(i * size, i * size + size);
  }

  subarray.reverse();

  let newArr = [].concat(...subarray);
  return newArr;
}
