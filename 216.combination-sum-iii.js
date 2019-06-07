/*
 * @lc app=leetcode id=216 lang=javascript
 *
 * [216] Combination Sum III
 */
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    if( k < 1 || n < 1) {
        return [];
    }
    let result = []
    let nums = [1,2,3,4,5,6,7,8,9]

    const dfs = (nums, tmpArr, index, remains, count) => {
        if(remains == 0 && count == 0) {
            result.push(tmpArr)
            return
        }

        if(remains < 0 || count < 0) {
            return
        }

        for(let i = index; i < nums.length; i++) {
            let newCount = count - 1
            dfs(nums, tmpArr.concat(nums[i]), i+1, remains-nums[i], newCount)
        }
    }

    dfs(nums, [], 0, n, k);
    return result;
};

