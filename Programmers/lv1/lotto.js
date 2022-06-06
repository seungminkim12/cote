/**
 * https://programmers.co.kr/learn/courses/30/lessons/77484
 */

//my code
//  function solution(lottos, win_nums) {
//     var answer = [];
//     let r = []; // 최고순위
//     let nr = [] //최저순위   
//     lottos.forEach((l) => {
//         win_nums.forEach((w, idx) => {
//             if(l === w ){                
//                 r.push(l);                
//                 nr.push(l);
//             }else if ( l === 0 && idx === 5){
//                 nr.push(l)
//             }
//         })
//     })        
//     answer.push(7 - nr.length >= 6 ? 6 : 7 - nr.length)    
//     answer.push(7 - r.length >= 6 ? 6 : 7 - r.length); 
    
//     return answer;
// }


// 테스트 1 〉	통과 (0.13ms, 30MB)
// 테스트 2 〉	통과 (0.14ms, 30.2MB)
// 테스트 3 〉	통과 (0.12ms, 30.2MB)
// 테스트 4 〉	통과 (0.11ms, 29.9MB)
// 테스트 5 〉	통과 (0.18ms, 30.1MB)
// 테스트 6 〉	통과 (0.09ms, 30.3MB)
// 테스트 7 〉	통과 (0.10ms, 30.1MB)
// 테스트 8 〉	통과 (0.13ms, 30.3MB)
// 테스트 9 〉	통과 (0.13ms, 30.1MB)
// 테스트 10 〉	통과 (0.13ms, 29.9MB)
// 테스트 11 〉	통과 (0.10ms, 30.1MB)
// 테스트 12 〉	통과 (0.12ms, 30.1MB)
// 테스트 13 〉	통과 (0.12ms, 30.1MB)
// 테스트 14 〉	통과 (0.12ms, 29.8MB)
// 테스트 15 〉	통과 (0.12ms, 30.2MB)

//clean code 
//include를 매 반복마다 해서 시간복잡도에서는 효율성 없음
// function solution(lottos, win_nums) {
//     const rank = [6, 6, 5, 4, 3, 2, 1];

//     let minCount = lottos.filter(v => win_nums.includes(v)).length;
//     let zeroCount = lottos.filter(v => !v).length;

//     const maxCount = minCount + zeroCount;

//     return [rank[maxCount], rank[minCount]];
// }


// repeat code
function solution(lottos, win_nums) {
    var answer = [];
    result={
        win:0,
        loss:0
    }
    result = lottos.reduce((sum,item,idx) => {                
            if(item === 0){
                sum['win'] = sum['win'] + 1;
            }else{
                if(win_nums.indexOf(item) !== -1){                 
                 sum['loss'] = parseInt(sum['loss']) + 1;
                 sum['win'] = parseInt(sum['win']) + 1;                 
                }
            }               
       return sum;
    },result)
    answer.push(result['loss'] ? 7-result['win'] : 6)    
    answer.push(result['loss'] ? 7-result['loss'] : 6)
    return answer;
}

// 테스트 1 〉	통과 (0.14ms, 30.1MB)
// 테스트 2 〉	통과 (0.11ms, 30.1MB)
// 테스트 3 〉	통과 (0.39ms, 29.7MB)
// 테스트 4 〉	통과 (0.12ms, 30.2MB)
// 테스트 5 〉	통과 (0.38ms, 30MB)
// 테스트 6 〉	통과 (0.37ms, 30.1MB)
// 테스트 7 〉	통과 (0.11ms, 30.2MB)
// 테스트 8 〉	통과 (0.11ms, 30.1MB)
// 테스트 9 〉	통과 (0.14ms, 30MB)
// 테스트 10 〉	통과 (0.14ms, 30.2MB)
// 테스트 11 〉	통과 (0.10ms, 30.2MB)
// 테스트 12 〉	통과 (0.26ms, 30.3MB)
// 테스트 13 〉	통과 (0.12ms, 30.2MB)
// 테스트 14 〉	통과 (0.28ms, 30.1MB)
// 테스트 15 〉	통과 (0.25ms, 29.8MB)

// console.log(solution([44, 1, 0, 0, 31, 25],[31, 10, 45, 1, 6, 19]))
// console.log(solution([0, 0, 0, 0, 0, 0],[38, 19, 20, 40, 15, 25]))
console.log(solution([45, 4, 35, 20, 3, 9],[20, 9, 3, 45, 4, 35]))