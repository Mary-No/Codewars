var ArrowFunc = function(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      let str = String.fromCharCode(arr[i]);
      newArr.push(str);
    }
      
    return newArr.join(""); //Complete this function
  }