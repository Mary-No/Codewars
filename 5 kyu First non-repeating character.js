function firstNonRepeatingLetter(str) {
  let s = str.slice().toLowerCase();
  let resultObj = {};

  for (let i = 0; i < s.length; i++) {
    resultObj[s[i]] = 0;
  }
  for (let k = 0; k < s.length; k++) {
    if (s[k] in resultObj) {
      resultObj[s[k]]++;
    }
  }
  for (let key in resultObj) {
    if (resultObj[key] !== 1) {
      delete resultObj[key];
    }
  }
  let keys = Object.keys(resultObj);
  if (keys.length === 0) {
    return "";
  }
  let flag = false;
  for (let d = 0; d < s.length; d++) {
    if (keys[0] === s[d] && keys[0].toUpperCase() === str[d]) {
      flag = true;
      return keys[0].toUpperCase();
    }
  }
  if (flag === false) {
    return keys[0];
  }
}
