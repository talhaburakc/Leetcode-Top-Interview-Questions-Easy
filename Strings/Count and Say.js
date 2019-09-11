/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let result = '1';
    for (let i = 1; i < n; i++) {
        result = nextSequence(result);
    }
    return result;
};

var nextSequence = function(str) {
    let count = 0;
    let result = '';
    let prevValue = str.charAt(0);
    for (let i = 0; i < str.length; i++) {
        if (prevValue == str.charAt(i)) {
            count++;
        } else {
            result += count + prevValue;
            prevValue = str.charAt(i);
            count = 1;
        }
    }
    result += count + prevValue;
    return result;
};