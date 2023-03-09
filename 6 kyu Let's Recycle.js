function recycle(array) {
  let result = {
    paper: [],
    glass: [],
    organic: [],
    plastic: [],
  };

  for (let i = 0; i < array.length; i++) {
    let item = array[i];

    console.log(item);

    result[item["material"]].push(item["type"]);

    if (item["secondMaterial"]) {
      result[item["secondMaterial"]].push(item["type"]);
    }
  }

  return [
    result["paper"],
    result["glass"],
    result["organic"],
    result["plastic"],
  ];
}
