// 5이상(보다 큰)의 숫자들의 평균
const nums = [3, 16, 5, 25, 4, 34, 21];
const result = nums
  .filter((item) => item > 5)
  .reduce((sum, value, _, array) => {
    return sum + value / array.length
  }, 0); 
  console.log(result);
