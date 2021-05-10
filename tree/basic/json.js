const json = {
    a: { b: { c: 1 } },
    d: [1, 2, { e: 233 }]
};

// json的深度优先搜索
const dfs = (n, path) => {
    console.log("n:", n);
    console.log("path:", path);
    console.log("=================");
    Object.keys(n).forEach(k => {
        dfs(n[k], path.concat(k));
    });
};

dfs(json, []);
