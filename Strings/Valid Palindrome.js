/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if (s.length == 0) return true;
    let str = s.replace(/ /g, '');
    str = str.toLowerCase();
    let end = str.length - 1;
    
    for (let start = 0; start < str.length / 2; start++) {
        if (!isValid(str.charAt(start))) {
            continue;
        }
        if (!isValid(str.charAt(end))) {
            start--;
            end--;
            continue;
        }
        if (str.charAt(start) != str.charAt(end)) {
            return false;
        }
        end--;
    }
    return true;
};

var isValid = function(str) {
    let a = 'a'.charCodeAt(0);
    let z = 'z'.charCodeAt(0);
    let a0 ='0'.charCodeAt(0);
    let a9 ='9'.charCodeAt(0);
    if ((str.charCodeAt(0) >= a && str.charCodeAt(0) <= z) || (str.charCodeAt(0) >= a0 && str.charCodeAt(0) <= a9)) {
        return true;
    }
    return false;
}