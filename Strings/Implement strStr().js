/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let j = 0;
    if (needle == '') return 0;
    for (let i = 0; i + needle.length <= haystack.length; i++) {
        if (haystack.substring(i, i + needle.length) == needle)
            return i;
    }
    return -1;
};