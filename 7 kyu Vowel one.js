function vowelOne(s) {
  let arr = s.split("");

  for (let i = 0; i < arr.length; i++) {
    if (["a", "e", "i", "o", "u"].indexOf(arr[i].toLowerCase()) !== -1) {
      arr[i] = 1;
    }
    if (arr[i] != 1) {
      arr[i] = 0;
    }
    if (arr[i] === "1") {
      arr[i] = 0;
    }
  }
  return arr.join("");
}
