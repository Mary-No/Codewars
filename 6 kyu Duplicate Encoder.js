function duplicateEncode(word) {
  let result = "";
  word = word.toLowerCase();
  for (i = 0; i < word.length; i++) {
    if (word.split(word[i]).length - 1 > 1) {
      result += ")";
    } else {
      result += "(";
    }
  }
  return result;
}
