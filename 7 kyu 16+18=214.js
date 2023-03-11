function add(num1, num2) {
  let long;
  let short;

  if (String(num1).length > String(num2).length) {
    long = String(num1).split("");
    short = String(num2).split("");
  } else {
    long = String(num2).split("");
    short = String(num1).split("");
  }

  let result = "";

  while (long.length != 0) {
    let number = Number(long.pop());

    if (short.length != 0) {
      number += Number(short.pop());
    }

    result = String(number) + result;
  }

  return Number(result);
}
