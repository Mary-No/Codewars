function highAndLow(numbers) {
  let arr = numbers.split(" ");
  let max = Math.max.apply(Math, arr);
  let min = Math.min.apply(Math, arr);
  return max + " " + min;
}
