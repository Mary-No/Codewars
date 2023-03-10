function solution(number) {
  if (number < 0) {
    return 0;
  }
  let arr = [];
  for (let n = 1; n < number; n++) {
    if (n % 3 === 0 && n % 5 === 0) {
      arr.push(n);
    } else if (n % 3 === 0) {
      arr.push(n);
    } else if (n % 5 === 0) {
      arr.push(n);
    } else if (n % 6 === 0) {
      arr.push(n);
    } else if (n % 9 === 0) {
      arr.push(n);
    }
  }
  let count = arr.reduce(function (sum, elem) {
    return sum + elem;
  }, 0);

  return count;
}
