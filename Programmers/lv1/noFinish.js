/**
 * 완주하지 못한 선수
 * https://programmers.co.kr/learn/courses/30/lessons/42576
 */

//my code
 function solution(participant, completion) {
    participant.sort();
    completion.sort();
    for (let i = 0; i<participant.length; i++){
        if(participant[i] !== completion[i]){
            return participant[i]
        }
    }    
}

//clean code
function solution(participant, completion) {
    const map = new Map();

    for(let i = 0; i < participant.length; i++) {
        let a = participant[i], 
            b = completion[i];

        // get으로 가져올수 있으면 이전 value => 1 이므로 2됨.
        //참가자 완주자 한번씩 set해주면 완주자 기준 value = 0
        // 완주못한자 value = 1
        map.set(a, (map.get(a) || 0) + 1);
        map.set(b, (map.get(b) || 0) - 1);
    }

    // 0보다 큰 동명이인인 비완주자 or 비완주자 반환
    for(let [k, v] of map) {
        if(v > 0) return k;
    }

    return 'nothing';
}

solution()