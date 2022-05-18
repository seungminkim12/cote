/**
 * https://www.acmicpc.net/status?user_id=ksm0057&problem_id=2441&from_mine=1
 */

function solution(value){
    let star = '';
    for(let i = 0; i < value; i++){        
        star = '';
        for(let j = 1; j<value+1; j++){
            if(i >= j){
                star += ' '
            }else{
                star += '*'
            }
        }
        console.log(star)
    }
}

solution(5)