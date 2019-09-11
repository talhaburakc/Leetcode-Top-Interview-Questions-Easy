/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length == 0) return "";
    if (strs.length == 1) return strs[0];
    let result = strs[0];
    for (let i = 1; i < strs.length; i++) {
        result = findCommonPrefix(result, strs[i]);
    }
    return result;
};

var findCommonPrefix = function(str0, str1) {
    let result = "";
    let j = 0;
    for (let i = 0; i < str0.length; i++) {
        if (str0.charAt(i) == str1.charAt(j)) {
            result += str0.charAt(i);
            j++;
        } else
            break;
    }
    return result;
};