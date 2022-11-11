// 화살표 함수와 일반 함수는 구조가 다름
// 일반 함수
const book = function() {
  return 100;
};

// 화살표 함수
const point = () => 100;

/*
일반 함수인 book 함수는 prototype, constructor가 있고
화살표 함수인 point는 prototype, constructor가 없다

따라서 화살표 함수는 prototype에 메소드를 연결해 확장할 수 없고
prototype이 없어 그만큼 가볍게 사용할 수 있다.
new 연산자로 인스턴스를 생성할 수 없으니 생성자 함수도 사용할 수 없고,
화살표 함수는 단독으로만 사용 가능하다.
*/