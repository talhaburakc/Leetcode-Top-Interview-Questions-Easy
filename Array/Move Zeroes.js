/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let temp;
    let j;
    for (let i = 0; i < nums.length - 1; i++) {
        if (j === undefined && nums[i] == 0) {
            j = i;
        }
        // swap
        if (nums[i] == 0 && nums[i + 1] != 0) {
            temp = nums[i + 1];
            nums[i + 1] = nums[j];
            nums[j] = temp;
            j++;
        } 
    }
};