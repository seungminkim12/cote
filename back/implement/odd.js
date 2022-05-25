/**
 * 
 */

/**
 * 12
77
38
41
53
92
85

return 256
41

 */

function solution(value){
    console.log('value',value)
    let oddSum = value.reduce((sum,item ) => {
        console.log('item',item)
        if(item%2 !== 0){
            return sum = sum + item;
        }
    })
    console.log(oddSum)
}

console.log(solution([12, 77, 38, 41, 53, 92, 85]))