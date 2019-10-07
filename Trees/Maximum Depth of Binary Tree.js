/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    return getDepth(root, 0);
};

var getDepth = function(node, depth) {
    if (node == null) return depth;
    let leftDepth = getDepth(node.left, depth + 1);
    let rightDepth = getDepth(node.right, depth + 1);
    if (leftDepth > rightDepth) return leftDepth;
    return rightDepth;
};