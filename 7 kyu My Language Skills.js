function myLanguages(results) {
  let resArr = [];
  let bool = false;
  for (let key in results) {
    if (results[key] >= 60) {
      bool = true;
      resArr.push(new Array(key, results[key]));
    }
  }
  if ((bool = false)) {
    return [];
  }
  resArr.sort(function (a, b) {
    return b[1] - a[1];
  });
  resArr = resArr.flat(1);
  for (let i = 0; i < resArr.length; i++) {
    if (typeof resArr[i] === "number") {
      resArr.splice(i, 1);
    }
  }
  return resArr;
}
