function unluckyDays(year) {
  let res = 0;
  for (let month = 0; month < 12; month++) {
    let d = new Date(year, month, 13);
    if (d.getDay() == 5) {
      res++;
    }
  }
  return res;
}
