/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    if (digits[digits.length - 1] < 9) {
        digits[digits.length - 1]++;
        return digits;
    } else {
        let i = digits.length - 1;
        while (digits[i] == 9 && i >= 0) {
            digits[i] = 0;
            if (i == 0) {
                digits.splice(0, 0, 1);
            }
            i--
        }
        if (i >= 0) {
            digits[i]++;
        }
        return digits;
    }
};