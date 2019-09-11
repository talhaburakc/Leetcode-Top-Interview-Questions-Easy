/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let freqsMap = {};
    let result = [];
    for (let num of nums1) {
        if (!(num in freqsMap)) {
            freqsMap[num] = 1;
        } else {
            freqsMap[num]++;
        }
    }
    for (let num of nums2) {
        if (num in freqsMap) {
            if (freqsMap[num] > 1) {
                freqsMap[num]--;
            } else {
                delete freqsMap[num];
            }
            result.push(num);
        }
    }
    return result;
};