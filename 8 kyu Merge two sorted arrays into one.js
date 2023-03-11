function mergeArrays(arr1, arr2) {
  let arr = arr1.concat(arr2); //объединить два массива в один

  let setArr = new Set(arr); //убираем повторяшки

  setArr = Array.from(setArr); // из множества в массив
  setArr.sort(function (a, b) {
    return a - b;
  });
  return setArr;
}
