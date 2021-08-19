// 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

function solution(arr) {
  let answer;
  let sum = 0;
  arr.forEach((e) => (sum += e));
  answer = sum / arr.length;
  return answer;
}

console.log(solution([1, 2, 3, 4])); //	2.5
console.log(solution([5, 5])); //	5
