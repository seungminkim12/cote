// const Queue = require('./queue')
import { Queue } from "./queue.js";

function BFS(graph, start, visited) {
    const queue = new Queue;
    queue.push(start);
    visited[start] = true;

    while(queue.size()){
        const v = queue.popleft();
        console.log(v);

        for(const node of graph[v]){
            if(!visited[node]){
                queue.push(node);
                visited[node] = true;
            }
        }
    }
}

const graph = [[1,2,4],[0,5],[0,5],[4],[0,3],[1,2]];
const visited = Array(6).fill(false);
BFS(graph,0,visited);