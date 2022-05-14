/***
 * https://www.acmicpc.net/problem/2439
 * 
 */

function solution(value){
    let star = '';
    for(let i = 1; i< value+1; i++){
        star = '';
        for(let j = value; j>0; j--){
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