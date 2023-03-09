function alphabetPosition(text) {
    let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    text = text.toLowerCase().replace(/[\s.,%']/g, '');
    let strArr = text.split('');
    let result = [];
    for(let i = 0; i<strArr.length+1; i++){
        for(let j = 0; i<arr_en.length+1; i++){
            if(arr_en.includes(strArr[i])){


                result.push( arr_en.findIndex((x) => x === strArr[i]) + 1);
            }
        }
    }
    return result.join(' ');
}
