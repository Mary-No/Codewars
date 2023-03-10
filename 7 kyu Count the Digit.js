function nbDig(n, d) {
  let num = [];

  for (let k = 0; k <= n; k++) {
    num.push(k ** 2);
  }
  let str = num.join("");
  let result = 0;

  for (let char of str) {
    if (char == d) {
      result = result + 1;
    }
  }
  return result;
}
