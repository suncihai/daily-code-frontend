/*
 * @lc app=leetcode id=219 lang=javascript
 *
 * [219] Contains Duplicate II
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    if(nums == null || nums.length <= 1 || k < 1) {
        return false;
    }

    for(let i = 0; i < nums.length - 1; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] == nums[j] && j <= i + k) {
                return true;
            }else if(j > i + k) {
                break;
            }
        }
    }
    return false;
};

