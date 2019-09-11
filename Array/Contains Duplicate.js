/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let dict = {};
    for (let num of nums) {
        if (!dict[num]) {
            dict[num] = true;
        } else {
            return true;
        }
    }
    return false;
};