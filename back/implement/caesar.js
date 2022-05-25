/**
 * https://www.acmicpc.net/problem/5598
 */

//  변환전    A B C D E F G H I J K L M N O P Q R S T U V W X Y Z 
//  변환후    D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

//MRL -> JOI, FURDWLD -> CROATIA
function solution(val){
    let glue = '';
    for(let word of val){
        let at =  word.codePointAt(0);
        console.log('at',at)
        at = at <= 67 ? at + 26: at;
        glue += String.fromCodePoint(at-3)        
    }
    return glue        
}

console.log(solution('ABCDEFGHIJKLMNOPQRSTUVWXYZ'))