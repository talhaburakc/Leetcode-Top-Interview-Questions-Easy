/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    var divideNconquer = function(low, high) {
        if (low == high + 1) {
            return low;
        }
        let mid = Math.floor((low + high) / 2);
        if (isBadVersion(mid)) {
            return divideNconquer(low, mid - 1);    
        } else {
            return divideNconquer(mid + 1, high);
        }
    };
    
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        return divideNconquer(1, n);
    };
};

