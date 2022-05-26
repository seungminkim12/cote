/**
 * https://www.acmicpc.net/problem/2576
 */

function solution(value){
    let min = null;    
    let oddSum = value.reduce((sum,item ) => {        
        if(item%2 > 0){
            if(!min){
                min = item;
            }
            min = Math.min(min,item)
            sum = sum + item;
        }
        return sum;
    },0)
    if(!oddSum){
        console.log(oddSum)
        console.log(min)
    }else{
        console.log(-1)
    }    
}

solution([12, 77, 38, 41, 53, 92, 85])
// solution([2, 4, 20, 32, 6, 10, 8])