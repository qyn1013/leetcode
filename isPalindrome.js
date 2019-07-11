/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var intToStr = x.toString();
    for (var i = 0; i < intToStr.length / 2; i++) {
        if (intToStr[i] !== intToStr[intToStr.length - 1 - i]) {
            return false;
        }
    }
    return true;
};