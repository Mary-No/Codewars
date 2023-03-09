function longest(s1, s2) {
  let str = s1 + s2;
  let arr = str.split("").sort();
  let unical = Array.from(new Set(arr));
  let result = unical.join("");
  return result;
}
