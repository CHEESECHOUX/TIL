const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");

/*
// sort 함수 풀이
let n = Number(input.shift());
let sort = input.sort((a, b) => a - b);

console.log(sort.join("\n"));
*/

// 퀵정렬
const n = input.shift();

const result = quickSortStarter(input).join("\n");
console.log(result);

function quickSortStarter(arr) {
  if (!arr.length) {
    //
    return arr;
  }
  return quickSort(arr, 0, arr.length - 1);
}

function quickSort(array, l, r) {
  const pivot = array[Math.floor((l + r) / 2)];
  let left = l; // 왼쪽 인덱스를 l에 할당
  let right = r;

  while (left <= right) {
    while (array[left] < pivot) left++;
    while (array[right] > pivot) right--;

    if (left <= right) {
      const temp = array[left];
      array[left] = array[right];
      array[right] = temp;
      left++;
      right--;
    }
  }

  if (l < right) quickSort(array, l, right);
  if (r > left) quickSort(array, left, r);

  return array;
}

console.log(result);
