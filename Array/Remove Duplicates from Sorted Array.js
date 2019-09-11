/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length == 0) return 0;
    if (nums.length == 1) return 1;
    let i = nums.length - 2;
    let prev = nums[nums.length - 1];
    while (true) {
        if (i < 0) {
            break;
        }
        let temp = nums[i]
        if (prev == nums[i]) {
            prev = nums[i];
            nums.splice(i, 1);
        }
        prev = temp;
        i--;
    }
    
    return nums.length;
};