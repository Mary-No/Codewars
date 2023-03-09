function arrayDiff(a, b) {
  for (let i = 0; i < b.length; i++) {
    a = a.filter(function (f) {
      return f !== b[i];
    });
  }
  return a;
}
