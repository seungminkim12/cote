/**
 * 
 */

function solution(n, lost, reserve) {
    var answer = 0;
    answer = n-lost.length;    
    let lostCopy = lost.slice()
    let reserveCopy = reserve.slice()
    let borrow = 0;
    for (let i = 0; i<lost.length; i++){
        for(let j = 0; j<reserve.length; j++){   
            if(lost[i] === reserve[j]){  
                answer++;              
                lostCopy.splice(i,1)
                reserveCopy.splice(j,1);
            }
        }
    }
    console.log('answer',answer)
    console.log('lost',lostCopy)
    console.log('reserveCopy',reserveCopy)
    for (let i = 0; i<lostCopy.length; i++){
        for(let j = 0; j<reserveCopy.length; j++){            
            console.log('lost[i]-1',lost[i]-1);
            console.log('reserveCopy[j]',reserveCopy[j])
            if(lost[i]-1 === reserveCopy[j]){
                borrow++;
            }            
        }
    }    
    
    console.log('borrow',borrow)
    return answer += borrow;
}

console.log(solution(5,[2,4,5],[1,3,5]))