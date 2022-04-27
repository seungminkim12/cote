/**
 * 파보나치의 수
 * https://www.acmicpc.net/problem/10870 
 */
//my code
function solution(value){
    console.log(value)
    if(value === 0){
        return 0;
    }
    if(value === 1){
        return 1;
    }
    return solution(value -1) + solution(value -2);
}


console.log(solution(11))