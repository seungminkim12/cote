/**
 * https://www.acmicpc.net/problem/2562
 */

/**
 * 3
29
38
12
57
74
40
85
61
 * @param {*} val 
return 8 85
 */

function solution(val){
    let copy = val.slice();
    val.sort((a,b) => a - b )        
    console.log(val[val.length-1])
    console.log(copy.indexOf(val[val.length-1])+1)
}

solution([3,29,38,12,57,74,40,85,61])