const tree = {
    val: 'a',
    children: [
        {
            val: 'b',
            children: [
                {
                    val: 'd',
                    children: [
                        {
                            val: 'd1',
                            children: []
                        },
                        {
                            val: 'd2',
                            children: []
                        },
                        {
                            val: 'd3',
                            children: []
                        }
                    ]
                }, {
                    val: 'e',
                    children: []
                }
            ]
        }, {
            val: 'c',
            children: [
                {
                    val: 'f',
                    children: []
                }, {
                    val: 'g',
                    children: []
                }, {
                    val: 'h',
                    children: [
                        {
                            val: 'i',
                            children: []
                        }
                    ]
                }
            ]
        }
    ]
};

// 广度优先搜索
const bfs = (root) => {
    const q = [root];
    while (q.length > 0) {
        const n = q.shift();
        console.log(n.val);
        n.children.forEach(child => {
            q.push(child);
        });
    }
};

bfs(tree);
