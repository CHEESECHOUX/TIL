// default value
// 값을 할당하지 않으면 사전에 정의된 값을 할당

// 1. 할당할 값이 없으면 디폴트 값을 할당
const [one, two, five = 50] = [10, 20];
console.log(five);

// 2. 할당할 값이 있으면 디폴트 값 무시
const [one2, two2, five2 = 50] = [10, 20, 70];
console.log(five2);

// 3. Object 디폴트 값 
// Object는 프로퍼티 이름으로 체크
const {one3, two3 = 20} = {one3: 10};
console.log(two3);

// 4. 디폴트 값 적용 순서
// 왼쪽에서 오른쪽으로 적용
const [one4, two4 = one4 + 20,
            five4 = two4 + 50] = [10];
console.log(two4);
console.log(five4);




// 함수의 파라미터에 디폴트 값 적용

// 1. 넘겨받은 파라미터 값이 없으면 디폴트 값을 할당
const add = (ten, two = 20) => ten + two;
const result = add(10);
console.log(result);
/*
1.add 함수를 호출하면서 10을 넘겨줌
2.ten에 10 할당, two에 디폴트 값인 20 할당
*/

// 2. 넘겨받은 파라미터 값이 있으면 디폴트 값을 무시
const add2 = (ten, two = 20) => ten + two;
const result2 = add2(10, 50);
console.log(result2);

// 3. 호출하는 함수의 파라미터 값이 undefined 일 때
const point = () => 20;
const add3 = (one, two = point()) => one + two;
const result3 = add3(10, undefined); // undefined는 값을 넘겨주지 않은 것과 같음
console.log(result3);