/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    for (let i = 0; i < nums.length;) {
        if (nums[i] === val) {
            nums[i] = nums[nums.length-1];
            nums.length--;
        } else {
            i++
        }
    }
    return nums.length;
};