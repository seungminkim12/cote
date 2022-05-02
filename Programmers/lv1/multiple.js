/**
 * 최대공약수 최소공배수
 * https://programmers.co.kr/learn/courses/30/lessons/12940
 */

function solution(n, m) {
    var answer = [];     
    let temp = 0;    
    let max = Math.max(n,m);        
    let min = Math.min(n,m);
    console.log('min&max',min,max)    
    while(min){                   
        temp = min;
        min = max % min;
        max = temp;
    }
    console.log('min2',min)
    if (!min){
        console.log('min = 0')
        answer.push(max);
    }
    console.log('max in',m*n/max)
    console.log('max',max)
    answer.push(m*n/max);
    return answer;
}
console.log(solution(0,59))