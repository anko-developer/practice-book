function solution(nums) {
  const getCount = nums.length / 2;
  let answer = 0;

  for (let i = 0; i <= nums.length - getCount; i++) {
    const calc = nums.slice(i, i + getCount);
    const result = {};
    calc.forEach(item => {
      result[item] = (result[item] || 0) + 1;
    });
    
    ++answer;
    for (const key in result) {
      if (result[key] === getCount) {
        --answer;
      }  
    }
    
  }
  
  return answer;
}

solution([3,3,3,1,2,2,2,2,2,2]);