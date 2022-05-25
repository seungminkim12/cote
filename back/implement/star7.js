/**
 * 
 */

 function solution(value){         
     let star = '';
    for (let i = 1; i<2*value; i++){
        star = '';
        let center = Math.floor((2*value)/2 + (2*value)%2);        
        for(let j = 0; j<2*value; j++){
            let sur = i            
            if(i > center){
                sur = 2*value- i
            }                       
            if(j >= center +sur || j <= center -sur){
                if(j > center +sur +1){
                    continue;
                }
                star += ' '
            }else {
                star += '*'
            }
        }
        console.log(star)        
    }
}

solution(5)