function getLengthOfMissingArray(arrayOfArrays) {
  if (arrayOfArrays === null || arrayOfArrays.length === 0) {
    return 0;
  }

  let arr = [];
  for (let i = 0; i < arrayOfArrays.length; i++) {
    if (arrayOfArrays[i] === null || arrayOfArrays[i].length === 0) {
      return 0;
    }
    arr.push(arrayOfArrays[i].length);
  }

  arr.sort(function (a, b) {
    return a - b;
  });

  for (let n = 0; n < arr.length - 1; n++) {
    if (arr[n] + 1 !== arr[n + 1]) {
      return arr[n] + 1;
    }
  }
}
