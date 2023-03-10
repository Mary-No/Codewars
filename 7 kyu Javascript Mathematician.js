function calculate() {
  function handler() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum + hl_sum;
  }

  let hl_sum = 0;
  hl_sum = handler(...arguments);

  return handler;
}
