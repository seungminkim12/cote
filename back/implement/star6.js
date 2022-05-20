/**
 * 
 */

 function solution(value){     
    let star = '';
    for(let i = 1; i < value+1; i++){        
        star = '';
        let con = 2*value-1;
        for(let j = 0; j<con; j++){                                    
            if(j <= Math.floor(con/2)+ con%2 - i-1 || j >= Math.floor(con/2)+ con%2 + i-1){
                if(j >= Math.floor(con/2)+ con%2 + i){
                    continue;
                }
                star += ' ' 
            }else{
                star += '*'
            }                        
        }
        console.log(star)
    }
}

solution(5)