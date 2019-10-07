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
var isSymmetric = function(root) {
    if (root == null) return true;
    let queueLeft = [];
    let queueRight = [];
    queueLeft.push(root);
    queueRight.push(root);
    while (queueLeft.length > 0) {
        let left = queueLeft.shift();
        let right = queueRight.shift();
        if (left == null && right == null) continue;
        if (left == null || right == null) return false;
        if (left.val != right.val) return false;
        queueLeft.push(left.left);
        queueLeft.push(left.right);
        queueRight.push(right.right);
        queueRight.push(right.left);
    }
    return true;
};