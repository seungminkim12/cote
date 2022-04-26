/**
 * https://programmers.co.kr/learn/courses/30/lessons/77484
 */

//my code
 function solution(lottos, win_nums) {
    var answer = [];
    let r = [];
    let nr = []    
    lottos.forEach((l) => {
        win_nums.forEach((w, idx) => {
            if(l === w ){                
                r.push(l);                
                nr.push(l);
            }else if ( l === 0 && idx === 5){
                nr.push(l)
            }
        })
    })        
    answer.push(7 - nr.length >= 6 ? 6 : 7 - nr.length)    
    answer.push(7 - r.length >= 6 ? 6 : 7 - r.length); 
    
    return answer;
}

//clean code 
//include를 매 반복마다 해서 시간복잡도에서는 효율성 없음
function solution(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1];

    let minCount = lottos.filter(v => win_nums.includes(v)).length;
    let zeroCount = lottos.filter(v => !v).length;

    const maxCount = minCount + zeroCount;

    return [rank[maxCount], rank[minCount]];
}

soulution()