/**
 * 손익 분기점
 * https://www.acmicpc.net/problem/1712
 */

//my before code
// function solution(fixed, change, price){
//     let answer = 0;
//     // fixed = 1000;
//     // change = 70;
//     // price = 170;
//     fixed = 3;
//     change = 2;
//     price = 1;
//     let flag = false;
//     let before = 0;
//     let i = 1;    
//     while(!flag){        
//         const current = (fixed + change*i) - (price*i);            
//         if(before > 0){
//             if(current < before){
//                 if(current === 0){
//                     flag = true;                    
//                     return i+1;
//                 }            
//             }else if(current > before){
//                 return -1;
//             }
//         }    
//         before = current;
//         i++;
//     }   
// }

//clean code
function solution(fixed, change, price){    
    // fixed = 1000;
    // change = 70;
    // price = 170;           
    let answer = price > change ? Math.floor(fixed/ (price-change)) + 1 : -1;
    return answer;
}

console.log(solution(1000,70,170))    