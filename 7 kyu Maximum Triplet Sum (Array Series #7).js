function maxTriSum(numbers) {
  let uniqSet = new Set(numbers);
  let num = Array.from(new Set(uniqSet));
  console.log(num);

  num.sort(function (a, b) {
    return a - b;
  });
  num.reverse();

  let maxSum = num[0] + num[1] + num[2];
  return maxSum;
}
