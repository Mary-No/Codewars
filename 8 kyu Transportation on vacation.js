function rentalCarCost(d) {
  if (d > 0 && d <= 2) {
    return d * 40;
  } else if (d >= 3 && d <= 6) {
    return d * 40 - 20;
  } else if (d >= 7) {
    return d * 40 - 50;
  }
}
