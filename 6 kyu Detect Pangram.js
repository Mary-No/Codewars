function isPangram(string) {
  let arr_str = string
    .toLowerCase()
    .replace(/[^a-zа-яё]/gi, "")
    .split("");
  let arr_en = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let flag = false;
  for (let i = 0; i < arr_en.length; i++) {
    if (!arr_str.includes(arr_en[i])) {
      return false;
    } else {
      flag = true;
    }
  }
  if (flag === true) {
    return true;
  }
}
