/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let ans = nums[0];
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (sum + nums[i] > nums[i]) {
            sum += nums[i];
        } else {
            sum = nums[i];
        }
        ans = Math.max(ans, sum);
    }
    return ans;
};