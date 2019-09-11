/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let count = [];
    for (let i = 0; i < 26; i++) {
        count[i] = 0;
    }
    
    for (let i = 0; i < s.length; i++) {
        count[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }
    
    for (let i = 0; i < t.length; i++) {
        count[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }
    
    for (let i = 0; i < 26; i++) {
        if (count[i] != 0) return false;
    }
    return true;
};