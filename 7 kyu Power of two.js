function isPowerOfTwo(b) {
  let n;
  let a = 2;
  if (b === 1) {
    return true;
  }
  function getBaseLog(a, b) {
    n = Math.log(b) / Math.log(a);
  }

  getBaseLog(a, b);
  n = n.toFixed(7);

  if (n % Math.floor(n) === 0) {
    return true;
  } else {
    return false;
  }
}
