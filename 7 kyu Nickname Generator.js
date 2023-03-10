function nicknameGenerator(name) {
  if (name.length < 4) {
    return "Error: Name too short";
  }
  let threeSimb = name.substr(2, 1);
  let result = "";
  function isVowel(threeSimb) {
    return ["a", "e", "i", "o", "u"].indexOf(threeSimb) !== -1;
  }
  if (isVowel(threeSimb) == true) {
    result = name[0] + name[1] + name[2] + name[3];
  } else {
    result = name[0] + name[1] + name[2];
  }

  return result;
}
