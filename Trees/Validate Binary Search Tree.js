/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    return BST(root, null, null);
};

var BST = function(node, min, max) {
    if (node == null) return true;
    if (node.left && node.val <= node.left.val) return false;
    if (node.right && node.val >= node.right.val) return false;
    if ((max != null && node.val >= max) || (min != null && node.val <= min)) return false;

    let newMax = max;
    let newMin = min;
    if (min == null || node.val < min) newMin = node.val;
    if (max == null || node.val > max) newMax = node.val;
    let isLeftValid = BST(node.left, min, newMax);
    let isRightValid = BST(node.right, newMin, max);
    return isLeftValid && isRightValid;
};