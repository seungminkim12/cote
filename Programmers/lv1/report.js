/**
 * 신고결과 받기
 * https://programmers.co.kr/learn/courses/30/lessons/92334
 * @param {*} id_list 
 * @param {*} report 
 * @param {*} k 
 * @returns 
 */

//내 풀이
function solution(id_list, report, k) {    
    var answer = new Array(id_list.length);
    answer.fill(0)    
    let reported = new Set(report);
    let banned = {}     
    let picked = [];    
    reported.forEach((report) => {
        const [userId,reportId] = report.split(" ");
        const ban = banned[reportId];
        if(banned[reportId] === undefined){
            banned[reportId] = 0;
        }
        banned[reportId]++;
    })    
    for (key in banned){
        if(banned[key] >= k){
            picked.push(key)
        }        
    }
    reported.forEach((last) => {
        const [userId,reportId] = last.split(' ');
        if(answer[id_list.indexOf(userId)] === undefined){
            answer[id_list.indexOf(userId)] = 0;
        }
        if(picked.indexOf(reportId) >= 0){
            answer[id_list.indexOf(userId)]++;
        }       
    })    
    return answer;
}

//clean code
function solution(id_list, report, k) {
    let reports = [...new Set(report)].map(a=>{return a.split(' ')});
    let counts = new Map();
    for (const bad of reports){
        counts.set(bad[1],counts.get(bad[1])+1||1)
    }
    let good = new Map();
    for(const report of reports){
        if(counts.get(report[1])>=k){
            good.set(report[0],good.get(report[0])+1||1)
        }
    }
    let answer = id_list.map(a=>good.get(a)||0)
    return answer;
}


solution()