function incrementString(str) {
  let num = "";
  let count = 0;
  let not_null = "";
  let null_num = "";
  for (let i = str.length - 1; i >= 0; i--) {
    if (!isNaN(Number(str[i]))) {
      count++;
      num += str[i];
      if (str[i] === "0") {
        null_num += "0";
      } else {
        not_null += str[i];
      }
      str = str.slice(0, i);
    } else {
      break;
    }
  }
  num = num.split("").reverse().join("");

  if (count === 0) {
    return (str += "1");
  } else {
    if (not_null !== "") {
      let not_null_incr = String(Number(not_null) + 1);
      if (not_null.length !== not_null_incr.length) {
        null_num = null_num.slice(1);
      }
      return (str += null_num + not_null_incr);
    } else {
      return (str += null_num.slice(1) + "1");
    }
  }
}
