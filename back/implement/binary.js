/**
 * https://www.acmicpc.net/problem/3460
 */

//  1
//  13
//  0 2 3

// input

// 2

// 13

// 4

// output

// 0 2 3

// 2

function solution(n,value){
    for(let i = 0; i<n; i++){
        console.log(value[i].toString(2).split('').reverse().reduce((sum,item,idx) => {
            if(+item){            
                return sum + `${idx} ` ;
            }else{
                return sum
            }
        },''))    
    }    
}

solution(2,[13,4])