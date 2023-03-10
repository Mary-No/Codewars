function createFunctions(n) {
  var callbacks = [];
  let counter = 0;

  for (var i = 0; i < n; i++) {
    callbacks.push(function () {
      result = counter;
      counter++;
      return result;
    });
  }

  return callbacks;
}
