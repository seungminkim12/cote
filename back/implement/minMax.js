/**
 * https://www.acmicpc.net/problem/10818
 */

//  5
//  20 10 35 30 7
function solution(n,arr){
    arr.sort((a,b) => a - b)
    return `${arr[0]} ${arr[arr.length-1]}`
}

console.log(solution(n,arr))