function moveZeros(arr) {
    let arrNull = [];
    let arrNotNull = [];
    for(let i = 0; i<arr.length; i++){
        if(arr[i]===0){
            arrNull.push(arr[i]);
        }else{
            arrNotNull.push(arr[i]);
        }
    }
    return arrNotNull.concat(arrNull);
}