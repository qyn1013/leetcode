/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
    let result = [];
    for (let num1_index = 0; num1_index < nums.length; num1_index++) {
        let num1 = nums[num1_index];
        let num2 = target - num1;
        let num2_index = nums.indexOf (num2);
        if (num2_index >= 0 && num2_index!==num1_index) {
            result = [num1_index, num2_index];
            break;
        }
    }
    return result;
};