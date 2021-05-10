const bt = require('./bt');

// 后序遍历
// const postorder = (root) => {
//     if (!root) { return; }
//     postorder(root.left);
//     postorder(root.right);
//     console.log(root.val);
// };

const postorder = (root) => {
    if (!root) { return; }
    const outputStack = [];
    const stack = [root];
    while (stack.length) {
        const n = stack.pop();
        // 根节点先push
        outputStack.push(n);
        // 叶子结点“负负得正”，相当于先入先出
        if (n.left) stack.push(n.left);
        if (n.right) stack.push(n.right);
    }
    while (outputStack.length) {
        const n = outputStack.pop();
        console.log(n.val);
    }
};

postorder(bt);
