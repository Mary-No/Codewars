function getDecimal(n){
    n = Math.abs(n); 
    let nMin = Math.floor(n);
    let result = Math.abs(n - nMin);
    return result; // fix me 
  }