function numberOfPairs(gloves) {
  let result = gloves.reduce(function (acc, el) {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, {});
  console.log(result);
  let num = 0;
  for (let key in result) {
    num += Math.floor(result[key] / 2);
  }
  return num;
}
