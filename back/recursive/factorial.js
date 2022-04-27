/**
 * 팩토리얼 
 * https://www.acmicpc.net/problem/10872  
 */

// function solution(value){
//     fac = 1;    
//     for (let i = value; i>1; i--){
//         console.log(i);
//         fac *= i;
//     }
//     return fac;
// }

function solution(value){
    let fac = 1;
    function factorial(value){
        console.log('factorial in')
        console.log('value',value)
        console.log('fac',fac)
        if(value > 1){
            fac *= value;
            value -= 1;
            factorial(value)
        }else{
            return fac;
        }
    }    
    factorial(value);
    return fac;
}

console.log(solution(10))