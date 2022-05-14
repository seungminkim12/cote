// https://www.acmicpc.net/problem/2438

function solution(value){    
    let star = '';
    for (let i = 1; i<value+1; i++){                
        star = '';
        for(let j = 0; j<i; j++){                    
            star += '*'
        }
        console.log(star)
    }
}

solution(5)