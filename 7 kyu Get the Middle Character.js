function getMiddle(s) {
  let dl = s.length;
  if (dl === 1) {
    return s;
  } else if (dl % 2 == 0) {
    let i = dl / 2;
    return s[i - 1] + s[i];
  } else if (dl % 2 != 0) {
    let i = Math.round(dl / 2);
    return s[i - 1];
  }
}
