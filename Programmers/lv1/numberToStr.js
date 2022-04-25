/**
 * 숫자 문자열과 영단어
 * https://programmers.co.kr/learn/courses/30/lessons/81301
 */

//my code
//  function solution(s) {
//     var answer = 0; 
//     let end = false;        
//     let match = {
//         zero:'0',
//         one:'1',
//         two:'2',
//         three:'3',
//         four:'4',
//         five:'5',
//         six:'6',
//         seven:'7',
//         eight:'8',
//         nine:'9',       
//     }    
//     for (key in match){        
//         while(s.indexOf(key) !== -1){            
//             s = s.replace(key,match[key])
//         }        
//     }

//     answer = Number(s)
//     return answer;
// }

//clean code
function solution(s) {
    // s="one4seveneight";
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = s;

    for(let i=0; i< numbers.length; i++) {
        let arr = answer.split(numbers[i]);  
        //ex arr = ['', '4seveneight'], ... , ['147','']
        answer = arr.join(i);        
    }

    return Number(answer);
}

solution();