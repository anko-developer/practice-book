const fruits = ['apple', 'banana', 'orange'];

fruits.forEach((value, index, array) => {
  // console.log(value, index, array);
  console.log('----------------');
  console.log(value);
});

// 처음 찾은 녀석을 반환함
let result = fruits.find((value) => value === 'banana');
console.log(result); // banana

// 배열의 아이템들이 부분적으로 조건에 맞는지 확인 (하나라도 맞는 게 있으면 true 반환)
result = fruits.some((item) => item === 'banana' );
console.log(result); // true

// 배열의 아이템들이 전부 조건에 맞는지 확인
result = fruits.every((item) => item === 'banana');
console.log(result); // false

// 조건에 맞는 모든 아이템들을 새로운 배열로 반환
result = fruits.filter((item) => item === 'banana');
console.log(result); // [ 'banana' ]

console.clear();

// Map 배열의 아이템들을 각각 다른 아이템으로 매핑할 수 있는, 변환해서 새로운 배열 생성
const nums = [1,2,3,4,5];
result = nums.map((item) => {
  if (item % 2 === 0) {
    return item * 2;
  } else {
    return item;
  }
});
console.log(result); // [ 1, 4, 3, 8, 5 ]

// flatMap - 모든 배열을 하나로 쫙 펴준다
result = nums.flatMap(item => [1,2]); // [1, 2, 1, 2, 1, 2, 1, 2, 1, 2]
console.log(result);

// sort - 배열의 아이템들을 정렬
// 문자열 형태의 오름차순으로 요소를 정렬하고, 기존의 배열을 변경
const texts = ['hi', 'abc'];
texts.sort();
console.log(texts);
// < 0 a가 앞으로 정렬, 오름차순
// > 0 b가 앞으로 정렬, 내림차순
const numbers = [5, 1, 2, 10, 4];
numbers.sort((a, b) => a - b); // 오름차순
// numbers.sort((a, b) => b - a); // 내림차순
console.log(numbers);

// reduce
result = [1,2,3,4,5].reduce((sum, value) => {
  sum += value;
  return sum;
}, 0);
console.log(result);
