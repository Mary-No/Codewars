let List = [
  { 4: "dog" },
  { 2: "took" },
  { 3: "his" },
  { "-2": "Vatsan" },
  { 5: "for" },
  { 6: "a" },
  { 12: "spin" },
];
function sentence(List) {
  let sotirovka = [];
  for (let i = 0; i < List.length; i++) {
    for (let key in List[i]) {
      sotirovka.push(key); //делаю массив ключей(циферок),
    }
  }
  const spisok = sotirovka.sort((a, b) => a - b); //чтобы его отсортировать по возрастанию

  let newArr = [];
  for (let k = 0; k < spisok.length; k++) {
    //вставить вместо ключей значения
    for (let r = 0; r < List.length; r++) {
      //и получить массив значений
      for (let key in List[r]) {
        //но вот в этот момент какого-то хера список берет значения
        if (key === spisok[k]) {
          //ключей объекта
          newArr.push(List[r][key]);
        }
      }
    }
  }
  return newArr.join(" ");
}
