/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let index = haystack.indexOf(needle);
    if (index > -1) {
        return index;
    } else {
        return -1;
    }
};