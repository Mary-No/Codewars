String.prototype.toJadenCase = function () {
  let newStr = this.split(" ");

  for (let i = 0; i < newStr.length; i++) {
    newStr[i] = newStr[i][0].toUpperCase() + newStr[i].slice(1);
  }

  console.log(newStr.join(" "));
  return newStr.join(" ");
};
