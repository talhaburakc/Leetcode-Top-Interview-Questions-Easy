/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let isNegative = x < 0;
    if (isNegative) {
        x = x * -1;
    }
    let result = 0;
    let temp;
    let length = Math.floor(Math.log(x) / Math.log(10)) + 1;
    for (let i = 0; i < length; i++) {
        temp = x % 10;
        x = Math.floor(x / 10);
        result = result + temp * Math.pow(10, (length - i - 1));
        if (!isNumOk(result)) return 0;
    }
    return isNegative ? -1 * result : result;
};

var isNumOk = function(num) {
    if (num > Math.pow(2, 31) - 1) return false;
    if (num < Math.pow(2, 31) * -1) return false;
    return true;
}