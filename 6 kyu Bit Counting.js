var countBits = function (n) {
  var newN = String(n.toString(2)).split("");
  let result = 0;
  for (let i = 0; i < newN.length; i++) {
    if (newN[i] === "1") {
      result++;
    }
  }
  return result;
};
