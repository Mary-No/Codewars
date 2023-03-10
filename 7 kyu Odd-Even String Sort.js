function sortMyString(S) {
  let firstPart = "";
  let secondPart = "";
  for (let i = 0; i < S.length; i++) {
    if (i % 2 != 0) {
      secondPart += S[i];
    } else {
      firstPart += S[i];
    }
  }
  let result = firstPart + " " + secondPart;
  return result;
}
