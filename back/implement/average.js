/**
 * https://www.acmicpc.net/problem/1546
 */

function solution(n,value){
    value.sort((a,b) => a-b)
    const max = value[value.length-1]
    value = value.reduce((sum,item) => {
        console.log('sum',sum);
        console.log('item',item)
        return sum + item/max*100;;
    },0)
    console.log('value',value)
    console.log(value/n)
}

// solution(3,[40,80,60])
// solution(4,[10,20,0,100])
// solution(4,[1,100,100,100])
solution(3,[10,20,30])