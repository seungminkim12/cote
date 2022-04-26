/**
 * https://www.acmicpc.net/problem/2292
 * 벌집
 */

//mycode
// function solution(value){
//     let i = 1;
//     let flag = true;
//     let add = 1;
//     while(flag){        
//         if (value > add ){
//             add += 6*i;
//             i++;
//         }else if(value <= add){
//             flag = true;
//             return i;
//         }
//     }
// }   

//better code
function solution(value){
    let add = 1;
    let i = 1;
    while(value > add){
        add += 6*i;
        i++
    }
    return i;
}

console.log(solution(100))