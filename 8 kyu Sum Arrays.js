function sum(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let count = arr.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
  return count;
}
