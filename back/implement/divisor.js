/**
 * 
 */

//  14
//  14 26456 2 28 13228 3307 7 23149 8 6614 46298 56 4 92596

function solution(n,value){
    value = value.sort((a,b) => a - b)
    return value[0]* value[n-1]
}

console.log(solution(14,[14,26456,2,28,13228,3307,7,23149,8,6614,46298,56,4,92596]))