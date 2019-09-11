/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    for (let i = 0; i < k; i++) {
        rotateOnce(nums);
    }
};

var rotateOnce = function(nums) {
    if (nums.length == 1 || nums.length == 0) return nums;
    let temp;
    for (let i = nums.length - 1; i > 0; i--) {
        temp = nums[i - 1];
        nums[i - 1] = nums[i];
        nums[i] = temp;
    }
}