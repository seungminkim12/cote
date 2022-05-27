/**
 * https://www.acmicpc.net/problem/10809
 */

//  baekjoon
//  1 0 -1 -1 2 -1 -1 -1 -1 4 3 -1 -1 7 5 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1
//  1 0 -1 -1 2 -1 -1 -1 -1 4 3 -1 -1 7 5 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1
// function solution(value){
//     let obj = {}
//     for (let i = 97; i< 123; i++){
//         obj[String.fromCodePoint(i)] = -1;
//     }
//     console.log('obj',obj)
//     let idx = 0;
//     for (let item of value){                
//         if(obj[item] < 0){
//             obj[item] = idx;
//         }
//         idx++        
//     }
//     let test = Object.values(obj).join(' ')
//     for (let item of test){
//         console.log('test',item)
//     }
//     return test

// }

function solution(value){
    let str = '';
    for(let i = 97; i<123; i++){
        for(let item of value){
            str += `${item.indexOf(item.indexOf(String.fromCodePoint(i)))} `
        }        
    }
    return str
}

console.log(solution('asdffwefasdfasdfasdfwefdsafasdfsa'))