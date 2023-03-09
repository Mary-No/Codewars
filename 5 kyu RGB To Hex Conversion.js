function rgb(r, g, b) {
  for (let i = 0; i < arguments.length; i++) {
    if (Number(arguments[i]) > 255) {
      arguments[i] = "255";
    }
    arguments[i] = Number(arguments[i]).toString(16).toUpperCase();
    if (arguments[i] === "0" || Number(arguments[i]) < 0) {
      arguments[i] = "00";
    }
    if (arguments[i].length < 2) {
      arguments[i] = "0" + arguments[i];
    }
  }

  return [...arguments].join("");
}
