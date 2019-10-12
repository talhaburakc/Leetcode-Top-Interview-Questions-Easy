/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (root == null) return [];
    let result = []
    let q = [];
    let lQ = [];
    q.push(root);
    lQ.push(0);
    while (q.length > 0) {
        let temp = q.shift();
        let level = lQ.shift();
        if (result[level] === undefined) {
            result[level] = [];
        }
        result[level].push(temp.val);
        if (temp.left != null) {
            q.push(temp.left);
            lQ.push(level + 1);
        }
        if (temp.right != null) {
            q.push(temp.right);
            lQ.push(level + 1);
        }
    }
    return result;
};