const graph = require('./graph');

const visited = new Set();
const bfs = (n) => {
    const q = [n];
    visited.add(n);
    while (q.length) {
        const n = q.shift();
        console.log(n);
        graph[n].forEach(c => {
            if (!visited.has(c)) {
                q.push(c);
                visited.add(c);
            }
        });
    }
};

bfs(2);
