/**
 * 
 */

 function solution(value){     
    let star = '';
    for(let i = value; i > 0; i--){        
        star = '';
        let con = 2*value-1;        
        for(let j = con; j> 0; j--){               
            if(j <= Math.floor(con/2)+ con%2 - i || j >= Math.floor(con/2)+ con%2 + i){
                if(j < Math.floor(con/2)+ con%2 - i){
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