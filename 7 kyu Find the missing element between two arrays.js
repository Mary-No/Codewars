function findMissing(arr1, arr2) {
  let result = {};
  let maxArray;
  let minArray;
  if (arr1.length > arr2.length) {
    maxArray = arr1;
    minArray = arr2;
  } else {
    maxArray = arr2;
    minArray = arr1;
  }
  for (let index = 0; index < maxArray.length; index++) {
    let arrval = maxArray[index];
    if (!(arrval in result)) {
      result[arrval] = 1;
    } else {
      result[arrval] += 1;
    }
  }
  for (let index = 0; index < minArray.length; index++) {
    let arrval = minArray[index];
    result[arrval] -= 1;
  }
  for (let key in result) {
    if (result[key] != 0) {
      return Number(key);
    }
  }
}
