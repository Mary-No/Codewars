export const summation = (num:number)=> { 
    let res: number = 0;
    for (let i: number = 1; i <= num; i++) {
      res += i;
    }
    return res
  }