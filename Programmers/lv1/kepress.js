/**
 * 키패드 누르기
 * https://programmers.co.kr/learn/courses/30/lessons/67256
 */

//my code
 function solution(numbers, hand) {     
    var answer = '';
    numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    hand = "right";
    let center = [2,5,8,0]
    let lastLeftPos = 10;
    let lastRightPos = 12;
    //return LLRLLRLLRL
    for (let i = 0; i<numbers.length; i++){        
        let curNum = numbers[i];        
        if(curNum === 0 ){
            curNum = 11;
        }
        //right
        if(curNum % 3 === 0){
            lastRightPos = curNum;                
            answer += 'R';                
        }else if(curNum === 1 || curNum === 4 || curNum === 7) {
            lastLeftPos = curNum;
            answer += 'L';
        }else{            
            const r_dis = center.indexOf(lastRightPos) === -1 ? Math.abs((curNum + 1 - lastRightPos))/3+1 : Math.abs((curNum - lastRightPos))/3;
            const l_dis = center.indexOf(lastLeftPos) === -1 ? Math.abs((curNum - 1 - lastLeftPos))/3+1  : Math.abs((curNum - lastLeftPos))/3;            
            if(r_dis === l_dis){
               answer += hand === 'right' ? 'R':'L';
               hand === 'right' ? lastRightPos = curNum : lastLeftPos = curNum; 
            }else if (r_dis < l_dis){
                answer += 'R';
                lastRightPos = curNum;
            }else if (r_dis > l_dis){
                answer += 'L';
                lastLeftPos = curNum;
            }                            
        }
    }            
    return answer;
}
console.log(solution())