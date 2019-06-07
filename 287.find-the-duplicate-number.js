/*
 * @lc app=leetcode id=287 lang=javascript
 *
 * [287] Find the Duplicate Number
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let map = []
    for(let i = 0; i < nums.length; i++) {
        if(map[nums[i]]) {
           return nums[i]
        }else{
            map[nums[i]] = 1
        }
    }
    return -1
};

