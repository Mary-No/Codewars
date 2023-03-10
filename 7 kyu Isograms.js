function isIsogram(str) {
  str = str.toLowerCase();
  if (new Set(str).size != str.length) {
    return false;
  } else {
    return true;
  }
}
