function explode(s) {
  let str = "";
  for (let n = 0; n < s.length; n++) {
    for (let i = 0; i < s[n]; i++) {
      str = str.concat(s[n]);
    }
  }
  return str;
}
