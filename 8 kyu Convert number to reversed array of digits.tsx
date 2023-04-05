const digitize = (n: number): number[] => {
  let str = n.toString();
  let arr = str.split('').reverse();
  let res: number[] = [];
  arr.forEach((el) => {
    res.push(Number(el));
  });
  return res;
};