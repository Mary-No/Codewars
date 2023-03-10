function deepCount(a, result = 0) {
  for (let i = 0; i < a.length; i++) {
    result++;
    if (Array.isArray(a[i])) {
      result = deepCount(a[i], result);
    }
  }
  return result;
}
