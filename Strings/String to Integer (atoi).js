/**
 * @param {string} str
 * @return {number}
 */

let numberDict = {
    "48": 0,
    "49": 1,
    "50": 2,
    "51": 3,
    "52": 4,
    "53": 5,
    "54": 6,
    "55": 7,
    "56": 8,
    "57": 9
}

var myAtoi = function(str) {
    let result =  0;
    let isNegative;
    let foundNonSpaceBefore = false;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == ' ' && foundNonSpaceBefore == false) {
            continue;
        }
        if (str.charCodeAt(i) == '-'.charCodeAt(0) && foundNonSpaceBefore == false) {
            isNegative = true;
            foundNonSpaceBefore = true;
            continue;
        }
        if (str.charCodeAt(i) == '+'.charCodeAt(0) && foundNonSpaceBefore == false) {
            isNegative = false;
            foundNonSpaceBefore = true;
            continue;
        }
        if (!(str.charCodeAt(i) >= '0'.charCodeAt(0) &&  str.charCodeAt(i) <= '9'.charCodeAt(0)) && foundNonSpaceBefore == false) {
            return 0;
        }
        if (str.charCodeAt(i) >= '0'.charCodeAt(0) &&  str.charCodeAt(i) <= '9'.charCodeAt(0)) {
            foundNonSpaceBefore = true;
            result = result * 10;
            result = result + numberDict[str.charCodeAt(i)];
        }
        if (!(str.charCodeAt(i) >= '0'.charCodeAt(0) &&  str.charCodeAt(i) <= '9'.charCodeAt(0)) && foundNonSpaceBefore == true) {
            break;
        }
    }
    
    return convertNumIfOverflow(isNegative ? result * -1 : result);
};


var convertNumIfOverflow = function(num) {
    if (num > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1;
    if (num < Math.pow(2, 31) * -1) return Math.pow(2, 31) * -1;
    return num;
}