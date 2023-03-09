function sumIntervals(intervals) {
  let sortArr = intervals.sort((a, b) => a[0] - b[0]);
  let L = [];
  let R = [];
  for (let i = 0; i < sortArr.length; i++) {
    if (L.length === 0 && R.length === 0) {
      L.push(sortArr[i][0]);
      R.push(sortArr[i][1]);
      continue;
    }
    if (sortArr[i][0] >= L[L.length - 1] && sortArr[i][0] <= R[R.length - 1]) {
      if (sortArr[i][1] > R[R.length - 1]) {
        R.pop();
        R.push(sortArr[i][1]);
      }
    } else {
      L.push(sortArr[i][0]);
      R.push(sortArr[i][1]);
    }
  }
  let result = 0;
  let i = 0;
  while (true) {
    if (L.length === 0 && R.length === 0) {
      break;
    }
    result += R.pop() - L.pop();
    i++;
  }

  return result;
}
