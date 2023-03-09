function toCamelCase(str) {
  let arrWords = [];
 
    arrWords = str.split(/[-,_]/);


  for (let i = 1; i < arrWords.length; i++) {
    arrWords[i] = arrWords[i][0].toUpperCase() + arrWords[i].slice(1);
  }
  return arrWords.join("");
}
toCamelCase("the_stealth_warrior");
