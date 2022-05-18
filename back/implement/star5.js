/**
 * 
 */

//  function solution(value){     
//     let star = '';
//     for(let i = 1; i < value+1; i++){        
//         star = '';
//         let con = 2*value-1
//         for(let j = 0; j<con; j++){                        
//             if(j === Math.floor(con/2)+ con%2) {                
//                 star += '*'                                
//             }
//             if(j === Math.floor(con/2)+ con%2 + i-1 ||j === Math.floor(con/2)+ con%2 - i-1){
//                 star += '*' 
//             }
//             else{
//                 star += ' '
//             }
//             // if(j === (2*value)/2 + i-1 || j === (2*value)/2 + i +1){
//             //     star += '*'
//             // }
//         }
//         console.log(star)
//     }
// }

function solution(value){     
    let star = [];
    let con = 2*value-1
    for(let i = 1; i < value+1; i++){        
        let innerstar = [];
        for(let j = 0; j<con; j++){                        
            // if(j === Math.floor(con/2)+ con%2) {                
            //     star += '*'                                
            // }
            // if(j === Math.floor(con/2)+ con%2 + i-1 ||j === Math.floor(con/2)+ con%2 - i-1){
            //     star += '*' 
            // }
            if(){
                innerstar.push('')
            }
            else{
                innerstar.push('*')
            }
            // if(j === (2*value)/2 + i-1 || j === (2*value)/2 + i +1){
            //     star += '*'
            // }
        }
    }
    console.log(star)
}

solution(5)