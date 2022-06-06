/**
 * https://www.acmicpc.net/problem/3460
 */

//  1
//  13
//  0 2 3

function solution(n,value){    
    console.log(value.toString(2).split('').reverse().reduce((sum,item,idx) => {
        if(+item){            
            return sum + `${idx} ` ;
        }else{
            return sum
        }
    },''))    
}

solution(1,13)