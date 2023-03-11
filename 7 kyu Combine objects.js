function combine() {
  let result = {};

  for (index in arguments) {
    element = arguments[index];

    for (key in element) {
      if (key in result) {
        result[key] = result[key] + element[key];
      } else {
        result[key] = element[key];
      }
    }
  }

  return result;
}
