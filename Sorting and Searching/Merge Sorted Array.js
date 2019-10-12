/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    if (m == 0) {
        for (let i = 0; i < nums2.length; i++) {
            nums1[i] = nums2[i];
        }
        return;
    }
    let lastIndex = m + n - 1;
    let j = n - 1;
    let i = m - 1;
    while (lastIndex >= 0) {
        let max;   
        if ((nums1[i] > nums2[j]) || (j < 0 && i >= 0)) {
            max = nums1[i];
            i--;
        } else {
            max = nums2[j];
            j--;
        }     
        nums1[lastIndex] = max;
        lastIndex--;
    }
};