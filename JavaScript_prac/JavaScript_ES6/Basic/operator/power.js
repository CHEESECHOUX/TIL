// 거듭 제곱은 우결합성 (오른쪽에서 왼쪽으로 계산)

console.log(2 ** 3);
console.log(3 ** 2);

console.log(2 ** 3 ** 2);
console.log(2 ** (3 ** 2)); // 우결합성 2의 9승
console.log((2 ** 3) ** 2); // 좌결합성 8의 2승