function invert(array) {
    let result = [];
     for(let i =0; i< array.length; i++){
       result.push(array[i]*(-1));
     }
    return result;
  }