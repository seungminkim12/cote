/**
 * https://programmers.co.kr/learn/courses/30/lessons/42840?language=javascript
 * 수포자
 */

//1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
// 2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
// 3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

function solution(answers) {
    var answer = [];
    let first = [1,2,3,4,5];
    const second = [2,1,2,3,2,4,2,5];    

    console.log('answers.length/5 ',Math.floor(answers.length/5) )  
    console.log('answers.length%5',answers.length%5)
    for(let i = 0; i<answers.length; i++){        
        if(first[i%answers.length]=== answer[i]){
            
        }        
    }
    //return 1;
    console.log('first',first)
    return answer;
}

console.log(solution([1,2,3,4,5,3,3,2,1]))