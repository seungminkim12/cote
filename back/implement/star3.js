/**
 * https://www.acmicpc.net/problem/2440
 */

 function solution(value){
    let star = '';
    for(let i = value; i > 0; i--){        
        star = '';
        for(let j = 0; j<i; j++){
            if(j <= i){
                star += '*'
            }else{                
                star +=' '
            }
        }
        console.log(star)
    }
}

solution(5)