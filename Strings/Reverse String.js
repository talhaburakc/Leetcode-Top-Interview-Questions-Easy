/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let temp;
    let end = s.length - 1;
    for (let start = 0; start < s.length / 2; start++) {
        temp = s[start];
        s[start] = s[end];
        s[end] = temp;
        end--;
    }
};