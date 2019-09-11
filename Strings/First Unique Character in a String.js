/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let uniqueMap = {};
    let resultMap = {};
    for (let i = 0; i < s.length; i++) {
        if (!(s.charAt(i) in uniqueMap)) {
            uniqueMap[s.charAt(i)] = true;
        } else {
            resultMap[s.charAt(i)] = true;
        }
    }
    for (let i = 0; i < s.length; i++) {
        if (!(s.charAt(i) in resultMap)) {
            return i;
        }
    }
    return -1;
};