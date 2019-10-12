/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if (nums == null || nums.length == 0) return null;
    return buildTree(nums, 0, nums.length - 1);
};

var buildTree = function(nums, low, high) {
    if (low > high) {
        return null;
    }
    let mid = Math.floor((low + high) / 2);
    let node = new TreeNode(nums[mid]);
    node.left = buildTree(nums, low, mid - 1);
    node.right = buildTree(nums, mid + 1, high);
    return node;
    
}