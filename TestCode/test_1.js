// 1.三数之和
// 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请
// 你返回所有和为 0 且不重复的三元组。
// 注意：答案中不可以包含重复的三元组。

const numss = [1, 3, -4, 6, 7, 8, -2];

function pickThree(nums) {
  const retArr = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i != j) {
        const index = nums.indexOf(-(+nums[i] + nums[j]));
        if (index >= 0 && i !== index && j !== index) {
          const target = [nums[i], nums[j], nums[index]].sort((a, b) => a - b);
          if (!retArr.some((item) => item.join() === target.join())) {
            retArr.push(target);
          }
        }
      }
    }
  }
  return retArr;
}

console.log(pickThree(numss));
