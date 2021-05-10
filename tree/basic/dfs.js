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

// 深度优先搜索
const dfs = (root) => {
    console.log(root.val);
    root.children.forEach(dfs);
};

dfs(tree);
