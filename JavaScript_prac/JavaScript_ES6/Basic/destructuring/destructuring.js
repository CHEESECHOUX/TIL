// Destructuring Assignment

let one, two, three; // 변수 선언
const list = [1, 2, 3]; // 배열 만듦
[one, two, three] = list; // 배열을 만든 후, 변수 이름을 작성하면 값이 할당됨
console.log(one);
console.log(two);
console.log(three);
console.log(list);

/*
사전적 의미는 파괴하다 이지만,
코드 관점에서 보면 분할, 분리 라는 의미에 더 가깝다.
원래 데이터는 변경되지 않으니까 (list 그대로 출력됨)
*/