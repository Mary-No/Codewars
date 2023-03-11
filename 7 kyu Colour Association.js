function colourAssociation(array) {
  let result = [];
  array.forEach((element) => {
    let Obj = { [element[0]]: element[1] };
    result.push(Obj);
  });

  return result;
}
