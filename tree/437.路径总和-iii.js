/*
 * @lc app=leetcode.cn id=437 lang=javascript
 *
 * [437] 路径总和 III
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
// 题解：https://leetcode-cn.com/problems/path-sum-iii/solution/lu-jing-zong-he-iii-by-leetcode-solution-z9td/
//--------------------- 深度优先搜索 ---------------------
var pathSum1 = function (root, targetSum) {
    if (root === null) return 0;
    let ret = rootSum(root, targetSum);
    ret += pathSum(root.left, targetSum);
    ret += pathSum(root.right, targetSum);
    return ret;
};
// 以root为起点，满足路径总和为targetSum的路径数
const rootSum = (root, targetSum) => {
    if (root === null) return 0;
    let ret = 0;
    const val = root.val;
    if (val === targetSum) ret++;
    ret += rootSum(root.left, targetSum - val);
    ret += rootSum(root.right, targetSum - val);
    return ret;
};
//--------------------- 前缀和+哈希表 ---------------------
// 先序遍历从根节点开始到叶子结点的每一条路径，求出这条路径的前缀和，前缀和保存到哈希表，在求的过程中根据哈希表统计答案。
var pathSum = function (root, targetSum) {
    // key是前缀和, value是大小为key的前缀和出现的次数
    const prefix = new Map();
    // 前缀和为0的一条路径
    prefix.set(0, 1);// 初始化
    // 前缀和的递归回溯思路
    return dfs(root, prefix, 0, targetSum);
}
const dfs = (root, prefix, curr, targetSum) => {
    if (root == null) return 0;

    let ret = 0;
    curr += root.val;// 当前前缀和

    // 看看root到当前节点这条路上是否存在节点前缀和加target为currSum的路径
    // 当前节点->root节点反推，有且仅有一条路径，如果此前有和为currSum-target,而当前的和又为currSum,两者的差就肯定为target了
    // currSum-target相当于找路径的起点，起点的sum+target=currSum，当前点到起点的距离就是target
    ret = prefix.get(curr - targetSum) || 0;// 统计答案
    // 更新路径上当前节点前缀和的个数
    prefix.set(curr, (prefix.get(curr) || 0) + 1);// 哈希表加入当前前缀和

    // 进入下一层
    ret += dfs(root.left, prefix, curr, targetSum);
    ret += dfs(root.right, prefix, curr, targetSum);
    // 回到本层，恢复状态，去除当前节点的前缀和数量
    prefix.set(curr, prefix.get(curr) - 1);// 哈希表删除当前前缀和（复原）

    return ret;
}
// @lc code=end