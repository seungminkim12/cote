/**
 * 
 */

 function solution(n, m) {
    var answer = [];
    let check = true;
    let divValue = m % n;
    let result = 0;
    let max = 0;
    let min = 0;
    let temp = 0;
    console.log('divValue',divValue)
    if(divValue === 0){
        max = m;
        min = n;
    }else{        
        result = m;
        while(check){
            if(divValue === 0){
                check = false;
                min = temp
            }else if (divValue === 1){                
                min = temp
                check = false;
            }            
            temp = divValue;
            divValue = result % divValue;
            result = temp;
        }
    }
    max = m*n/min;
    console.log('min',min)
    console.log('max',max)
    return answer.push(min,max);
}
console.log(solution(3,12))