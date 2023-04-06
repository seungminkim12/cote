function dfs(graph, v, visited){
    visited[v] = true;
    console.log(v);

    for(let node of graph[v]){
        if(!visited[node]){
            dfs(graph,node,visited);
        }
    }
}

const graph = [[1,2,3],[0,6],[0],[0,4,5],[3],[3],[1]]
const visited = Array(6).fill(false);

dfs(graph,0,visited);